let build ="";
function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  build+=`<div class="card">
    <h1> ${school.name}</h1>
    <img src="${school.image}">
    <p> ${school.address}" </p>
  
  </div>
  `;

  output.innerHTML=build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  build="";
  let artist = {
    "name":"Mark Lee",
    "image":"https://i.scdn.co/image/ab67616d0000b273458a9f340084c41b7959205d",
    "album":"The First Fruit",
    "url":"https://open.spotify.com/album/6c3cEkKxXpqpo8vNRWrv8s"
  };
  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
  build+=`
  <div class="card">
    <h1> ${artist.name}</h1>
    <h3> ${artist.album}</h3>
    <a href="${artist.url}"> <img src="${artist.image}"> </a>
  
  </div>
  `
  output.innerHTML=build;
}





