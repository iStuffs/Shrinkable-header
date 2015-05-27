$(window).scroll(function() {
  if ($(this).scrollTop() > 125){
    $('header').addClass("shrink");
  }
  else{
    $('header').removeClass("shrink");
  }
});
