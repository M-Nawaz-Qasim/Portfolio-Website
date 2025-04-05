<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form data ko receive karna
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Admin email address
    $to = "nawazqasim007@gmail.com";
    $subject = "New Contact Form Submission";
    
    // Email body content
    $body = "You have received a new message from $name.\n\n".
            "Message: $message\n\n".
            "Email: $email";
    
    // Email headers
    $headers = "From: $email";
    
    // PHP mail function to send the email
    if(mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us. Your message has been sent!";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}
?>
