(function($) {
  $('.planet').click(function(event) {
    $('.you-are-here').removeClass('you-are-here');
    $(this).addClass('you-are-here');
  });
})(jQuery);
