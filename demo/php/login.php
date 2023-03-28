<?php
require('connection.php');
$db=new dbconn();
$result=$db->loginCheck();
echo json_encode($result);
?>
