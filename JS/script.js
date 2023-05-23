const boxElement = document.querySelector("section");

const buttonPlay = document.getElementById("play");

addEventListener("click", function(){

    
for (let i = 0; i < 100; i++) {
    createBox();
    
  }


});

function createBox(){

  let newBoxElement = document.createElement("div");

  newBoxElement.classList.add("box");

  boxElement.appendChild(newBoxElement);

  return newBoxElement;


}

