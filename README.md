# crudphp7

##Users database
CREATE TABLE `usuarios` (
  `cedula` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `nombres` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(150) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`cedula`);
