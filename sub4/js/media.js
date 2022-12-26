
  var useData=[];

  function dataPrint(i){
   $.ajax({
       method: 'get',
       url: './js/media_ajax.json',
       dataType: 'json',
       success: function(data){
            useData = data.useData;

            var $Image = useData[i].Img;
            var $Descript = useData[i].text;
        
    
        var txt = '<img src="'+ $Image + '" alt="">';
        txt += '<p>'+ $Descript +'</p>';
           
        $('.popUpTxt').html(txt);   
       } 
   });
};

$(document).ready(function(){
     
    $('.openBtn').on('click', function(e){
        e.preventDefault();

        var ind = $(this).parents('li').index();
        
        $(this).next('.popUp').fadeIn('slow');
        $('.modalBox').show();

        dataPrint(ind);
    });
   
   $('.closeBtn, .modalBox').on('click', function(e){
        e.preventDefault();

        $('.popUp').fadeOut('fast');
        $('.modalBox').hide();
   });
});