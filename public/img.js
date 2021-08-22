let photo = document.querySelector("#photo > div");
let photoInput = document.querySelector("#photo-upload");
photo.addEventListener("click", function(){
  photoInput.click();
})

photoInput.addEventListener("change", function(e){
  let fileObject = e.target.files[0]
  let img = document.createElement("img");
  let imageUrl = URL.createObjectURL(fileObject);
  img.src = imageUrl;
  img.classList.add("image-upload")
  appendSticky(img);
});