 /*****************************************************************************/
 function lista_proveedor(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_proveedor").html('<b>Actualizando lista de proveedores...</b>');
           },
          url: 'lista_proveedores.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_proveedor").html(x);
            $("#tabla_proveedor").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/
function lista_productos(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_productos").html('<b>Actualizando lista de productos...</b>');
           },
          url: 'lista_productos.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_productos").html(x);
            $("#tabla_productos").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/

 function lista_productosproveedoresprecios(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_proveedor").html('<b>Actualizando lista de productos...</b>');
           },
          url: 'lista_productosproveedoresprecios.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_productosproveedores").html(x);
            $("#tabla_productosproveedores").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }

 function lista_productosproveedores(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_proveedor").html('<b>Actualizando lista de articulos...</b>');
           },
          url: 'lista_productosproveedores.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_productosproveedores").html(x);
            $("#tabla_productosproveedores").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/


function lista_repositorio(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_repositorio").html('<b>Actualizando Repositorio...</b>');
           },
          url: 'lista_repositorio.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_repositorio").html(x);
            $("#tabla_repositorio").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }

function lista_tipospptos(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_tipospptos").html('<b>Actualizando lista de grupos...</b>');
           },
          url: 'lista_tipospptos.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_tipospptos").html(x);
            $("#tabla_tipospptos").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 
 /**********************************************************************************/
  function lista_historicoCotizacion(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_historicos").html('<b>Actualizando Histórico...</b>');
           },
          url: 'lista_cotizacionesHistorico.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_historicos").html(x);
            $("#tabla_cotizaionesh").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }

  /*********************************************************************************/
  function lista_cotizaciones(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_solicitudes").html('<b>Actualizando Notificaciones...</b>');
           },
          url: 'lista_cotizaciones.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_solicitudes").html(x);
            $("#tabla_solicitudes").dataTable();
            
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/


 function lista_ordenesrecibidas(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_solicitudes").html('<b>Actualizando lista de ordenes recibidas...</b>');
           },
          url: 'lista_ordenesrecibidas.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_solicitudes").html(x);
            $("#tabla_ordenesrecibidas").dataTable();
            
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/


function lista_notificaciones(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_grupos").html('<b>Actualizando Notificaciones...</b>');
           },
          url: 'lista_notificaciones.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_grupos").html(x);
            $("#tabla_grupos").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
/***********************************************************************************/



function lista_noticias(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_noticias").html('<b>Actualizando lista de noticias...</b>');
           },
          url: 'lista_noticias.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_noticias").html(x);
            $("#tabla_noticias").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
/***********************************************************************************/


 function lista_grupos(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_grupos").html('<b>Actualizando lista de grupos...</b>');
           },
          url: 'lista_grupos.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_grupos").html(x);
            $("#tabla_grupos").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/

 function lista_periodos(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_periodos").html('<b>Actualizando lista de periodos...</b>');
           },
          url: 'lista_periodos.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_periodos").html(x);
            $("#tabla_periodos").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/
 function lista_areas(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_areas").html('<b>Actualizando lista de áreas...</b>');
           },
          url: 'lista_areas.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_areas").html(x);
            $("#tabla_areas").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/

  function lista_cargos(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_cargos").html('<b>Actualizando lista de cargos...</b>');
           },
          url: 'lista_cargos.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_cargos").html(x);
            $("#tabla_cargos").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/


  function lista_presupuesto(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_presupuesto").html('<b>Actualizando lista de presupuesto...</b>');
           },
          url: 'lista_presupuesto.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_presupuesto").html(x);
            $("#tabla_presupuesto").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/

  function lista_ingresos(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_ingresos").html('<b>Actualizando lista de ingresos...</b>');
           },
          url: 'lista_ingresos.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_ingresos").html(x);
            $("#tabla_ingresos").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/

  function lista_solicitudes(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_solicitudes").html('<b>Actualizando lista de solicitudes...</b>');
           },
          url: 'lista_solicitudes.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_solicitudes").html(x);
            $("#tabla_solicitudes").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/
 function ver_productos(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#ver_productos").html('<b>Actualizando lista de productos...</b>');
           },
          url: 'seleccionar_productos.php',
          type: 'POST',
          data: 'Grupo='+$("#Grupo").val(),
          success: function(x){
            $("#ver_productos").html(x);
            $("#tabla_productos1").dataTable();
           },
           error: function(jqXHR,estado,error){}});
          });
 }
 /**********************************************************************************/

 function seleccionar_proveedor(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#seleccionar_proveedor").html('<b>Actualizando lista de solicitudes...</b>');
           },
          url: 'lista_selproveedores.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#seleccionar_proveedor").html(x);

            $("#tabla_solicitudes").dataTable();
           },
           error: function(jqXHR,estado,error){}});
          });
        
 }
 /**********************************************************************************/

