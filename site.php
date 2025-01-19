<?php
$question1 = $_POST["question1"];
$question2 = $_POST["question2"];
$question3 = $_POST["question3"];
$question4 = $_POST["question4"];
$question5 = $_POST["question5"];

//establish connection
$conn = new msqli('localhost', 'root', '', 'nodelogin');

$sql = "INSERT INTO goals(question1, question2, question3, question4, question5)
        VALUES('$question1','$question2','$question3','$question4',$question5')";

        if($conn -> query($sql) === TRUE){
            // checking to see if query executed or not
            echo "Data Inserted";
        }
        else{
            echo "Error:".$sql."<br>"$conn->error;
        }

?>