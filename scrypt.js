// JavaScript para mostrar y ocultar secciones

function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('cursos').classList.add('hidden');
    document.getElementById('agregarcurso').classList.add('hidden');
    document.getElementById('contacto').classList.add('hidden');

    // Mostrar la sección seleccionada
    document.getElementById(seccion).classList.remove('hidden');
}

// Función para cargar los cursos desde localStorage al cargar la página
document.addEventListener('DOMContentLoaded', cargarCursos);

// Manejo del formulario para agregar un nuevo curso
document.getElementById('formCurso').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const instructor = document.getElementById('instructor').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const duracion = document.getElementById('duracion').value;
    const descripcion = document.getElementById('descripcion').value;

    // Crear el objeto del curso
    const curso = {
        nombre,
        instructor,
        fechaInicio,
        duracion,
        descripcion
    };

    // Guardar el curso en localStorage
    guardarCurso(curso);

    // Limpiar el formulario
    document.getElementById('formCurso').reset();

    // Recargar la lista de cursos
    cargarCursos();
});

// Función para guardar el curso en localStorage
function guardarCurso(curso) {
    let cursos = localStorage.getItem('cursos') ? JSON.parse(localStorage.getItem('cursos')) : [];
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

// Función para cargar los cursos y mostrarlos en la lista
// Función para cargar los cursos y mostrarlos en formato de grid
function cargarCursos() {
    let cursos = localStorage.getItem('cursos') ? JSON.parse(localStorage.getItem('cursos')) : [];
    const listaCursos = document.getElementById('listaCursos');
    listaCursos.innerHTML = '';

    cursos.forEach((curso, index) => {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.innerHTML = `
            <h4><a href="#" onclick="mostrarDetallesCurso(${index})">${curso.nombre}</a></h4>
            <button onclick="eliminarCurso(${index})">Eliminar</button>
        `;
        listaCursos.appendChild(div);
    });
}


// Función para eliminar un curso
function eliminarCurso(index) {
    let cursos = localStorage.getItem('cursos') ? JSON.parse(localStorage.getItem('cursos')) : [];
    cursos.splice(index, 1);
    localStorage.setItem('cursos', JSON.stringify(cursos));
    cargarCursos();
}

// Función para mostrar detalles de un curso en el modal
function mostrarDetallesCurso(index) {
    let cursos = localStorage.getItem('cursos') ? JSON.parse(localStorage.getItem('cursos')) : [];
    const curso = cursos[index];

    // Llenar los detalles del modal
    document.getElementById('modal-nombre').innerText = curso.nombre;
    document.getElementById('modal-instructor').innerText = curso.instructor;
    document.getElementById('modal-fechaInicio').innerText = curso.fechaInicio;
    document.getElementById('modal-duracion').innerText = curso.duracion;
    document.getElementById('modal-descripcion').innerText = curso.descripcion;

    // Mostrar el modal
    document.getElementById('modal').classList.add('show');
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modal').classList.remove('show');
}
