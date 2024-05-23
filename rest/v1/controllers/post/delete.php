<?php
$conn = null;
$conn = checkDbConnection();
$post = new Post($conn);

$error = [];
$returnData = [];
if (array_key_exists("postid", $_GET)) {
    $post->post_aid = $_GET['postid'];
    checkId($post->post_aid);

    $query = checkDelete($post);
    returnSuccess($post, "post", $query);
}

checkEndpoint();