<?php
    $name = $_POST['name'];
	$phone = $_POST['tel'];
    $email = $_POST['email'];
    $text = $_POST['question'];

	$to = "010914@list.ru, retail@magnatoil.com";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = "info@steel-fox.ru";
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name \n
    Телефон: $phone \n
    Почта: $email \n
    Текст: $text "; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p class="form-notification">Форма успешно отправлена.</p>
