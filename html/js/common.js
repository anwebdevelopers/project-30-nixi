$(function() {

    'use strict';

    // Анимация появления элементов
	$(function() {
		var w = $(window).width();
		if(w > 768) {
			$(".catalog__item").animated("fadeInUp");
			$(".advantages__item").animated("fadeInRight");
			$(".parthners__item").animated("fadeInUp");
			$(".contacts__item").animated("fadeInUp");
		};
	});

    //------------------------------------
    //Выравнивание блоков по высоте
    //------------------------------------

    $(".catalog__item-title").equalHeight({
        responsive: true
    });
    $(".catalog__item-text").equalHeight({
        responsive: true
    });
    $(".catalog__item-box").equalHeight({
        responsive: true
    });
    $(".advantages__item-title").equalHeight({
        responsive: true
    });
    $(".advantages__item-text").equalHeight({
        responsive: true
    });
    $(".parthners__item-text p").equalHeight({
        responsive: true
    });

    //------------------------------------
    //Ajax Загрузка контента каталога
    //------------------------------------
    // $('.catalog__links-wrapper').on('click', 'a:not(.active)', function(e) {
    // 	e.stopPropagation();
    //     $(this).addClass('active').siblings().removeClass('active');
    //     $('.catalog__box').load('ajax-content.html ' + $(this).attr('href') + ' .catalog__item', function() {
    //     	modal();
    //     	$(".catalog__item").animated("fadeInUp");
    // 		$(".catalog__item-title").equalHeight().magic();
		  //   $(".catalog__item-text").equalHeight().magic();
		  //   $(".catalog__item-box").equalHeight().magic();
    // 	});
    // });

    //------------------------------------------------
    // Плавный скролл без плагина
    //------------------------------------------------

    $('.scroll a').click(function() {
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect}, thisSect * 0.5);
			return false;
    });

    //---------------------------------
    //Адаптивный слайдер
    //---------------------------------


    $(".product-main__slider").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 1200,
    });


    //---------------------------------
    //Выдвигающаяся Форма заявки
    //---------------------------------
    function modal() {
    	$('.modal-trigger').click(function() {
	    	$('.modal').addClass('modal-show');
	    	setTimeout(function() {
	    		$('.modal__box').addClass('modal__box-show');
	    	}, 10);
	    	return false;
	    });
	    //Выключение при клике по кнопке
	    $('.modal__button').click(function() {
	    	$('.modal__box').removeClass('modal__box-show');
	    	setTimeout(function() {
	    		$('.modal').removeClass('modal-show');
	    	}, 700);
	    });
	    //Выключение при клике по странице
	    $(document).on('click', function(e) {
	        if (!$(e.target).closest(".modal__box").length) {
	        	$('.modal__box').removeClass('modal__box-show');
		    	setTimeout(function() {
		    		$('.modal').removeClass('modal-show');
		    	}, 700);
	        }
	        e.stopPropagation();
	    });
    }
    modal();
    


    //---------------------------------
    //Валидация полей формы
    //---------------------------------
    var validator = $(".modal__form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true
            },
            text: {
                required: true
            }
        },
        messages: {
            name: {
                required: '',
                minlength: ''
            },
            phone: {
                required: ''
            },
            text: {
                required: ''
            }
        }
    });

    $(".modal__form").submit(function() { //Change
        if (validator.form() == true) {
        	//Отправка формы
        } else {
        	return false
        }
    });


    //---------------------------------
    //maskedinput
    //---------------------------------
    $("#phone").mask("8(999) 999-99-99");

    //---------------------------------
    //preloader off
    //---------------------------------

    $("#preloader__img").fadeOut(800),
    $("#preloader").fadeOut(1000)
});

