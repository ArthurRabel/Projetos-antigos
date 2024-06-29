//função para abrir o significado da palavra
function OpenWord(element){
    let WordIconOpen = element.target;
    let WordText = WordIconOpen.parentNode;
    WordText = WordText.parentNode;
    WordText = WordText.children[1];

    WordIconOpen.classList.toggle("Word__IconOpen--active");
    WordText.classList.toggle("Word__Signification--active");
    WordIconOpen.classList.toggle("Word__IconOpen--disable");
    WordText.classList.toggle("Word__Signification--disable");
}

document.querySelectorAll(".Word__IconOpen").forEach(element => {element.addEventListener('click', OpenWord, true)});
