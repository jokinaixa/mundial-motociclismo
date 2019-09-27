<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');

  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

	$postdata = file_get_contents("php://input");

  if(isset($postdata) && !empty($postdata))
  {
    $usuario = json_decode($postdata);
    $clave = password_hash($usuario->clave, PASSWORD_DEFAULT);
   
    $query = "INSERT INTO usuarios (nombre, email, clave) VALUES ('$usuario->nombre', '$usuario->email', '$clave')";
    $connect->query($query) or trigger_error($connect->error);

    $salida = json_encode($usuario);
    echo $salida;
  }
?>