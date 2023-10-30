$(document).ready(function() {
  if (isMobile()) {
    $('.zz').css('display','none');
  } 
  var $clickMe = $('.click-icon'),
  $card = $('.card');
$card.on('click', function() {
  $(this).toggleClass('is-opened');
  $clickMe.toggleClass('is-hidden');

});


function isMobile() {
    let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
}


 

});