/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let section = document.querySelector("section");
let search = document.querySelector("button");
search.addEventListener('click', function () {
  fetch("https://itunes.apple.com/search?term={stuff}")
    .then(convertFromJson)
    .then(displayMusic)
});
function convertFromJson(response) {
  return response.json();
}
let stuff = {};
function displayMusic(artists) {
  for (let i = 0; i < artists.results.length; i++) {
    stuff.push(artists.results[i]);
    let music = `
    <div>
    <h3> ${artists.results[i].trackName}</h3>
    <img src= "${artists.results[i].artworkUrl100}">
    ${artists.results[i].artistName}</div>
    `
    section.innerHTML += music;
  };
};