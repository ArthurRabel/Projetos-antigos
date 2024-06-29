function VerificarCurso(Element){
    let elemento = Element.target;
    localStorage.setItem('idCurso', elemento.id);
}

document.querySelectorAll('.pegarId').forEach(elemento => {elemento.addEventListener('click', VerificarCurso, true)});