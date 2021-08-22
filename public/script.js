let canvas = document.querySelector("#canvas")

let {top : canvasTop} = canvas.getBoundingClientRect();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - canvasTop;

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - canvasTop;
  refreshContextProperties();
  redrawLines();
})

let tools = document.querySelector(".tools");
tools.addEventListener("click", function(e) {
  let tag = e.target;
  if (tag.tagName === "I"){
    const allIcons = document.querySelectorAll(".icon-active")
    allIcons.forEach(icon => {
      icon.classList.remove("icon-active");
    })
    tag.parentElement.classList.add("icon-active")
  }
})


/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");
ctx.lineCap = "round";
ctx.fillStyle = "white";
ctx.fillRect(0,0,canvas.width, canvas.height);

let db = [];
let redoDB = [];
let line = [];

let isMouseDown = false;

canvas.addEventListener("mousedown", function(e){
  if(redoDB.length > 0){
    document.querySelector("#redo").classList.add("disabled");
    redoDB = [];
  }
  isMouseDown = true;
  let x = e.clientX;
  let y = e.clientY - canvasTop;
  ctx.beginPath();
  ctx.moveTo(x,y);

  let pointObject = {
    type: "md",
    x,
    y,
    color: ctx.strokeStyle,
    width: ctx.lineWidth
  }
  line.push(pointObject);
})

canvas.addEventListener("mousemove", function(e){
  if(isMouseDown){
    let x = e.clientX;
    let y = e.clientY - canvasTop;
    ctx.lineTo(x,y);
    ctx.stroke();
    let pointObject = {
      type: "mm",
      x,
      y,
    }
    line.push(pointObject);
  }
})

canvas.addEventListener("mouseup", function(e){
  isMouseDown = false;
  db.push(line);
  line = [];
})