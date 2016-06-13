$(document).ready(function(){
    $("#gallery-image-box ").slick({
      autoplay:true,
      autoplaySpeed:2000,
      lazyLoad: 'ondemand',
      centerMode:true
    });
    
    $('#gallery-image-box').magnificPopup({ 
      delegate: 'img', // child items selector, by clicking on it popup will open
      type: 'image',
       gallery:{
         enabled:true
         }
      }); 
});