$(document).ready(function(){
	$('.bbtn_w, .bbtn_b').hover(function(){
		$imgsrc = $(this).children('img').attr('src');
		$imgsrcx  = $imgsrc.substr(0, $imgsrc.length - 4) + '_o.png';
		$(this).children('img').attr('src', $imgsrcx);
	}, function(){
		$(this).children('img').attr('src', $imgsrc);
	});
//NEEDS
	var pagexx = $(window).width()/2;
	var pageyy = $(window).height()/2;

	var ctype = 0;
	var $circleclassnum = 0;
	var $intervalnum = 0;
	var $circleclassnum_R = 0;

	function needsOff(){
		$intervalnum = 1;
		$("#section1").unbind('mousemove');
		$("#section1").unbind('click');
		for(i=$circleclassnum_R;i>-1;i--){
			$("#section1").children('.circle_R'+i).stop().remove();
		}
		for(z=$circleclassnum;z>-1;z--){
			var numYLow = 10;
			var numYHigh = 1000;
			var adjustedYHigh = (parseFloat(numYHigh) - parseFloat(numYLow)) + 1;
			var Y = Math.floor(Math.random()*adjustedYHigh) + parseFloat(numYLow);
			$("#section1").children('.circle'+z).stop().delay(Y).animate({top:$(window).height()+1000}, {duration:Y, easing:'swing', complete:function(){
				$(this).remove();
			}});
		}
	}
	function needsOn(){
		$intervalnum = 0;
		function mousemoveCircle(){
			$circleclassnum = 0;

			var r = 2;
			var g = 161;
			var b = 242;

			var rr = 1;
			var gg = -1;
			var bb = -1;
			//2, 161, 242
			//255, 76, 145

			var pagexxx = 0;
			var pageyyy = 0;
			$("#section1").mousemove(function( event ) {
				r = r + 1*rr;
				g = g + 1*gg;
				b = b + 1*bb;
				if(r == 255){rr = -1;}else if(r == 2){rr = 1};
				if(g == 76){gg = 1;}else if(g == 161){gg = -1};
				if(b == 145){bb = 1;}else if(b == 242){bb = -1};

				if(ctype == 1){
					var strktype = 'rgba('+r+','+g+','+b+', 1)';
					var filltype = 'none';
				}else{
					var filltype = 'rgba('+r+','+g+','+b+', 0.1)';
					var strktype = 'none';
				}
				pagexx = event.pageX - 150;
				pageyy = event.pageY - 150 - $(this).offset().top;

				if(pagexxx != pagexx){
					$(this).append("<div id='circle' class='circle"+$circleclassnum+" circle-ani' style='opacity:0;top:"+pageyy+"px;left:"+pagexx+"px;'><svg width='300px' height='300px'><circle fill='"+filltype+"' stroke='"+strktype+"' stroke-width='1px' cx='150' cy='150' r='149'/></svg></div>");
					if(!Modernizr.cssanimations) {
						$(this).children('.circle'+$circleclassnum).css({opacity:0, transform:'scale(0)'});
						$(this).children('.circle'+$circleclassnum).stop().animate({opacity:1, transform:'scale(1)'}, {duration:500, easing:'linear', complete:function(){
							$(this).stop().animate({opacity:0, transform:'scale(2)'}, {duration:500, easing:'linear', complete:function(){
								$(this).remove();
							}});
						}});
					}else{
						$(this).children('div.circle-ani').bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
							$(this).remove();
						});
					}
				}

				pagexxx = pagexx;
				pageyyy = pageyy;

				$circleclassnum++;
			});
		}
		mousemoveCircle();
	}
});