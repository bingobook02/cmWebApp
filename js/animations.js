var firstScroll = false;

//Function which checks if user is scrolling the webpage
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

//Function which triggers typed.js if the user scrolls to #typed-strings
$(window).scroll(function() {
  if (isScrolledIntoView($('#typed-strings')) && firstScroll == false) {
      triggerTyped();
  }
});

//typed.js 
function triggerTyped() {
  firstScroll = true;
  var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 50,
  loop: false
  });
}
