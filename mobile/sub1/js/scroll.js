// JavaScript Document


//     var cnt=$('.tab_menu li').size();
//     var scroll = $(window).scrollTop();

//     $('.yearbox .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
//     $('.yeartab .tab1').css('background','#03509f').css('color','#fff'); //첫번째 탭메뉴 활성화
//                //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
//     $('.yeartab .tab').click(function(e){
//         e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
//         var ind = $(this).index('.yeartab .tab');  // 클릭시 해당 index를 뽑아준다
//         //console.log(ind);
       
//         // var scroll = $(window).scrollTop(); //스크롤의 거리
//         if(scroll>10){
//             $('.contlist').hide();
//             $('.contlist:eq(0)').show();
//         };
   
//         $(".yearbox .contlist").hide(); //모든 탭내용을 안보이게...
//         $(".yearbox .contlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
//         $('.tab').css('background','#fff').css('color','#333'); //모든 탭메뉴를 비활성화
//         $(this).css('background','#03509f').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

//     });

$(document).ready(function() {

    /*탭 공통*/
    var cnt=2;  //탭메뉴 개수 ***
    $('.yearbox .contlist').fadeOut('');

    $('.yearbox .contlist:eq(0)').fadeIn('slow'); //첫번째 탭 컨텐츠 노출    
    $('.tab_menu .tab1').addClass('click'); //첫번째 탭 활성화
    $('.click').css('background','#03509f').css('color','#fff');
            
    $('.tab_menu .tab').click(function(e){ //탭 클릭 시
        e.preventDefault();
        var ind = $(this).index('.tab_menu .tab'); //탭 클릭 시
        
        $('.yearbox .contlist').hide(); //컨텐츠 미노출
        $('.yearbox .contlist:eq('+ind+')').fadeIn('slow'); //클릭한 탭에 대한 컨텐츠만 노출

        $('.tab').css('background','#fff').css('color','#333'); //모든 탭메뉴를 비활성화
        $(this).css('background','#03509f').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화
        // $('.tab_menu li a').removeClass('click'); // 탭 활성화 클래스 삭제
        // $(this).addClass('click'); //클릭한 탭만 활성화 클래스

    });

});
   
