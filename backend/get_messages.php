<?php
    include("./connection.php");

    $query = $conn->prepare("SELECT full_name, message FROM messages");
    $query->execute();
    $result = $query->get_result();

    $response = [];

    while($row = $result->fetch_assoc()) {
        $response[] = $row;
    }

    echo json_encode($response);
?>