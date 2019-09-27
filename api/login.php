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
    $data = json_decode($postdata);

    $query = "SELECT * FROM usuarios WHERE email = '$data->email';";
    $resultado = $connect->query($query) or trigger_error($connect->error);

    if ($usuario = $resultado->fetch_assoc())  
    {
      if (password_verify($data->clave, $usuario["clave"]))
      {
        $salida = json_encode($usuario);
        echo $salida;
      }
    }
  }
?>