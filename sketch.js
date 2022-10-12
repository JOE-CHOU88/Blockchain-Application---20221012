function setup() {
  createCanvas(700, 700);
  background(200);
  let padding = 20;

  let xCount = floor(random(5, 15));
  let yCount = floor(random(5, 15));
  let blockWidth = (width - 2 * padding) / xCount;
  let blockHeight = (height - 2 * padding) / yCount;

  for (let x = 0; x < xCount; x++) {
    for (let y = 0; y < yCount; y++) {
      let xPos = padding + x * blockWidth;
      let yPos = padding + y * blockHeight;

      stroke(random(100, 200));
      fill(random(100, 200), random(100, 200), 100);
      JoeRect(xPos, yPos, blockWidth, blockHeight);
    }
  }
}

function JoeRect(_x, _y, _width, _height) {
  let isSplit = false;
  if (random(0, 1) < 0.3) {
    isSplit = true;
  }
  if ((_width < 10) | (_height < 10)) {
    isSplit = false;
  }

  if (isSplit) {
    let splitRatio = random(0.05, 0.95);

    let splitHorizontal = false;
    if (random(0, 1) < 0.5) {
      splitHorizontal = true;
    }

    if (splitHorizontal) {
      JoeRect(_x, _y, _width * splitRatio, _height);
      JoeRect(_x + _width * splitRatio, _y, _width * (1 - splitRatio), _height);
    } else {
      JoeRect(_x, _y, _width, _height * splitRatio);
      JoeRect(
        _x,
        _y + _height * splitRatio,
        _width,
        _height * (1 - splitRatio)
      );
    }
  }

  let lineCount = floor(random(3, 30));
  let lineXSpace = _width / lineCount;
  let lineYSpace = _height / lineCount;

  let drawHorizontal = false;
  let drawVertical = false;

  let randomValue = random(0, 1);

  colorMode(HSB);
  let hue = random(60, 120);
  let sat = random(0, 360);
  let bright = random(0, 360);
  stroke(color(hue, sat, bright));

  if (randomValue < 0.2) {
    drawHorizontal = true;
    drawVertical = true;
  } else if (randomValue < 0.6) {
    drawHorizontal = true;
  } else {
    drawVertical = true;
  }
  // console.log("drawHorizontal: " + drawHorizontal);
  // console.log("drawVertical: " + drawVertical);

  if (drawVertical) {
    for (let i = 0; i < lineCount; i++) {
      let x1 = _x + i * lineXSpace;
      let y1 = _y;
      let x2 = x1;
      let y2 = _y + _height;

      line(x1, y1, x2, y2);
    }
  }

  if (drawHorizontal) {
    for (let i = 0; i < lineCount; i++) {
      let x1 = _x;
      let y1 = _y + i * lineYSpace;
      let x2 = _x + _width;
      let y2 = y1;

      line(x1, y1, x2, y2);
    }
  }
}

function draw() {}
