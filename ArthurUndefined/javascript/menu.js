const MenuIcon = document.getElementById("sectionMenu-div-icon");
const MenuDiv = document.getElementById("sectionMenu-div");
const MenuOption = document.getElementById("optionsMenu");

document.getElementById("sectionMenu-div-icon").addEventListener("click", function() {
    if(MenuIcon.innerHTML == 'menu'){
        MenuIcon.innerHTML = 'close';
        MenuOption.style.display = 'block';
        MenuDiv.style.backgroundColor = 'rgba(14, 16, 70, 1)';
        document.body.style.overflow = 'hidden';
    }else{
        MenuIcon.innerHTML = 'menu';
        MenuOption.style.display = 'none';
        MenuDiv.style.backgroundColor = 'rgba(14, 16, 70, 0)';
        document.body.style.overflow = 'auto';
    }
});