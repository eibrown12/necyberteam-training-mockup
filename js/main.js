(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });


  $(document).scroll(function () {
	var doc = $(this).height();
	var win = $(window).height();
	if ( doc > win ) {
		var $body = $("body");
		var $nav = $("#mainNav");
		var $secNav = $("#secondaryNav");
		var $combined = $nav.height() + $secNav.height();
		$nav.toggleClass('scrolled shadow-sm', $(this).scrollTop() > $combined);
		$secNav.toggleClass('scrolled', $(this).scrollTop() > $combined);
	}
  });
})(jQuery); // End of use strict
