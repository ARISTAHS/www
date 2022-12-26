$(document).ready(function () {

    $(window).on('scroll', function(){

      let inno = $('.innovative').offset().top-500;
      let pro = $('.product').offset().top-500;
      let so = $('.social').offset().top-500;
      let ne = $('.news').offset().top-500;
      let em = $('.employ').offset().top-500;

      let scroll = $(window).scrollTop();

      if(scroll>inno){
        $('.innovative li').addClass('moved');
        $('.innovative h3').css('opacity', '1').css('top',0);
		  }
     
      if (scroll > pro) {
        $('.product li').addClass('moved');
        $('.product h3,.product p').css('opacity', '1').css('right',0);
        $('.product .more').css('opacity', '1');
      }

      if (scroll > so) {
        $('.social li').addClass('moved').css('bottom',0);
        $('.social h3').css('opacity', '1').css('bottom', 0);
        $('.social .soci_btn').css('opacity', '1');
        $('.social .more').css('opacity', '1');
      }

      if (scroll > ne) {
        $('.news h3').css('opacity', 1).css('top',0);
        $('.news p').css('opacity', 1).css('bottom',0);
        $('.news .more').css('opacity', 1);
        $('.news li:eq(0)').css('opacity', 1).css('top',0);
        $('.news li:eq(1)').css('opacity', 1).css('top',0);
        $('.news li:eq(2)').css('opacity', 1).css('top',0);
      }

      if (scroll > em) {
        $('.employ img').css('opacity', '1');
        $('.employ div').css('opacity', '1');
        $('.employ div h3').css('opacity', '1');
        $('.employ div p').css('opacity', '1');
        $('.employ .more').css('opacity', '1');
      }

    });

});