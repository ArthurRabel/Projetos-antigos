document.querySelector('#AtividadeADD').addEventListener("click", FunctionADD);

function FunctionADD(){
    /* Pega o valor do input */
    let AtividadeValue = document.querySelector('#Atividade'); 

    /* Criar as tags */
    let AtividadeTagDiv = document.createElement("Div");
    let AtividadeTagP = document.createElement("p");
    let AtividadeTagCheckBox = document.createElement("input");
    AtividadeTagCheckBox.setAttribute("type", "checkbox")

    AtividadeTagDiv.appendChild(AtividadeTagP);
    AtividadeTagDiv.appendChild(AtividadeTagCheckBox);

    let AtividadeConteudo = document.createTextNode(AtividadeValue.value);
    AtividadeTagP.appendChild(AtividadeConteudo);
    AtividadeTagDiv.classList.add("Atividade");

    let Gambiarra = document.querySelector("#Gambiarra");
    document.body.insertBefore(AtividadeTagDiv, Gambiarra);

    AtividadeValue.value = "";
}