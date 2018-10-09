<?php

class database {
    
    private $conexion = null;
    
    private $host;
    private $user;
    private $password;
    private $db;
    
    function __construct() {
       $this->host = "localhost";
       $this->user = "root";
       $this->password = "";
       $this->db = "clase";
    }
    
    private function getHost() {
        return $this->host;
    }

    private function getUser() {
        return $this->user;
    }

    private function getPassword() {
        return $this->password;
    }

    private function getConexion(){
        if($this->conexion==null){
            $this->conexion = mysqli_connect($this->host, $this->user, $this->password, $this->db) or die("Problemas en la conexion");
        }
        
        return $this->conexion;
    }
    
    public function insert($table_name, $fields){
        $query_string = "";
        $insert_fields = "";
        $insert_values = "";
        foreach ($fields as $key => $value) {
            $insert_fields.=$key . ",";
            $insert_values.="\"" . $value . "\",";
        }
        
        $insert_fields = substr($insert_fields, 0, -1);
        $insert_values = substr($insert_values, 0, -1);
        $query_string.= "INSERT INTO {$table_name} ({$insert_fields}) values ({$insert_values})";
//        echo $query_string;
        $results = mysqli_query($this->getConexion(), $query_string);
        $this->closeConnection();
        
        return $results;
    }
    
    public function select($table_name, $fields, $where=array()){
        $query_string = "";
        $select_where = "";
        $select_fields = "";
        
        if(sizeof($where)>0){
            foreach ($where as $key => $value) {
                $select_where.=$key."=\"{$value}\" AND ";
            }
            $select_where = substr($select_where, 0, -4);
        }else{
            $select_where = "1=1";
        }
        
        foreach ($fields as $value) {
            $select_fields.= $value . ",";
        }
        
        $select_fields = substr($select_fields, 0, -1);
        
        $query_string = "SELECT {$select_fields} FROM {$table_name} WHERE {$select_where}";
        $results = mysqli_query($this->getConexion(), $query_string);
        $this->closeConnection();

        return $results;
    }
    
    public function delete($table_name, $registerId){
        $query_string = "DELETE FROM {$table_name} WHERE id = {$registerId}";
        $results = mysqli_query($this->getConexion(), $query_string);
        $this->closeConnection();
        return $results;
    }
    
    private function closeConnection(){
        mysqli_close($this->getConexion());
        $this->conexion = null;
    }
}


//echo "Total->" . mysqli_num_rows($results) . "\n";
//        echo "Datos\n<pre>";
//        print_r(mysqli_fetch_array($results));
//        echo "</pre>";
//        echo "Error->" .  mysqli_error($this->getConexion()) .  "\n";