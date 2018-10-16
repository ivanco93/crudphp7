/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var abs_path = "/crudphp7/api/";

function formularioWsJSP() {
    document.location.href = "views/chessBoardCellColor.php";
}

function validate() {
    $.ajax({
        type: "POST",
        url: abs_path + "controller.php",
        data: {action: "JSPService", cell1: $("#cell1").val(), cell2: $("#cell2").val()},
        dataType: 'JSON',
        success: function (result) {
            var isTrueSet = (result.message == 'true');
            var respuesta = isTrueSet?"Las dos celdas ingresadas son del mismo color": "Las celdas ingresadas no son del mismo color" 
            alert(respuesta);
        }
    });
}