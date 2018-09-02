window.onload=function(){
	var images = document.querySelectorAll(".galery .photos img");
	
	var slider = new Slider(images);
	
	setInterval(function(){
		slider.next();
	}, 10000)
	

			// Плавный скролл по якорям
			$('a[href^="#"]').click(function () { 
			    elementClick = $(this).attr("href");
				destination = $(elementClick).offset().top;
				if($.browser.safari){
				$('body').animate( { scrollTop: destination }, 1000 );
				} else {
			    	$('html').animate( { scrollTop: destination }, 1000 );
				}
				return false;
		   });

	}

function Slider (images)
{
	this.images = images;
	var i = 0;
	
	this.next = function (){
		this.images[i].classList.remove("show");
		i++;
		if(i >= images.length)
		{
			i=0;
		}
		this.images[i].classList.add("show");
	}
}

function Slider2 (text)
{
	this.text = text;
	var i = 0;
	
	this.text = function (){
		this.text[i].classList.remove("show");
		i++;
		if(i >= text.length)
		{
			i=0;
		}
		this.text[i].classList.add("show");
	}
}