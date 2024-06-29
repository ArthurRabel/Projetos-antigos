import Cursos from "./CursosAndamento.js";

let organizacao = document.querySelector("#section1-titulo");
let curso = document.querySelector("#curso");
let detalhes = document.querySelector("#InfoDetalhes");
let skill1 = document.querySelector("#skill1");
let skill2 = document.querySelector("#skill2");
let skill3 = document.querySelector("#skill3");
let skill4 = document.querySelector("#skill4");
let skill5 = document.querySelector("#skill5");
let skill6 = document.querySelector("#skill6");
let skill7 = document.querySelector("#skill7");
let skill8 = document.querySelector("#skill8");
let img = document.querySelector("#matriculaCertificado");
const idCurso = localStorage.getItem("idCurso");

document.addEventListener("DOMContentLoaded", function(event) {

    organizacao.innerText = Cursos[idCurso].Organizacao
    curso.innerText = Cursos[idCurso].Curso
    detalhes.innerText = Cursos[idCurso].Detalhes
    skill1.innerText = Cursos[idCurso].Skill1
    skill2.innerText = Cursos[idCurso].Skill2
    skill3.innerText = Cursos[idCurso].Skill3
    skill4.innerText = Cursos[idCurso].Skill4
    skill5.innerText = Cursos[idCurso].Skill5
    skill6.innerText = Cursos[idCurso].Skill6
    skill7.innerText = Cursos[idCurso].Skill7
    skill8.innerText = Cursos[idCurso].Skill8
    img.src = Cursos[idCurso].Image

});