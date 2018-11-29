jQuery(document).ready(function($){
	//banner animate
	setTimeout(function(){
		$('.pic-ground img.bigcloud').fadeIn('fast').addClass('animate-5');
	},200);
	setTimeout(function(){
		$('.pic-ground img.year').fadeIn('fast').addClass('animate-5');
	},600);
	setTimeout(function(){
		$('.pic-ground img.topic').fadeIn('fast').addClass('animate-10');
	},1000);
	
	//header fixed
	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() >= 72) {
				$('.header-content').sticky({
					stickyClass: 'sticky'
				});
				$('.header-content').addClass('animate-3');
			}else {
				$('.header-content').removeClass('animate-3');
			}
		});
	});
	
	//open our-services
	$('ul.services-list li').click(function(){
		var $this = $(this).children('.services-detail');
		//$('.full-mask').animate({'height':'100%'},150,'easeInExpo');
		$('.full-mask').fadeIn('fast');
		$this.fadeIn(300,'easeInExpo');
	});
	
	//close our-services
	$('.services-detail a.close-modal').click(function(){
		var $this = $('.services-detail');
		//$('.full-mask').animate({'height':'0'},300,'easeInExpo');
		$('.full-mask').fadeOut('fast');
		$this.fadeOut(150,'easeInExpo');
		return false;
	});
	
	//open job
	$('ul.job-list li').click(function(){
		var $this = $(this).children('.job-detail');
		//$('.full-mask').animate({'height':'100%'},150,'easeInExpo');
		$('.full-mask').fadeIn('fast');
		$this.fadeIn(300,'easeInExpo');
	});
	
	//close job
	$('.job-detail a.close-modal').click(function(){
		var $this = $('.job-detail');
		//$('.full-mask').animate({'height':'0'},300,'easeInExpo');
		$('.full-mask').fadeOut('fast');
		$this.fadeOut(150,'easeInExpo');
		return false;
	});	
	
	//open job
	$('#showFAQ').click(function(){
		var $this = $('.faq');
		$('.full-mask').fadeIn('fast');
		$this.animate({
			height:'650px'
		//},150,'easeInExpo');
		},0).addClass('m-faq');
		$(this).addClass('active');
	});
	 
	//close faq
	$('#close-faq').click(function(){
		var $this = $('.faq');
		$this.animate({
			height:'0'
		//},150,'easeInExpo');
		},0).removeClass('m-faq');
		$('.full-mask').fadeOut('fast');
		$('#showFAQ').removeClass('active');
		return false;
	});
	
	//history-list class loop
	$("ul.history-list").each(function(){
		$(this).find("li").each(function(i){
			if(i == 1)
			$(this).addClass("history1");
			else
			$(this).addClass("history" + i);
		});
	});	
	
	//welfare-list class loop
	$("ul.welfare-list").each(function(){
		$(this).find("li").each(function(i){
			if(i == 1)
			$(this).addClass("welfare1");
			else
			$(this).addClass("welfare" + i);
		});
	});	
	
	//people class loop
	$(".growing ul.slides li").each(function(){
		$(this).find("div.people").each(function(i){
			if(i == 1)
			$(this).addClass("people1");
			else
			$(this).addClass("people" + i);
		});
	});	
	
	//版块监听动画(动态监听在个别浏览器下兼容性相对差，改为写死高度!)
	//$(window).bind("scroll", function(event){
	$(window).scroll(function() { 
		//$(".history").each(function(){
		//var fold = $(window).height() + $(window).scrollTop();
			//if( fold <= $(this).offset().top){
			if ($(this).scrollTop() > 500) {
				var time;
				var thisObj = $('ul.history-list');
				time = setTimeout(function(){
					thisObj.find("li").each(function(i){
						var tA=$(this);
						var hA=$('.history0');
						var hB=$('.history1');
						var hC=$('.history2');
						var hD=$('.history3');
						var hE=$('.history4');
						var hF=$('.history5');
						setTimeout(function(){
							tA.addClass('animate-2',300).fadeIn('fast');
							hA.children('span.line').animate({height:'220px'},1000,'easeInOutExpo');
							hB.children('span.line').animate({height:'120px'},1000,'easeInOutExpo');
							hC.children('span.line').animate({height:'340px'},1000,'easeInOutExpo');
							hD.children('span.line').animate({height:'150px'},1000,'easeInOutExpo');
							hE.children('span.line').animate({height:'50px'},1000,'easeInOutExpo');
							hF.children('span.line').animate({height:'255px'},1000,'easeInOutExpo');
						},150*i);
					});
				},200);
				$('.historybg').addClass('animate-2').fadeIn('fast');
			}else{
				//
			}
		//});
	});	
	
	//
	$(window).bind("scroll", function(event){
		$("ul.welfare-list").each(function(){
			var fold = $(window).height() + $(window).scrollTop();
			if( fold <= $(this).offset().top){
				//$(this).hide();
			}else{
				$(this).addClass("animate-10");
			}
		});
	});	
	
	//QRcode show/hide
	$(function(){
        $("#showQRcode").click(function(){
			var state = $('.right-qr').css('display');
            if(state == "none") {
				$(this).addClass('active');
				$('.right-qr').addClass('animate-10').show();
            }else{
				$('.right-qr').fadeOut(75).removeClass('animate-10');
				$(this).removeClass('active');
            }
         })
    })
	
	// //school slide
	// $('.itinerary-list').flexslider({
		// animation: "slide",
		// controlNav: false,
		// directionNav: true,
		// slideshowSpeed: 15000,
		// slideshow: false,
		// animationLoop: false
	// });	
	
	// //people slide
	// $('#growing').flexslider({
		// animation: "slide",
		// controlNav: true,
		// directionNav: false,
		// slideshowSpeed: 15000,
		// slideshow: false,
		// animationLoop: false
	// });	
	
	// //faq slide
	// $('#faq-list').flexslider({
		// animation: "slide",
		// controlNav: false,
		// directionNav: true,
		// slideshowSpeed: 15000,
		// slideshow: false,
		// animationLoop: false
	// });	
	
	//plan tab change
	$('.tab-change a').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$("."+$(this).attr("id")).show().css('height','auto').siblings().css('height','0').css('overflow','hidden');
	});
	
	//menu
	$('ul.menu li a').click(function(){
		$(this).addClass("active").parent().siblings().children('a').removeClass("active");
	});
	
	//css support
	$('.tab-change a:last-child,ul.life-photo li:last-child').css('margin','0');
	$('.copyright .foot-nav a:last-child').addClass('noafter');
	$('.faq-list ul li .faq-item:nth-child(2n+2)').css('margin-right','0');
	
	//gotop & menu
	$(function() {
        $('#goTop,ul.menu li a').bind('click',function(event){
            var $anchor = $(this);
             $('html, body').stop().animate({
             scrollTop: $($anchor.attr('href')).offset().top
            }, 1000,'easeInOutExpo');
            event.preventDefault();
         });
     });
	
});