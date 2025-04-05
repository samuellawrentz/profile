const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const path = require("path");
const { gen } = require("./canvas");

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
  lines.forEach((line, i) =>
    ctx.fillText(line, 60, 580 - 80 * (lines.length - i)),
  );
  ctx.font = "48px Courier";
  ctx.fillText("Samuel Lawrentz", 150, 120);
  ctx.font = "100 24px Courier";
  ctx.fillText("The frontend dev", 150, 150);
}

async function generateImage(title, id, headerpath) {
  try {
    if (!headerpath?.includes("/header.png")) {
      gen(title, id);
      return;
    }
    const baseImagePath = path.resolve(headerpath);
    let baseImage = null;
    let logo = null;
    const outputWidth = 1200;
    const outputHeight = 630;

    try {
      baseImage = await loadImage(baseImagePath);
      logo = await loadImage(path.resolve("src/assets/logo.jpg"));
    } catch (error) {
      console.error("Error loading base image:", error, baseImagePath);
      throw error;
    }

    const canvas = createCanvas(outputWidth, outputHeight);
    const ctx = canvas.getContext("2d");

    // Calculate scaled dimensions while maintaining aspect ratio
    const aspectRatio = baseImage.width / baseImage.height;

    let scaledWidth = outputWidth;
    let scaledHeight = outputHeight;

    // If the aspect ratio of the base image is greater than the aspect ratio
    // of the output canvas, scale based on height to fill the canvas
    if (aspectRatio > outputWidth / outputHeight) {
      scaledHeight = outputHeight;
      scaledWidth = scaledHeight * aspectRatio;
    }
    // Otherwise, scale based on width to fill the canvas
    else {
      scaledWidth = outputWidth;
      scaledHeight = scaledWidth / aspectRatio;
    }
    ctx.drawImage(baseImage, 0, 0, scaledWidth, scaledHeight);

    // Create a linear gradient
    const angle = 9 * (Math.PI / 180);
    const x0 = outputWidth / 2 + Math.cos(angle + Math.PI) * outputWidth;
    const y0 = outputHeight / 2 + Math.sin(angle + Math.PI) * outputHeight;
    const x1 = outputWidth / 2 + Math.cos(angle) * outputWidth;
    const y1 = outputHeight / 2 + Math.sin(angle) * outputHeight;
    const gradient = ctx.createLinearGradient(x0, y0, x1, y1);

    gradient.addColorStop(0, "hsla(" + 360 * Math.random() + ",80%,15%,1)");
    gradient.addColorStop(1, "hsla(" + 360 * Math.random() + ",0%,14%,0.1)");

    // Apply the gradient over the image
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, outputWidth, outputHeight);

    // Add text
    generateText(ctx, title);
    ctx.drawImage(logo, 60, 80, 70, 70);

    // Save canvas to file
    const buffer = canvas.toBuffer("image/png");
    console.info("Generating for", id);
    fs.writeFileSync(path.resolve(`./public/og-images/${id}.png`), buffer);
  } catch (error) {
    console.error("Error generating image:", error, title, id, headerpath);
    throw error;
  }
}

module.exports = generateImage;

// generateImage(
//   "blog/coding-standards-husky-typescript-lint-staged",
//   "Test title",
//   "test",
// );
