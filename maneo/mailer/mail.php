<?php
    // При отправке файлов в форме 
    // email получателя  указывается в файле "template/file-content.php"

    $to = 'sapojnikovs47@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов

    /* Опции телеграм бота */

    // Токен бота прикрепленного к данному сайту
    $tokenTgBot = '6143813483:AAFbk22wdJDOHboYaIHsOSF3Lr6dOYv0-kE'; 
    // Если нужна отправка сообщений в Телеграм
    // Перейти по ссылке http://t.me/Maneo_mailer_bot и нажать "Start"
    // В переменной $mailBotID значение нужно поменять на ваш ID
    // Для получения ID нужно:
    // Перейти по ссылке - https://t.me/getmyid_bot
    // Нажать на кнопку "/start" 
    // Скопировать значение "Your user ID:"
    $mailBotID = 0; 

    /* END Опции телеграм бота */

    include 'template/default-content.php'; // Подключения сбора данных формы

    $filelMessege = $mailData['file']; // Наличие файлов в форме

    if($mailBotID) {
        include 'template/bot.php'; // Подключения отправки данных в бота
    }

    if($filelMessege) {
        include 'template/file-content.php';
    } else {
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= 'From: Заявка с сайта <noreply@'. $_SERVER['HTTP_HOST'] .'>' . "\r\n";
        mail($to, $subject, $message, $headers); // Отправка письма с помощью функции mail
    }
?>