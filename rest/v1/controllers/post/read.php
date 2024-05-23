<?php
$conn = null;
$conn = checkDbConnection();
$post = new Post($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($post);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();