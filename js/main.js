$( ()=> {
    // 슬릭슬라이더
    $(".intro-wrap").slick({
        fade: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        centerMode: true,
        centerPadding: 20,
        customPaging: function (slider, i) {
            const paging = $(slider.$slides[i]).find('.slide-nav');
            return paging;
        }
    });
    $(".mouse-slider").slick({
        dots: true,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        centerMode: true,
        centerPadding: '0%',
        asNavFor: ".desc-slider",
        responsive: [
            {
                // 태블릿 환경
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed : 5000,
                }
            },
            {
                // 모바일 환경
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    autoplay: true,
                    autoplaySpeed : 5000,
                }
            }]
    });
    $(window).resize( ()=>{
        if($(window).width() >= 300 && $(window).width() < 767){
            $(".mouseList-slider").slick({
                // fade: true,
                dots: false,
                arrows: false,
                // prevArrow: $('.prev'),
                // nextArrow: $('.next'),
                autoplay: true,
                autoplaySpeed: 5000,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                centerMode: true,
                centerPadding: '0%',
            });
        }
    });
        if($(window).width() >= 300 && $(window).width() < 767){
            $(".mouseList-slider").slick({
                // fade: true,
                dots: false,
                arrows: false,
                // prevArrow: $('.prev'),
                // nextArrow: $('.next'),
                autoplay: true,
                autoplaySpeed: 5000,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                centerMode: true,
                centerPadding: '0%',
            });
        }

    $(".desc-slider").slick({
        fade: true,
        dots: false,
        arrows: false,
        // prevArrow: $('.prev'),
        // nextArrow: $('.next'),
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        centerMode: true,
        centerPadding: '0%',
        asNavFor: ".mouse-slider",
    });
    $(".intro-wrap").on("mousewheel", function (event, delta) {
        delta = event.originalEvent.deltaY;
        if (delta < 0) {  //마우스 휠을 올렸을때
            if ($(window).scrollTop() === 0) {
                $(this).slick('slickPrev');

            }
        } else if (delta > 0) {//마우스 휠을 내렸을때
            if ($('.slick-active').index() < 3) {
                event.preventDefault();
                $(this).slick('slickNext');
            }
        }
    });
    // 시작 정지 버튼 구현 & 진행바 포함
    $('.intro-play').click( () => {
        $('.intro-wrap').slick('slickPlay');
        $('.intro-pause').addClass('btn-change');
        $('.intro-play').removeClass('btn-change');
        $('.intro .slick-dots li.slick-active').removeClass('stop');
    });

    $('.intro-pause').click( ()=> {
        $('.intro-wrap').slick('slickPause');
        $('.intro-play').addClass('btn-change');
        $('.intro-pause').removeClass('btn-change');
        $('.intro .slick-dots li.slick-active').addClass('stop');
    });
});
window.addEventListener('DOMContentLoaded', ()=> {
// window.addEventListener('load', function (){});
    const mouseList = document.querySelector('.mouse-list');
    const mouseItem = document.querySelectorAll('.mouse-item');
    const sideWrap = document.querySelector('.list-wrap');
    const contentsList = document.querySelectorAll('.contents-list > div');

    const wrap = document.querySelector('.photo-desc');
    const wrapUnderBottom = document.querySelector('.photo-item:nth-child(6)');
    const wrapBottom = document.querySelector('.photo-item:nth-child(5)');

    const mouseListTop = window.scrollY + mouseList.getBoundingClientRect().top - 200;
    const wrapTop = window.scrollY + sideWrap.getBoundingClientRect().top - 120;
    const wrapBottomTop = window.scrollY + wrapBottom.getBoundingClientRect().top - 300;
    const wrapUnderBottomTop = window.scrollY + wrapUnderBottom.getBoundingClientRect().top - 170;

    window.addEventListener('scroll', () => {
        // console.log(window.scrollY);
//mouse-item 특정 위치에서 차례대로 호출
        if (window.scrollY >= mouseListTop) {
            for (let i = 0; i < 4; i++) {
                for (let i = 0; i < 4; i++) {
                    setTimeout(function () {
                        mouseItem[i].classList.add('active');
                    }, i * 200);
                }
            }
        }

// photo-list 특정 위치에서 스크롤 fixed
        if (window.scrollY >= wrapTop) {
            wrap.classList.add('active');
            wrap.classList.remove('fixed')
            if (window.scrollY >= wrapBottomTop) {
                wrap.classList.remove('active');
                wrap.classList.add('fixed')
            }
        } else {
            wrap.classList.remove('active');
        }

// contents-list 특정 위치에서 차례대로 호출
        if (window.scrollY >= wrapUnderBottomTop) {
            for (let i = 0; i < 4; i++) {
                setTimeout( ()=> {
                    contentsList[i].classList.add('active');
                }, i * 200);
            }
        }
    });
});
