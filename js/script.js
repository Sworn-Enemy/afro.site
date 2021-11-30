function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
"use stuct"

document.addEventListener('DOMContentLoaded', () => {
    let jingle = document.querySelector('#jingle');
    let jingleMob = document.querySelector('#jingle-mob');
    let jingleCallback = document.querySelector('#jingle-callback');
    let jingleCallbackOff = document.querySelector('#jingle-callback-off');

    jingle.addEventListener('click', ToggleJinglePopUp);
    jingleMob.addEventListener('click', ToggleJinglePopUp);
    jingleCallbackOff.addEventListener('click', ToggleJinglePopUp);

    function ToggleJinglePopUp(e) {
        isHidden = jingleCallback.hidden;
        if (isHidden) {
            jingleCallback.hidden = false;
            document.body.classList.add('noscroll');
        } else {
            jingleCallback.hidden = true;
            document.body.classList.remove('noscroll');
        }
    };

    jingleCallback.addEventListener('click', (e) => { if (e.target === jingleCallback) { e.target.hidden = true } });

    ////// top-buton //////

    const buttonTop = document.querySelector('.button-top');
    const header = document.querySelector('.header');

    document.addEventListener('scroll', buttonTopFixed);

    function buttonTopFixed() {
        let startPointButtonTop = header.offsetHeight / 2;
        let countScroll = window.scrollY;

        (countScroll >= startPointButtonTop) ? buttonTop.hidden = false : buttonTop.hidden = true;
    }
    buttonTopFixed();

    // smooth Scroll Function
    let link = document.querySelectorAll('.smooth');
    for (let i = 0; i < link.length; i++) {
        const elem = link[i];
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            let blockID = elem.getAttribute('href').substr(1);
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    }; // smooth Scroll Function

    // burger 
    let burger = document.querySelector('.burger');
    let burgerSpan = document.querySelector('.burger span');
    let mobMenu = document.querySelector('.mob-menu');
    let closedLink = document.querySelectorAll('.mob-menu__closed-link');


    burger.addEventListener('click', showMenu);
    for (let i = 0; i < closedLink.length; i++) {
        const element = closedLink[i];
        element.addEventListener('click', showMenu);
    }

    function showMenu() {
        burgerSpan.classList.toggle('active');
        mobMenu.classList.toggle('animate');
    } // burger 
}); // DOMHtmlLoad
// slider top banner // 
var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".slider__arrow",
    },
});
// slider top review // 
var swiper = new Swiper(".Swiper-review", {
    loop: true,
    navigation: {
        nextEl: ".pagination__next",
        prevEl: ".pagination__prev",
    },
});