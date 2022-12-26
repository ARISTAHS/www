
$(document).ready(function() {
    //스크롤 시 header 효과
    $(window).on('scroll',function(){     //스크롤 거리 발생
        var scroll = $(window).scrollTop();     //스크롤 거리 리턴 함수
        var smh=$('.visual').height();      //비주얼 이미지의 높이 리턴 960px
        
        if(scroll>smh-50){       //스크롤 거리 560
            $('#headerArea').addClass('sc');
            $('.header_top .logo a').css('color','#03509f');
            }else{       //스크롤 거리 0 
                $('#headerArea').removeClass('sc');
                $('.header_top .logo a').css('color','#fff');
            }
        
    });

});

