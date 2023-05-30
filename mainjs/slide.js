// $(document).ready(function() {
//   var position=-20;  //최초위치

//   var movesize = 250;  //반응형을 위한 조건 식
  
//   $('.social ul').after($('.social ul').clone()); //ul 뒤에 ul 하나 더 복제해서 놓는다.

// $('.soci_btn').click(function(e){
//    e.preventDefault();

//    if($(this).is('.left')){  //이전버튼 클릭
//     if(position == -1020){
//         $('.social .box2').css('left', -20);
//         position= -20;
//     }
//         position -= movesize;  // 250씩 감소
//             $('.social .box2').stop().animate({left:position}, 'fast',
              
//             function(){   // 계산 충돌이 일어나지 않게 .animate() 뒤에 콜백 함수를 써야한다.

//                   if(position == -1020){
//                       $('.social .box2').css('left', -20);
//                       position= -20;
//                   }
//               });

//    }else if($(this).is('.right')){  //다음버튼 클릭
         
//           if(position == -20){ //포지션이 0일 경우, 클릭 하면 이미지를 좌측으로 배치하기 위한 해당 조건 추가.
//               $('.social .box2').css('left',-1020);  
//               position = -1020;
//           }

//           position += movesize; // 250씩 증가
//           $('.social .box2').stop().animate({left:position}, 'fast',
              
//           function(){							
//                   if(position == -20){
//                       $('.social .box2').css('left', -1020);
//                       position = -1020;
//                   }
//               });

//     }
//  });
// });

// 위 jquery 코드를 자바스크립트로 수정

document.addEventListener('DOMContentLoaded', function () {
    var position = -20; // 초기 위치
    var movesize = 250; // 반응형을 위한 조건식
  
    var socialUL = document.querySelector('.social ul');
    socialUL.insertAdjacentElement('afterend', socialUL.cloneNode(true)); // ul 뒤에 ul 하나 더 복제해서 놓는다.
  
    var socialBtns = document.querySelectorAll('.soci_btn');
    socialBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
  
        var box2 = document.querySelector('.social .box2');
  
        if (this.classList.contains('left')) {
          // 이전 버튼 클릭
          if (position === -1020) {
            box2.style.left = '-20px';
            position = -20;
          }
          position -= movesize; // 250씩 감소
          box2.style.transition = 'left fast';
          box2.style.left = position + 'px';
  
          if (position === -1020) {
            box2.style.left = '-20px';
            position = -20;
          }
        } else if (this.classList.contains('right')) {
          // 다음 버튼 클릭
          if (position === -20) {
            // 포지션이 0일 경우, 클릭하면 이미지를 좌측으로 배치하기 위한 조건 추가
            box2.style.left = '-1020px';
            position = -1020;
          }
          position += movesize; // 250씩 증가
          box2.style.transition = 'left fast';
          box2.style.left = position + 'px';
  
          if (position === -20) {
            box2.style.left = '-1020px';
            position = -1020;
          }
        }
      });
    });
  });


// 추가로 간략히 수정
//   document.addEventListener('DOMContentLoaded', function () {
//     var position = -20; // 초기 위치
//     var movesize = 250; // 반응형을 위한 조건식
  
//     var socialUL = document.querySelector('.social ul');
//     socialUL.insertAdjacentElement('afterend', socialUL.cloneNode(true)); // ul 뒤에 ul 하나 더 복제해서 놓는다.
  
//     var socialBtns = document.querySelectorAll('.soci_btn');
//     socialBtns.forEach(function (btn) {
//       btn.addEventListener('click', function (e) {
//         e.preventDefault();
  
//         var box2 = document.querySelector('.social .box2');
  
//         if (this.classList.contains('left')) {
//           position = (position === -1020) ? -20 : position - movesize; // 이전 버튼 클릭 시 위치 조정
//         } else if (this.classList.contains('right')) {
//           position = (position === -20) ? -1020 : position + movesize; // 다음 버튼 클릭 시 위치 조정
//         }
  
//         box2.style.transition = 'left fast';
//         box2.style.left = position + 'px';
//       });
//     });
//   });