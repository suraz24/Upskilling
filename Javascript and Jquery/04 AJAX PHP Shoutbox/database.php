<?php
    //connect to mysql\
    $hostname = "localhost";
    $dbUsername = "root";
    $dbPass = "";
    $table = "jsshoutbox";
    $conn = mysqli_connect($hostname, $dbUsername, $dbPass, $table);

    if(mysqli_connect_errno()){
        echo 'Failed to connect: '.mysqli_connect_error();
    }
?>