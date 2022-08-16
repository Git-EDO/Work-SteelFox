<?php
    $business = $_POST['q1'];
		$volume = $_POST['q2'];
			$city = $_POST['q3-city'];
			$index = $_POST['q3-index'];
			$brand = $_POST['q4'];
			$name = $_POST['q5-name'];
			$email = $_POST['q5-email'];
			$phone = $_POST['q5-tel'];

			$to = "demonex@bk.ru"; 
			$date = date ("d.m.Y"); 
			$time = date ("h:i");
			$from = "info@steel-fox.ru";
			$subject = "Заявка c сайта";

	
			$msg="
			Тип бизнеса: $business /n
			Объём: $volume /n
			Город: $city /n
			Индекс: $index /n
			Бренд: $brand /n
			Имя: $name /n
			Email: $email /n
			Телефон: $phone "; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p class="form-notification">Форма успешно отправлена.</p>