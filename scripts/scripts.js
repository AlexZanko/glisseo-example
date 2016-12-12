//Настройки bx
$(document).ready(function(){
  $('.bxslider').bxSlider({
   mode:'fade',
   pager:false,
   nextText: '<img src="images/arrow-right.png">',
   prevText: '<img src="images/arrow-left.png">'	
    });

//Меню
  dropDown = $('.header-menu li').has('.submenu');
  dropDownChecker = true,
  topPos = $('header').height();
  	if($(window).width()<767){
  	  	//Позиция меню относительно header
  		$('.menu').css({'top':topPos,})
 		//Изменение кнопки по клику
 		$('.mobile-button').click(function() {
  			$(this).toggleClass('mobile-close');
  			$('.menu').slideToggle('1400');
		});	
		// Выпадающее меню
		$(dropDown).click(function() {
  			$(this).children('.submenu').slideToggle(400);
  		});
 		// Добавление каретки в UNICODE к Dropdown
		$(init);
		function init() {
 			dropDown.children('a').html(addCarrette);
		}
		function addCarrette( carrette, oldHTML) {
			if(dropDownChecker){
 				return  oldHTML + "&#9660;";
			}
		}
	}
});

