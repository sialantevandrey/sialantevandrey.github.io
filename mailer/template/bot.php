<?php
    $messageBot = strip_tags($messageHtml);
    // $test = 'Example text with a phone [+79991234567](tel:+79991234567)';
    // $messageBot = strip_tags($test, '<a>');
    $ch = curl_init('https://api.telegram.org/bot'.$tokenTgBot.'/sendMessage?chat_id='.$mailBotID.'&text='. urlencode($messageBot)); // URL
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Не возвращать ответ
    curl_exec($ch); // Делаем запрос
    curl_close($ch); // Завершаем сеанс cURL
?>