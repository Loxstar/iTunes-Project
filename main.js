/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
let audio = document.querySelector("audio");
let input = document.querySelector("#input");
let section = document.querySelector("section");
let search = document.querySelector("#search");
search.addEventListener('click', function () {
  // connect search box to artist info
  let stuff = input.value;
  // console.log(stuff);
  fetch(`https://itunes.apple.com/search?term=${stuff}&limit=12`)
    .then(convertFromJson)
    .then(displayMusic)
});
function convertFromJson(response) {
  return response.json();
}
// loop over data array
function displayMusic(artists) {
  console.log(artists);
  for (let i = 0; i < artists.results.length; i++) {
    // add artist and images 
    let music = `    
    <div>
    <h3> ${artists.results[i].trackName}</h3>
    <button class = "butts" type = "button">Do That Music!</button>
    <img class="first" src= "${artists.results[i].artworkUrl100}">
    ${artists.results[i].artistName}</div>
    `
    section.innerHTML += music;
    // display results 
  };
  let butts = document.querySelectorAll(".butts");
  // loop over all class "butts" buttons
  for (let i = 0; i < butts.length; i++) {
    butts[i].addEventListener('click', function () {
      audio.src = artists.results[i].previewUrl;
      audio.play();
  
    });
  }
};