CREATE TABLE pilotos
(
id_piloto INT NOT NULL AUTO_INCREMENT,
nombre VARCHAR(255),
imagen VARCHAR(255),
edad INT(3),
PRIMARY KEY (id_piloto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO pilotos VALUES (1, "Marc Marquez", "sin_imagen.jpg", 23);
INSERT INTO pilotos VALUES (2, "Jorge Lorenzo", "sin_imagen.jpg", 25);
INSERT INTO pilotos VALUES (3, "Valentino Rossi", "sin_imagen.jpg", 41);


CREATE TABLE circuitos
(
id_circuito INT NOT NULL AUTO_INCREMENT,
nombre VARCHAR(255),
pais VARCHAR(255),
localidad VARCHAR(255),
longitud DECIMAL(5),
imagen VARCHAR(255),
PRIMARY KEY (id_circuito)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO circuitos VALUES (1, "Gran premio de Catalunya", "España", "Montmelo", 5345, "sin_imagen.jpg");
INSERT INTO circuitos VALUES (2, "Gran premio de la Comunidad Valenciana", "España", "Cheste", 5125, "sin_imagen.jpg");
INSERT INTO circuitos VALUES (3, "Gran premio de España", "España", "Jerez", 5345, "sin_imagen.jpg");


CREATE TABLE equipos
(
id_equipo INT NOT NULL AUTO_INCREMENT,
id_piloto INT NOT NULL,
nombre VARCHAR(255),
moto VARCHAR(255),
imagen VARCHAR(255),
PRIMARY KEY (id_equipo),
INDEX (id_piloto),
FOREIGN KEY (id_piloto) REFERENCES pilotos(id_piloto) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO equipos VALUES (1, 1, "Repsol Honda Team", "Honda", "sin_imagen.jpg");
INSERT INTO equipos VALUES (2, 2, "Repsol Honda Team", "Honda", "sin_imagen.jpg");
INSERT INTO equipos VALUES (3, 3, "Monster Energy Yamaha MotoGP", "Yamaha", "sin_imagen.jpg");


CREATE TABLE clasificacion
(
id_clasificacion INT NOT NULL AUTO_INCREMENT,
id_circuito INT NOT NULL,
id_piloto INT NOT NULL,
ano DATE,
tipo VARCHAR(255),
categoria VARCHAR(8),
posicion INT(1),
PRIMARY KEY (id_clasificacion),
INDEX (id_circuito, id_piloto),
FOREIGN KEY (id_circuito) REFERENCES circuitos(id_circuito) ON DELETE CASCADE,
FOREIGN KEY (id_piloto) REFERENCES pilotos(id_piloto) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;





CREATE TABLE usuarios
(
id_usuario INT NOT NULL AUTO_INCREMENT,
nombre VARCHAR(255),
email VARCHAR(255),
clave VARCHAR(8),
PRIMARY KEY (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO usuarios VALUES (1, "Jokin Aixa", "jokinaixa@hotmail.com", 1234);
INSERT INTO usuarios VALUES (2, "Inma Paramio", "amni_26@hotmail.com", 2244);