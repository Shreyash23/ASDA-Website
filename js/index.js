var slides_to_show ;
var w= window.innerWidth;
if (w >= 768) {
   slides_to_show = 5;
} else {
   slides_to_show = 2;
}
     // });

$(document).ready(function(){


    $('.main-box').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.nav-images',
      centerMode: true,
      focusOnSelect: true,
      autoplay:true,
      autoplaySpeed:4000,
      lazyLoad: 'ondemand',
    });

   
    $('.nav-images').slick({  
      slidesToShow: slides_to_show,
      slidesToScroll: 1,
      asNavFor: '.main-box',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      autoplay:true,
      autoplaySpeed:4000,
      lazyLoad: 'ondemand',
    });

  });

