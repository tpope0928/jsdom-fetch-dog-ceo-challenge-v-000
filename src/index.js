let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
  loadImgs();
  loadBreedOptions();
});

function loadImgs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res => res.json())
    .then(results => {
      results.message.forEach(image => addImg(image))
    });
}