
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
// $(function(){
//     gsap.registerPlugin(ScrollTrigger);
	
// 	gsap.timeline({
// 		scrollTrigger:{
// 			trigger: '.con01',
// 			start:'top',
// 			end:'bottom top',
// 			scrub:1,
// 			pin:true, //사진 고정 할 때
// 			// markers:true
// 		}
// 	})
// 	.to('.con01 .videoWrap', {'opacity':'1','ease':'none','duration':'10'},5)
// 	.to('.con01 .videoWrap',{'scale':'0.4','ease':'none','duration':'10','opacity':'0.3'},5)
// })


$(window).on('scroll resize',function(){
    var scrollTop = $(document).scrollTop();
    bgcolor();
    
    function bgcolor(){
        if(scrollTop > 8400){
            $('body').addClass('on')
        }else{
            $('body').removeClass('on')
        }if(scrollTop > 9400){
            $('body').removeClass('on')
        }
    }
})


$(function(){
    gsap.timeline({
		scrollTrigger:{
			trigger:'.gallery',
			start:'0% 90%',
			end: '100% 100%',
			scrub:1,
			// markers: true
		}
	})
	.to('.wrap',{backgroundColor:'#000',color:'#fff', ease:'none', duration:'5'},0)
})
