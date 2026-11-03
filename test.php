<?php

header("Content-Type: application/json");

include "../config/db.php";

echo json_encode([
    "success" => true,
    "message" => "PHP and MySQL connection successful"
]);

?>