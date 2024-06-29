let menu = document.getElementById('menuOptionMobile');
function abrirMenu(){
    menu.style.display = "block"; 
    document.body.style.overflow = 'hidden';
}
function fecharMenu(){
    menu.style.display = "none";
    document.body.style.overflow = 'auto';
}
document.getElementById('fecharMenu').addEventListener('click', fecharMenu, true);
document.getElementById('mobileMenu').addEventListener('click', abrirMenu, true);