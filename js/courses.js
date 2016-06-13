var w= window.innerWidth;
if (w >= 768) {
   slides_to_show = 2;
} else {
   slides_to_show = 1;
}

$(document).ready(function(){
    $('.slick-box').slick({
      slidesToShow:1,
      lazyLoad: 'ondemand',
      centerMode:true,
      variableWidth: true
    });


    $('.addp-img').magnificPopup({ 
      type: 'image',
        gallery:{
          enabled:true
        }
    });

    $('.da-img').magnificPopup({ 
      type: 'image',
        gallery:{
          enabled:true
        }
    });
    
    if(w<768) {
      $('#addp-container').insertBefore('#addp-info');
    }
});

$(window).resize(function(){
    var w= window.innerWidth;
    if(w>=768) {
      $('#addp-info').insertBefore('#addp-container');
    }
     if(w<768) {
      $('#addp-container').insertBefore('#addp-info');
    }
  });





