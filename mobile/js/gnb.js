$(document).ready(function() {
  //스크롤 시 header 효과
  $(window).on('scroll',function(){     //스크롤 거리 발생
      var scroll = $(window).scrollTop();     //스크롤 거리 리턴 함수
      var smh=$('.visual').height();      //비주얼 이미지의 높이 리턴 960px
      
      if(scroll>smh-50){       //스크롤 거리 560
          $('#headerArea').addClass('sc');
          }else{       //스크롤 거리 0 
              $('#headerArea').removeClass('sc');
          }
      
  });
  
  /*네비게이션*/
  var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
    
  $(".menu_open").click(function(e) { //메뉴버튼 클릭시
      e.preventDefault();
      
      var documentHeight =  $(document).height();
      $("#gnb").css('height',documentHeight); // 전체 body의 높이를 네비에 높이로 반환

     if(op==false){ //네비가 닫혀있는 상태에서 클릭했냐??
       $("#gnb").animate({left:0,opacity:1}, 'fast');
       $('#headerArea').addClass('mn_open');
  //스크롤 시 header 효과
    $(window).on('scroll',function(){     //스크롤 거리 발생
        var scroll = $(window).scrollTop();     //스크롤 거리 리턴 함수
        var smh=$('.visual').height();      //비주얼 이미지의 높이 리턴 960px
        
        if(scroll>smh-50){       //스크롤 거리 560
            $('#headerArea').addClass('sc');
            }else{       //스크롤 거리 0 
                $('#headerArea').removeClass('sc');
            }
        
    });

       op=true;
       $('.modal_box').fadeIn('slow');
     }else{ //네비가 열려있는 상태에서 클릭했냐??
       $("#gnb").animate({left:'-100%',opacity:0}, 'fast');
       $('#headerArea').removeClass('mn_open');
       op=false;
       $('.modal_box').fadeOut('fast');
      //  $('#headerArea').addClass('sc');

     }
  });
  
  
   //2depth 메뉴 교대로 열기 처리 
   var onoff=[false,false,false,false,false,false]; //각각의 메뉴가 닫혀있으면(false) / 열려있으면(true)
   var arrcount=onoff.length;  //메뉴의개수 3   
    //console.log(arrcount);
   
   $('#gnb .depth1 h3 a').click(function(){  //1depth 메뉴를 각각 클릭하면
       var ind=$(this).parents('.depth1').index();  // 0~5
       
       //console.log(ind);
       
      if(onoff[ind]==false){
       //$('#gnb .depth1 ul').hide();
       $(this).parents('.depth1').find('ul').slideDown('slow');//클릭한 해당 메뉴의 2depth를 열여라
       $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //나머지 메뉴의 서브를 다 닫아라
       for(var i=0; i<arrcount; i++) {
          onoff[i]=false; //모든 메뉴의 상태를 false로...
       }
        onoff[ind]=true;  //자신의 상태만 true..
          
        $('.depth1 i').attr('class','fas fa-plus');   
        $(this).find('i').attr('class','fas fa-minus');   
           
      }else{  //클릭한 해당메뉴가 열려있느냐??
        $(this).parents('.depth1').find('ul').slideUp('fast'); // 자신의 서브메뉴만 닫아라
        onoff[ind]=false;   
          
        $(this).find('i').attr('class','fas fa-plus');     
      }
   });  
  });