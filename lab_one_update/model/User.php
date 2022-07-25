<?php
require 'Connect.php';



function getAll() {
    $conn = connect();
    if ($conn) {

        $sql = "SELECT id, fullname, username, email, password FROM users";

        $res = mysqli_query($conn, $sql);

        $users = array();

        if ($res->num_rows > 0) {

            while($row = $res->fetch_assoc()) {
                array_push($users, $row);
            }

            return $users;
        }
    }

    return array();
}
?>