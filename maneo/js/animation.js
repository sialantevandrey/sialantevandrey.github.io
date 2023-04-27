let animation = (viewFactor, item, duration, distance, origin, scale = 1, interval = 0, delay = 0, opacity = 0 ) => {
    ScrollReveal().reveal(item, {
        duration: duration,  // Время анимации (Миллисекунды)
        distance: distance,  // Дистанция (Растояние в px - 40px)
        origin: origin, // Направление (Top, bottom, left, right)
        scale: scale, // Трансформация (От 1 до 0)
        interval: interval, // Интервал появления (Миллисекунды)
        delay: delay, // Задержка перед выполнением (Миллисекунды)
        opacity: opacity, // Прозрачность (От 1 до 0)
        viewFactor: viewFactor // Сколько % блока должно быть в поле видимости
    });
}

// animation('.logo', 900, '40px', 'top', 0.85); Пример использования
animation(0.5, '.maneo-title, .maneo-btn', 900, '40px', 'bottom', 0.85, 200);
animation(0.5, '.profile-link', 900, '40px', 'right', 0.85, 0, 300);

animation(0.5, '.what-preview', 900, '10px', 'bottom', 1.2);
animation(0.5, '.what-link', 900, '60px', 'left', 0.85, 0, 200);
animation(0.2, '.what-item', 900, '40px', 'left', 0.85, 200);
animation(0.5, '.what-item__title', 900, '60px', 'bottom', 0.95, 200, 300);

animation(0.5, '.page-title', 900, '60px', 'bottom', 0.95);
animation(0.5, '.page-subtitle, .what-clue', 900, '60px', 'bottom', 0.95, 0, 400);
animation(0.5, '.learn-wrap', 900, '100px', 'bottom', 0.95);
animation(0.5, '.learn-content__title', 900, '50px', 'bottom', 0.95, 0, 300);
animation(0.5, '.learn-link', 900, '50px', 'bottom', 0.95, 0, 300);

animation(0.5, '.clubs-wrap', 900, '100px', 'bottom', 0.85);
animation(0.5, '.clubs-grid .clubs-item', 900, '0px', 'bottom', 0.75, 200, 300);
animation(0.5, '.clubs-grid .clubs-item__title', 900, '40px', 'bottom', 0.85, 200, 800);
animation(0.5, '.clubs-grid .clubs-item__link', 900, '40px', 'bottom', 0.85, 200, 900);

animation(0.3, '.benefit-list_left .benefit-item', 900, '80px', 'left', 0.85, 200);
animation(0.3, '.benefit-list_right .benefit-item', 900, '80px', 'right', 0.85, 200);
animation(0.3, '.benefit-item_single', 900, '80px', 'bottom', 0.85, 0, 400);

animation(0.4, '.every-link', 900, '80px', 'bottom', 0.85);
animation(0.7, '.every-phone', 900, '80px', 'right', 0.85, 0, 300);

animation(0.3, '.subscription-wrap', 900, '140px', 'bottom', 0.85);
animation(0.7, '.subscription-title h2, .subscription-title p', 900, '80px', 'bottom', 0.85, 200, 300);
animation(0.5, '.subscription-price', 900, '80px', 'bottom', 0.85, 0, 300);
animation(0.5, '.subscription-link', 900, '80px', 'bottom', 0.85, 200, 500);

animation(0.4, '.installment-wrap', 900, '140px', 'bottom', 0.85);
animation(0.5, '.installment-title h2, .installment-title p', 900, '80px', 'bottom', 0.85, 200, 300);
animation(0.5, '.installment-photo', 900, '80px', 'bottom', 0.85, 0, 300);
animation(0.5, '.installment-link', 900, '80px', 'bottom', 0.85, 200, 500);

