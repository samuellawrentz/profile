const { createCanvas, loadImage } = require('canvas')
const fs = require('fs')
const path = require('path')
const canvas = createCanvas(1200, 630)
const ctx = canvas.getContext('2d')

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  function toRad(a) {
    return (a * Math.PI) / 180;
  }

  let drawCircle = function(x, y, d) {
    let centerX = x + d / 2;
    let centerY = y + d / 2;
    let radius = d / 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'hsla('+ 360*Math.random() +', 60%, 60%, 50%)';
    ctx.fill();
  };

  function alternateTF() {
    return !!Math.floor(Math.random() * 2);
  }

  let drawTwoRects = function(x, y, d) {
    let startX = x;
    let startY = y;
    let n = 1;
    let diff = d / n;
    for (let i = 0; i < n; i++) {
      ctx.fillStyle = getRandomColor();
      ctx.rotate(45 * Math.PI / 180);
      alternateTF() && ctx.fillRect(x, y + diff * i, d, diff);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
  };

  let drawTwoSemiCircle = function(x, y, d) {
    let centerX = x + d / 2;
    let centerY = y + d / 2;
    let radius = d / 2;
    let start = Math.floor(Math.random() * 360);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, toRad(start), toRad(start + 180), false);
    ctx.fillStyle = "red";
    ctx.fill();
    if (alternateTF()) {
      ctx.beginPath();
      ctx.arc(
        centerX,
        centerY,
        radius,
        toRad(start + 180),
        toRad(start + 360),
        false
      );
      ctx.fillStyle = getRandomColor();
      ctx.fill();
    }
  };
  let func = [
    drawTwoRects,
    drawTwoSemiCircle,
    drawCircle,
    drawTwoRects,
    drawCircle
  ];

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

exports.gen = function gen(text, id) {


    var grd = ctx.createLinearGradient(0, 0, 1200, 630);
    grd.addColorStop(0, 'hsl('+ 360*Math.random() +',70%,60%)');
    grd.addColorStop(1, 'hsl('+ 360*Math.random() +',100%,30%)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, 1200, 630);
      const noOfSircles = Math.ceil(Math.random() * 7)
      const noOfRect = Math.ceil(Math.random() * 7)
      for(let i=0; i < noOfSircles; i++) {
        drawCircle(Math.ceil(Math.random() * 1140) + 60, Math.ceil(Math.random() * 570) + 60, Math.ceil(Math.random() * 90) + 10 )
      }
      for(let i=0; i < noOfRect; i++) {
        drawTwoRects(Math.ceil(Math.random() * 1140) + 60, Math.ceil(Math.random() * 570) + 60, Math.ceil(Math.random() * 90) + 10 )
      }
      ctx.font = '900 70px Courier';
      ctx.fillStyle = 'white';
      const lines = getLines(ctx, text, 1080)
      console.log(lines);
      lines.forEach((line, i) => ctx.fillText(line, 60, 580 - (80 * (lines.length - i)) ))
      ctx.font = '48px Courier';
      ctx.fillText('Samuel Lawrentz', 60, 120)
      ctx.font = '100 24px Courier';
      ctx.fillText('The frontend dev', 60, 150)
    
      const buffer = canvas.toBuffer('image/png')
      console.info('Generating for', id)
      fs.writeFileSync(path.resolve(`./public/og-images/${id}.png`), buffer)
      }