/************************************************************************************/
 function lista_empleado(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_empleado").html('<b>Actualizando lista de empleados...</b>');
           },
          url: 'lista_empleados.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_empleado").html(x);

            $("#tabla_empleados").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });


 }
 /**********************************************************************************/


 function lista_usuarios(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_usuario").html('<b>Actualizando lista de usuarios...</b>');
           },
          url: 'lista_usuarios.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_usuario").html(x);
            $("#tabla_usuarios").dataTable();
           },
           error: function(jqXHR,estado,error){}
           });
          });
 }
 /**********************************************************************************/


  function lista_solicitudesa(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_solicitudes").html('<b>Actualizando lista de solicitudes...</b>');
           },
          url: 'lista_solicitudesa.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_solicitudes").html(x);
            $("#tabla_solicitudes").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }
 /**********************************************************************************/

 function lista_documentos(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_documentos").html('<b>Actualizando lista de documentos...</b>');
           },
          url: 'lista_documentos.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_documentos").html(x);
            $("#tabla_documentos").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
      });
 }


 function lista_subastasAplicadas(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_subastas").html('<b>Actualizando lista de solicitudes...</b>');
           },
          url: 'lista_subastasAplicadas.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_subastas").html(x);
            $("#tabla_solicitudes").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
      });
 }

 function lista_subastas(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_subastas").html('<b>Actualizando lista de solicitudes...</b>');
           },
          url: 'lista_subastas.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_subastas").html(x);
            $("#tabla_solicitudes").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
      });
 }

function lista_ordenesprefacturas(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_subastas").html('<b>Actualizando lista de Órdenes...</b>');
           },
          url: 'lista_prefacturas.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_solicitudes").html(x);
            $("#tabla_solicitudes").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
      });
 
}

 function lista_documentosOrden(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_solicitudes").html('<b>Actualizando lista de Órdenes...</b>');
           },
          url: 'lista_repositorioProveedor.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_solicitudes").html(x);
            $("#tabla_solicitudes").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
      });
 
}

function lista_ordenesAdjudicadas(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_solicitudes").html('<b>Actualizando lista de Órdenes...</b>');
           },
          url: 'lista_ordenesAdjudicadas.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_solicitudes").html(x);
            $("#tabla_solicitudes").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
      });
 
}

function lista_ordenesRecibir(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_solicitudes").html('<b>Actualizando lista de Órdenes...</b>');
           },
          url: 'lista_ordenesRecibir.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_solicitudes").html(x);
            $("#tabla_solicitudes").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
      });
 
}


 function lista_factura(){
    $(document).ready(function() {
      $.ajax({
      beforeSend: function(){
         $("#lista_factura").html('<b>Actualizando lista de facturas...</b>');
       },
      url: 'lista_factura.php',
      type: 'POST',
      data: null,
      success: function(x){
        $("#lista_factura").html(x);
        $("#tabla_registrofactura").dataTable();
       },
       error: function(jqXHR,estado,error){
       }
       });
    });
 }

