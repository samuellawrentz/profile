const fs = require("fs");
const path = require("path");
const { createCanvas, loadImage } = require("canvas");

// Parse frontmatter from MDX files
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  match[1].split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      fm[key.trim()] = rest.join(':').trim().replace(/^["']|["']$/g, '');
    }
  });
  return fm;
}

function getLines(ctx, text, maxWidth) {
  var words = text.split(" ");
  var lines = [];
  var currentLine = words[0];
  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    var width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

function generateText(ctx, title) {
  ctx.font = "900 70px Courier";
  ctx.fillStyle = "white";
  const lines = getLines(ctx, title, 1080);
  lines.forEach((line, i) => ctx.fillText(line, 60, 580 - 80 * (lines.length - i)));
  ctx.font = "48px Courier";
  ctx.fillText("Samuel Lawrentz", 150, 120);
  ctx.font = "100 24px Courier";
  ctx.fillText("The frontend dev", 150, 150);
}

async function generateImage(title, id, headerPath) {
  const outputWidth = 1200;
  const outputHeight = 630;
  const canvas = createCanvas(outputWidth, outputHeight);
  const ctx = canvas.getContext("2d");

  try {
    if (headerPath && fs.existsSync(headerPath)) {
      const baseImage = await loadImage(headerPath);
      const logo = await loadImage(path.resolve("src/assets/logo.jpg"));

      const aspectRatio = baseImage.width / baseImage.height;
      let scaledWidth = outputWidth, scaledHeight = outputHeight;
      if (aspectRatio > outputWidth / outputHeight) {
        scaledHeight = outputHeight;
        scaledWidth = scaledHeight * aspectRatio;
      } else {
        scaledWidth = outputWidth;
        scaledHeight = scaledWidth / aspectRatio;
      }
      ctx.drawImage(baseImage, 0, 0, scaledWidth, scaledHeight);

      const angle = 9 * (Math.PI / 180);
      const x0 = outputWidth / 2 + Math.cos(angle + Math.PI) * outputWidth;
      const y0 = outputHeight / 2 + Math.sin(angle + Math.PI) * outputHeight;
      const x1 = outputWidth / 2 + Math.cos(angle) * outputWidth;
      const y1 = outputHeight / 2 + Math.sin(angle) * outputHeight;
      const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
      gradient.addColorStop(0, "hsla(" + 360 * Math.random() + ",80%,15%,1)");
      gradient.addColorStop(1, "hsla(" + 360 * Math.random() + ",0%,14%,0.1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, outputWidth, outputHeight);

      generateText(ctx, title);
      ctx.drawImage(logo, 60, 80, 70, 70);
    } else {
      // Fallback: simple colored background
      ctx.fillStyle = "#1a1a2e";
      ctx.fillRect(0, 0, outputWidth, outputHeight);

      const gradient = ctx.createLinearGradient(0, 0, outputWidth, outputHeight);
      gradient.addColorStop(0, "hsla(" + 360 * Math.random() + ",80%,15%,0.8)");
      gradient.addColorStop(1, "hsla(" + 360 * Math.random() + ",60%,20%,0.8)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, outputWidth, outputHeight);

      try {
        const logo = await loadImage(path.resolve("src/assets/logo.jpg"));
        ctx.drawImage(logo, 60, 80, 70, 70);
      } catch(e) {}

      generateText(ctx, title);
    }
  } catch (error) {
    // Ultimate fallback
    ctx.fillStyle = "#1a1a2e";
    ctx.fillRect(0, 0, outputWidth, outputHeight);
    generateText(ctx, title);
  }

  return canvas.toBuffer("image/png");
}

async function main() {
  const outputDir = path.resolve("public/og-images");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const blogDir = path.resolve("src/content/blog");
  const hackDir = path.resolve("src/content/hacks");

  const dirs = [];

  // Collect blog entries
  if (fs.existsSync(blogDir)) {
    for (const entry of fs.readdirSync(blogDir)) {
      const entryPath = path.join(blogDir, entry);
      if (!fs.statSync(entryPath).isDirectory()) continue;

      const files = fs.readdirSync(entryPath);
      const mdxFile = files.find(f => f.endsWith('.mdx') || f.endsWith('.md'));
      if (!mdxFile) continue;

      const content = fs.readFileSync(path.join(entryPath, mdxFile), 'utf-8');
      const fm = parseFrontmatter(content);
      if (!fm.path || fm.published === 'false') continue;

      const headerPath = files.includes('header.png') ? path.join(entryPath, 'header.png') : null;

      dirs.push({ title: fm.title, path: fm.path, headerPath });
    }
  }

  // Collect hack entries
  if (fs.existsSync(hackDir)) {
    for (const category of fs.readdirSync(hackDir)) {
      const catPath = path.join(hackDir, category);
      if (!fs.statSync(catPath).isDirectory()) continue;

      for (const entry of fs.readdirSync(catPath)) {
        const entryPath = path.join(catPath, entry);
        if (!fs.statSync(entryPath).isDirectory()) continue;

        const files = fs.readdirSync(entryPath);
        const mdxFile = files.find(f => f.endsWith('.mdx') || f.endsWith('.md'));
        if (!mdxFile) continue;

        const content = fs.readFileSync(path.join(entryPath, mdxFile), 'utf-8');
        const fm = parseFrontmatter(content);
        if (!fm.path) continue;

        const headerPath = files.includes('header.png') ? path.join(entryPath, 'header.png') : null;
        dirs.push({ title: fm.title, path: fm.path, headerPath });
      }
    }
  }

  console.log(`Generating OG images for ${dirs.length} entries...`);

  for (const entry of dirs) {
    const fileName = entry.path.replace(/[/-]/gi, '');
    const outputPath = path.join(outputDir, `${fileName}.png`);

    if (fs.existsSync(outputPath)) {
      console.log(`  Skip (exists): ${fileName}`);
      continue;
    }

    try {
      const buffer = await generateImage(entry.title, fileName, entry.headerPath);
      fs.writeFileSync(outputPath, buffer);
      console.log(`  Generated: ${fileName}`);
    } catch (error) {
      console.error(`  Error for ${fileName}:`, error.message);
    }
  }

  console.log("Done!");
}

main().catch(console.error);
