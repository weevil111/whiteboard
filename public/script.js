let canvas = document.querySelector("#canvas")

let {top : canvasTop} = canvas.getBoundingClientRect();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - canvasTop;

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - canvasTop;
})

let tools = document.querySelector(".tools");
tools.addEventListener("click", function(e) {
  let tag = e.target;
  console.log(tag.tagName);
  if (tag.tagName === "I"){
    const allTools = document.querySelectorAll(".tool")
    allTools.forEach(tool => {
      tool.classList.remove("tool-active");
    })
    tag.parentElement.classList.add("tool-active")
  }
})


/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

let isMouseDown = false;

canvas.addEventListener("mousedown", function(e){
  isMouseDown = true;
  let x = e.clientX;
  let y = e.clientY - canvasTop;
  ctx.beginPath();
  ctx.moveTo(x,y);
})

canvas.addEventListener("mousemove", function(e){
  if(isMouseDown){
    let x = e.clientX;
    let y = e.clientY - canvasTop;
    ctx.lineTo(x,y);
    ctx.stroke();
  }
})

canvas.addEventListener("mouseup", function(e){
  isMouseDown = false;
})