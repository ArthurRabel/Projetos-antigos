let mapaLocal = document.querySelector('#mapaCorrida');
let elementoId;

function TrocarMapa(Element) {
    elementoId = Element.target;
    switch (elementoId.id) {
        case 'Mapa1':
            mapaLocal.setAttribute('src', 'image/mapaCorrida1.jpg')
            break;
        case 'Mapa2':
            mapaLocal.setAttribute('src', 'image/mapaCorrida2.jpg')
            break; 
        case 'Mapa3':
            mapaLocal.setAttribute('src', 'image/mapaCorrida3.jpg')
            break;
    }
}

document.querySelectorAll('.MapaButao').forEach(elemento => {elemento.addEventListener('click', TrocarMapa, true)});