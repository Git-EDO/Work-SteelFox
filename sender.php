<?php
    $name = $_POST['name'];
	$phone = $_POST['tel'];
    $email = $_POST['email'];
    $text = $_POST['question'];

	$to = "retail@magnatoil.com, 010914@list.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Почта: $email /n
    Текст: $text "; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p class="form-notification">Форма успешно отправлена.</p>
