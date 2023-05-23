const boxElement = document.querySelector("section");

const buttonPlay = document.getElementById("play");

buttonPlay.addEventListener("click", function(){

    
for (let i = 1; i <= 100; i++) {
    createBox(i);
    
  }


});

function createBox(number){

  let newBoxElement = document.createElement("div");

  newBoxElement.classList.add("box");

  newBoxElement.innerHTML = number;
    
  boxElement.appendChild(newBoxElement);

  return newBoxElement;


}

