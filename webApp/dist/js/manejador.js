 /*****************************************************************************/
 function lista_autos(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_autos").html('<b>Actualizando lista de autos...</b>');
           },
          url: 'lista_autos.aspx',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_autos").html(x);
            $("#tabla_autos").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/