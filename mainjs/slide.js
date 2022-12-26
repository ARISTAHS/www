$(document).ready(function() {
  var position=-20;  //최초위치

  var movesize = 250;  //반응형을 위한 조건 식
  
//   var timeonoff;
 
  $('.social ul').after($('.social ul').clone()); //ul 뒤에 ul 하나 더 복제해서 놓는다.

//   function moveG() {



//       position-=movesize;  // 230씩 감소
//       $('.social ul').stop().animate({left:position}, 'fast',
//           function(){							
//           if(position<=-1020){
//               $('.social ul').css('left',-20);
//               position= -20;
//           }
//       }).clearQueue();
//   }

  // timeonoff= setInterval(moveG, 3000);


      //슬라이드 겔러리를 한번 복제

$('.soci_btn').click(function(e){
   e.preventDefault();

   if($(this).is('.left')){  //이전버튼 클릭
    if(position == -1020){
        $('.social .box2').css('left', -20);
        position= -20;
    }
        position -= movesize;  // 250씩 감소
            $('.social .box2').stop().animate({left:position}, 'fast',
              
            function(){   // 계산 충돌이 일어나지 않게 .animate() 뒤에 콜백 함수를 써야한다.

                  if(position == -1020){
                      $('.social .box2').css('left', -20);
                      position= -20;
                  }
              });

   }else if($(this).is('.right')){  //다음버튼 클릭
         
          if(position == -20){ //포지션이 0일 경우, 클릭 하면 이미지를 좌측으로 배치하기 위한 해당 조건 추가.
              $('.social .box2').css('left',-1020);  
              position = -1020;
          }

          position += movesize; // 250씩 증가
          $('.social .box2').stop().animate({left:position}, 'fast',
              
          function(){							
                  if(position == -20){
                      $('.social .box2').css('left', -1020);
                      position = -1020;
                  }
              });

    }
 });
});