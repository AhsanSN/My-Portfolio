    var carousela = $('#carousel'),
    threshold = 150,
    slideWidth = 500,
    dragStart, 
    dragEnd;

function shiftSlide(direction, carouselImp) {
	//$('#carousel')
	var carousel = $('#carousel'+carouselImp);
	
  if (carousel.hasClass('transition')) return;
  dragEnd = dragStart;
  $(document).off('mouseup')
  carousel.off('mousemove')
          .addClass('transition')
          .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
  setTimeout(function(){
    if (direction === 1) {
      $('.slide'+carouselImp+':first').before($('.slide'+carouselImp+':last'));
    } else if (direction === -1) {
      $('.slide'+carouselImp+':last').after($('.slide'+carouselImp+':first'));
    }
    carousel.removeClass('transition')
		carousel.css('transform','translateX(0px)'); 
  },450)
}