if($(window).width() > 700) {
    ScrollReveal().reveal('.an-communicate-1', {
        duration: 1000,  // Время анимации (Миллисекунды)
        distance: '200px',  // Дистанция (Растояние в px - 40px)
        origin: 'right', // Направление (Top, bottom, left, right)
        easing: 'ease-in-out',
        scale: 1, // Трансформация (От 1 до 0)
        interval: 0, // Интервал появления (Миллисекунды)
        delay: 0, // Задержка перед выполнением (Миллисекунды)
        opacity: 0, // Прозрачность (От 1 до 0)
        viewFactor: 0.5, // Сколько % блока должно быть в поле видимости
        rotate: {
            x: 20,
            z: 20
        }
    });
    ScrollReveal().reveal('.an-communicate-3', {
        duration: 1000,  // Время анимации (Миллисекунды)
        distance: '300px',  // Дистанция (Растояние в px - 40px)
        origin: 'right', // Направление (Top, bottom, left, right)
        easing: 'ease-in-out',
        scale: 1, // Трансформация (От 1 до 0)
        interval: 0, // Интервал появления (Миллисекунды)
        delay: 0, // Задержка перед выполнением (Миллисекунды)
        opacity: 0, // Прозрачность (От 1 до 0)
        viewFactor: 0.5, // Сколько % блока должно быть в поле видимости
        rotate: {
            x: 30,
            z: -30
        }
    });
} else {
    ScrollReveal().reveal('.an-communicate-1', {
        duration: 1000,  // Время анимации (Миллисекунды)
        distance: '150px',  // Дистанция (Растояние в px - 40px)
        origin: 'left', // Направление (Top, bottom, left, right)
        easing: 'ease-in-out',
        scale: 1, // Трансформация (От 1 до 0)
        interval: 0, // Интервал появления (Миллисекунды)
        delay: 0, // Задержка перед выполнением (Миллисекунды)
        opacity: 0, // Прозрачность (От 1 до 0)
        viewFactor: 0.5, // Сколько % блока должно быть в поле видимости
        rotate: {
            x: 20,
            z: 20
        }
    });
    ScrollReveal().reveal('.an-communicate-2-mob', {
        duration: 1000,  // Время анимации (Миллисекунды)
        distance: '200px',  // Дистанция (Растояние в px - 40px)
        origin: 'right', // Направление (Top, bottom, left, right)
        easing: 'ease-in-out',
        scale: 1, // Трансформация (От 1 до 0)
        interval: 0, // Интервал появления (Миллисекунды)
        delay: 200, // Задержка перед выполнением (Миллисекунды)
        opacity: 0, // Прозрачность (От 1 до 0)
        viewFactor: 0.5, // Сколько % блока должно быть в поле видимости
        rotate: {
            x: 30,
            z: -20
        }
    });
    ScrollReveal().reveal('.an-communicate-3', {
        duration: 1000,  // Время анимации (Миллисекунды)
        distance: '200px',  // Дистанция (Растояние в px - 40px)
        origin: 'left', // Направление (Top, bottom, left, right)
        easing: 'ease-in-out',
        scale: 1, // Трансформация (От 1 до 0)
        interval: 0, // Интервал появления (Миллисекунды)
        delay: 200, // Задержка перед выполнением (Миллисекунды)
        opacity: 0, // Прозрачность (От 1 до 0)
        viewFactor: 0.5, // Сколько % блока должно быть в поле видимости
        rotate: {
            x: 30,
            z: -30
        }
    });
}


ScrollReveal().reveal('.an-communicate-2', {
    duration: 1000,  // Время анимации (Миллисекунды)
    distance: '300px',  // Дистанция (Растояние в px - 40px)
    origin: 'bottom', // Направление (Top, bottom, left, right)
    easing: 'ease-in-out',
    scale: 1, // Трансформация (От 1 до 0)
    interval: 0, // Интервал появления (Миллисекунды)
    delay: 0, // Задержка перед выполнением (Миллисекунды)
    opacity: 0, // Прозрачность (От 1 до 0)
    viewFactor: 0.5, // Сколько % блока должно быть в поле видимости
    rotate: {
        x: 30,
        z: -20
    }
});



animation(0.4, '.an-communicate-1 .communicate-descripter', 900, '100px', 'top', 1, 0, 300);
animation(0.4, '.an-communicate-2 .communicate-descripter', 900, '100px', 'top', 1, 0, 300);
animation(0.4, '.an-communicate-3 .communicate-descripter', 900, '100px', 'top', 1, 0, 300);
