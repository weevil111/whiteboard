const PENCIL = "pencil";
const ERASER = "eraser";

let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let activeTool = PENCIL;

pencil.addEventListener("click" , function() {
  if(activeTool == PENCIL){
    // Pencil is alreay selected which means this is second time we are clicking on it.
    // So we can open further options for pencil (like stroke size)
  }else{
    activeTool = "pencil";
    ctx.strokeStyle = "black";
  }
})

eraser.addEventListener("click", function(){
  if(activeTool == "eraser"){
    // open further options for eraser
  }else {
    activeTool = "eraser";
    ctx.strokeStyle = "white";
  }
})
