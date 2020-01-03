$(document).ready(function(){

	$(".button__toggle").click(function(){
		$(".button__toggle").removeClass("active");
		$(this).addClass("active");
		$(".button__block").removeClass("active");
		let tab_id = $(this).data("id");
		$("#but-"+tab_id).addClass("active");
	});

	$('.menu__icon').click(function(){
		if('none' == $('.menu__block').css('display')){
			$('.menu__block').css('display', 'flex');
		} else {
			$('.menu__block').css('display', 'none');
		}
	});

	$('.photo.active').slick({
		dots: false,
		arrows: true,
		slidesToShow: 7,
		slidesToScroll: 7,
		autoplay: false,
		infinite: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    }
		  ]
	});

	$('.nav').singlePageNav({
		offset: 120,
	});

});