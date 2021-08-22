let stickyDiv = document.querySelector("#sticky");

stickyDiv.addEventListener("click", ()=> appendSticky());

function appendSticky(elem){
  let sticky = document.createElement("div");
  sticky.classList.add("sticky");
  if(elem){
    sticky.innerHTML = `
      <div class="sticky-header">
        <i class="fa fa-minus-square-o minimize">
        </i>
        <i class="fa fa-times-circle close">
        </i>
      </div>
      <div class="sticky-content">
      </div>
    `;
    sticky.querySelector(".sticky-content").append(elem);
  }else{
    sticky.innerHTML = `
      <div class="sticky-header">
        <i class="fa fa-minus-square-o minimize">
        </i>
        <i class="fa fa-times-circle close">
        </i>
      </div>
      <div class="sticky-content">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    `;
    // Make textarea resize event make the entire sticky window resize
    sticky.querySelector("textarea").addEventListener("mousemove", function(e){
      sticky.style.width = window.getComputedStyle(e.target).width;
    })
  }

  sticky.querySelector(".minimize").addEventListener("click", function(){
    let stickyContent = sticky.querySelector(".sticky-content");
    stickyContent.classList.contains("hide")?
    stickyContent.classList.remove("hide"): stickyContent.classList.add("hide");
  })
  sticky.querySelector(".close").addEventListener("click", function(){
    sticky.remove();
  })

  let stickyHeader = sticky.querySelector(".sticky-header");
  let isStickyHold = false;
  let initialX,initialY;
  stickyHeader.addEventListener("mousedown", function(e){
    isStickyHold = true;
    initialX = e.clientX;
    initialY = e.clientY;
  })
  stickyHeader.addEventListener("mousemove", function(e){
    if(isStickyHold){
      let finalX = e.clientX;
      let finalY = e.clientY;

      let dx = finalX - initialX;
      let dy = finalY - initialY;

      // set top and left of stikcy
      // getBoundingClient => we can only retrieve top and left
      let {top, left} = sticky.getBoundingClientRect();
      sticky.style.top = `${top + dy}px`;
      sticky.style.left = `${left + dx}px`;
      initialX = finalX;
      initialY = finalY;
    }
  })
  stickyHeader.addEventListener("mouseup", function(){
    isStickyHold = false;
  })
  
  document.querySelector("body").append(sticky);
}