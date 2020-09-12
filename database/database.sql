CREATE DATABASE partidos_db;

USE partidos_db;

CREATE TABLE equipos(
    id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pos INT(5),
    equipo VARCHAR(20),
    puntos INT(5)
);

DESCRIBE equipos;