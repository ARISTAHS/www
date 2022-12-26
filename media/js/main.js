
$(document).ready(function () {

    var smh = $('.videoBox').height();  //비주얼 이미지의 높이를 리턴한다   900px
    var on_off = false;  //false(안오버)  true(오버)  
    var op = false
    var current=0; //0이면 소형태블릿 상황 , 1이면 태블릿  이상 


    $(window).on('scroll', function () {//스크롤의 거리가 발생하면
        var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수

        if (scroll > smh) {//스크롤300까지 내리면
            $('#headerArea').css('background', 'rgba(0,0,0,.8)');
        } else {//스크롤 내리기 전 디폴트(마우스올리지않음)
                if(on_off==false){
                    $('#headerArea').css('background','none');
                    if(op==true){
                        $('#headerArea').css('background','rgba(0, 0, 0, 0.8)');
                    }
                }
        };
    });


$('.up').click(function(e){    //아이콘 클릭 시 상단으로 스르륵 이동
    e.preventDefault();
    $("html,body").stop().animate({"scrollTop":0},1000); 
});


});

$(document).on('click', '.menuOpen', function(e){
    e.preventDefault();

    if($('#headerArea').hasClass('active')){ // 닫아라
        $("#headerArea").removeClass('active');
        
    } else { // 열어라
        $("#headerArea").addClass('active');
       
    }
});