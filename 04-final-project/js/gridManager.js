function createGrid() {
  for (let i = 0; i <= w; i += size+gap) {
    for (let j = 0; j <= h; j += size+gap) {
      x = i;
      y = j;
      squareArray.push(new lineSquare(x, y, size, gravitySlider.value()));
    }
  }
}

function resetGrid() {
  squareArray.splice(0, squareArray.length); 
  createGrid(); 
}

// CHECK IF GAP DISTANCE IS MORE THAN EACH THRESHOLD
function convertValue(c) {
  if (c >= 350) {
    affectedAmt = h-0;
    console.log("DAMN FAR");
  } else if (c >= 300) {
    affectedAmt = h-(h/100)*15; //
    console.log("FAR");
  } else if (c >= 250) {
    affectedAmt = h-(h/100)*40; //
    console.log("OK");
  } else if (c >= 200) {
    affectedAmt = h-(h/100)*50; //
    console.log("MIDDLE");
  } else if (c >= 100) { 
    affectedAmt = h-(h/100)*70; //
    console.log("CLOSE");
  } else if (c >= 30) {
    affectedAmt = h-(h/100)*90; //
    console.log("VERY CLOSE");
  } else if (c >= 10) {
    affectedAmt = 0 //
    console.log("CLOSEST");
  }
  console.log("gapDistance: " + c + "   affectedAmt:" + affectedAmt);
}
