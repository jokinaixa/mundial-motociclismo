<?php
    function retornarConexion()
    {
        $host = "localhost";
        $usuario = "root";
        $clave = "";
        $bbdd = "angular";
        
        $con = mysqli_connect($host, $usuario, $clave, $bbdd);
        return $con;
    }
?>
