let stickyDiv = document.querySelector("#sticky");

stickyDiv.addEventListener("click", appendSticky);

function appendSticky(){
  // <div class="sticky">
    // <div class="sticky-header">
    //   <div class="minimize">

    //   </div>
    //   <div class="close">

    //   </div>
    // </div>
    // <div class="sticky-content">
    //   <textarea name="" id="" cols="30" rows="10"></textarea>
    // </div>
  // </div>
  let sticky = document.createElement("div");
  sticky.classList.add("sticky");
  sticky.innerHTML = `
    <div class="sticky-header">
      <div class="minimize">

      </div>
      <div class="close">

      </div>
    </div>
    <div class="sticky-content">
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  `;

  sticky.querySelector(".minimize").addEventListener("click", function(){
    let stickyContent = sticky.querySelector(".sticky-content");
    stickyContent.classList.contains("hide")?
    stickyContent.classList.remove("hide"): stickyContent.classList.add("hide");
  })
  sticky.querySelector(".close").addEventListener("click", function(){
    sticky.remove();
  })


  document.querySelector("body").append(sticky);
}