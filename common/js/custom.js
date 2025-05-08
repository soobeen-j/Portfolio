$(function(){
	 AOS.init();
	
	//상단으로 가기
     $('#to_the_top').click(function(){
         $('html,body').animate({scrollTop:0},300)
     });
	
	//마우스
    //$('body').mousemove(function(e) {
        // $('.summary .circle').addClass('on')
       // gsap.to('.circle', {
           // duration:1,
           // x: e.clientX,
           // y: e.clientY,
           // ease: Power3.easeOut
       // });
   // });

    // $('.thumbnail').mouseleave(function(e) {
    //    $('.summary .circle').removeClass('on')
    // });

	//circle
	 const hero = document.querySelector('[data-hero]')

	window.addEventListener('mousemove', (e) => {
		const { clientX, clientY } = e
		const x = Math.round((clientX / window.innerWidth) * 100)
		const y = Math.round((clientY / window.innerHeight) * 100)
		
		gsap.to(hero, {
		'--x': `${x}%`,
		'--y': `${y}%`,
		duration: 0.3,
		ease: 'sine.out',
	})
	})

	//navigation
	$(window).scroll(function(){
		curr = $(this).scrollTop(); //current scroll bar 위치
		greeting = $('.greeting').offset().top + 80;


		if(curr > greeting){
			$('.circle').addClass('fixed')
		}
		else{
			$('.profile_wrap').removeClass('fixed')
		}
	})

	$('.nav-tab').click(function(e){
		e.preventDefault();
		tapIdx = $(this).data('idx');
		$('.toggle').removeClass('tap01 tap02').addClass(tapIdx);

	})



    // gsap.to(".overlay",
    // {
    //     scrollTrigger: {
    //         trigger: "#wrap",
    //         start: "center center",
    //         end: "+=1000",
    //         scrub: true,
    //         markers: true,
    //         pin:"#wrap",
    //     },
    //     scale:80,
    //     duration:1
    // })


	//프로젝트앱 스크롤
    let project = gsap.timeline({

        scrollTrigger: {
          trigger: ".project_wrap",
          pin: true,   // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=3000", // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
      });

      project.to(".pj02",{duration:5,top:0,delay:1,})
      .to(".pj03",{duration:5,top:0,delay:1,})


    gsap.to(".pj03",
    {
        scrollTrigger: {
            trigger: ".projects-web",
            start: "top center",
            // end: "+=1000",
            scrub: true,
            markers: false,
        },
        y:500,
        duration:1
    })



	//프로젝트앱 bgm
	var swiper = new Swiper(".bgm-slide", {
	simulateTouch:true,
	loop: true,
	slidesPerView: 'auto',
	spaceBetween:40,
	autoplay: {
	   delay: 2000,
	   disableOnInteraction: false,
	 },
	});


	//프로젝트웹 타이틀 스크롤시 움직임
    gsap.to(".wrap-contents .list-web li",
    {
        scrollTrigger: {
            trigger: ".wrap-contents",
            start: "top center",
            // end: "+=1000",
            scrub: true,
            // markers: true,
        },
        y:90,
        duration:1,
        stagger:0.1,
    })


	//프로젝트웹 section hover
	$('.wrap-contents .list-web li').mouseover(function(){
		idx = $(this).index();

		$('.wrap-contents .list-web li').removeClass('on')
		$(this).addClass('on');

		$('.wrap-contents .fixed-image .current').removeClass('bg0 bg1 bg2').addClass('bg'+idx)
	})
		

	
})

				
						 

