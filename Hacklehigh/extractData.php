<?php
// database connection code
if(isset($_POST['txtName']))
{
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','db_userRequest');

// get the post records

$txtName = $_POST['txtName'];
$txtEmail = $_POST['txtEmail'];
$txtPhone = $_POST['txtPhone'];
$txtFromLoc = $_POST['txtFromLoc'];
$txtToLoc = $_POST['txtToLoc'];
$txtTime = $_POST['txtTime'];

// database insert SQL code
$sql = "SELECT * FROM `tbl_userrequest`;";

// insert in database 
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Are you sure";
}
}
else
{
	echo "Extracted Data";
	
}
?>