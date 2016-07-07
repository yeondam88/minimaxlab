$(document).ready(function() {
    var owl = $('.hero-banner');
    owl.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000
    });

    var waypoint = new Waypoint({
    	element: document.getElementById('basic-waypoint'),
    	handler: function() {
    		$('.minimax-des').addClass('animated bounceIn');
    		$('.blockey-container').addClass('animated fadeInDownBig');
    		$('.inner-des').addClass('animated fadeIn');
            $('.block-banner').addClass('animated fadeInLeft');
    	}
    })

});
