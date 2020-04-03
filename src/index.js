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


  function addImg(dogImg) {
    let container = document.querySelector('#dog-image-container');
    let newDogImg = document.createElement('img');
    newDogImg.src = dogImg;
    container.appendChild(newDogImg);
  }
