<?php
    $from = "mail@trulygorgeous.co.uk";
    $to = "mail@trulygorgeous.co.uk";
    $subject = "NEW BRIDES ENQUIRES";
    $name =  $_POST["name"];
    $from2 = $_POST["from2"];
    $phone = $_POST["phone"];
    $weddingDate = $_POST["weddingDate"];
    $appointmentDate =  $_POST["appointmentDate"];
    $details = $_POST["details"];
    $message = "Name: " . $name . "\nMail: " . $from2 . "\nPhone: " . $phone . "\nWedding Date: " . $weddingDate . "\nAppointment Date: " . $appointmentDate . "\nDetails: " . "\n" .  $details;
    $headers = "From:" . $from2;
    mail($to,$subject,$message, $headers);
    header("Location:sentmessage.html");
?>