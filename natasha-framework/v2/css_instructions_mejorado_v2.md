
# Guía de Clases CSS

Esta guía te ayudará a utilizar las clases CSS de forma eficiente. Cada sección está organizada por categorías de estilos, explicando su función y proporcionando ejemplos de uso.

## Estructura Básica

```css
* {
  padding: 0;
  margin: 0;
}
*,
::before,
::after {
  box-sizing: border-box;
}
```
Estas reglas eliminan los márgenes y el padding predeterminados de los elementos y aseguran que el tamaño de los elementos se calcule correctamente.

## Tipografía

### Títulos y Subtítulos
```css
h1, h2, h3, h4, h5 {
  font-weight: 600;
  color: rgb(230, 241, 255);
  margin: 0px 0px 10px;
  line-height: 1.1;
}
```
Define el estilo para los títulos, con un grosor de fuente de 600 y un color suave.

### Tamaño de los títulos

- `.h2, h2`: Tamaño de fuente de `2rem`.
- `.h3, h3`: Tamaño de fuente de `1.75rem`.

Ejemplo:
```html
<h2 class="h2">Título H2</h2>
```

### Textos Centrados

```css
.text-center {
  text-align: center;
}
```
Esta clase alinea el texto al centro. Útil para títulos o bloques de contenido.

Ejemplo:
```html
<p class="text-center">Este texto está centrado.</p>
```

## Colores de Texto

```css
.txt-white {
  color: #FFF !important;
}
.txt-black {
  color: #000 !important;
}
.text-primary {
  color: rgb(100, 255, 218);
}
```

- `.txt-white`: Texto blanco.
- `.txt-black`: Texto negro.
- `.text-primary`: Color principal de texto, definido en RGB.

Ejemplo:
```html
<p class="txt-white">Texto en blanco</p>
```

## Imágenes de Fondo

```css
.bkg-image {
  background-repeat: no-repeat;
}
.bkg-image-center {
  background-position: center;
}
.bkg-image-cover {
  background-size: cover;
}
```

Estas clases controlan cómo se muestran las imágenes de fondo, como centrar o cubrir todo el área.

## Flexbox

### Contenedores Flexibles

```css
.d-flex {
  display: flex;
}
```
Permite que los elementos hijos se alineen en un contenedor flexible.

Ejemplo:
```html
<div class="d-flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Dirección de los elementos

```css
.flex-direction-column {
  flex-direction: column;
}
```
Establece la dirección de los elementos dentro de un contenedor flex como columna.

### Alineación y Justificación

```css
.align-items-center {
  align-items: center;
}
.justify-content-between {
  justify-content: space-between;
}
```
- `.align-items-center`: Alinea los elementos al centro.
- `.justify-content-between`: Distribuye el espacio entre elementos.

## Z-Index y Posicionamiento

```css
.z-index-5 {
  z-index: 5;
}
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
```
Controla el orden de los elementos y su posicionamiento dentro del flujo del documento.

## Tamaños de Elementos

```css
.w-100 {
  width: 100% !important;
}
.h-50 {
  height: 50% !important;
}
```

Ejemplo:
```html
<div class="w-100 h-50">Elemento con ancho 100% y alto 50%</div>
```

---

Este archivo cubre las clases más importantes. Asegúrate de utilizar estas clases para diseñar sitios de forma rápida y eficiente.
