$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      var element = this.hash.slice(1);
      $("#"+element).fadeIn(2000,'swing');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});


function maps(page_scroll) {

 scroll=$(window).scrollTop();
 degr=(180/600)*scroll;
console.log(scroll);
 $(".xmlogo").css({
 	'transform': 'rotate3d(1, 0, 0, '+degr+'deg)'}
 );


  if (scroll > 0){
    $('#why-me').fadeIn(2000,'swing');
    $('#about').fadeIn(3000,'swing');
    // $('#home').removeClass('height');
  } else {
    $('#why-me').fadeOut(1000,'swing',function(){
      $('#home').addClass('height');
    });
    $('#about').fadeOut();
  }
}

 $(window).scroll(function() {
 maps();
});

// $(document).ready(function() {
//   $('#career').on('click',(function() {
//     $("#about").fadeIn(1000,'swing');
//   }));





// });

// $(document).ready(function(){
//   $('.about-me').hide();
//   $('.portfolio').hide();
//   $('.me').click(function(){
//     $('.about-me').slideToggle("slow");
//     $('.portfolio').fadeIn("slow");
//   });
// });
//
