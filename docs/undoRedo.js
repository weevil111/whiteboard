let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");

undo.addEventListener("click", undoLine);
redo.addEventListener("click", redoLine);

function undoLine(){
  if(db.length > 0){
    redo.classList.remove("disabled");
  }

  // 1. Pop a line from db
  let redoLine = db.pop();
  redoDB.push(redoLine);

  // 2. Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 3. Redraw lines
  redrawLines();
}

function redrawLines() {
  let currentStrokeColor = ctx.strokeStyle;
  let currentLineWidth = ctx.lineWidth;
  for(let i = 0; i < db.length; i++){
    let line = db[i];
    for(let j = 0; j < line.length; j++){
      let pointObject = line[j];
      if(pointObject.type == "md"){
        ctx.strokeStyle = pointObject.color;
        ctx.lineWidth = pointObject.width;
        ctx.beginPath();
        ctx.moveTo(pointObject.x, pointObject.y);
      }else{
        ctx.lineTo(pointObject.x, pointObject.y);
        ctx.stroke();
      }
    }
  }
  ctx.strokeStyle = currentStrokeColor;
  ctx.lineWidth = currentLineWidth;
}

function redoLine(){
  if(redoDB.length >= 1){
    let currentStrokeColor = ctx.strokeStyle;
    let currentLineWidth = ctx.lineWidth;
    let line = redoDB.pop();
    for(let j = 0; j < line.length; j++){
      let pointObject = line[j];
      if(pointObject.type == "md"){
        ctx.strokeStyle = pointObject.color;
        ctx.lineWidth = pointObject.width;
        ctx.beginPath();
        ctx.moveTo(pointObject.x, pointObject.y);
      }else{
        ctx.lineTo(pointObject.x, pointObject.y);
        ctx.stroke();
      }
    }
    db.push(line);
    ctx.strokeStyle = currentStrokeColor;
    ctx.lineWidth = currentLineWidth;
    if(redoDB.length == 0){
      redo.classList.add("disabled");
    }
  }
}