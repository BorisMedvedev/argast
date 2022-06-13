//==============================
$(document).ready(function(){
	$(document).on('click', '.mobile-menu ul.navi li span.text', function(){
		$(this).parent().find('ul.sub:first').slideToggle(200);
		this.classList.toggle('toggle');
	});

	$(document).on('click', 'a[data-src-play]', function(){
		var src = $(this).attr('data-src-play');
		$(this).parent().append('<iframe src="'+src+'" frameborder="0" allow="autoplay" allowfullscreen></iframe>');
	});

	var t = $('.slider');
    t.slick({
		fade: true,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		cssEase: 'linear',
		appendArrows: $('.slider-box .slider-arrows'),
		prevArrow: '<button type="button" class="slick-prev"><i class="svg arrow"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="svg arrow"></i></button>',
		adaptiveHeight: true,
		responsive: []
    });
    t.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var s = t.find('[data-slick-index="'+nextSlide+'"]').attr('data');
        t.slick('setOption','autoplaySpeed',s);
    });

    $('.status-online[data-status-online]').each(function(){
    	var total = $(this).find('.load-status').attr('data-total-online');

    	var alliance = $(this).find('.load-status .alliance').attr('data-online');
    	var alliancePercent = Math.round(alliance/total*100);
    	$(this).find('.load-status .alliance').css('width', alliancePercent+'%');
    	$(this).find('.percent.alliance span').html(alliancePercent);

    	var orda = $(this).find('.load-status .orda').attr('data-online');
    	var ordaPercent = Math.round(orda/total*100);
    	$(this).find('.load-status .orda').css('width', ordaPercent+'%');
    	$(this).find('.percent.orda span').html(ordaPercent);
    });

    setTimeout(function(){
		$('.window-load').addClass('anim').fadeOut(200);
		$('body').removeClass('overflow-hidden');
	}, 3000);
});

// document.addEventListener('DOMContentLoaded', function(){
	
// });
//==============================
$(window).on("scroll", function() {
	var set = 16;
    if ($(window).scrollTop() >= set) $('.navigation').addClass('fixed');
    else $('.navigation').removeClass('fixed');
});

function toggleNavi() {
	event.currentTarget.classList.toggle('toggle');
	var menu = document.querySelector('.mobile-menu');
	menu.classList.toggle('active');
	var body = document.querySelector('body');
	body.classList.toggle('overflow-hidden');
}


const defaultSelect = () => {
	const element = document.querySelector(".user-account__select");
	const choices = new Choices(element, {
		searchEnabled: false,
	});
};
const defaultSelect2 = () => {
	const element = document.querySelector(".user-account__select2");
	const choices = new Choices(element, {
		searchEnabled: false,
	});
};
defaultSelect();
defaultSelect2();





function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}


