<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Inicio</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js"></script>

    <style type="text/css">
        .wrapper{
            width: 650px;
            margin: 0 auto;
        }
        .page-header h2{
            margin-top: 0;
        }
        table tr td:last-child a{
            margin-right: 15px;
        }
    </style>
 

    <script type="text/javascript">

        function addEmpleado() {
           $('#nuevoempleado').load('');
        }

        function viewEmpleado(id) {
           $('#vistaempleado').load('');
        }

        function validar(){
           if (confirm("Realmente desea eliminar este empleado?", "BeProx")){
            return true;
           } else {
            return false;
           }
        }

    </script>
</head>

<body>
    <div class="wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header clearfix">
                        <h2 class="pull-left">Empleados - Detalles</h2>
                        <button type="button" class="btn btn-success pull-right" title="Nuevo empleado" data-toggle="modal" data-target="#newempleado" onclick="addEmpleado();"><i class="fa fa-check-circle"></i>Nuevo empleado</button>
                    </div>
                    
                    
                </div>
            </div>        
        </div>
    </div>


   <!-- MODAL PARA INSERTAR UN NUEVO EMPLEADO -->
    
<div id="newempleado" class="modal" style="overflow-y: scroll;" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="NuevoEmpleado" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><b>Registro de nuevo empleado</b></h4>
      </div>
      <div class="modal-body">
        <div id="nuevoempleado">
          
        </div>
     </div>
    </div>
  </div>
</div>

<div id="viewempleado" class="modal" style="overflow-y: scroll;" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="NuevoEmpleado" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><b>Vista registro de empleado</b></h4>
      </div>
      <div class="modal-body">
        <div id="vistaempleado">
          
        </div>
     </div>
    </div>
  </div>
</div>



<div id="updateempleado" class="modal" style="overflow-y: scroll;" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="NuevoEmpleado" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><b>Actualizar registro de un empleado</b></h4>
      </div>
      <div class="modal-body">
        <div id="modificarempleado">
          
        </div>
     </div>
    </div>
  </div>
</div>






</body>
</html>