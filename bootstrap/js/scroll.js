//상단 이동
$('.topMove').hide();
$(window).on('scroll', function () { //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리

    if (scroll > 1000) { //1000이상의 거리가 발생되면
        $('.topMove').fadeIn('slow'); //top노출
    } else {
        $('.topMove').fadeOut('fast'); //top미노출
    }
});
$('.topMove').click(function (e) { //아이콘 클릭 시 상단으로 스르륵 이동
    e.preventDefault();
    $("html,body").stop().animate({
        "scrollTop": 0
    }, 100);
});


 /*스크롤 이벤트*/
 var h1= $('#history').offset().top -500 ;
 var h2= $('#brand').offset().top -500 ;
 var h3= $('#gallery').offset().top -500 ;

 $(window).on('scroll',function(){ 
     var scroll = $(window).scrollTop(); 
         
     if(scroll>=300 && scroll<h1){  
         $('#outline').addClass('scrollevent'); 
         
     }else if(scroll>=h1 && scroll<h2){            
         $('#history').addClass('scrollevent'); 

     }else if(scroll>=h2 && scroll<h3){            
         $('#brand').addClass('scrollevent'); 

     }else if(scroll>=h3){            
         $('#gallery').addClass('scrollevent'); 

     }
 });