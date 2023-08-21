const container = document.querySelector('.container');
const imageURL = 'https://source.unsplash.com/random/';
const imagesPerPage = 12; 
const totalImages = 96;  

// Generate an array of image URLs
const imageUrls = Array.from({ length: totalImages }, () => `${imageURL}${getRandomSize()}`);

let currentPage = 1;

function generateImages(page) {
  container.innerHTML = ''; // Clear previous images
  const startIndex = (page - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  for (let i = startIndex; i < endIndex; i++) {
    if (i >= imageUrls.length) { // Stop if no more images to display
      break; 
    }

    const img = document.createElement('img');
    img.src = imageUrls[i];
    container.appendChild(img);
  }
}

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    document.getElementById('currentPage').textContent = currentPage;
    generateImages(currentPage);
  }
});

document.getElementById('nextPage').addEventListener('click', () => {
  const totalPages = Math.ceil(imageUrls.length / imagesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    document.getElementById('currentPage').textContent = currentPage;
    generateImages(currentPage);
  }
});


function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 100) + 200;
}

generateImages(currentPage);
