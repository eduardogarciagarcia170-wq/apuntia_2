// =======================================================
// FUNCIÓN DE NAVEGACIÓN Y CAMBIO DE PANTALLAS (SPA)
// =======================================================
function cambiarSeccion(idSeccion) {
    
    // 1. Ocultar todas las secciones de la página
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.remove('activa'));

    // 2. Mostrar únicamente la sección seleccionada
    const seccionMostrar = document.getElementById(idSeccion);
    if (seccionMostrar) {
        seccionMostrar.classList.add('activa');
    }

    // 3. Quitar la clase 'activo' de todos los elementos del menú lateral
    const itemsMenu = document.querySelectorAll('.sidebar-menu li');
    itemsMenu.forEach(li => li.classList.remove('activo'));

    // 4. Activar el botón correspondiente en la barra lateral
    const botonActivo = document.getElementById('btn-' + idSeccion);
    if (botonActivo) {
        botonActivo.classList.add('activo');
    }
}