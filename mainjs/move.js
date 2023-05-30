// JavaScript Document

// $(document).ready(function() {

//     var timeonoff;   //타이머 처리  홍길동 정보
//     var imageCount=$('.gallery ul li').size();   //이미지 총개수
//     var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
//     var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
//     $('.btn1').css('background','#fff'); //첫번째 불켜
//     $('.btn1').css('width','30'); // 버튼의 너비 증가
    
//     $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
//     $('.gallery .link1 span').delay(1500).animate({top:200, opacity:1},'slow');
 
//     function moveg(){
//       if(cnt==imageCount+1)cnt=1;
//       if(cnt==imageCount)cnt=0;  //카운트 초기화

//       cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
    
//      $('.gallery li').hide(); //모든 이미지를 보이지 않게.
//      $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
	 	
//       $('.mbutton').css('background','rgba(255,255,255,.2)'); //버튼불다꺼!!
//       $('.mbutton').css('width','16'); // 버튼 원래의 너비
//       $('.btn'+cnt).css('background','#fff');//자신만 불켜
//       $('.btn'+cnt).css('width','30');    

//       $('.gallery li span').css('top',300).css('opacity',0);
//       $('.gallery .link'+cnt).find('span').delay(1000).animate({top:200, opacity:1},'slow');

//        if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
//      }
     
//     timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
//       //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
//       //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


//    $('.mbutton').click(function(event){  //각각의 버튼 클릭시
// 	     var $target=$(event.target); //클릭한 버튼 $target == $(this)
//        clearInterval(timeonoff); //타이머 중지     
	 
// 	    $('.gallery li').hide(); //모든 이미지 안보인다.

// 		  if($target.is('.btn1')){  //첫번째 버튼 클릭??
// 				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
// 		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
// 				 cnt=2; 
// 		  }else if($target.is('.btn3')){ 
// 				 cnt=3; 
// 		  }

// 		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
//       $('.mbutton').css('background','rgba(255,255,255,.2)'); //버튼 모두불꺼
//       $('.mbutton').css('width','16');
//       $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
//       $('.btn'+cnt).css('width','30');
      
//       $('.gallery li span').css('top',300).css('opacity',0);
//       $('.gallery .link'+cnt).find('span').delay(1000).animate({top:200, opacity:1},'slow');

//       if(cnt==imageCount)cnt=0;  //카운트 초기화
     
//       timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
     
//       if(onoff==false){ //중지상태냐??
//             onoff=true; //동작~~
//             $('.ps').html('<span class="hidden"></span><i class="fa-regular fa-circle-play"></i>');
//       }
      
//     });

document.addEventListener('DOMContentLoaded', function() {
  var timeonoff;
  var imageCount = document.querySelectorAll('.gallery ul li').length;
  var cnt = 1;
  var onoff = true;

  document.querySelector('.btn1').style.background = '#fff';
  document.querySelector('.btn1').style.width = '30px';

  document.querySelector('.gallery .link1').style.display = 'block';
  document.querySelector('.gallery .link1 span').style.top = '200px';
  document.querySelector('.gallery .link1 span').style.opacity = '1';

  function moveg() {
    cnt = (cnt === imageCount) ? 1 : cnt + 1;
    document.querySelectorAll('.gallery li').forEach(function(li) {
      li.style.display = 'none';
    });
    document.querySelector('.gallery .link' + cnt).style.display = 'block';
    document.querySelectorAll('.mbutton').forEach(function(btn) {
      btn.style.background = 'rgba(255,255,255,.2)';
      btn.style.width = '16px';
    });
    document.querySelector('.btn' + cnt).style.background = '#fff';
    document.querySelector('.btn' + cnt).style.width = '30px';
    document.querySelectorAll('.gallery li span').forEach(function(span) {
      span.style.top = '300px';
      span.style.opacity = '0';
    });
    document.querySelector('.gallery .link' + cnt + ' span').style.top = '200px';
    document.querySelector('.gallery .link' + cnt + ' span').style.opacity = '1';
  }

  timeonoff = setInterval(moveg, 4000);

  document.querySelectorAll('.mbutton').forEach(function(btn) {
    btn.addEventListener('click', function(event) {
      var target = event.target;
      clearInterval(timeonoff);
      document.querySelectorAll('.gallery li').forEach(function(li) {
        li.style.display = 'none';
      });
      if (target.classList.contains('btn1')) {
        cnt = 1;
      } else if (target.classList.contains('btn2')) {
        cnt = 2;
      } else if (target.classList.contains('btn3')) {
        cnt = 3;
      }
      document.querySelector('.gallery .link' + cnt).style.display = 'block';
      document.querySelectorAll('.mbutton').forEach(function(btn) {
        btn.style.background = 'rgba(255,255,255,.2)';
        btn.style.width = '16px';
      });
      document.querySelector('.btn' + cnt).style.background = '#fff';
      document.querySelector('.btn' + cnt).style.width = '30px';
      document.querySelectorAll('.gallery li span').forEach(function(span) {
        span.style.top = '300px';
        span.style.opacity = '0';
      });
      document.querySelector('.gallery .link' + cnt + ' span').style.top = '200px';
      document.querySelector('.gallery .link' + cnt + ' span').style.opacity = '1';
      timeonoff = setInterval(moveg, 4000);
    });
  });
});

$(document).ready(function() {
	 //stop/play 버튼 클릭시 타이머 동작/중지
    $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden"></span><i class="fa-regular fa-circle-play"></i>'); 
         //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden"></span><i class="fa-regular fa-circle-pause fa-2x"></i>');
		   onoff=true; 
	   }
    });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){

      clearInterval(timeonoff); //살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소
      }

    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
    $('.mbutton').css('background','rgba(255,255,255,.2)'); //버튼 모두불꺼
    $('.mbutton').css('width','16');
    $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','30');

    $('.gallery li span').css('top',300).css('opacity',0);
    $('.gallery .link'+cnt).find('span').delay(1000).animate({top:200, opacity:1},'slow');

    timeonoff= setInterval( moveg , 4000); //부활

    if(onoff==false){
      onoff=true;
      $('.ps').html('<span class="hidden"></span><i class="fa-regular fa-circle-play"></i>');
    }
  });

});




