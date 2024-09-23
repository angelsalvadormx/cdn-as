document.addEventListener("DOMContentLoaded", function () {
  
});

function createGallery(data) {
  const gallery = document.querySelector('.gallery-as');
  data.forEach(img => {
    const div = document.createElement('div');
    div.className = `gallery-as-item ${img.class}`;
    div.style.backgroundImage = `url('${img.src}')`;
    gallery.appendChild(div);
  });
}
