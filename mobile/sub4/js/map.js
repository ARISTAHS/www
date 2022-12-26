

   
$('.tab_menu .tab1').css('background','#03509f').css('color','#fff');
        
var first = true;
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
    
    if(scroll>10 && first==true){
        $('.cont').hide();
        $('.cont1').show();
        first = false;
    }
    });


$('.tab_menu .tab').click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
        var ind = $(this).index('.tab_menu .tab');  // 클릭시 해당 index를 뽑아준다
        //console.log(ind);

        $(".cont").hide(); //모든 탭내용을 안보이게...
        $(".cont:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
        $('.tab').css('background','#fff').css('color','#333'); //모든 탭메뉴를 비활성화
        $(this).css('background','#03509f').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

    });

   
    
    var container = document.getElementById('map1');
    var options = {
    center: new daum.maps.LatLng(37.2266487,127.085432),
    level: 2
    };

    var map = new daum.maps.Map(container, options);
    
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition  = new daum.maps.LatLng(37.2266487,127.085432); 
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });
     
    //두번째 맵
     
      var container2 = document.getElementById('map2');
    var options2 = {
        center: new daum.maps.LatLng(36.8146966,127.0653359),
        level: 2
    };

    var map2 = new daum.maps.Map(container2, options2);
    
    var mapTypeControl2 = new daum.maps.MapTypeControl();
    map2.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl2 = new daum.maps.ZoomControl();
    map2.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition2  = new daum.maps.LatLng(36.8146966,127.0653359); 
    var marker2 = new daum.maps.Marker({
        position: markerPosition2
    });

    marker2.setMap(map2);
    
    var overlay2 = new daum.maps.CustomOverlay({
        map: map2,
        position: marker2.getPosition()       
    }); 
     
     
    //세번째 맵
     
     var container3 = document.getElementById('map3');
   var options3 = {
       center: new daum.maps.LatLng(36.8194123,127.061183),
       level: 2
   };

   var map3 = new daum.maps.Map(container3, options3);
   
   var mapTypeControl3 = new daum.maps.MapTypeControl();
   map3.addControl(mapTypeControl3, daum.maps.ControlPosition.TOPRIGHT);

   var zoomControl3 = new daum.maps.ZoomControl();
   map3.addControl(zoomControl3, daum.maps.ControlPosition.RIGHT);
   
   var markerPosition3  = new daum.maps.LatLng(36.8194123,127.061183); 
   var marker3 = new daum.maps.Marker({
       position: markerPosition2
   });

   marker3.setMap(map3);
   
   var overlay3 = new daum.maps.CustomOverlay({
       map: map3,
       position: marker3.getPosition()       
   }); 
   
    //네번째 맵
     
     var container4 = document.getElementById('map4');
   var options4 = {
       center: new daum.maps.LatLng(36.8412616,127.1174915),
       level: 2
   };

   var map4 = new daum.maps.Map(container4, options4);
   
   var mapTypeControl4 = new daum.maps.MapTypeControl();
   map4.addControl(mapTypeControl4, daum.maps.ControlPosition.TOPRIGHT);

   var zoomControl4 = new daum.maps.ZoomControl();
   map4.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
   
   var markerPosition4  = new daum.maps.LatLng(36.8412616,127.1174915); 
   var marker4 = new daum.maps.Marker({
       position: markerPosition2
   });

   marker4.setMap(map4);
   
   var overlay2 = new daum.maps.CustomOverlay({
       map: map4,
       position: marker4.getPosition()       
   }); 
    
    


 
 
 
 
