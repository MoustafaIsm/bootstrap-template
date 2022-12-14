<?php
    header("Access-Control-Allow-Origin: http://127.0.0.1:5500 ");

    include("./connection.php");

    $query = $conn->prepare("SELECT full_name, message FROM messages");
    $query->execute();
    $result = $query->get_result();

    $response = [];

    while($row = $result->fetch_assoc()) {
        $response["messages"][] = $row;
    }

    echo json_encode($response);
?>