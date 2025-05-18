console.log("connected");

const ulElement = document.querySelector("#nav-container");
console.log(ulElement);

const liElements = document.querySelectorAll(".nav-list");
console.log(liElements);

let lastClicked = null;

for (let singleLiElement of liElements) {
  console.log(singleLiElement);
  console.log(singleLiElement.innerText);

  singleLiElement.addEventListener("click", function () {
    if (lastClicked === null) {
      singleLiElement.style.backgroundColor = "red";
      singleLiElement.style.color = "white";

      // update the click reference
      lastClicked = singleLiElement;
      
    } else {
      lastClicked.style.backgroundColor = "transparent";
      lastClicked.style.color = "#eee";

      singleLiElement.style.backgroundColor = "red";
      singleLiElement.style.color = "white";

      // update the click reference
      lastClicked = singleLiElement;
    }
  });
}
