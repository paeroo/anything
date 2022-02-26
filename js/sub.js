$( ()=> {
    $(".keyboard-slide").slick({
        fade:true,
        dots: false,
        arrows: false,
        // prevArrow: $('.footer-prev'),
        // nextArrow: $('.footer-next'),
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        centerMode: true,
        centerPadding: '0%',
    });
});

window.addEventListener('DOMContentLoaded', ()=> {

    let scrollTop;
    window.addEventListener('scroll', ()=>{

        // 스크롤 움직임에 따라 헤더 숨기거나 보여주기

        const innerHeader = document.querySelector('.inner-header');
        const categoryHeader = document.querySelector('.category-header');
        const headerMenu = document.querySelector('.header-menu');
        const headerTop = window.screenTop + 30;

        let windowScrollTop;
        windowScrollTop = window.scrollY;

        if (windowScrollTop > scrollTop && headerMenu.classList.contains('active') !== true){
            innerHeader.classList.add('hide');
            categoryHeader.classList.add('up');
        }else{
           /* if (window.innerWidth >= 300 && window.innerWidth < 767){
                if (window.scrollY <= headerTop){
                    innerHeader.classList.remove('hide');
                    categoryHeader.classList.remove('up');
                } else if (window.innerWidth > 768){
                    innerHeader.classList.remove('hide');
                    categoryHeader.classList.remove('up');
                }
            }*/
            innerHeader.classList.remove('hide');
            categoryHeader.classList.remove('up');
        }
        scrollTop = windowScrollTop;

        // 패럴랙스 스크롤

        const scrollPage = document.querySelector('.keyboard-scroll').getBoundingClientRect().top + window.scrollY;
        const box1 = document.querySelector('.scroll-box1');
        const box2 = document.querySelector('.scroll-box2');
        const box3 = document.querySelector('.scroll-box3');
        const box4 = document.querySelector('.scroll-box4');
        const box5 = document.querySelector('.scroll-box5');
        const box6 = document.querySelector('.scroll-box6');
        const box7 = document.querySelector('.scroll-box7');
        const box8 = document.querySelector('.scroll-box8');
        const box9 = document.querySelector('.scroll-box9');
        const box10 = document.querySelector('.scroll-box10');

        // const box1Top = Math.round(window.scrollY + box7.getBoundingClientRect().top);
        // const box2Top = Math.round(window.scrollY + box8.getBoundingClientRect().top);
        // const box3Top = Math.round(window.scrollY + box9.getBoundingClientRect().top);

        let scrollY = this.pageYOffset;

        if (scrollY >= scrollPage){
            box1.style.transform = "translateY(" +((scrollPage * 0.2) - (scrollY * 0.2)) + "px)";
            box2.style.transform = "translateY(" +((scrollPage * 0.6) - (scrollY * 0.6)) + "px)";
            box3.style.transform = "translateY(" +((scrollPage * 0.99) - (scrollY * 0.99)) + "px)";
            box4.style.transform = "translateY(" +((scrollPage * 1.18) - (scrollY * 1.18)) + "px)";
            box5.style.transform = "translateY(" +((scrollPage * 0.4) - (scrollY * 0.4)) + "px)";
            box6.style.transform = "translateY(" +((scrollPage * 0.79) - (scrollY * 0.79)) + "px)";
            box7.style.transform = "translateY(" +((scrollPage * 0.14) - (scrollY * 0.14)) + "px)";
            box8.style.transform = "translateY(" +((scrollY * 0.27) - (scrollPage * 0.27)) + "px)";
            box9.style.transform = "translateY(" +((scrollPage * 0.375) - (scrollY * 0.375)) + "px)";
            box10.style.transform = "translateX(" +((scrollY * 0.76) - (scrollPage * 0.76)) + "px)";
        }
        // console.log(box1Top);
        // console.log(box2Top);

        //스크롤 keyboard-list 도달시 애니메이션 효과
        const keyboardListTop = document.querySelector('.keyboard-list-wrap:nth-child(1)');
        const keyboardListBottom = document.querySelector('.keyboard-list-wrap:nth-child(2)');

        const listTopOffset = window.scrollY + keyboardListTop.getBoundingClientRect().top - 1000;
        const listBottomOffset = window.scrollY + keyboardListBottom.getBoundingClientRect().top - 1000;

        if (windowScrollTop >= listTopOffset){
            keyboardListTop.classList.add('active');
        }
        if (windowScrollTop >= listBottomOffset){
            keyboardListBottom.classList.add('active')
        }

        const contentsTop = document.querySelector('.contents-list');
        const listItem = document.querySelectorAll('.list-wrap > div');

        const contentsOffsetTop = window.scrollY + contentsTop.getBoundingClientRect().top - 400;

        if (windowScrollTop >= contentsOffsetTop) {
            for (let i = 0; i < 4; i++) {
                setTimeout(()=> {
                    listItem[i].classList.add('active');
                }, i * 200);
            }
        }
    });
});

