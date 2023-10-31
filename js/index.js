$(document).ready(function() {
  var sUserAgent = navigator.userAgent;
  if (sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('iPhone') > -1 || sUserAgent.indexOf('iPad') > -1 || sUserAgent.indexOf('iPod') > -1 || sUserAgent.indexOf('Symbian') > -1) {
    $('.zz').css('display','none');
    var $clickMe = $('.click-icon'),
    $card = $('.card');
    $card.on('click', function() {
      $(this).toggleClass('is-opened');
      $clickMe.toggleClass('is-hidden');
    
    });
  var $unsubscribe= $('#unsubscribe');
  $unsubscribe.on('click',function(event){
    event.stopPropagation();    //  阻止事件冒泡
    //
    $('.bday-card').slideDown(1500);
    $('.bday-card').css('display','flex');
  })
  } 
});
