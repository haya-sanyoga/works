$(function () {
	$('.fade-down').on('inview', function (event, isInView) {
		if (isInView) {
			//表示領域に入った時
			$(this).addClass('animate__fadeInDown');
		} else {
			//表示領域から出た時
			$(this).removeClass('animate__fadeInDown');
			$(this).css('opacity', 0); //非表示にしておく
		}
	});


});

$(function () {
	$('.fade-left').on('inview', function (event, isInView) {
		if (isInView) {
			//表示領域に入った時
			$(this).addClass('animate__fadeInLeft');
		} else {
			//表示領域から出た時
			$(this).removeClass('animate__fadeInLeft');
			$(this).css('opacity', 0); //非表示にしておく
		}
	});


});

$('.fade-right').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$(this).addClass('animate__fadeInRight');
	} else {
		//表示領域から出た時
		$(this).removeClass('animate__fadeInRight');
		$(this).css('opacity', 0); //非表示にしておく
	}
});


$('.fade-in').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$(this).addClass('animate__fadeIn');
	} else {
		//表示領域から出た時
		$(this).removeClass('animate__fadeIn');
		$(this).css('opacity', 0); //非表示にしておく
	}
});

$('.zoom-in').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$(this).addClass('animate__zoomIn');
	} else {
		//表示領域から出た時
		$(this).removeClass('animate__zoomIn');
		$(this).css('opacity', 0); //非表示にしておく
	}
});
