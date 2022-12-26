
$(document).ready(function() {

    var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
    var on_off=false;  //false(안오버)  true(오버)
    var up =false; // true(마우스가 헤더안에 있다면.. )
    
        $('#headerArea').mouseenter(function(){
           // var scroll = $(window).scrollTop();
            $(this).css('background','#fff');
            $('.dropmenu li a').css('color','#333'); 
            $('#headerArea h1 a').css('color','#03509f');
            $('.topmenu a').css('color','#333');
            on_off=true;
            up =true;
        });
    
        
       $('#headerArea').mouseleave(function(){
            var scroll = $(window).scrollTop();  //스크롤의 거리
            
            if(scroll<smh-50){
                $(this).css('background','none').css('border-bottom','none'); 
                $('.dropmenu li a').css('color','#fff');
                $('#headerArea h1 a').css('color','#fff');
                $('.topmenu a').css('color','#fff');
            }else{
                $(this).css('background','#fff'); 
                $('#headerArea h1 a').css('color','#03509f');
                $('.dropmenu li a').css('color','#333');
                $('.topmenu a').css('color','#333');
            }
           on_off=false;  
           up =false;  
       });
    
       $(window).on('scroll',function(){//스크롤의 거리가 발생하면
            var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
            //console.log(scroll);
 
            if(scroll>smh-50){//스크롤300까지 내리면
                $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
                $('.dropmenu li a').css('color','#333');
                $('#headerArea h1 a').css('color','#03509f');
                $('.topmenu a').css('color','#333');
            }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
               if(on_off==false){  //마우스가 헤더에 오버 되지 않았을때만 투명해라 
                    $('#headerArea').css('background','none').css('border-bottom','none');
                    $('.dropmenu li a').css('color','#fff');
                    $('#headerArea h1 a').css('color','#fff');
                    $('.topmenu a').css('color','#fff');
               }
            }; 
            
         });
 

     //2depth 열기/닫기
     $('ul.dropmenu').hover(
        function() { 
           $('ul.dropmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
           $('#headerArea').animate({height:350},'fast').clearQueue();
           $('#headerArea h1 a').css('color','#03509f');
           $('.topmenu a').css('color','#333');
        },function() {
           $('ul.dropmenu li.menu ul').hide(); //모든 서브를 다 닫아라
           $('#headerArea').animate({height:156},'fast').clearQueue();
           
           if(up ==false){
             $('#headerArea h1 a').css('color','#fff');
           }else{
             $('#headerArea h1 a').css('color','#03509f');
           }
      });
     
      //1depth 효과
      $('ul.dropmenu li.menu').hover(
        function() { 
            $('.depth1',this).css('color','#03509f');
        },function() {
           $('.depth1',this).css('color','#333');
      });

      //1depth 효과
      $('ul.dropmenu li.menu ul li a').hover(
        function() { 
            $(this).css('color','#fff');
        },function() {
           $(this).css('color','#333');
      });
      
       //상단 이동
    $('.move i').hide();
           
    $(window).on('scroll',function(){   //스크롤 값의 변화가 생기면
         var scroll = $(window).scrollTop();    //스크롤의 거리

         //$('.text').text(scroll); 스크롤 길이 정보 텍스트

         if(scroll>300){    //500이상의 거리가 발생되면
             $('.move i').fadeIn('slow');  //top노출
         }else{
             $('.move i').fadeOut('fast'); //top미노출
         }
    });

    $('.move i').click(function(e){    //아이콘 클릭 시 상단으로 스르륵 이동
        e.preventDefault();
        $("html,body").stop().animate({"scrollTop":0},1000); 
    });
      
 
      //tab 처리
      $('ul.dropmenu li.menu .depth1').on('focus', function () {        
         $('ul.dropmenu li.menu ul').slideDown('normal');
         $('#headerArea').animate({height:350},'fast').clearQueue();
         $('#headerArea h1 a').css('color','#03509f');
         $('.topmenu a').css('color','#333');
      });
 
     $('ul.dropmenu li.m6 li:last').find('a').on('blur', function () {        
         $('ul.dropmenu li.menu ul').slideUp('fast');
         $('#headerArea').animate({height:156},'normal').clearQueue();
         $('#headerArea h1 a').css('color','#fff');
     });
 });
 