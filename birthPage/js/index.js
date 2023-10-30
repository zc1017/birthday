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
var $unsubscribe= $('#unsubscribe');
$unsubscribe.on('click',function(event){
  event.stopPropagation();    //  阻止事件冒泡
  //
  $('.bday-card').slideDown(1500);
  $('.bday-card').css('display','flex');
})



function isMobile() {
    let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
}


 

});