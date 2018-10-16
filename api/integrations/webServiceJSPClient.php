<?php

date_default_timezone_set('America/Bogota');
error_reporting(E_ERROR | E_WARNING | E_PARSE);
ini_set('display_errors', 0);
define("SERVER_WS", "http://localhost:8181/webServiceJSP/webServiceJava?wsdl"); //urlWebService

ini_set("soap.wsdl_cache_enabled", "0");
require_once 'libraries/nusoap-9/lib/nusoap.php';

class WSClient {

    private $cClient;
    private $timeOutRequest = "30";
    private $timeOutConexion = "30";

    function __construct() {
        $this->conectToSource();
    }

    public function conectToSource() {
        $this->cClient = new nusoap_client(SERVER_WS, array('exceptions' => 0, 'trace' => 1));
    }

    public function getConexion() {
        return $this->cClient;
    }

    public function validateChessColors($cell1, $cell2) {
        $response = array();

        $vParametros = array(
            "cell1" => $cell1, //string...
            "cell2" => $cell2, //string...
        );
        try {
            $result = $this->cClient->call('chessBoardCellColor', $vParametros);
            $response["result"] = 1;
            $response["message"] = $result["return"];
        } catch (\Exception $e) {
            throw new \Exception("Soup request failed! Response: " . $this->cClient->__getLastResponse());
        }

        return json_encode($response);
    }

}

?>