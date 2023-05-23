const boxElement = document.querySelector("section");

function createBox(){

  let newBoxElement = document.createElement("div");

  newBoxElement.classList.add("box");

  boxElement.appendChild(newBoxElement);

  return newBoxElement;


}
for (let i = 0; i < 100; i++) {
    createBox();
  }