<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
	$phone = $_POST['tel'];
    $text = $_POST['question'];

	$to = "test@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    E-mail: $email /n
    Телефон: $phone /n
    Сообщение: $text"; 	
	mail($to, $subject, $msg, "From: $to ");

?>
