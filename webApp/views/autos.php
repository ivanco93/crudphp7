<?php
session_start();
header("Cache-control: private");
if (!isset($_SESSION["usridxxx"])) {
    header("Location: ../../index.php");
}
?>

<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Autos</title>

        <!-- Bootstrap Core CSS -->
        <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- MetisMenu CSS -->
        <link href="../vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="../dist/css/sb-admin-2.css" rel="stylesheet">


        <!-- Custom Fonts -->
        <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
        <link href="../dist/css/styles.css" rel="stylesheet">
    </head>

    <body>

        <div id="wrapper">

            <!-- Navigation -->
            <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">SB Admin v2.0</a>
                </div>
                <!-- /.navbar-header -->

                <?php
                include_once 'multicontent/top_menu.php';
                ?>

                <?php
                include_once 'multicontent/left_menu.php';
                ?>
                <!-- /.navbar-static-side -->
            </nav>

            <!-- Page Content -->
            <div id="page-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="page-header">Listado de autos</h1>
                        </div>
                        <!-- /.col-lg-12 -->
                    </div>
                    <div class="row">
                        <div class="col-lg-12" align="center">
                            <input type="button" class="btn btn-primary" value="Nuevo Auto" onclick="newRegister('autos')">
                        </div>
                        <!-- /.col-lg-12 -->
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <table id="example" class="table table-striped table-bordered" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Opciones</th>
                                        <th>Placa</th>
                                        <th>Marca</th>
                                        <th>Serie</th>
                                        <th>Modelo</th>
                                        <th>Kilometraje</th>
                                        <th>Capacidad</th>
                                    </tr>
                                </thead>
                                <tbody id="contentBody">
                                </tbody>
<!--                                <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                    </tr>
                                </tfoot>-->
                            </table>
                        </div>
                        <!-- /.col-lg-12 -->
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- /#page-wrapper -->
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Mensaje</h4>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="placa">Placa</label>
                                    <input type="text" class="form-control" id="placa" aria-describedby="placaHelp" placeholder="Placa" maxlength="7">
                                    <!--<small id="placaHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                                </div>
                                <div class="form-group">
                                    <label for="placa">Marca</label>
                                    <input type="text" class="form-control" id="marca" aria-describedby="marcaHelp" placeholder="Marca" maxlength="60">
                                </div>
                                <div class="form-group">
                                    <label for="placa">Serie</label>
                                    <input type="text" class="form-control" id="serie" aria-describedby="marcaHelp" placeholder="Serie" maxlength="40">
                                </div>
                                <div class="form-group">
                                    <label for="placa">Modelo</label>
                                    <input type="number" class="form-control" id="modelo" aria-describedby="modeloHelp" placeholder="Modelo" max="9999" min="1900">
                                </div>
                                <div class="form-group">
                                    <label for="placa">Kilometraje</label>
                                    <input type="number" class="form-control" id="kilometraje" aria-describedby="kilometrajeHelp" placeholder="Kilometraje" max="9999" min="1900">
                                </div>
                                <div class="form-group">
                                    <label for="placa">Capacidad</label>
                                    <input type="number" class="form-control" id="capacidad" aria-describedby="capacidadHelp" placeholder="Capacidad" max="9999" min="1900">
                                </div>
                                <div id="status" class="form-group loading" align="center">
                                    <img src="../dist/img/loading.gif" height="100">
                                </div>
                                <!--                                <button type="submit" class="btn btn-primary">Submit</button>-->
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" onclick="saveRegister('autos')">Guardar</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- /#wrapper -->

        <!-- jQuery -->
        <!-- jQuery -->
        <script src="../vendor/jquery/jquery.min.js"></script>

        <!-- Bootstrap Core JavaScript -->
        <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

        <!-- Metis Menu Plugin JavaScript -->
        <!--<script src="../vendor/metisMenu/metisMenu.min.js"></script>-->

        <!-- Custom Theme JavaScript -->
        <script src="../dist/js/sb-admin-2.js"></script>
        <script src="../js/scripts.js"></script>
        <!--<script src="https://code.jquery.com/jquery-3.3.1.js"></script>-->
        <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
        <script type="text/javascript">
                                $(document).ready(function () {
                                    $(document).ready(function () {
                                        listData("autos", "contentBody", "example");
                                    });

                                    $(document).on("change", ".menu_options", function () {
                                        console.log($(this).parent().attr("data-id"));
                                        setAction($(this).parent().attr("data-id"), $(this).val(), "autos");
                                    });
                                });
        </script>
    </body>

</html>
