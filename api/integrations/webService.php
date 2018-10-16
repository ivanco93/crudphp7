<?php

header('Content-Type: text/xml; charset=UTF-8');
date_default_timezone_set('America/Bogota');
error_reporting(E_ERROR | E_WARNING | E_PARSE);
ini_set('display_errors', 0);

require_once("../libraries/nusoap-9/lib/nusoap.php");
require_once("../model.php");
$server = new soap_server();
$server->configureWSDL("PHP_Service", "http://localhost/crudphp7/api/integrations/webService.php?wsdl");

function createUserFromService($cedula, $name, $lname, $email, $phone) {
    $ReturnArray = createStudent($cedula, $name, $lname, $email, $phone);

    return $ReturnArray;
}

//Parametros de salida
$server->wsdl->addComplexType(
        'ReturnList', 'complextType', 'struct', 'sequence', '', array(
    'ReturnCode' => array('name' => 'ReturnCode', 'type' => 'xsd:int'),
    'ReturnDesc' => array('name' => 'ReturnDesc', 'type' => 'xsd:string')
        )
);
$typeReturns = array("return" => "tns:ReturnList");

$server->register("createUserFromService", array(
    "cedula" => "xsd:string", 
    "nombres" => "xsd:string", 
    "apellidos" => "xsd:string", 
    "email" => "xsd:string", 
    "telefono" => "xsd:string" 
    ), $typeReturns, "Creacion de usuarios");
$server->service(file_get_contents('php://input')); //fin