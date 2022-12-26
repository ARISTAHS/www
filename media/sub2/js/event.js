$(document).ready(function() {


// CSS scroll motion
var kframe = $('.kframe');
var myTop = [];
var windowHeight = $(window).height(); // 창 높이 값
var windowTop = $(window).scrollTop(); // 창 탑 값
var value = windowTop + windowHeight - 150;

function kframeValue(){
    kframe = $('.kframe');
    windowHeight = $(window).height(); // 창 높이 값
    windowTop = $(window).scrollTop(); // 창 탑 값
    value = windowTop + windowHeight - 150;
};

$(window).resize(function(){
    kframeValue();
});


$(document).scroll(function(){

    kframeValue();

    for(var i=0; i<kframe.length; i++){

        myTop[i] = $('.kframe:eq(' + i + ')').offset().top;
        
        if(value >= myTop[i]){
            $('.kframe:eq(' + i + ')').addClass('active');
        }
    }
});

});