<?php
    include "crud.php";
    $crud = new Crud();
    
    $logindata = json_decode(file_get_contents("php://input"));

    if (sizeof($logindata) != 0)
    {
        $errors = "";

        $email = $logindata->email;
        $password = $logindata->password;
        
        $query = "SELECT nombre, password FROM usuarios where email = '$logindata->email'";
        $data = $crud->getData($query);

        if ($data[0]["password"] == $password)
        {        
            echo json_encode($data[0]);
        }
    }
?>