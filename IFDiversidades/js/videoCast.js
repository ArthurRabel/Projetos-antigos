function FooterPosition() {
    const footer = document.querySelector('.Footer');
    
    if((document.querySelector('.Header-Main').getBoundingClientRect().height + document.querySelector('.Main').getBoundingClientRect().height)
    < (window.screen.height - footer.getBoundingClientRect().height)){
        footer.style.position = "fixed";
        footer.style.width = "100vw";
        footer.style.bottom = "0";
    }else{
        footer.style.position = "static";
    }
}

window.addEventListener('resize', FooterPosition);
FooterPosition();