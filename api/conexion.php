<?php
    function retornarConexion()
    {
        $con = mysqli_connect("localhost", "root", "", "angular");
        return $con;
    }
?>
