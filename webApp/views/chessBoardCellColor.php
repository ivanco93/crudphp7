<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Inicio</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js"></script>
        <script src="../js/webservice.js"></script>

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
    </head>

    <body>

        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="login-panel panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">Ejercicio de dos celdas del mismo color</h3>
                        </div>
                        <div class="panel-body">
                            <div class="col-md-5">
                                Dadas dos celdas de un tablero estandar de ajedrez, determine si estos son del mismo color.
                                <div class="loading col-xs-12" align="center" id="loading">
                                    <img src="../img/example.png">
                                </div>
                            </div>
                            <div class="col-md-5">
                                <form role="form" id="form" action="api/val_usuarios.php" method="post">
                                    <fieldset>
                                        <div class="form-group">
                                            <input class="form-control" placeholder="Ingrese celda 1" name="cell1" id="cell1" autofocus>
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" placeholder="Ingrese celda 2" name="cell2" id="cell2" value="">
                                        </div>
                                        <input type="button" class="btn btn-lg btn-success btn-block" value="Validar" onclick="validate()">
                                    </fieldset>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Mensaje</h4>
                        </div>
                        <div class="modal-body">
                            <p id="mgsToShow"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </body>
</html>