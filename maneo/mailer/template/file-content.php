<?php 

$msg = '';
if (array_key_exists('userfile', $_FILES)) {

    // Create a message
    // This should be somewhere in your include_path
    require 'phpmailer/PHPMailerAutoload.php';
    $mail = new PHPMailer;
    $mail->setFrom('sapojnikovs47@gmail.com', $subject);
    $mail->addAddress('sapojnikovs47@gmail.com', $subject);
    $mail->Subject = $subject;
    $mail->msgHTML($message);
     $mail->CharSet = 'UTF-8';
    //Attach multiple files one by one
    for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
        $filename = $_FILES['userfile']['name'][$ct];
        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }
    if (!$mail->send()) {
        $msg .= "Mailer Error: " . $mail->ErrorInfo;
    } else {
      
    }
}
?>
<script>
    window.close();
</script>