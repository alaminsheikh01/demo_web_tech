<?php 
	session_start();

	if (isset($_SESSION['username'])) {
		header("Location: welcome.php");
	}
?>

<?php include "./view/partials/_nav.php";?>
<link href="style.css" rel="stylesheet">

<style>
    .form-custom {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 4%;
  
}
.button{
        background-color:black;
        color:white;
        cursor:pointer;
        padding:10px;
        font-weight:bold;
        border-radius:10%;

    }
</style>

<?php

$username = $password =  "";
$userNameError = $passwordError = "";


if ($_SERVER['REQUEST_METHOD'] === "POST") {

    function test_input($data) {
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }


$username = test_input($_POST['username']);
$password = test_input($_POST['password']);

$message = "";


if (empty($username)) {
    $userNameError = "UserName is Empty";
}
if (empty($password)) {
    $passwordError = "Password is Empty";   
}
else {
    echo $message;
}
}

?>

      <body>
  <div class="form-custom">
  <form method="post" action="./controller/admin/LoginAction.php" novalidate>
		<fieldset>
			<legend>Login</legend>

            <label for="Uname">UserName</label>
			<input type="text" name="username" id="Uname" required>
			<span style="color: red">*<?php echo $userNameError; ?></span>
		
			<br><br>

            <label for="password">Password</label>
			<input type="password" name="password" id="password" required>
			<span style="color: red">*<?php echo $passwordError; ?></span>

			<br><br>

		</fieldset>

		<input class="button" style="margin-top:10px" type="submit" name="submit" value="Login">
	</form>

  </div>
  <?php include "view/partials/footer.php"?>
 </body>
</html>