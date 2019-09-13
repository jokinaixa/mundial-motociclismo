<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $connect = retornarConexion();
  mysqli_set_charset($connect, "utf8");

	$postdata = file_get_contents("php://input");

  if(isset($postdata) && !empty($postdata))
  {
    $equipo = json_decode($postdata);
 
    $query = "UPDATE equipos SET nombre = '$equipo->nombre', moto = '$equipo->moto', imagen = '$equipo->imagen' WHERE id = $_GET[id]";
    $result = $connect->query($query) or trigger_error($connect->error);

    echo $result;
  }
  
  header('Content-Type: application/json');
?>