document.addEventListener('DOMContentLoaded', function() {
    const introduccionDiv = document.getElementById('introduccion-r');
    const datosDisponiblesDiv = document.getElementById('datos-disponibles');
    const contenidoDatos = document.getElementById('contenido-datos');

    introduccionDiv.addEventListener('click', function() {
        window.location.href = 'https://lariojadata.github.io/introduccion_R/';
    });

    datosDisponiblesDiv.addEventListener('click', function() {
        if (contenidoDatos.style.display === 'none' || contenidoDatos.style.display === '') {
            contenidoDatos.style.display = 'block';
            cargarDatos();
        } else {
            contenidoDatos.style.display = 'none';
        }
    });

    function cargarDatos() {
        fetch('links_datos.json')
            .then(response => response.json())
            .then(data => {
                contenidoDatos.innerHTML = '<ul class="datos-lista">';
                data.forEach(item => {
                    contenidoDatos.innerHTML += `
                        <li>
                            <a href="${item.link}" target="_blank" class="dato-link">${item.texto}</a>
                        </li>
                    `;
                });
                contenidoDatos.innerHTML += '</ul>';
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
                contenidoDatos.innerHTML = '<p class="error">Error al cargar los datos disponibles.</p>';
            });
    }
});

