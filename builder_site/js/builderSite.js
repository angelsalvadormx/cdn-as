

function config() {

}

function createSite(items) {

  items.sections.forEach(section => {

    const sectionElement = createElementSite(section);

    if (section.items && section.items.length > 0) {
      section.items.forEach(item => {
        let element = createElementSite(item);
        sectionElement.appendChild(element);
      })
    }
    document.body.appendChild(sectionElement);
  });
}

function createElementSite(item) {
  const contentElement = document.createElement(item.type);
  contentElement.textContent = item.content;

  // Agregar la clase CSS si está definida en el JSON
  if (item.className) {
    contentElement.className = item.className.join(' ');
  }

  // Agregar el ID si está definido en el JSON
  if (section.id) {
    contentElement.id = section.id;
  }

  // Agregar atributos extra si están definidos
  if (section.attributes) {
    Object.keys(section.attributes).forEach(attr => {
      contentElement.setAttribute(attr, section.attributes[attr]);
    });
  }

  return contentElement;
}