/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg"];
let meat_prices = [9.99, 29.99, 12.99, 19.99];
let meat_titles = ["Beef Tips", "Brisket", "Ribeye", "Steak"];

let seafood_images = ["clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg"];
let seafood_prices = [5.99, 3.99, 13.99, 14.51, 9.00, 19.99];
let seafood_titles = ["Clams", "Crabs", "Lobster", "Scallops", "Shrimp", "Tuna"];

let dessert_images = ["flan.jpg", "passionberry.jpeg", "oreocup.jpg"];
let dessert_prices = [4.99, 5.99, 4.00];
let dessert_titles = ["Flan", "Passion Berry", "Oreo Cup"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
  for(let i=0; i< meat_images.length; i++){
    build +=`
      <div class="card">
        <h1> ${meat_titles[i]} </h1>
        <img src="images/${meat_images[i]}">
        <p> $${meat_prices[i]} </p>
    
      </div>`;
  }
  m.innerHTML = build;
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
  build ="";
  for(let x=0; x< seafood_images.length; x++){
    build +=`
      <div class="card">
        <h1> ${seafood_titles[x]} </h1>
        <img src="images/${seafood_images[x]}">
        <p> $${seafood_prices[x]}</p>
      </div>`;
  }
  s.innerHTML = build;
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
  build ="";
  for(let y=0; y<dessert_images.length; y++){
    build +=`
      <div class="card">
        <h1> ${dessert_titles[y]}</h1>
        <img src="images/${dessert_images[y]}">
        <p> $${dessert_prices[y]}</p>
      </div>`
  }
  d.innerHTML = build;
}
