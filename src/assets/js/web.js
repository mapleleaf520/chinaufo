//奥驰首页flash
function initFlash(flashUrl,getUrl,contextPath){
	$.post(getUrl,{code:'sy',max:4},function(data,textStatus){
		if(textStatus=='success'){
			data=eval(data);
			var img = [];
			$.each(data,function(i,a){
				var picpath='url('+contextPath+a.picPath+')';
				img.push(picpath);
			});
		    var url=flashUrl;
		    var link='';
		    var windo=$(window).width();
		    if(windo<=1150){windo=1150;}
		    var w=0.5*(windo-1440);
			$.each(img,function(i,n){
				link +='<li id="link'+parseInt(i+1)+'" style="background:url(./images/aochi/link/link'+parseInt(i+1)+'.jpg)"></li>';
				var flashId='flash'+parseInt(i+1);
				$("#"+flashId).css('background-position',w);
				$("#"+flashId).click(function(){
					var urlNum=$(this).attr('name');
					if(url[urlNum-1]){
						window.location.href=url[urlNum-1];
					}
				});
			});
			$("#link").html(link);
			$("#flash1").css('background-image',img[0]);
			$("#flash1").attr('name','1');
			//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
			var picTimer;
			var index=2;
			$("#p").hover(function() {
				clearInterval(picTimer);
			},function() {
				picTimer=setInterval(function() {
					var linkId='link'+index;
					$("#"+linkId).click();
					index++;
					if(index > img.length) {index = 1;}
				},5000);
			}).trigger("mouseleave");
			
			$('#link li').click(function(){
				var num=$(this).attr('id').replace('link','');
				index = num;
				if($("#first").css('display')=="inline"){
					if($("#flash1").attr('name')!=num){
						$("#flash2").css('background-image',img[num-1]);
						$("#flash2").attr('name',num);
						$("#flash3").css('background-image',img[num-1]);
						$("#flash3").attr('name',num);
						var incom = function() {
							$("#secend").css('display','inline');
							$("#first").css('display','none');
							$("#first").css('left','0');
						}
						setTimeout(incom, 1000);
						$("#first").animate({"left":'-100%'},900);
					}
				}else if($("#secend").css('display')=="inline"){
					if($("#flash3").attr('name')!=num){
						$("#flash4").css('background-image',img[num-1]);
						$("#flash4").attr('name',num);
						$("#flash1").css('background-image',img[num-1]);
						$("#flash1").attr('name',num);
						var incom = function() {
							$("#first").css('display','inline');
							$("#secend").css('display','none');
							$("#secend").css('left','0');
						}
						setTimeout(incom, 1000);
						$("#secend").animate({"left":'-100%'},900);
					}
				}
			});
		}
	},'text');
}
