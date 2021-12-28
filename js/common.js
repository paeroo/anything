$( () => {
	
	$('.fix-nav-btn li a').click(function () {
		let fixNavBtn = $(this).attr('href');
		let fixNavOffset = $(fixNavBtn).offset().top;
		$('html, body').stop().animate({scrollTop: fixNavOffset}, 1000, "easeOutCubic");
		return false;
	});
	
	
	$(".footer-slider").slick({
		vertical: true,
		dots: false,
		arrows: true,
		prevArrow: $('.footer-prev'),
		nextArrow: $('.footer-next'),
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: false,
		centerMode: false,
		centerPadding: '0%',
		swipe: false,
		
		
	});
// 시작 정지 버튼 구현
	$('.footer-play').click( ()=> {
		$('.footer-slider').slick('slickPlay');
		$('.fa-pause').addClass('btn-change');
		$('.fa-play').removeClass('btn-change');
	});
	$('.footer-pause').click( ()=> {
		$('.footer-slider').slick('slickPause');
		$('.fa-play').addClass('btn-change');
		$('.fa-pause').removeClass('btn-change');
	});
	
});
	


window.addEventListener('DOMContentLoaded', ()=> {

	// 로딩 페이지
	const html = document.querySelector('html');
	const loading = document.querySelector('.loading');
	const layout = document.querySelector('.layout');

	html.style.overflow='hidden';

	window.addEventListener('load',  ()=>{
		setTimeout(function (){
			html.style.overflow='auto';
			loading.style.display='none';
		}, 1500);
	});

// 변수설정
	const navBtn = document.querySelector('.nav-btn');


// 햄버거버튼 클릭시 헤더메뉴 호출
	navBtn.addEventListener('click', ()=> {
		const headerMenu = document.querySelector('.header-menu')

		// const body = document.querySelector('body');
		navBtn.classList.toggle('active');
		headerMenu.classList.toggle('active');
		document.body.classList.toggle('active');
	});

// 돋보기 아이콘 클릭시 검색박스 호출 및 페이지 클릭시 회수
	document.addEventListener('click', function (event) {
		const searchBox = document.querySelector('.search');
		const inputBox = document.querySelector('.input-box');
		let target = event.target;
		searchBox.addEventListener('click', function () {
			inputBox.classList.add('active');
			searchBox.style.transform = 'translateY(-3px)';
		});
		if (target.classList.contains('search') || target.classList.contains('input-box')) {
			return;
		}
		inputBox.classList.remove('active');
		searchBox.style.transform = 'translateY(0px)';
	});


//헤더 밑부분에 스크롤 진행바
	let requestId;
	function progressBar(){
		const scrollTop = window.scrollY;
		const docHeight = document.querySelector('.layout').clientHeight;
		const winHeight = window.innerHeight;

		const barWidth = (scrollTop/(docHeight - winHeight))*100;
		const headerBar = document.querySelector('.scroll-progress');
		headerBar.style.width = barWidth + '%';
	}
		window.addEventListener('scroll', function (){
			requestId = requestAnimationFrame(progressBar);
		});

});