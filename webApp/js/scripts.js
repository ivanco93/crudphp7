var abs_path = "/sbadmin2/api/";
function validate() {
    $("#loading").show();
    var xhttp = new XMLHttpRequest();
    var data = new FormData();
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if (password.trim() == "" || user.trim() == "") {
        modalMsg("Asegurese de ingresar usuario y contraseña");
        $("#loading").hide();
    } else {
        data.append("action", "loginin");
        data.append("user", user);
        data.append("password", password);
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText == 0) {
                    window.location = "webApp/views/inicio.php";
                } else {
                    modalMsg("Usuario no valido");
                    $("#loading").hide();
                }
            }
        };
        xhttp.open("POST", "api/controller.php", true);
        xhttp.send(data);
    }
}

function listData(tbData, tbBody, table) {
    $("#loading").show();
    var xhttp = new XMLHttpRequest();
    var data = new FormData();
    data.append("action", "list" + tbData);
    xhttp.onreadystatechange = function () {
        $("#" + tbBody).html(this.responseText);
        $('#' + table).DataTable();
    };
    xhttp.open("POST", abs_path + "controller.php", true);
    xhttp.send(data);
}

function modalMsg(msg) {
    $("#mgsToShow").html(msg);
    $("#myModal").modal();
}

function newRegister(type) {
    $("#myModal").modal();
}

function saveRegister(type) {
    $("#status").show();
    var xhttp = new XMLHttpRequest();
    var data = new FormData();
    var placa = document.getElementById("placa").value;
    var marca = document.getElementById("marca").value;
    var serie = document.getElementById("serie").value;
    var modelo = document.getElementById("modelo").value;
    var kilometraje = document.getElementById("kilometraje").value;
    var capacidad = document.getElementById("capacidad").value;
    if (placa.trim() == "") {
        alert("Ingrese placa");
        $("#status").hide();
        return;
    }
    if (marca.trim() == "") {
        alert("Ingrese marca");
        $("#status").hide();
        return;
    }
    if (serie.trim() == "") {
        alert("Ingrese serie");
        $("#status").hide();
        return;
    }
    if (modelo.trim() == "") {
        alert("Ingrese modelo");
        $("#status").hide();
        return;
    }
    if (kilometraje.trim() == "") {
        alert("Ingrese kilometraje");
        $("#status").hide();
        return;
    }
    if (capacidad.trim() == "") {
        alert("Ingrese capacidad");
        $("#status").hide();
        return;
    }
    data.append("action", "save"+type);
    data.append("placa", placa);
    data.append("marca", marca);
    data.append("serie", serie);
    data.append("modelo", modelo);
    data.append("kilometraje", kilometraje);
    data.append("capacidad", capacidad);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == 0) {
//                window.location = "webApp/views/inicio.php";
                alert("Registro creado con exito");
                $('#myModal').modal('hide');
                listData("autos", "contentBody", "example");
            } else {
                alert(this.responseText);
                $("#status").hide();
            }
        }
    };
    xhttp.open("POST", abs_path + "controller.php", true);
    xhttp.send(data);
}

function setAction(id, value, type){
    switch (value) {
        case "DELETE":
            if(confirm("Esta seguro que desea eliminar este registro?")){
                deleteRegister(id, type);
            }
            break;
            
        default:
            console.log("undefined: "+value);
            break;
    }
}

function deleteRegister(id, type){
    var xhttp = new XMLHttpRequest();
    var data = new FormData();
    data.append("id", id);
    data.append("type", type);
    data.append("action", "delete");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText == 0) {
                alert("Registro eliminado con exito");
                listData(type, "contentBody", "example");
            } else {
                alert(this.responseText);
            }
        }
    };
    xhttp.open("POST", abs_path + "controller.php", true);
    xhttp.send(data);
}

function createUsers() {
    document.getElementById("content").innerHTML = "<img src='images/AjaxLoader.gif' width='180' height='180'>";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "crear_alumno.php", true);
    xhttp.send();
}

function listUsers() {
    document.getElementById("content").innerHTML = "<img src='images/AjaxLoader.gif' width='180' height='180'>";
    var xhttp = new XMLHttpRequest();
    var data = new FormData();
    data.append("action", "listusers");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "controller.php", true);
    xhttp.send(data);
}

function createStudent() {
    var msg = "";
    var cedula = document.getElementById("alumno_cedula").value;
    var nombre = document.getElementById("alumno_nombre").value;
    var apellido = document.getElementById("alumno_apellidos").value;
    var correo = document.getElementById("alumno_correos").value;
    var telefono = document.getElementById("alumno_telefono").value;
    var usuario = document.getElementById("alumno_usuario").value;
    var contrasena = document.getElementById("alumno_contrasena").value;
    var confirma = document.getElementById("alumno_confirma").value;

    if (confirma.trim() != contrasena.trim())
        msg = "Las contrase�as no coinciden";
    if (confirma.trim() == "")
        msg = "Debe confirmar contrase�a";
    if (contrasena.trim() == "")
        msg = "Debe ingresar contrase�a";
    if (usuario.trim() == "")
        msg = "Debe ingresar usuario";
    if (telefono.trim() == "")
        msg = "Debe ingresar telefono";
    if (correo.trim() == "")
        msg = "Debe ingresar correo";
    if (apellido.trim() == "")
        msg = "Debe ingresar apellido";
    if (nombre.trim() == "")
        msg = "Debe ingresar nombre";
    if (cedula.trim() == "")
        msg = "Debe ingresar cedula";

    if (msg != "") {
        alert(msg);
        return;
    }

    var xhttp = new XMLHttpRequest();
    var data = new FormData();
    data.append("action", "createStudent");
    data.append("cedula", cedula);
    data.append("nombres", nombre);
    data.append("apellidos", apellido);
    data.append("correo", correo);
    data.append("telefono", telefono);
    data.append("usuario", usuario);
    data.append("password", contrasena);

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resultado = this.responseText;
            switch (resultado) {
                case "0":
                    alert("Usuario registrado");
                    listUsers();
                    break;
                default:
                    alert(resultado);
                    break;
            }
        }
    };
    xhttp.open("POST", "controller.php", true);
    xhttp.send(data);
}