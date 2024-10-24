#### Versión: V2 
# Documentación V2 Natasha CSS Framework

Esta documentación detalla las clases y estilos definidos en el archivo CSS utilizado para facilitar la creación de sitios web.

## Estilos Globales

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

body {
    line-height: 1.3;
    font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;
}

ul,
ol {
    list-style: none;
}

a {
    text-decoration: none;
    outline: none;
}

h1,
h2,
h3,
h4,
h5 {
    font-weight: 600;
    color: rgb(230, 241, 255);
    margin: 0px 0px 10px;
    line-height: 1.1;
}

.h2,
h2 {
    font-size: 2rem;
}

.h3,
h3 {
    font-size: 1.75rem;
}

.container {
    padding: 0px 40px;
}
```

**Ejemplo de uso:**

```html
<div class="container">
    <h1>Título Principal</h1>
    <p>Este es un párrafo con estilo global.</p>
</div>
```

## Clases de Fondo

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

.bkg-image-contain {
    background-size: contain;
}

.bkg-image-fixed {
    background-attachment: fixed;
}
```

**Ejemplo de uso:**

```html
<div class="bkg-image bkg-image-cover" style="background-image: url('imagen.jpg'); height: 300px;">
    <h2 class="text-center">Fondo Cubierto</h2>
</div>
```

## Z-index

```css
.z-index {
    z-index: 3;
}

.z-index-5 {
    z-index: 5;
}

.z-index-10 {
    z-index: 10;
}
```

**Ejemplo de uso:**

```html
<div class="z-index-10" style="position: absolute;">Elemento con mayor z-index</div>
<div class="z-index-5" style="position: absolute;">Elemento con menor z-index</div>
```

## Clases de Texto

```css
.text-center {
    text-align: center;
}

.txt-white {
    color: #FFF !important;
}

.txt-black {
    color: #000 !important;
}

.text-primary {
    color: rgb(100, 255, 218);
    margin: 0px 0px 20px 3px;
    font-size: 16px;
    font-weight: normal;
}

.text-secondary {
    font-size: 80px;
    line-height: 1.1;
}
```

**Ejemplo de uso:**

```html
<p class="text-primary txt-white">Texto Primario en Blanco</p>
<h2 class="text-secondary">Texto Secundario</h2>
```

## Clases de Centro

```css
.center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.center-y {
    top: 50%;
    transform: translateY(-50%);
}

.center-x {
    left: 50%;
    transform: translateX(-50%);
}

.center-margin {
    margin: 0 auto;
}
```

**Ejemplo de uso:**

```html
<div class="center" style="position: absolute;">
    Este elemento está centrado.
</div>
```

## Clases de Color de Fondo

```css
.bg-white {
    background-color: white;
}

.bg-sliver {
    background-color: #cdcdcd;
}

.bg-primary {
    background-color: #0a192f;
}

.bg-secondary {
    background-color: #242d2e;
}

.bg-highlight {
    background-color: #effcff;
}

.txt-primary {
    color: rgb(204, 214, 246);
}

.txt-secondary {
    color: #647072;
}
```

**Ejemplo de uso:**

```html
<div class="bg-primary txt-white">
    <p>Este es un texto sobre un fondo primario.</p>
</div>
```

## Capas

```css
.layer {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
}
```

**Ejemplo de uso:**

```html
<div class="layer"></div>
```

## Estilos de Código

```css
.tag {
    color: #2f6f9f;
}

.na {
    color: #006ee0;
}

.s {
    color: #d73038;
}

.comment {
    color: #ce9178;
}
```

**Ejemplo de uso:**

```html
<code class="tag">Etiqueta</code>
<code class="na">Nombre de la variable</code>
```

## Posicionamiento

```css
.position-static {
    position: static;
}

.position-relative {
    position: relative;
}

.position-fixed {
    position: fixed;
}

.position-absolute {
    position: absolute;
}

.position-sticky {
    position: sticky;
}
```

**Ejemplo de uso:**

```html
<div class="position-relative">
    Este es un elemento relativo.
</div>
```

## Tamaño de Fuente

```css
.t-size-13 {
    font-size: 13px;
}

.t-size-20 {
    font-size: 20px;
}

.t-size-2em {
    font-size: 2.3em;
}

.t-size-80 {
    font-size: 80px;
}
```

**Ejemplo de uso:**

```html
<p class="t-size-20">Texto con tamaño de fuente de 20px.</p>
```

