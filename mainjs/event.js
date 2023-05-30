// $(document).ready(function () {

//     $(window).on('scroll', function(){

//       let inno = $('.innovative').offset().top-500;
//       let pro = $('.product').offset().top-500;
//       let so = $('.social').offset().top-500;
//       let ne = $('.news').offset().top-500;
//       let em = $('.employ').offset().top-500;

//       let scroll = $(window).scrollTop();

//       if(scroll>inno){
//         $('.innovative li').addClass('moved');
//         $('.innovative h3').css('opacity', '1').css('top',0);
// 		  }
     
//       if (scroll > pro) {
//         $('.product li').addClass('moved');
//         $('.product h3,.product p').css('opacity', '1').css('right',0);
//         $('.product .more').css('opacity', '1');
//       }

//       if (scroll > so) {
//         $('.social li').addClass('moved').css('bottom',0);
//         $('.social h3').css('opacity', '1').css('bottom', 0);
//         $('.social .soci_btn').css('opacity', '1');
//         $('.social .more').css('opacity', '1');
//       }

//       if (scroll > ne) {
//         $('.news h3').css('opacity', 1).css('top',0);
//         $('.news p').css('opacity', 1).css('bottom',0);
//         $('.news .more').css('opacity', 1);
//         $('.news li:eq(0)').css('opacity', 1).css('top',0);
//         $('.news li:eq(1)').css('opacity', 1).css('top',0);
//         $('.news li:eq(2)').css('opacity', 1).css('top',0);
//       }

//       if (scroll > em) {
//         $('.employ img').css('opacity', '1');
//         $('.employ div').css('opacity', '1');
//         $('.employ div h3').css('opacity', '1');
//         $('.employ div p').css('opacity', '1');
//         $('.employ .more').css('opacity', '1');
//       }

//     });

// });

// 위의 jquery 코드를 javascript로 수정

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    let inno = document.querySelector('.innovative').offsetTop - 500;
    let pro = document.querySelector('.product').offsetTop - 500;
    let so = document.querySelector('.social').offsetTop - 500;
    let ne = document.querySelector('.news').offsetTop - 500;
    let em = document.querySelector('.employ').offsetTop - 500;

    let scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll > inno) {
      let innovativeList = document.querySelectorAll('.innovative li');
      let innovativeHeading = document.querySelector('.innovative h3');
      innovativeHeading.style.opacity = '1';
      innovativeHeading.style.top = '0';

      innovativeList.forEach(function (item) {
        item.classList.add('moved');
      });
    }

    if (scroll > pro) {
      let productList = document.querySelectorAll('.product li');
      let productHeading = document.querySelector('.product h3');
      let productParagraph = document.querySelector('.product p');
      let productMore = document.querySelector('.product .more');
      productHeading.style.opacity = '1';
      productHeading.style.right = '0';
      productParagraph.style.opacity = '1';
      productParagraph.style.right = '0';
      productMore.style.opacity = '1';

      productList.forEach(function (item) {
        item.classList.add('moved');
      });
    }

    if (scroll > so) {
      let socialList = document.querySelectorAll('.social li');
      let socialHeading = document.querySelector('.social h3');
      let socialBtn = document.querySelector('.social .soci_btn');
      let socialMore = document.querySelector('.social .more');
      socialHeading.style.opacity = '1';
      socialHeading.style.bottom = '0';
      socialBtn.style.opacity = '1';
      socialMore.style.opacity = '1';

      socialList.forEach(function (item) {
        item.classList.add('moved');
        item.style.bottom = '0';
      });
    }

    if (scroll > ne) {
      let newsHeading = document.querySelector('.news h3');
      let newsParagraph = document.querySelector('.news p');
      let newsMore = document.querySelector('.news .more');
      let newsList1 = document.querySelector('.news li:nth-child(1)');
      let newsList2 = document.querySelector('.news li:nth-child(2)');
      let newsList3 = document.querySelector('.news li:nth-child(3)');
      newsHeading.style.opacity = '1';
      newsHeading.style.top = '0';
      newsParagraph.style.opacity = '1';
      newsParagraph.style.bottom = '0';
      newsMore.style.opacity = '1';
      newsList1.style.opacity = '1';
      newsList1.style.top = '0';
      newsList2.style.opacity = '1';
      newsList2.style.top = '0';
      newsList3.style.opacity = '1';
      newsList3.style.top = '0';
    }

    if (scroll > em) {
      let employImg = document.querySelector('.employ img');
      let employDiv = document.querySelector('.employ div');
      let employHeading = document.querySelector('.employ div h3');
      let employParagraph = document.querySelector('.employ div p');
      let employMore = document.querySelector('.employ .more');
      employImg.style.opacity = '1';
      employDiv.style.opacity = '1';
      employHeading.style.opacity = '1';
      employParagraph.style.opacity = '1';
      employMore.style.opacity = '1';
    }
  });
});