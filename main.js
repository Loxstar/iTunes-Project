/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let section = document.querySelector("section");

function convertFromJson(response) {
  return response.json();
}

function displayMusic(artists) {
  console.log (artists);
  for (let i = 0; i < artists.results.length; i++) {


    let music = `
<div>
<h3> ${artists.results[i].trackName}</h3>
<img src= "${artists.results[i].artworkUrl30}">
</div>
`
    section.innerHTML += music;
  };

};








fetch("https://itunes.apple.com/search?term=jack+johnson")
  .then(convertFromJson)
  .then(displayMusic)





console.log(fetch);