## Familia de Fuente

```css
.font-primary {
    font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace;
}
```

**Ejemplo de uso:**

```html
<p class="font-primary">Este texto utiliza la familia de fuentes primaria.</p>
```

## Posicionamiento de Elementos

```css
.top-0 {
    top: 0;
}

.left-0 {
    left: 0;
}

.bottom-0 {
    bottom: 0;
}

.right-0 {
    right: 0;
}
```

**Ejemplo de uso:**

```html
<div class="position-absolute top-0 left-0">Elemento en la parte superior izquierda</div>
```

## Padding

```css
.p-6em {
    padding: 6em;
}

.pr-2em {
    padding-right: 2em;
}

.pl-2em {
    padding-left: 2em;
}

.p-5 {
    padding: 1em;
}

.p-2 {
    padding: .4em;
}
```

**Ejemplo de uso:**

```html
<div class="p-5">
    Este div tiene un padding de 1em.
</div>
```

## Display

```css
.d-flex {
    display: flex;
}

.d-block {
    display: block;
}

.d-none {
    display: none;
}
```

**Ejemplo de uso:**

```html
<div class="d-flex">
    <div>Elemento 1</div>
    <div>Elemento 2</div>
</div>
```

## Margen

```css
.ml-10 {
    margin-left: 10px !important;
}

.m-0 {
    margin: 0 !important;
}

.mt-5 {
    margin-top: 1em;
}
```

**Ejemplo de uso:**

```html
<p class="mt-5">Este párrafo tiene un margen superior de 1em.</p>
```

## Bordes

```css
.btn-border-primary {
    border: 1px solid rgb(100, 255, 218);
    border-radius: 3px;
    padding: 0.75rem 1rem;
    line-height: 1;
}
```

**Ejemplo de uso:**

```html
<button class="btn-border-primary">Botón con borde primario</button>
```

## Flexbox

```css
.flex-direction-column {
    flex-direction: column;
}

.justify-content-center {
    justify-content: center;
}

.justify-content-around {
    justify-content: space-around;
}

.justify-content-end {
    justify-content: flex-end;
}

.justify-content-between {
    justify-content: space-between;
}

.align-items-start {
    align-items: flex-start;
}

.align-items-end {
    align-items: flex-end;
}

.align-items-center {
    align-items: center;
}

.align-items-baseline {
    align-items: baseline;
}

.align-items-stretch {
    align-items: stretch;
}

.flex-nowrap {
    flex-wrap: nowrap;
}

.flex-wrap {
    flex-wrap: wrap;
}

.flex-wReverse {
    flex-wrap: wrap-reverse;
}
```

**Ejemplo de uso:**

```html
<div class="d-flex justify-content-between">
    <div>Elemento 1</div>
    <div>Elemento 2</div>
</div>
```


## Clases de Tamaño (Width y Height)

Las siguientes clases permiten definir el ancho (`width`) y la altura (`height`) de un elemento de manera responsiva. Estas clases son útiles para ajustar el tamaño de los contenedores o elementos visuales.

### Tamaño - Width

```css
.w-100 {
    width: 100% !important;
}

.w-80 {
    width: 80% !important;
}

.w-70 {
    width: 70% !important;
}

.w-60 {
    width: 60% !important;
}

/* Y otras clases de tamaño de ancho */
```

**Ejemplo de uso:**

```html
<div class="w-100">
    Este div ocupa el 100% del ancho.
</div>

<div class="w-50">
    Este div ocupa el 50% del ancho.
</div>
```

### Tamaño - Height

```css
.h-100 {
    height: 100% !important;
}

.h-90 {
    height: 90% !important;
}

.h-80 {
    height: 80% !important;
}

.h-70 {
    height: 70% !important;
}

/* Y otras clases de tamaño de altura */
```

**Ejemplo de uso:**

```html
<div class="h-100">
    Este div ocupa el 100% de la altura.
</div>

<div class="h-50">
    Este div ocupa el 50% de la altura.
</div>
```

## Otras Clases

### Clases de Desbordamiento y Divider

```css
.overflow-h {
    overflow: hidden;
}

.divider {
    position: relative;
    color: rgb(230, 241, 255);
    text-align: center;
    padding: 10px 0;
}
```

**Ejemplo de uso:**

```html
<div class="divider">Este es un divisor con estilo.</div>
<div class="overflow-h">Este contenido tiene overflow hidden.</div>
```
