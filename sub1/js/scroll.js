$(document).ready(function () {
    
  $('.yeartab ul li:eq(0)').addClass('current');

  var tabmove = $('.titleArea').offset().top + $('.titleArea').height();
  
  var history1 = $('.contlist:eq(0)').offset().top -180;
  var history2 = $('.contlist:eq(1)').offset().top -180;
  var history3 = $('.contlist:eq(2)').offset().top -180;


  // 스크롤 이벤트
  $(window).on('scroll',function(){
      
      var scroll = $(window).scrollTop();

      // tab on
      if(scroll > tabmove){ 
          $('.yeartab').addClass('on');
          $('#headerArea').hide();
          // $('.tab_menu').css('marginTop',150); // 탭 높이만큼 마진
      } else {
          $('.yeartab').removeClass('on');
          $('#headerArea').fadeIn('fast');
          // $('.tab_menu').css('marginTop','');
      }

      // tab spy
      $('.yeartab ul li').removeClass('current');
      if(scroll >= 0 && scroll <= history2){
          $('.yeartab ul li:eq(0)').addClass('current');

      } else if(scroll>history2 && scroll<=history3){
          $('.yeartab ul li:eq(1)').addClass('current');

      }  else if(scroll>history3){
        $('.yeartab ul li:eq(2)').addClass('current');
      }

        // 연혁 붙이기
        $('.contlist').removeClass('current');
        if(scroll > tabmove+184 && scroll < history1){
            $('.contlist:eq(0)').addClass('current');
        } else if(scroll>=history1-10 && scroll<history2){
            $('.contlist:eq(1)').addClass('current');
        } else if(scroll>=history2-10 && scroll<history3){
            $('.contlist:eq(2)').addClass('current');
        } else {
            //$('.year').removeClass('current');
        }
      
  });



  // tab click, scroll move
  $('.tab_menu li a').click(function(e){
      e.preventDefault();

      var ind = $(this).index('.tab_menu li a');
      var value = $('.yearbox .contlist:eq(' + ind + ')').offset().top - 100;
      
      // value의 위치로 움직여라
      $("html,body").stop().animate({"scrollTop":value},500);
  });

  
});