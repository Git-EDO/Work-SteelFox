<?php
    $name = $_POST['name'];
		$oil = $_POST['oil-name'];
	$phone = $_POST['tel'];
    $email = $_POST['email'];

	$to = "retail@magnatoil.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Почта: $email /n
    Масло: $oil "; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p class="form-notification">Форма успешно отправлена.</p>
