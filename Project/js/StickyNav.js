jQuery(document).ready(function() {

  var navOffset = jQuery("sam").offset().top;

  jQuery("sam").wrap('<div class="DivNav"></div>');
  jQuery(".DivNav").height(jQuery("sam").outerHeight());
  jQuery(window).scroll(function(){

    var scrollPos = jQuery(window).scrollTop();

      if(scrollPos >= navOffset){
        jQuery("sam").addClass("fixed");
      }
      else {
        jQuery("sam").removeClass("fixed");
      }

  });


});
