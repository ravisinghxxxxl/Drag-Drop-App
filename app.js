console.log("start");

let imgBox = document.querySelector(".imgBox");
let whiteBoxes = document.getElementsByClassName("whiteBox");

// EVENT LISTENERS FOR DRAGGABLE ELEMENT BOX
imgBox.addEventListener("dragstart", e => {
  console.log("Dragstarting");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className += " hide";
  }, 0);
});

imgBox.addEventListener("dragend", e => {
  console.log("Dragending");
  e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", e => {
    e.preventDefault();
    console.log("over");
  });
  whiteBox.addEventListener("dragenter", e => {
      e.target.className += ' dashed';
      console.log("enter");
    });
    whiteBox.addEventListener("dragleave", (e) => {
      e.target.className = 'whiteBox';
    console.log("leave");
  });
  whiteBox.addEventListener("drop", e => {
    console.log("drop");
    e.target.append(imgBox);
  });
}
