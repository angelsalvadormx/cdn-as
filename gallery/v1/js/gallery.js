// Función para generar la galería basada en un JSON
function generateGallery(images) {
  const gallery = document.getElementById('gallery-as-sec'); // Contenedor de la galería
  gallery.innerHTML = ''; // Limpiar la galería existente si hubiera

  // Iterar sobre el JSON y crear un div para cada imagen
  images.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-as-item');
    galleryItem.style.backgroundImage = `url(${image.link})`;

    // Añadir la clase que viene desde el JSON
    const classes = image.class.split(' ');
    galleryItem.classList.add(...classes); // Añadir todas las clases al div

    // Añadir el evento de click para abrir la vista previa
    galleryItem.addEventListener('click', function () {
      openModal(image.link);
    });

    gallery.appendChild(galleryItem); // Agregar el nuevo div a la galería
  });
}

// Función para abrir el modal con la imagen como <img>
function openModal(imageSrc) {
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');

  modal.style.display = 'flex';
  modalImage.src = imageSrc; // Cambiar la imagen de la modal
  document.body.classList.add('modal-open'); // Prevenir scroll en el fondo
  resetZoom(); // Restablecer el zoom al abrir una nueva imagen
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById('image-modal');
  modal.style.display = 'none';
  document.body.classList.remove('modal-open'); // Permitir scroll en el fondo
}

// Añadir el evento al botón de cerrar
document.getElementById('close-modal').addEventListener('click', closeModal);

// Cerrar el modal al hacer clic fuera de la imagen
document.getElementById('image-modal').addEventListener('click', function(event) {
  if (event.target === this) {
    closeModal();
  }
});


// class 
// wide 
// tall 
// small 
// wide-tall

// // Ejemplo de uso con un JSON de imágenes
// const imageLinks = [
//   { "link": "https://colxsoft.com/src/invitations/xv/Invitacion-XV-Fernanda-Martinez.png?text=Image1", "class": "wide tall" },
//   { "link": "https://colxsoft.com/src/invitations/xv/Invitacion-XV-Fernanda-Martinez.png?text=Image3", "class": "small" },
//   { "link": "https://colxsoft.com/src/invitations/xv/Invitacion-XV-Fernanda-Martinez.png?text=Image2", "class": "tall" },
//   { "link": "https://colxsoft.com/src/invitations/xv/Invitacion-XV-Fernanda-Martinez.png?text=Image4", "class": "small" },
//   // { "link": "https://colxsoft.com/src/invitations/xv/Invitacion-XV-karla-ponce.png?text=Image5", "class": "wide" },
//   // { "link": "https://colxsoft.com/src/invitations/xv/Invitacion-XV-karla-ponce.png?text=Image6", "class": "small" },
//   // { "link": "https://colxsoft.com/src/invitations/xv/Invitacion-XV-karla-ponce.png?text=Image7", "class": "tall" },
//   // { "link": "https://colxsoft.com/src/invitations/xv/Invitacion-XV-karla-ponce.png?text=Image8", "class": "wide" },
//   // { "link": "https://colxsoft.com/src/invitations/xv/Invitacion-XV-karla-ponce.png?text=Image9", "class": "small" }
// ];

// // Llamar a la función para generar la galería
// generateGallery(imageLinks);
