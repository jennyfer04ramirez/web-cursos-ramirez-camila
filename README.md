# **Proyecto: Gestión de Cursos - Brushworks**

## **Descripción General**

El proyecto **Gestión de Cursos** es una aplicación web simple diseñada para gestionar una lista de cursos disponibles. Los usuarios pueden ver una lista de los cursos, agregar nuevos cursos, y visualizar los detalles de cada curso en un pop up emergente. También se incluye una sección de contacto.

## **Estructura del Proyecto**

### 1. **HTML: Estructura del Sitio**

El HTML define la estructura básica de la página web, que incluye:

- Un **encabezado** con el título del proyecto.
- Una **barra de navegación** para moverse entre las distintas secciones: Inicio, Cursos, Agregar Curso, y Contacto.
- Secciones separadas para:
  - **Inicio**: Muestra un mensaje de bienvenida.
  - **Cursos**: Lista todos los cursos añadidos.
  - **Agregar Curso**: Permite a los usuarios ingresar detalles de un nuevo curso.
  - **Contacto**: Contiene un enlace de correo electrónico para contacto.
- Un **modal** que se abre al hacer clic en un curso y muestra los detalles completos del curso seleccionado.

### 2. **CSS: Estilos del Proyecto**

El archivo `styles.css` proporciona los estilos básicos para la página, incluyendo:

- **Modal**: Un cuadro modal para mostrar los detalles del curso con un diseño centrado y un fondo semitransparente.
- **Formularios y botones**: Se incluyen estilos para los formularios, botones y elementos de interacción.

### 3. **JavaScript: Funcionalidad Dinámica**

El archivo `scrypt.js` proporciona la lógica para la interacción dinámica con la página:

- **Manejo de secciones**: Las distintas secciones (Inicio, Cursos, Agregar Curso, Contacto) se muestran u ocultan según las interacciones del usuario mediante la función `mostrarSeccion()`.
- **Agregar cursos**: Permite a los usuarios añadir nuevos cursos. Estos cursos se guardan en el almacenamiento local `localStorage` y se muestran dinámicamente en la sección de cursos.
- **Modal para detalles del curso**: Al hacer clic en un curso, se muestra un modal emergente con la información completa del curso (instructor, fecha de inicio, duración y descripción).
- **Almacenamiento local**: Los cursos agregados se almacenan usando `localStorage`, lo que permite mantener la información de los cursos incluso si la página se recarga.

## **Funcionalidades**

- **Agregar Cursos**: Los usuarios pueden añadir cursos con información sobre el nombre del curso, instructor, fecha de inicio, duración y descripción.
- **Ver Lista de Cursos**: Los cursos se muestran en un formato de grid con un botón para eliminar cursos.
- **Detalles del Curso**: Al hacer clic en el nombre del curso, se abre un modal que muestra los detalles completos del curso.
- **Eliminar Cursos**: Los cursos pueden ser eliminados permanentemente de la lista y del almacenamiento local.
