$(function(){
	 AOS.init();

	//미쉐린
	var swiper = new Swiper(".michelin-slide", {
		simulateTouch:true,
		loop: true,
		autoplay: {
		  delay: 5000,
		  disableOnInteraction: false,
		},
	});		
	
	//미쉐린 쿠폰 좌우스크롤시 li
    gsap.to(".michelin-coupon .bg-scroll",
    {
        scrollTrigger: {
            trigger: ".michelin-coupon",
            start: "top center",
            scrub: true,
            markers: false,
        },
        x:-1600,
        duration:1,
        stagger:0.5,
    })

	//미쉐린 쿠폰 좌우스크롤시 타이틀
    gsap.to(".michelin-coupon .inner .wrap-title",
    {
        scrollTrigger: {
            trigger: ".michelin-coupon",
            start: "top center",
            scrub: true,
            markers: false,
        },
		opacity:0,
        duration:0.5,
        stagger:0.5,
    })

	//세무앱
	var swiper = new Swiper(".semu-slide", {
		simulateTouch:false,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		slidesPerView: 4,
		spaceBetween: 5,
		direction: "vertical",
		pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		},
	});	

	var swiper = new Swiper(".semu-slide2", {
		simulateTouch:false,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		slidesPerView: 3,
		spaceBetween: 10,
		direction: "vertical",
		pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		},
	});

	var swiper = new Swiper(".semu-desc-slide", {
		simulateTouch:true,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		direction: "vertical",
		paginationClickable: true,
	});

	$('.semu-slide-item').on('mouseover', function() {
	  swiper.autoplay.stop();
	});

	$('.semu-slide-item').on('mouseout', function() {
	  swiper.autoplay.start();
	});

	//BGM앱
	var swiper = new Swiper(".bgm-main-slide", {
		simulateTouch:true,
		loop: true,
		slidesPerView: 'auto',
		spaceBetween:60,
		centeredSlides: true,
		autoplay: {
		  delay:4000,
		  disableOnInteraction: false,
		},
	});

	//BGM앱 플레이리스트 스크롤시 움직임
    gsap.to(".bgm-play .playlist > li:first-child",
    {
        scrollTrigger: {
            trigger: ".bgm-play",
            start: "top center",
            // end: "+=1000",
            scrub: true,
            // markers: true,
        },
        y:-120,
        duration:1,
        stagger:0.1,
    })

	gsap.to(".bgm-play .playlist li:last-child",
    {
        scrollTrigger: {
            trigger: ".bgm-play",
            start: "top center",
            // end: "+=1000",
            scrub: true,
            // markers: true,
        },
        y:120,
        duration:1,
        stagger:0.1,
    })

	//BGM앱 플레이리스트 상하 슬라이더
	var swiper = new Swiper(".chatting-slide", {
		simulateTouch:true,
		loop: true,
		slidesPerView: 5,
		spaceBetween: 5,
		direction: "vertical",
		autoplay: {
		  delay: 1000,
		  disableOnInteraction: false,
		},
	})

	//BGM앱 플레이리스트 스크롤시 텍스트 fadeOut
	gsap.to(".playlist-desc > p",
    {
        scrollTrigger: {
            trigger: ".bgm-play",
            start: "top center",
            // end: "+=1000",
            scrub: true,
            // markers: true,
        },
        opacity:1,
        duration:1,
        stagger:0.1,
    })



	//중고나라
	var swiper = new Swiper(".review-slider", {
		simulateTouch:true,
		loop: true,
		autoplay: {
		  delay: 1000,
		  disableOnInteraction: false,
		},
		})
	

	//레슨북
	var swiper1 = new Swiper(".lesson-slider", {
		simulateTouch:true,
		loop: true,
		autoplay:{
		  delay: 3500,
		  disableOnInteraction: false,
		},
		})

	var swiper2 = new Swiper(".lesson-detail", {
		simulateTouch:true,
		loop: true,
		navigation:false,
		autoplay:{
		  delay: 3500,
		  disableOnInteraction: false,
		},
		})
		
	swiper1.controller.control = swiper2;
	swiper2.controller.control = swiper1;
	
	//셀렉트박스
	var selectTarget = $('.selectbox select');
				
	selectTarget.change(function(){
		var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
	});
})