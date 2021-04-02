(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  $('#job1').on('show.bs.collapse ', function () {
    $('#showmore1').text(function(i,old){
        return "...SHOW LESS";
    });
  });
  $('#job1').on('hidden.bs.collapse ', function () {
    $('#showmore1').text(function(i,old){
        return "...SHOW MORE";
    });
  });

  $('#job2').on('show.bs.collapse ', function () {
    $('#showmore2').text(function(i,old){
        return "...SHOW LESS";
    });
  });
  $('#job2').on('hidden.bs.collapse ', function () {
    $('#showmore2').text(function(i,old){
        return "...SHOW MORE";
    });
  });

  $('#job3').on('show.bs.collapse ', function () {
    $('#showmore3').text(function(i,old){
        return "...SHOW LESS";
    });
  });
  $('#job3').on('hidden.bs.collapse ', function () {
    $('#showmore3').text(function(i,old){
        return "...SHOW MORE";
    });
  });


})(jQuery); // End of use strict
