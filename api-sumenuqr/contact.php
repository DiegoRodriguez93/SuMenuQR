<?php

header('Access-Control-Allow-Origin: *');

$name       = $_POST['name'];
$lastName   = $_POST['lastName'];
$email      = $_POST['email'];
$cellphone  = $_POST['cellphone'];
$message_text    = $_POST['message'];

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$to_email   = 'diegorodriguez93@hotmail.com';
$subject    = 'MENSAJE DE SUMENUQR.NET';
$message     = '<b>Nombre:</b> ' . $name . ' ' . $lastName . '<br/>' ;
$message    .= '<b>Email:</b> ' . $email . ' <b>Celular:</b>' . $cellphone . '<br/>' ;
$message    .= '<b>Mensaje:</b> ' . $message_text . '<br/>' ;

mail($to_email,$subject,$message,$headers);

$res = array('result'=>true);

echo json_encode($res);