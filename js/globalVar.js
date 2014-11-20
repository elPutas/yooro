function splash()
		{
			var justOnce = true;
			if(justOnce)
			{

				$(".home-block, header, footer").hide(0).delay(4300).fadeIn(1000);
				$('#splash').show(0).delay(4000).fadeOut(1000);

				justOnce = false;
			}

				
			
		};