const data = [
  { "src": "image1.png", "class": "tall" },
  { "src": "image2.png", "class": "" },
  { "src": "image3.png", "class": "wide" },
  { "src": "image4.png", "class": "" },
  { "src": "image5.png", "class": "" },
  { "src": "image6.png", "class": "" },
  { "src": "image7.png", "class": "" },
  { "src": "image8.png", "class": "wide" },
  { "src": "image9.png", "class": "" },
  { "src": "image10.png", "class": "tall" },
  { "src": "image11.png", "class": "" },
  { "src": "image12.png", "class": "wide" }
];
document.addEventListener("DOMContentLoaded", function () {
  // fetch('images.json')
  //     .then(response => response.json())
  //     .then(data => {
  const gallery = document.querySelector('.gallery');
  data.forEach(img => {
    const div = document.createElement('div');
    div.className = `gallery-item ${img.class}`;
    div.style.backgroundImage = `url('${img.src}')`;
    gallery.appendChild(div);
  });
  // })
  // .catch(error => {
  //     console.error('Error loading the images:', error);
  // });
});
