const PENCIL = "pencil";
const ERASER = "eraser";

let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let pencilOptions = pencil.querySelector(".tool-options");
let eraserOptions = eraser.querySelector(".tool-options");

let pencilSizeInput = pencil.querySelector("input");
let eraserSizeInput = eraser.querySelector("input");
let currentPencilSize = 1, currentPencilColor = "black", currentEraserSize = 1;

let activeTool = PENCIL;

pencilSizeInput.addEventListener("change", function(e){
  currentPencilSize = e.target.value;
  ctx.lineWidth = currentPencilSize;
})
eraserSizeInput.addEventListener("change", function(e){
  currentEraserSize = e.target.value;
  ctx.lineWidth = currentEraserSize;
})

let pencilColors = document.querySelector(".pencil-colors");
pencilColors.addEventListener("click", function(e){
  if(e.target.tagName == "SPAN"){
    currentPencilColor = window.getComputedStyle(e.target).getPropertyValue("background-color")
    ctx.strokeStyle = currentPencilColor;
  }
} )

pencil.addEventListener("click" , function() {
  if(activeTool == PENCIL){
    // Pencil is alreay selected which means this is second time we are clicking on it.
    // So we can open further options for pencil (like stroke size)
    if(pencilOptions.classList.contains("hide")){
      pencilOptions.classList.remove("hide");
    }else{
      pencilOptions.classList.add("hide");
    }
  }else{
    activeTool = PENCIL;
    ctx.strokeStyle = currentPencilColor;
    ctx.lineWidth = currentPencilSize;
    eraserOptions.classList.add("hide")
  }
})

eraser.addEventListener("click", function(){
  if(activeTool == "eraser"){
    // open further options for eraser
    if(eraserOptions.classList.contains("hide")){
      eraserOptions.classList.remove("hide");
    }else{
      eraserOptions.classList.add("hide");
    }
  }else {
    activeTool = ERASER;
    ctx.strokeStyle = "white";
    ctx.lineWidth = currentEraserSize;
    pencilOptions.classList.add("hide");
  }
})

function refreshContextProperties() {
  ctx.lineCap = "round";
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,canvas.width, canvas.height);
  if(activeTool == PENCIL){
    ctx.strokeStyle = currentPencilColor;
    ctx.lineWidth = currentPencilSize;
  }else {
    ctx.strokeStyle = "white";
    ctx.lineWidth = currentEraserSize;
  }
}