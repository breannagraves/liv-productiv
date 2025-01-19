<?php
$username = $_POST["username"];
$password = $_POST["password"];
$email = $_POST["email"];

//establish connection
$conn = new msqli('localhost', 'root', '', 'nodelogin');

$sql = "INSERT INTO accounts(username, password, email)
        VALUES('null','$username','$password','$email')";

        if($conn -> query($sql) === TRUE){
            // checking to see if query executed or not
            echo "Data Inserted";
        }
        else{
            echo "Error:".$sql."<br>"$conn->error;
        }



// if(!$conn) {
//     die("Connection failed: " . mysqli_connect_error());
// }

// $name = $_POST['name'];
// $email = $_POST['email'];
// $password = $_POST['password'];

// $sql = "INSERT INTO users (username, email, password) VALUES ('$name', '$email', '$password')";

// if(mysqli_query($conn, $sql)) {
//     echo "New user record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
// }

// mysqli_close($conn)
?>


