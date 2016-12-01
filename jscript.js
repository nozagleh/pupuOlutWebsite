$(function(){
			$('a').click(function(){
				$('html, body').animate({
					scrollTop: $( $.attr(this, 'href') ).offset().top
				}, 500);
				return false;
			});
			var $docWidth = $(document).width() - 400;
			sessionStorage.setItem("widthWindow",$docWidth);
			var $img = $('#mainIMG');

			$(window).scroll(function() {
				var s = $(document).scrollTop(),
					d = $(document).height(),
					c = $(this).height();

				var scrollPercent = (s / (d - c));
				
				
				var pos = parseInt($img.css('padding-left'),10);

				

				var w = sessionStorage.getItem('widthWindow') / 2;
				var calc = w / 680;

				/*if (pos <= (sessionStorage.getItem('widthWindow') + 340)) {
					console.log(pos+" "+sessionStorage.getItem('widthWindow'));
					$img.css({
						'padding-left' : s
					});
				}
				else{
					console.log(pos+" "+sessionStorage.getItem('widthWindow'));
					$img.css({
						'padding-left' : sessionStorage.getItem('widthWindow')
					});
				};*/

				if (s < 680){
					$img.css({
						'opacity' : 1 - s/600
					});
				};

				if (s > 680) {
					$('.box').css({
						'background-position' : (s/100)/2+'% '+(s/100)/2+'%'
					});
				};

				/*if(s > 10){
					$('.navbar').css({
						'opacity' : 1 - (s/100)
					});
				}
				else{
					$('.navbar').css({
						'opacity' : 1 + (s/100)
					});
				};*/

				if(s > 0){
					$('.wrapper').css({
						'padding-top' : '80px'
					});
					$('.navbar').css({
						'position': 'fixed'
					});

				}else{
					$('.navbar').css({
						'position' : 'static',
						'top' : 'auto'
					});
				}
				
			});
		});