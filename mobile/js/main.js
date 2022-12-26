
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

var BusiCNT = 0;
$('.inno .control a i').click(function(e){
    e.preventDefault();

    var ind = $(this).index('.inno .control a i');
    
    if(ind == 0){
        if(BusiCNT == 0){ BusiCNT = 2;}
        BusiCNT --;
    } else if (ind == 1){
        if(BusiCNT == 1){ BusiCNT = -1;}
        BusiCNT ++;
    }

    $('.inno .cont ul li').hide();
    $('.inno .cont ul li:eq(' + BusiCNT + ')').fadeIn();
    
});


$(document).ready(function(){
    
  var faqArticle = $('.faq_wrap ul li'); // 전체 li

  $('.faq_wrap ul li p a').click(function(e){
      e.preventDefault();

      var answer = $(this).parent().parent(); // 해당 li

      if(answer.is('.on')){ // li에 on이 있으면
          
          answer.removeClass('on'); // on없애고
          answer.children().next().slideUp('fast'); // 본인 닫아라

      } else { // li에 on이 없으면

          faqArticle.removeClass('on'); // 다른 li에 on 없애고
          answer.addClass('on'); // 내 li에만 on을 넣어라
          
          faqArticle.children().next().slideUp('fast');
          answer.children().next().slideDown('fast');
      }
  });

  $('.all').toggle(function(e){
      e.preventDefault();

      $(this).text('답변 모두 닫기');
      faqArticle.addClass('on');
      faqArticle.children().next().slideDown('fast');

  }, function(e){
      e.preventDefault();

      $(this).text('답변 모두 열기');
      faqArticle.removeClass('on');
      faqArticle.children().next().slideUp('fast');

  });

});

$('.move i').hide();
           
    $(window).on('scroll',function(){   //스크롤 값의 변화가 생기면
         var scroll = $(window).scrollTop();    //스크롤의 거리

         //$('.text').text(scroll); 스크롤 길이 정보 텍스트

         if(scroll>100){    //100이상의 거리가 발생되면
             $('.move i').fadeIn('slow');  //top노출
         }else{
             $('.move i').fadeOut('fast'); //top미노출
         }
    });

    $('.move i').click(function(e){    //아이콘 클릭 시 상단으로 스르륵 이동
        e.preventDefault();
        $("html,body").stop().animate({"scrollTop":0},1000); 
    });

      //family site
      $('.footer_family .arrow').toggle(function(){   //클릭 시 > list 노출 > 미노출
        $('.footer_family .family_list').slideDown('fast');
        $('.footer_family i').removeClass('.fas fa-chevron-down');
        $('.footer_family i').addClass('.fas fa-chevron-up');
	},function(){
		$('.footer_family .family_list').slideUp('fast');	
        $('.footer_family i').removeClass('.fas fa-chevron-up');
        $('.footer_family i').addClass('.fas fa-chevron-down');	
	});
     
   