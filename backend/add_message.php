<?php
    include("./connection.php");

    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    $messaage = $_POST['message'];

    $query = $conn->prepare("INSERT INTO messages(full_name, email,	phone_number, message) VALUE (?, ?, ?, ?)");
    $query->bind_param("ssss", $fullName, $email, $phoneNumber, $messaage);
    $query->execute();

    $response["result"] = "successful";

    echo json_encode($response);
?>