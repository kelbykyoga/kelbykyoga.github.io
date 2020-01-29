<?php
  	$name = $_POST['name'];
  	$visitor_email = $_POST['email'];
 	$message = $_POST['comment'];
	$email_from = 'kelbykyoga@kelbykyoga.com';
	$email_subject = "Contact from Website";
	$email_body = "You have received a new message from the user $name.\n".
					+ "Email $visitor_email.\n".
                    + "Comments: $message".;
 	$to = "jacegummersall@gmail.com";
 	//$to = "kelbykyoga@gmail.com";
  	$headers = "From: $email_from \r\n";
  	$headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);
?>