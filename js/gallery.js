$(document).ready(function(){
    $(".image-box").slick({
      lazyLoad: 'ondemand',
      centerMode:true,
      variableWidth: true
    });
    

    $('#da-image-box').magnificPopup({ 
      delegate: 'img', // child items selector, by clicking on it popup will open
      type: 'image',
       gallery:{
         enabled:true
         }
      });

    $('#ig-image-box').magnificPopup({ 
      delegate: 'img', // child items selector, by clicking on it popup will open
      type: 'image',
       gallery:{
         enabled:true
         }
      });    

    $('#addp-image-box').magnificPopup({ 
      delegate: 'img', // child items selector, by clicking on it popup will open
      type: 'image',
       gallery:{
         enabled:true
         }
      });    
    
    $('#hf-image-box').magnificPopup({ 
      delegate: 'img', // child items selector, by clicking on it popup will open
      type: 'image',
       gallery:{
         enabled:true
         }
      }); 
});
