$(document).ready(function() {
	$("body").removeClass("load");
	$('form').keydown(function(event){
        if(event.keyCode == 13) {
          event.preventDefault();
          return false;
      }
	});
	const url = window.location.href.split('?')[0].split('#')[0];
	let parts = url.split('/');
	var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash

	 // AJAX отправка формы 
	 function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	  }
	$(".submit-form").submit(function(e) {
		e.preventDefault();
		let phoneUser = $(this).find('input[name=phone]').val().replace(/[^\d]/g, '');
		let phoneValid = false;
		let mailForm = $(this).find('.email-valid').val();
		var element = document.querySelector('input[name=checkCard]');  
		var checkStatus = false;
		if($(this).data('type') == 'card') {
			if (element.checked) {
				checkStatus = true;
				$('.popup-copy__wrap').removeClass('popup-copy__wrap_error');
			} else {
				checkStatus = false;
				$('.popup-copy__wrap').addClass('popup-copy__wrap_error');
			}
		} else {
			checkStatus = true;
		}
		if(phoneUser.length == 11) {
			phoneValid = true;
		} else {
			phoneValid = false;
			$(this).find('.phone-error').fadeIn();
		}
		if(isEmail(mailForm) && phoneValid && checkStatus) {
			var phoneError = $(this).find('.phone-error');
			var mailError = $(this).find('.email-error');
			$('.form-error').hide();
			var form_email = $(this).find('input[type="email"]').val();
			var form_data = $(this).serialize(); //собераем все данные из формы
			var saveLink = $(this).data('save');
			var pageLink = $(this).data('link');
			var pageCode = $(this).data('code');
			var pageType = $(this).data('type');

			mailProcessing();
			if($(this).data('save')) {
				// window.open(saveLink, '_blank');
				window.location.href = saveLink;
			}
			var jj = {
				email: form_email,
				referral_code: lastSegment,
				payment_type: pageType,
				phone: phoneUser,
			}
			myJson = JSON.stringify(jj);
			$.ajax({
				type: 'POST', //Метод отправки
				dataType: 'json',
				headers: {
					"Content-Type": "application/json"
				},
				url: 'https://api.maneo.ru/payments', //путь до php фаила отправителя
				data: myJson,
				success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
					window.location.href = data.result.url;
					// window.open(data.result.url, '_blank');
					swal({
						title: 'Страница оплаты готова!',
						icon: 'success',
						timer: 3000,
						confirmButtonText: 'Ок',
					});
				},
				error: function(data) {
					let dataResult = JSON.stringify(data);
						dataResult = JSON.parse(dataResult);
					let mailTextError = dataResult.responseJSON.errors.email;
					let phoneTextError = dataResult.responseJSON.errors.phone;
					let refTextError = dataResult.responseJSON.errors.referral_code;
					let swalClose = false;
					if(dataResult.status == 400) {
						if(mailTextError) {
							mailError.html(mailTextError).fadeIn();
							swal.close();
						}
						if(phoneTextError) {
							phoneError.html(phoneTextError).fadeIn();
							swal.close();
						}
						if(refTextError) {
							swal({
								title: 'Проблемы с вашим реферальным кодом',
								text: refTextError,
								icon: 'error',
								confirmButtonText: 'Ок',
							});
						}
					} else {
						swal({
							title: 'Что-то пошло не так повторите',
							icon: 'error',
							confirmButtonText: 'Ок',
						});
					}
				}
			});
		}
		if(isEmail(mailForm) == false) {
			$(this).find('.email-error').fadeIn();
		}
	});

 });


// Шаблон скрипта для slick slider

// $('.slider').slick({
// 	infinite: true,
// 	slidesToShow: 3, 
// 	prevArrow: '.prev',
// 	nextArrow: '.next',
// 	dots: true,
// 	appendDots: '.dots',
// 	adaptiveHeight: true,

// 	// код для центрированного slick slider

// 	centerMode: true,
// 	centerPadding: '60px',

// 	// код для адаптива slick slider
// 	responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//       }
//     },
//   ]

// });

// Заявка отправляется
let mailProcessing = () => { 
	swal({
		title: 'Пожалуйста, подождите',
		icon: 'success',
		buttons: false,
	});
}
// Заявка отправляется
let mailSubmit = (pageLink) => { 
	if(pageLink) {
		window.location.href = pageLink;
	} else {
		swal({
			title: 'Заявка отправлена!',
			icon: 'success',
			timer: 3000,
			confirmButtonText: 'Ок',
		});
	}
	frameClose();
}


// Функция закрытия попапов
let frameClose = () => {
	$('.popup-frame').fadeOut(); 
	$('.popup').fadeOut(); 
	$('.mob-frame').fadeOut();
    $('.mob-menu').removeClass('mob-menu_active');
	$('html').removeClass('open-frame');
}

// Код для работы попапа по умолчанию (Не относится к попапам из дизайна)
$('.js-popup').click(function(e) {
	e.preventDefault();
	let popupItem = $(this).data('popup');
	let popup = $('.popup[data-popup = ' + popupItem +']');
	let popupSubject = $(this).data('btn');
	$('.popup').hide();
	$('html').addClass('open-frame');
	$('.popup-frame').css("display", "flex");
	popup.show();
	popup.find('input[name="subject"]').val(popupSubject);
});

$('.popup-default-item p').click(function() {
	$(this).siblings('input').focus();
});

$('.popup-default-item input').focus(function() {
	$(this).parent().addClass('active-default-input');
});

$('.popup-default-item input').blur(function() {
	if($(this).val().length == 0) {
		$(this).parent().removeClass('active-default-input');
	}
});

// Событие закрытия попапа
$(".popup-close").click(function(){
   frameClose();
});

// Моб - меню 
$('.burger').click(function(e) {
    $('.mob-frame').fadeIn();
    $('.mob-menu').addClass('mob-menu_active');
});

$('.menu-close').click(function(e) {
    $('.mob-frame').fadeOut();
    $('.mob-menu').removeClass('mob-menu_active');
});

// Маска для input с номером телефона
$(".input-mask").mask("+7 (999) 999-99-99");

// Событие смены атрибута "checked" у стилизованных checkbox или radio 
$('.js-checkbox').click(function() {
	let checkBoxes = $(this).find('input');
    checkBoxes.prop("checked", !checkBoxes.prop("checked"));
});

// Код для плавного перехода по якорным ссылкам
$(".anchor").click(function (e) {
	e.preventDefault();
	let href = $(this).attr('href'),
	top = $(href).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
	frameClose();
 });
// Событие закрытия попапов по клику в свободное место
$(".target-frame").click(function (e){ // событие клика по веб-документу
	var popup = $(".target-box"); // тут указываем ID элемента
	if (!popup.is(e.target) // если клик был не по нашему блоку
		&& popup.has(e.target).length === 0) { // и не по его дочерним элементам
		frameClose();
	}
});

// Событие закрытия попапов по клику на клавишу Escape
$(document).on('keyup', function(e) {
	if ( e.key == "Escape" ) {
		frameClose();
	}
});

// Выполнение скрипта если пользователь покинул сайт
// var stop = false
// window.onmouseout=function(event){ 
//   if(event.clientY < 0 && stop == false) {

//   	// Код скрипта	
	
//   	stop = true;
//   }
// }