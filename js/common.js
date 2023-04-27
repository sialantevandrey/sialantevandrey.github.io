var oneMonth = 5;
var levelMonth = 1;
function refferalsSum(refferalsCountExponent, childRefferalsCount) {
    const sumFirstMounth = refferalsCountExponent * 7000;
  
    const sumLevel1 = refferalsCountExponent * 1000;
  
    const sumLevel2 = refferalsCountExponent * childRefferalsCount * 500;
  
    const sumLevel3 = (() => {
      let sum = refferalsCountExponent * Math.pow(childRefferalsCount, 2);
  
      return (sum < 1 ? 1 : sum) * 250;
    })();
  
    const sumLevel4 = (() => {
      let sum = refferalsCountExponent * Math.pow(childRefferalsCount, 3);
  
      return (sum < 1 ? 1 : sum) * 125;
    })();
  
    const sumLevel5 = (() => {
      let sum = refferalsCountExponent * Math.pow(childRefferalsCount, 4);
  
      return (sum < 1 ? 1 : sum) * 62.5;
    })();
    finishMounth = Math.round(sumFirstMounth);
    finishNextMounth = Math.round(sumLevel1 + sumLevel2 + sumLevel3 + sumLevel4 + sumLevel5)
    $('.count-result__one').html(finishMounth.toLocaleString('ru-RU'));
    $('.count-result__month').html(finishNextMounth.toLocaleString('ru-RU'));
    if($(window).width() > 1200) {
        switch(finishNextMounth.toLocaleString('ru-RU').length) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                $('.count-result__month').css({'font-size' : '46px'});
                break
            case 9:
            case 10:
                $('.count-result__month').css({'font-size' : '40px'});
            break
            case 11:
                $('.count-result__month').css({'font-size' : '34px'});
            break
        }
    } else if($(window).width() < 700) {
        switch(finishNextMounth.toLocaleString('ru-RU').length) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                $('.count-result__month').css({'font-size' : '27px'});
                break
            case 9:
            case 10:
                $('.count-result__month').css({'font-size' : '24px'});
            break
            case 11:
                $('.count-result__month').css({'font-size' : '22px'});
            break
            case 12:
                $('.count-result__month').css({'font-size' : '20px'});
            break
        }
    }


    return { sumFirstMounth, sumNextMounth: sumLevel1 + sumLevel2 + sumLevel3 + sumLevel4 + sumLevel5 };
}
refferalsSum(oneMonth, levelMonth);


var $range = $(".range-friends");
var $input = $(".range-friends__counter");
var instance;
var min = 1;
var max = 1000;

$range.ionRangeSlider({
    type: "single",
    min: min,
    max: max,
    from: 4,
    step: 1,
    postfix: "",
    onStart: function(data) {
        oneMonth = Number(data.from);
        refferalsSum(oneMonth, levelMonth);
        $input.html(data.from);
    },
    onChange: function(data) {
        oneMonth = Number(data.from);
        refferalsSum(oneMonth, levelMonth);
        $input.html(data.from);
    }
});

    
var $range2 = $(".range-sub_friends");
var $input2 = $(".range-sub_friends__counter");
// var instance;
var min2 = 1;
var max2 = 5;

$range2.ionRangeSlider({
    type: "single",
    min: min2,
    max: max2,
    from: 3,
    step: 1,
    postfix: "",
    onStart: function(data) {
        levelMonth = Number(data.from);
        refferalsSum(oneMonth, levelMonth);
        $input2.html(data.from);
    },
    onChange: function(data) {
        levelMonth = Number(data.from);
        refferalsSum(oneMonth, levelMonth);
        $input2.html(data.from);
    }
});


$('.reviews-slider').slick({
	infinite: true,
	slidesToShow: 2, 
	prevArrow: '.reviews-prev',
	nextArrow: '.reviews-next',
	dots: true,
	appendDots: '.reviews-dots',
	adaptiveHeight: true,
	responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 1,
        adaptiveHeight: true,
      }
    },
  ]

});

$('.popup-copy__wrap').click(function() {
	$(this).removeClass('popup-copy__wrap_error');
	$(this).toggleClass('popup-copy__wrap_active');
    $(this).siblings('.popup-default-sub').toggleClass('inactive');
});