/**********************************************************************************/

 function lista_registrofactura(){
    $(document).ready(function() {
      $.ajax({
      beforeSend: function(){
         $("#lista_registrofactura").html('<b>Actualizando lista de factura...</b>');
       },
      url: 'lista_registrofactura.php',
      type: 'POST',
      data: null,
      success: function(x){
        $("#lista_registrofactura").html(x);
        $("#tabla_registrofactura").dataTable();
       },
       error: function(jqXHR,estado,error){
       }
       });
    });
 }




 function lista_document(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_document").html('<b>Actualizando lista de documentos...</b>');
           },
          url: 'lista_document.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_document").html(x);
            $("#tabla_document").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
      });
 }



 function lista_usuariosp(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_usuario").html('<b>Actualizando lista de usuarios...</b>');
           },
          url: 'lista_usuarios_prov.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_usuario").html(x);
            $("#tabla_usuarios").dataTable();
           },
           error: function(jqXHR,estado,error){}
           });
          });
 }
 /**********************************************************************************/



 function lista_tiposdocumentos(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_tiposdocumentos").html('<b>Actualizando lista de tipos de documentos...</b>');
           },
          url: 'lista_tiposdocumentos.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_tiposdocumentos").html(x);
            $("#tabla_tiposdocumentos").dataTable();
           },
           error: function(jqXHR,estado,error){}
           });
          });
 }
 /**********************************************************************************/


 function lista_formaspago(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_formaspago").html('<b>Actualizando lista de formas de pago...</b>');
           },
          url: 'lista_formaspago.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_formaspago").html(x);
            $("#tabla_formaspago").dataTable();
           },
           error: function(jqXHR,estado,error){}
           });
          });
 }
 /**********************************************************************************/
 function lista_auditoria(){
    $(document).ready(function() {
      $.ajax({
      beforeSend: function(){
         $("#lista_auditoria").html('<b>Actualizando actividades de usuarios...</b>');
       },
      url: 'lista_auditoria.php',
      type: 'POST',
      data: null,
      success: function(x){
        $("#lista_auditoria").html(x);
        $("#tabla_auditoria").dataTable();
       },
       error: function(jqXHR,estado,error){
       }
       });
    });
 }

 /**********************************************************************************/

 function list_proveedores(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_proveedor").html('<b>Actualizando lista de proveedores...</b>');
           },
          url: 'list_proveedores.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_proveedor").html(x);
            $("#tabla_proveedor").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }


 function lista_criterios(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_criterios").html('<b>Actualizando lista de criterios...</b>');
           },
          url: 'lista_criterios.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_criterios").html(x);
            $("#tabla_criterios").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }


  /**********************************************************************************/


function lista_evaluaciones(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_evaluaciones").html('<b>Actualizando lista de evaluaciones...</b>');
           },
          url: 'lista_evaluaciones.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_evaluaciones").html(x);
            $("#tabla_evaluaciones").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }


  /**********************************************************************************/



function lista_evaluacionesp(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_evaluaciones").html('<b>Actualizando lista de evaluaciones...</b>');
           },
          url: 'lista_evaluacionesp.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_evaluaciones").html(x);
            $("#tabla_evaluaciones").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }


  /**********************************************************************************/


function lista_compromisos(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_compromisos").html('<b>Actualizando lista de compromisos...</b>');
           },
          url: 'lista_compromisos.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_compromisos").html(x);
            $("#tabla_compromisos").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }


  /**********************************************************************************/



function lista_normativa(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_normativa").html('<b>Actualizando lista de normativas...</b>');
           },
          url: 'lista_normativa.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_normativa").html(x);
            $("#tabla_normativa").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }


  /**********************************************************************************/




function lista_normativas(){
    $(document).ready(function() {
          $.ajax({
          beforeSend: function(){
             $("#lista_normativa").html('<b>Actualizando lista de normativas...</b>');
           },
          url: 'lista_normativas.php',
          type: 'POST',
          data: null,
          success: function(x){
            $("#lista_normativa").html(x);
            $("#tabla_normativa").dataTable();
           },
           error: function(jqXHR,estado,error){
           }
           });
          });
 }


  /**********************************************************************************/

