const anim = lottie;
const windowWidth = $(window).width();
const mobFrame = 700;


let animationJson = (container, path, loop = false) => {
  anim.loadAnimation({
    container: container,
    renderer: "svg",
    loop: loop,
    autoplay: true,
    path: path,
  });
}

let scrollTracking = (item) => {
  let itemShow = item.data('show');
  if(itemShow == false) {
		return false;
	} 

  let wt = $(window).scrollTop();
  let wh = $(window).height();
  let et = item.offset().top;
  let eh = item.outerHeight();
  let dh = $(document).height();   

  if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
    item.data('show', false);
    
    return true;
	}
}

$(window).scroll(function(){
    if(windowWidth > mobFrame && scrollTracking($(".maneo-json-pc"))) {
        animationJson(document.querySelector(".maneo-json-pc"), '/json/maneo-pc.json', true);
    }
    
    if(scrollTracking($(".learn-preview"))) {
      var div = $(".learn-preview");
      div.animate({scrollTop: div.prop('scrollHeight')}, {duration: 8000, easing: "linear"});
    }
    if(scrollTracking($(".best-json"))) {
      animationJson(document.querySelector(".best-json"), '/json/best-pc.json', true);
    }
    if(scrollTracking($(".earn-phone-json-pc"))) {
      animationJson(document.querySelector(".earn-phone-json-pc"), '/json/earn-phone-pc.json', true);
    }
    if(scrollTracking($(".communicate-json"))) {
      if(windowWidth > mobFrame) {
        animationJson(document.querySelector(".communicate-json"), '/json/communicate-pc.json', true);
      } else {
        animationJson(document.querySelector(".communicate-json"), '/json/communicate-mob.json', true);
      }
    } 
});
$(document).ready(function(){ 
    if(windowWidth > mobFrame && scrollTracking($(".maneo-json-pc"))) {
        animationJson(document.querySelector(".maneo-json-pc"), '/json/maneo-pc.json', true);
    }
    if(scrollTracking($(".learn-preview"))) {
      var div = $(".learn-preview");
      div.animate({scrollTop: div.prop('scrollHeight')}, {duration: 8000, easing: "linear"});
    }
    if(scrollTracking($(".best-json"))) {
      animationJson(document.querySelector(".best-json"), '/json/best-pc.json', true);
    }
    if(scrollTracking($(".earn-phone-json-pc"))) {
      animationJson(document.querySelector(".earn-phone-json-pc"), '/json/earn-phone-pc.json', true);
    }
    if(scrollTracking($(".communicate-json"))) {
      if(windowWidth > mobFrame) {
        animationJson(document.querySelector(".communicate-json"), '/json/communicate-pc.json', true);
      } else {
        animationJson(document.querySelector(".communicate-json"), '/json/communicate-mob.json', true);
      }
    } 
});


