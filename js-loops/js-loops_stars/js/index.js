console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars =  0) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- Task 1 code --v--
  /*
for (let i=1;i<=5;i++){
    const image = document.createElement("img");
    image.src = "assets/star-empty.svg";
    starContainer.append(image);
  }
*/
// --v-- Task 2 code --v--

  for (let i=1;i<=5;i++){
    const image = document.createElement("img");

  if(i <= filledStars){
    image.src = "assets/star-filled.svg";
  } else {
    image.src = "assets/star-empty.svg";
  }
  // --^-- write or modify code above this line --^--
image.addEventListener("click", () => {
      renderStars(i);
    });

starContainer.append(image);
}
}

renderStars();


