    // model
    $.ajax({
        url: './js/car.json',
        dataType: 'json',
        success: function(data){
            var carData = data.car_info;
            var ind;
            var cartxt = '';

            function carPrint(ind){
                
                cartxt = '';
                cartxt += '<div class="row">';
                cartxt += '<div class="col-lg-6">';
                cartxt += '<div class="cont">';
                cartxt += '<div class="image">';
                cartxt += '<img src="./images/car/car' + (ind+1) + '_1.jpg" alt="car image">';
                cartxt += '<ul>';

                for (var i in carData[ind].car_color){
                    cartxt += '<li><a href="#" style="background:#'+ carData[ind].car_color[i] +';"></a></li>';
                }

                cartxt += '</ul>';
                cartxt += '</div>';
                cartxt += '</div>';
                cartxt += '</div>';
                cartxt += '<div class="col-lg-6">';
                cartxt += '<div class="cont">';
                cartxt += '<div class="text">';
                cartxt += '<span>'+ carData[ind].car_subname +'</span>';
                cartxt += '<strong>' + carData[ind].car_name + '</strong>';
                cartxt += '<p>' + carData[ind].car_text + '</p>';
                cartxt += '</div>';
                cartxt += '</div>';
                cartxt += '</div>';
                cartxt += '</div>';
                cartxt += '<a href="#" class="close"></a>';

                $('.model_pop').html(cartxt);
            }
            //carPrint();


            
            $('.model .swiper-slide').click(function(e){
                e.preventDefault();

                ind = Number($(this).attr('data-swiper-slide-index'));

                carPrint(ind);
        
                $('.model_pop').fadeIn();
                $('.model_pop_bg').fadeIn();

            });


            // color
            $(document).on('click', '.model_pop ul li a', function(e){
                e.preventDefault();
                
                var colorind = $(this).index('.model_pop ul li a');

                $('.model_pop .image img').attr('src', './images/car/car' + (ind+1) + '_'+ (colorind+1) +'.jpg');

            });
            


        }
    });



    // model close
    $(document).on('click', '.model_pop .close, .model_pop_bg', function(e){
        e.preventDefault();

        $('.model_pop').fadeOut(function(){
            $('.model_pop').html('');
        });
        $('.model_pop_bg').fadeOut();

    
    });