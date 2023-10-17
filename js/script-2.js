//00.a속성제거(a를 클릭했을 때 위로 튕기는 현상 제거)
$(document).on('click', 'a[href="#"]', function(e) {e.preventDefault();})

// 02. scrolla
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once:false
    });
});


// 01.splitting
$(function(){
	Splitting();
});

// header영역 scroll 방향 이벤트
$(function(){
	var prevScrollTop =0; 
	document.addEventListener('scroll',function(){
		var nowScrollTop =$(window).scrollTop()

		if(nowScrollTop > prevScrollTop){
			$('header').addClass('active');
		}else{
			$('header').removeClass('active');
		}
		prevScrollTop= nowScrollTop;
	})   //이벤트를 부르는 함수 .addEventListener
});


// video
$(function(){
    gsap.registerPlugin(ScrollTrigger);
	
	gsap.timeline({
		scrollTrigger:{
			trigger: '.con01',
			start:'top',
			end:'bottom',
			scrub:1,
			pin:true, //사진 고정 할 때
			// markers:true
		}
	})
	.to('.con01 ', {'opacity':'1','ease':'none','duration':'10'},5)
	.to('.con01',{'scale':'0.4','ease':'none','duration':'10','opacity':'0.3'},5)
});



    //   change background
	$(window).on('scroll resize',function(){
		var scrollTop = $(document).scrollTop();
		bgcolor();
		
		function bgcolor(){
			if(scrollTop > 9200){
				$('body').addClass('on')
			}else{
				$('body').removeClass('on')
			}if(scrollTop > 10800){
				$('body').removeClass('on')
			}
		}
	});


	// $(function(){
	// 	gsap.timeline({
	// 		scrollTrigger:{
	// 			trigger:'.cv',
	// 			start:'0%',
	// 			end: '100%',
	// 			scrub:1,
	// 			// markers: true
	// 		}
	// 	})
	// 	.to('.wrap',{backgroundColor:'#F0E2C3', ease:'none', duration:'5'},0)
	// })
	



	$(function(){
		gsap.timeline({
			scrollTrigger:{
				trigger:'.hobby',
				start:'10%',
				end: '30% ',
				scrub:3,
				markers: true
			}
		})
		.to('.wrap',{backgroundColor:'#000',color:'#fff', ease:'none', duration:'5'},0)
	}); 



	$(function(){
		gsap.timeline({
			scrollTrigger:{
				trigger:'#svg1',
				start:'0% 30%',
				end: '100%',
				scrub:1,
				// markers: true
			}
		})
		.from('#Line01', {drawSVG:"0%"}, {drawSVG:"10%"})
		.to('#Line01', {drawSVG:"100%"}, {drawSVG:"100%"})
	})

	
	
// svgLine
$(function(){
	$('.svg03').find('#svg03').each(function(i, path){
		var length = path.getTotalLength();
		/* alert(length); */
	});
});


$(function(){
	gsap.registerPlugin(ScrollTrigger);
	//gallery
	 let upBox = document.querySelectorAll('.upBox')
	
	 let tl = gsap.timeline({
		scrollTrigger:{
			trigger:'.hobby',
			pin:true,
			scrub:3,
			start:'top,top',
			end:'300% ',// 시작부분에서 4005 까지 스크롤 한 후 종료
			// markers:true
		}
	 })
	 tl.from(upBox,{'y':'400%','duration':'8','ease':'none','stagger':'6'})
	 tl.to(upBox),{'y':'0'}
	
})

