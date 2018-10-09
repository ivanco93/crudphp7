/***********************************************************/
 function pone_provs(){
         $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
            $("#pone_provs").html("Recuperando lista de proveedores...");
           },
          url: 'pone_provs.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#pone_provs").html(x);
            $(".select2").select2();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
     }
/************************************************************/
function pone_lineas(){
        $( document ).ready(function() {
          $.ajax({
          beforeSend: function(){
            $("#pone_lineas").html("Recuperando lista de lineas...");
           },
          url: 'pone_lineas.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#pone_lineas").html(x);
            $(".select2").select2();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
         }
/***************************************************************/
function pone_grupos(){
         $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
            $("#pone_grupos").html("Recuperando lista de grupos...");
           },
          url: 'pone_grupos.php',
          type: 'POST',
          data: 'linea='+$("#linea").val(),
          success: function(x){
            $("#pone_grupos").html(x);
            $(".select2").select2();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
         }
/***************************************************************/
function alta_cliente(){
          var id=$("#id").val();
          var nombre=$("#nombre").val();
          var domicilio=$("#domicilio").val();
          var telefono=$("#telefono").val();
          var ciudad=$("#ciudad").val();
          
          if(id==""||nombre==""||domicilio==""||telefono==""||ciudad=="0"){
            var n = noty({
                 text: "Completa la informacion del cliente...!",
                 theme: 'relax',
                 layout: 'center',
                 type: 'information',
                 timeout: 2000,
                 });
            return false;
            }
            $.ajax({
              beforeSend: function(){
               },
              url: 'save_cliente.php',
              type: 'POST',
              data: 'id='+id+'&nombre='+nombre+'&domicilio='+domicilio+'&telefono='+telefono+'&ciudad='+ciudad,

                /**************************/
              error: function(jqXHR,estado,error){
                var n = noty({
                 text: "Ocurrio un error al registrar el articulo, consulte a Soporte...!",
                 theme: 'relax',
                 layout: 'center',
                 type: 'information',
                 });
                }
             });
         }
/*******************************************************************************************/
function busca_cliente(){
         $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#btn-buscar").prop('disabled', true);
           },
          url: 'busca_cliente.php',
          type: 'POST',
          data: 'id='+$("#codigo_busqueda").val(),
          success: function(x){
              if(x==0){
               alert("El id del cliente, no existe...");
                $("#btn-buscar").prop('disabled', false);
                $("#codigo_busqueda").select();
                $("#codigo_busqueda").focus();
              }else{
              $("#info_articulo").html(x);
              $("#btn-procede-baja").prop('disabled', false);
              $("#btn-cancela-baja").prop("disabled", false);
              }
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
         }
/*******************************************************************************************/
function elimina_cliente(){
           var n = noty({
                  text: "Seguro que desea eliminar el cliente...?",
                  theme: 'relax',
                  layout: 'center',
                  type: 'information',
                  buttons     : [
                    {addClass: 'btn btn-primary',
                     text    : 'Si',
                     onClick : function ($noty){
                          $noty.close();
                        $.ajax({
          beforeSend: function(){

           },
          url: 'delete_cliente.php',
          type: 'POST',
          data: 'id='+$("#codigo_busqueda").val(),
          success: function(x){
             var n = noty({
              text: "Se elimino la informacion del cliente...!",
              theme: 'relax',
              layout: 'center',
              type: 'information',
              timeout: 2000,
            });
             cancela_eliminacion();
             lista_clientes();
           },
           error: function(jqXHR,estado,error){
           }
           });
                      }
                   },
                   {addClass: 'btn btn-danger',
                    text    : 'No',
                    onClick : function ($noty){
                       $noty.close();

                    }
                    }
                  ]
                  });
         }
/*************************************************************************************/
function cancela_eliminacion(){
           $("#info_articulo").empty();
           $("#id").val('');
           $("#btn-cancela-baja").prop('disabled', true);
           $("#btn-procede-baja").prop('disabled', true);
           $("#btn-buscar").prop('disabled', false);
           $("#id").focus();
         }
/****************************************************************************************/
function cancela_alta_cliente(){
    $("#id").val("");
    $("#nombre").val("");
    $("#domicilio").val("");
    $("#telefono").val("");
    $("#ciudad").val("");
    $("#id").focus();
}
/************************************************************************************/
function busca_cliente_cambio(){
         $(document).ready(function(){
          $.ajax({
          beforeSend: function(){
             $("#btn-buscar-cambio").prop('disabled', true);
           },
          url: 'busca_cliente_cambio.php',
          type: 'POST',
          data: 'id='+$("#codigo_busqueda_cambio").val(),
          success: function(x){
              if(x==0){
               alert("El id del cliente, no existe...");
                $("#btn-buscar-cambio").prop('disabled', false);
              }else{
              $("#codigo_busqueda_cambio").prop('disabled', true);
              $("#info_articulo_cambio").html(x);
              $(".cantidades").inputmask('mask',{'alias':'numeric','autogroup':true,'digits':2,'digitsOptional': false});
              $(".select2").select2();
           
              $("#btn-procede-cambio").prop('disabled', false);
              $("#btn-cancela-cambio").prop("disabled", false);
              $('#cambia_imagen').uploadify({
                          'buttonClass': 'btn btn-success',
                          'swf'      : 'plugins/uploadify/uploadify.swf',
                          'uploader' : 'uploadify.php',
                          'buttonText' : 'Cambiar imagen...',
                          'multi' : false,
                          'removeTimeout': 2,
                          'cancelImg' : 'plugins/uploadify/uploadify-cancel.png',
                          'checkExisting' : 'check-exists.php',
                          'onUploadStart' : function() {
                              $("#cambia_imagen").uploadify("settings", "formData", {'codigo' : $("#codigo_busqueda_cambio").val()});
                             },
                          'onUploadSuccess' : function(file, data, response){
                            var n = noty({
                                text: "Se actualizo la imagen a "+ file.name,
                                theme: 'relax',
                                layout: 'center',
                                type: 'information',
                                timeout: 3000,
                                });
                             }
                         });
              }
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
         }
/**************************************************************************************/
function cambia_grupos(){
         $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
           },
          url: 'cambia_grupos.php',
          type: 'POST',
          data: 'linea='+$("#linea_cambio").val(),
          success: function(x){
             if(x==0){

             }else{
               $("#grupo_para_cambiar").html(x);
               $(".select2").select2();
               }
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
         }
/************************************************************************************/
function procede_cambio(){
        var id=$("#codigo_busqueda_cambio").val();
        var nombre=$("#nombrec").val();
        var domicilio=$("#domicilioc").val();
        var telefono=$("#telefonoc").val();
        var ciudad=$("#ciudadc").val();

         $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#btn-procede-cambio").prop('disabled', true);
           },
          

          url: 'procede_cambio_cliente.php',
          type: 'POST',
          data: 'id='+id+'&nombre='+nombre+'&domicilio='+domicilio+'&telefono='+telefono+'&ciudad='+ciudad,


          success: function(x){
            if(x=='error'){
               var n = noty({
                                text: "Verifique los campos, no se realizo el cambio!",
                                theme: 'relax',
                                layout: 'center',
                                type: 'information',
                                timeout: 2000,
                                });
                                $("#btn-procede-cambio").prop('disabled', false);
               }else{
               var n = noty({
                                text: "Se actualizo el cliente!",
                                theme: 'relax',
                                layout: 'center',
                                type: 'information',
                                timeout: 2000,
                                });
               cancela_cambios();
               lista_clientes();
               }
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
         }
/*****************************************************************************/
function cancela_cambios(){
           $("#info_articulo_cambio").empty();
           $("#codigo_busqueda_cambio").val('');
           $("#codigo_busqueda_cambio").prop('disabled', false);
           $("#btn-cancela-cambio").prop('disabled', true);
           $("#btn-procede-cambio").prop('disabled', true);
           $("#btn-buscar-cambio").prop('disabled', false);
         }
/********************************************************************************/
     function anular(e) {
          tecla = (document.all) ? e.keyCode : e.which;
          return (tecla != 13);
     }
 /*****************************************************************************/
 function lista_clientes(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_clientes").html('<b>Actualizando lista de clientes...</b>');
           },
          url: 'lista_clientes.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_clientes").html(x);
            $("#tabla_clientes").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/