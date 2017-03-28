$(function(){
	$('.hook-cartype').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).next('.hook-second').fadeToggle();
	});
	$('.pinpai_num').click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		var numid = $(this).text();
		var rightTap = $('.right-letters #'+numid+'');
		var scollP = rightTap.parent('.hook-second .right-letters');
		var scollPH = scollP.offset().top;
		scollP.scrollTop(0);
		try{
			var numH = rightTap.offset().top;
			var cha = numH-scollPH; 
			scollP.scrollTop(cha);
		}catch(err){
			
		}
	});
	$('.right-letters .list_1').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).addClass('on');	
		$(this).siblings('.list_1').removeClass('on');
		$('.hook-third').fadeIn();
	})
	$('.right-letters .list_2').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).addClass('on');	
		$(this).siblings('.list_2').removeClass('on');
		$('.hook-four').fadeIn();
	})
	$('.right-letters .list_3').click(function(e){
		$('.hook-cartype .tip').text($(this).text());
		$('.third-menu').fadeOut();
		$('.hook-second').fadeOut();
		$('.four-menu').fadeOut();
	})
	$('.ucarselecttype').click(function(e){
		e.preventDefault();
		e.stopPropagation();
	});
	$(document).click(function(event) {
		$('.third-menu').fadeOut();
		$('.hook-second').fadeOut();
		$('.four-menu').fadeOut();
	});
	$('.hook-menu').hover(function(){
			$(this).find('.second-menu').fadeToggle();
	})

	$('.hook-city').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).next('.hook-city-second').fadeToggle();
	})

	$('.hook-date').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).next('.hook-date-second').fadeToggle();
	})


	$('.right-letters .list_7').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).addClass('on');	
		$(this).siblings('.list_7').removeClass('on');
		$('.hook-date-third').fadeIn();
	})
	$('.right-letters .list_8').click(function(e){
		$('.hook-date .tip').text($(this).text());
		$('.hook-date-second').fadeOut();
		$('.hook-date-third').fadeOut();
	})


	$('.right-letters .list_4').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).addClass('on');	
		$(this).siblings('.list_4').removeClass('on');
		if($(this).hasClass('province')){
			$('.hook-city .tip').text($(this).text());
			$('.hook-city-second').fadeOut();
		}else{
			$('.hook-city-third').fadeIn();
		}
	})
	$('.right-letters .list_5').click(function(e){
		$('.hook-city .tip').text($(this).text());
		$('.hook-city-second').fadeOut();
		$('.hook-city-third').fadeOut();
	})
})