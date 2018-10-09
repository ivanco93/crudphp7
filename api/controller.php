<?php

session_start();
//ini_set("error_reporting", 0);

include_once 'model.php';

$_POST['action'] = "loginin";
switch ($_POST['action']) {
    case "loginin":
        $sesion = validateSession($_POST['user'], $_POST['password']);
        if ($sesion['result'] == 0) {
            $_SESSION['usridxxx'] = $sesion['usridxxx'];
            $_SESSION['perfilxx'] = $sesion['perfilxx'];
        }

        echo $sesion['result'];
        break;
    case "createStudent":
        $resultados = array(
            0,
            "Error al crear alumno",
            "La cedula " . $_POST['cedula'] . " ya se encuentra registrada",
            "Error al crear usuario",
            "El usuario " . $_POST['usuario'] . " ya fue creado anteriormente"
        );

        $creacion = createStudent($_POST['cedula'], $_POST['nombres'], $_POST['apellidos'], $_POST['correo'], $_POST['telefono'], $_POST['usuario'], $_POST['password']);

        echo $resultados[$creacion['result']];

        break;
    case "saveautos":
        $resultados = array(
            0,
            "Error al crear auto",
            "La placa " . $_POST['placa'] . " ya se encuentra registrada",
            "Error al crear auto"
        );

        $creacion = createAuto($_POST['placa'], $_POST['marca'], $_POST['serie'], $_POST['modelo'], $_POST['kilometraje'], $_POST['capacidad']);

        echo $resultados[$creacion['result']];

        break;
    case "listusers":
        echo listusers();
        break;
    case "listautos":
        echo listautos();
        break;
    case "delete":
        $resultados = array(
            0,
            "No fue posible eliminar registro"
        );
        $deleteRegister = deleteRegister($_POST['id'], $_POST['type']);
        echo !isset($resultados[$deleteRegister])?$resultados[1]:$resultados[$deleteRegister];
        break;
    default :
        break;
}