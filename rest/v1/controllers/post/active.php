<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Post.php';

$conn = null;
$conn = checkDbConnection();

$post = new Post($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("postid", $_GET)) {

        checkPayload($data);
        $post->post_aid = $_GET['postid'];
        $post->post_is_active = trim($data["isActive"]);
        $post->post_datetime = date("Y-m-d H:i:s");
        checkId($post->post_aid);
        $query = checkActive($post);
        http_response_code(200);
        returnSuccess($post, "post", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();