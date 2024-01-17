/* 메인메뉴의 움직이는 바 */

$('.gnb li a').mouseenter (function(){
    let bar=$(this).position().left;
    //.position();jquery메서드 중 하나로, 요소의 위치정보(top,left)를 반환한다.
    console.log(bar) 
    let widnum=$(this).width();
    // $('.bar').animate({실행문,시간})
    $('.bar').animate({
        'left':bar + "px",
        'width':widnum + "px",
        'opacity':1,
    },300)
})

$('.gnb li a').mouseleave (function(){
    // let bar=$(this).position().left;
    // console.log(bar) 
    // let widnum=$(this).width();
    $('.bar').animate({
        // 'left':bar + "!",
        // 'width':widnum + "!",
        'opacity':0,
    },300)
})


/* 전체 애니메이션 */
$('.animate').scrolla({
    // default
    mobile: false, // 모바일 버전 활성화
    once: false, // 스크롤시 한번또는 여러번 실행을 설정
    animateCssVersion: 4 // used animate.css version (3 or 4) css버전
});

let pathH = document.querySelector('.st0')
let pathHeight = pathH.getTotalLength();
console.log(pathHeight)


//menu open
// $('.menuOpen .open').on("click",function(){

// })

$('.menuOpen .open').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuwrap').addClass('on')
})

$('.menuOpen .close').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuwrap').removeClass('on')
})

//service 영역시 배경컬러 바꾸기
$(window).scroll(function(){
    // $(this) --> window
    // jquery 문법 scrollTop
    // javascript 문법 
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    let offset=$('.service').offset().top; // service영역의 top이 viewport의 top이 위치하는 지점
    // 전체문서에서 .service영역 전까지의 높이값을 추출
    console.log(offset)
    
    if(scrollTop>offset){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
})