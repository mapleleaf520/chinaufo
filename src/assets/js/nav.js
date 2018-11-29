$.fn.extend({
	allenMenu: function() {
	    function mouseIner(){
	    	$(this).addClass('focus');
	    	$(this).children('ul:first').stop(true, true).animate({ height:'show' }, 'fast');
		}	
		function mouseOuter(){
			$(this).removeClass('focus');
			$(this).children('ul:first').stop(true, true).animate({ height:'hide', opacity:'hide' }, 'fast');
		}
		var sence = {    
				 sensitivity: 2,     
				 interval: 100,   
				 over: mouseIner,     
				 timeout: 0,     
				 out: mouseOuter     
			};
		$(this).children('ul').children('li').mousehover(sence);
//		$(this).children('ul').children('li').hover(
//			function() {
//				if(!$(this).children('ul').hasClass('focus')) {
//					$(this).addClass('focus');
//					$(this).children('ul:first').stop(true, true).animate({ height:'show' }, 'fast');
//				}
//			},
//			function() {
//				$(this).removeClass('focus');
//				$(this).children('ul:first').stop(true, true).animate({ height:'hide', opacity:'hide' }, 'slow');
//			}
//		);
//		$(this).children('ul').children('li').children('ul').hover(
//			function() {
//				$(this).addClass('focus');
//			},
//			function() {
//				$(this).removeClass('focus');
//			}
//		);
	}
});

(function($){
    $.fn.mousehover=function(f,g){
        var cfg={sensitivity:3,interval:100,timeout:100};
            cfg=$.extend(cfg,g?{over:f,out:g}:f);
        var cX,cY,pX,pY;
        var track=function(ev){cX=ev.pageX;cY=ev.pageY;};
        var compare=function(ev,ob){
            ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);
            if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){
                $(ob).unbind("mousemove",track);
                ob.hoverIntent_s=1;
                return cfg.over.apply(ob,[ev]);
            }else{
                pX=cX;
                pY=cY;
                ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);
            }
        };
        var delay=function(ev,ob){
            ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s=0;
            return cfg.out.apply(ob,[ev]);
        };
        var handleHover=function(e){
            var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;
            while(p&&p!=this){
                try{p=p.parentNode;}
                    catch(e){p=this;}
            }
            if(p==this){return false;}
            var ev=jQuery.extend({},e);
            var ob=this;
            if(ob.hoverIntent_t){
                ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);
            }
            if(e.type=="mouseover"){
                pX=ev.pageX;pY=ev.pageY;
                $(ob).bind("mousemove",track);
                if(ob.hoverIntent_s!=1){
                    ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);
                }
            }else{
                $(ob).unbind("mousemove",track);
                if(ob.hoverIntent_s==1){
                    ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);
                }
            }
        };
        return this.mouseover(handleHover).mouseout(handleHover);}
    ;}
        )(jQuery);
