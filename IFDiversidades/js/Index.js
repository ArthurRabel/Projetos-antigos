let H1HomeMain = document.createElement("h1");
let conteudoNovo = document.createTextNode("O IFB deve ser um lugar de diversidades e inclusao!");
H1HomeMain.appendChild(conteudoNovo);
H1HomeMain.classList.add('Tittle--Attack');
H1HomeMain.classList.add('Home-first__H1');

let widthScreen = window.screen.width;

const HomeFist = document.querySelector(".Home-first");
const HomeFirstWrapper = document.querySelector(".Home-first__Wrapper");

if(widthScreen < 480){
    HomeFist.insertBefore(H1HomeMain, document.querySelector(".Home-first__Main"));
}else{  
    HomeFirstWrapper.insertBefore(H1HomeMain, document.querySelector(".Home-first__P"));
}

window.addEventListener('resize', function () {
    widthScreen = window.screen.width;
    if(widthScreen < 480){
        let h1 = !!document.querySelector(".Home-first__Wrapper>h1")
        if(h1){HomeFirstWrapper.removeChild(document.querySelector(".Home-first__H1"))}
        HomeFist.insertBefore(H1HomeMain, document.querySelector(".Home-first__Main"));
    }else{
        let h1 = !!document.querySelector(".Home-first>h1")
        if(h1){HomeFist.removeChild(document.querySelector(".Home-first__H1"))};
        HomeFirstWrapper.insertBefore(H1HomeMain, document.querySelector(".Home-first__P"));
    }
});

const slide = document.querySelector(".Section-Profile__Slides");

new Glider(slide, {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    arrows: {
        prev: '.Section-Profile__Slides-Button-prev',
        next: '.Section-Profile__Slides-Button-next'
    },
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
            }
        },
    ]
});