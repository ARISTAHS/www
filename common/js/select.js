$(document).ready(function() {
	$('.family .arrow').toggle(function(){
		$('.family .aList').fadeIn('fast');		
		$('.family .arrow i').removeClass('fa-light fa-square-caret-down');
		$('.family .arrow i').addClass('fa-light fa-square-caret-up');
		// $(this).find('a').html('<i class="fa-light fa-square-caret-down"></i>');    // fontasome을 사용하려면 .html을 기재.
	},function(){
        $('.family .aList').fadeOut('fast');
				$('.family .arrow i').removeClass('fa-light fa-square-caret-up');
				$('.family .arrow i').addClass('fa-light fa-square-caret-down');
				// $(this) .find('a').html('<i class="fa-light fa-square-caret-up"></i>');	
	});

	//tab키 처리
	  $('.family .arrow').on('focus', function () {        
              $('.family .aList').fadeIn('fast');	
							$('.family .arrow i').removeClass('fa-light fa-square-caret-down');
							$('.family .arrow i').addClass('fa-light fa-square-caret-up');
       });
       $('.family .aList li:last a').on('blur', function () {        
              $('.family .aList').fadeOut('fast');
							$('.family .arrow i').removeClass('fa-light fa-square-caret-up');
							$('.family .arrow i').addClass('fa-light fa-square-caret-down');
       });


});