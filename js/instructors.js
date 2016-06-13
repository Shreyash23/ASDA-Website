var w= window.innerWidth;

$(document).ready(function(){
    if(w<768) {
      $('#ansul-image-2').insertBefore('#ansul-info');
      $('#swap-image-2').insertBefore('#swap-info');
      $('#ankita-image-2').insertBefore('#ankita-info');
      $('#akash-image-2').insertBefore('#akash-info');
        }

    $('.instructor-right-image-box').magnificPopup({ 
      delegate: 'img', // child items selector, by clicking on it popup will open
      type: 'image'
    });
    $('.instructor-left-image-box').magnificPopup({ 
      delegate: 'img', // child items selector, by clicking on it popup will open
      type: 'image'
    });
    });

$(window).resize(function(){
    var w= window.innerWidth;
    if(w>=768) {
        $('#ansul-image-2').insertAfter('#ansul-info');
        $('#swap-image-2').insertAfter('#swap-info');
        $('#ankita-image-2').insertAfter('#ankita-info');
        $('#akash-image-2').insertAfter('#akash-info');
       }

    if(w<768) {
      $('#ansul-image-2').insertBefore('#ansul-info');
      $('#swap-image-2').insertBefore('#swap-info');
      $('#ankita-image-2').insertBefore('#ankita-info');
      $('#akash-image-2').insertBefore('#akash-info');
    }
});
