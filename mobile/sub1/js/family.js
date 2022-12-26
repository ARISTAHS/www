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