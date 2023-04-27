<?php 
    $mailData = $_POST; // Данные которые пришли из формы
    $mailValidation = false; // Статус валидации. Измениться если в switch не будет совпадени с данными которые пришли их формы
    $mailErrorData; // Переменная в которую запишуться данные при ошибке в валидации

    $subject = $mailData['subject']; // Тема письма
    $linkPage = $_SERVER['HTTP_REFERER']; // Ссылка на страницу с которой отправлена форма
    $messageHtml; // HTML для письма

    $messageContent = [
        "<p>Дата: <b>". date("d.m.Y") ."\n</b></p>",
        "<p>Время: <b>".  date("H:i:s") ."\n</b></p>",
    ]; // Массив в который записываются данные из формы в нужном виде
    
    foreach ($mailData as $key => $value) {
        switch($key) {
            case 'name':
                array_push($messageContent, "<p>Имя: <b>$value\n</b></p>");
            break;
            case 'phone':
                $valuePhone = str_replace(array(' ', '(' , ')', '-'), '', $value);
                array_push($messageContent, "<p>Телефон: <a style='text-decoration: none;' href='tel:" .  $value . "'><b>$valuePhone\n</b></a></p>");
            break;
            case 'email':
                array_push($messageContent, "<p>Email: <a style='text-decoration: none;' href='mailto:" .  $value . "'><b>$value\n</b></a></p>");
            break;
            case 'address':
                array_push($messageContent, "<p>Адрес: <b>$value\n</b></p>");
            break;
            case 'messenger':
                array_push($messageContent, "<p>Мессенджер: <b>$value\n</b></p>");
            break;
            case 'subject':
                array_push($messageContent, "<p>Кнопка: <b>$value\n</b></p>");
            break;
            case 'copy':
            break;
            default: 
                $mailValidation = true;
                array_push($messageContent, "Не учтенное значение. Поле: $key. Значение: $value <br/>\n");
        }
    }
    array_push($messageContent, "<p>Страница: $linkPage\n</p>");
    
    if($mailValidation) { // Валидация письма. Все ли поля были учтены.
        array_push($messageContent, "\n<p style='margin-top: 30px'>При отправке одно или несколько значений не записались. Все данные из формы выведены ниже:\n");
        foreach ($mailData as $key => $value) {
            $mailErrorData .= "Поле: $key. Значение: $value <br/>\n";
        }
        array_push($messageContent, "<p>$mailErrorData</p>");
    }

    foreach ($messageContent as $value) { // Создание HTML письма
        $messageHtml .= $value;
    }

    $message = "
         <html>
            <head>
                 <title>$subject</title>
            </head>
            <body style='color: #272728;'>
                $messageHtml
             </body>
        </html>
    "; //Текст сообщения можно использовать HTML теги
?>