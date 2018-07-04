$(function(){
	var img = $("img");
	var num = 0;

	img.each(function(i){
		var oImg = new Image();
		
		oImg.onload = function(){
			num++;

			$(".loading b").html(parseInt(num/$("img").size()*100)+'%');
			if (num == i) {
				$(".loading").fadeOut();
			}
		}
		oImg.src=img[i].src;

	});

})
