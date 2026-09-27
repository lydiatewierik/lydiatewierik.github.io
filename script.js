let displayElem = document.getElementById("display");
displayElem.addEventListener("click", (e) => {
  displayElem.style.opacity = 0;
  displayElem.style.visibility = "hidden";
});

Array.from(document.getElementsByClassName("panel")).forEach((p) => {
  p.addEventListener("click", (e) => {
    displayImage(e.target.parentElement.children[0]);
  });
});

function displayImage(image) {
  displayElem.children[0].src = image.src;
  displayElem.style.opacity = 1;
  displayElem.style.visibility = "visible";
}
