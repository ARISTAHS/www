$('.tab_menu .tab1').css('background','#03509f').css('color','#fff');
        
var first = true;
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
    
    if(scroll>10 && first==true){
        $('.contentlist').hide();
        $('.cont1').show();
        first = false;
    }
    });


$('.tab_menu .tab').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
        var ind = $(this).index('.tab_menu .tab');  // 클릭시 해당 index를 뽑아준다
        //console.log(ind);

        $(".contentlist").hide(); //모든 탭내용을 안보이게...
        $(".contentlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
        $('.tab').css('background','#fff').css('color','#333'); //모든 탭메뉴를 비활성화
        $(this).css('background','#03509f').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

    });
