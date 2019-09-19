-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-09-2019 a las 18:03:37
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `angular`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `circuitos`
--

CREATE TABLE `circuitos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `pais` varchar(2) COLLATE utf8_spanish_ci NOT NULL,
  `localidad` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `longitud` decimal(5,0) NOT NULL,
  `imagen` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `circuitos`
--

INSERT INTO `circuitos` (`id`, `nombre`, `pais`, `localidad`, `longitud`, `imagen`, `fecha`) VALUES
(1, 'GP de Qatar', 'qa', 'Losail International Circuit', '5400', 'https://photos.motogp.com/2019/track/qat.svg', '2019-03-10'),
(2, 'GP de Rep. Argentina', 'ar', 'Termas de Río Hondo', '4800', 'https://photos.motogp.com/2019/track/arg.svg', '2019-03-31'),
(3, 'GP de las Américas', 'us', 'Circuit Of The Americas', '5500', 'https://photos.motogp.com/2019/track/ame.svg', '2019-04-14'),
(4, 'GP de España', 'es', 'Circuito de Jerez - Angel Nieto', '4423', 'https://photos.motogp.com/2019/track/spa.svg', '2019-05-05'),
(5, 'GP de Francia', 'fr', 'Le Mans', '4200', 'https://photos.motogp.com/2019/track/fra.svg', '2019-05-19'),
(6, 'GP de Italia', 'it', 'Autodromo Internazionale del Mugello', '5200', 'https://photos.motogp.com/2019/track/ita.svg', '2019-06-02'),
(7, 'GP de Catalunya', 'es', 'Circuit de Barcelona-Catalunya', '4655', 'https://photos.motogp.com/2019/track/cat.svg', '2019-06-16'),
(8, 'GP de Holanda', 'lu', 'TT Circuit Assen', '4500', 'https://photos.motogp.com/2019/track/ned.svg', '2019-06-30'),
(9, 'GP de Alemania', 'de', 'Sachsenring', '3700', 'https://photos.motogp.com/2019/track/ger.svg', '2019-07-07'),
(10, 'GP de Rep. Checa', 'cz', 'Automotodrom Brno', '5400', 'https://photos.motogp.com/2019/track/cze.svg', '2019-08-04'),
(11, 'GP de Austria', 'at', 'Red Bull Ring - Spielberg', '4300', 'https://photos.motogp.com/2019/track/aut.svg', '2019-08-11'),
(12, 'GP de G. Bretaña', 'gb', 'Silverstone Circuit', '5900', 'https://photos.motogp.com/2019/track/gbr.svg', '2019-08-25'),
(13, 'GP de Italia', 'it', 'Misano World Circuit Marco Simoncelli', '4200', 'https://photos.motogp.com/2019/track/rsm.svg', '2019-09-15'),
(14, 'GP de Aragón', 'es', 'MotorLand Aragon', '5100', 'https://photos.motogp.com/2019/track/ara.svg', '2019-09-22'),
(15, 'GP de Tailandia', 'th', 'Chang International Circuit', '4600', 'https://photos.motogp.com/2019/track/tha.svg', '2019-10-06'),
(16, 'GP de Japón', 'jp', 'Twin Ring Motegi', '4800', 'https://photos.motogp.com/2019/track/jpn.svg', '2019-10-20'),
(17, 'GP de Australia', 'au', 'Phillip Island', '4400', 'https://photos.motogp.com/2019/track/aus.svg', '2019-10-27'),
(18, 'GP de Malasia', 'my', 'Sepang International Circuit', '5500', 'https://photos.motogp.com/2019/track/mal.svg', '2019-11-03'),
(19, 'GP de Valencia', 'es', 'Circuit Ricardo Tormo', '4000', 'https://photos.motogp.com/2019/track/val.svg', '2019-11-17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasificaciones`
--

CREATE TABLE `clasificaciones` (
  `id` int(11) NOT NULL,
  `circuito` int(11) NOT NULL,
  `categoria` varchar(8) COLLATE utf8_spanish_ci NOT NULL,
  `posicion` int(2) NOT NULL,
  `piloto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `moto` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `categoria` varchar(8) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`id`, `nombre`, `moto`, `imagen`, `categoria`) VALUES
(1, 'Repsol Honda Team', 'Honda', 'https://www.motogp.com/en/api/rider/photo/bike/old/7444', 'MotoGP'),
(2, 'Monster Energy Yamaha MotoGP', 'Yamaha', 'https://www.motogp.com/en/api/rider/photo/bike/old/7409', 'MotoGP'),
(3, 'EG 0,0 Marc VDS', 'Kalex', 'https://www.motogp.com/en/api/rider/photo/bike/old/8793', 'Moto2'),
(4, 'Ducati Team', 'Ducati', 'https://www.motogp.com/en/api/rider/photo/bike/old/5885', 'MotoGP'),
(5, 'LCR Honda CASTROL', 'Honda', 'https://www.motogp.com/en/api/rider/photo/bike/old/8010', 'MotoGP'),
(6, 'Team SUZUKI ECSTAR', 'Suzuki', 'https://www.motogp.com/en/api/rider/photo/bike/old/8150', 'MotoGP'),
(7, 'Petronas Yamaha SRT', 'Yamaha', 'https://www.motogp.com/en/api/rider/photo/bike/old/8520', 'MotoGP'),
(8, 'Pramac Racing', 'Ducati', 'https://www.motogp.com/en/api/rider/photo/bike/old/8049', 'MotoGP'),
(9, 'FLEXBOX HP 40', 'Kalex', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8030_1551780645.jpg', 'Moto2'),
(11, 'Dynavolt Intact GP', 'Kalex', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_7538_1551966370.jpg', 'Moto2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pilotos`
--

CREATE TABLE `pilotos` (
  `id` int(11) NOT NULL,
  `equipo` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `dorsal` int(3) NOT NULL,
  `imagen` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `pais` varchar(2) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pilotos`
--

INSERT INTO `pilotos` (`id`, `equipo`, `nombre`, `apellido`, `dorsal`, `imagen`, `fecha`, `pais`) VALUES
(1, 4, 'Andrea', 'Dovizioso', 4, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_5885_1561562125.jpg', '2019-09-19', 'it'),
(2, null, 'Johann', 'Zarco', 5, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7236_1554806205.jpg', '2019-09-19', 'es'),
(3, 4, 'Danilo', 'Petrucci', 9, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8148_1561562115.jpg', '2019-09-19', 'it'),
(4, 2, 'Maverick', 'Viñales', 12, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7409_1554806128.jpg', '2019-09-19', 'es'),
(5, null, 'Karel', 'Abraham', 17, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6867_1554806143.jpg', '2019-09-19', 'es'),
(6, 7, 'Fabio', 'Quartararo', 20, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8520_1554806150.jpg', '2019-09-19', 'it'),
(7, null, 'Franco', 'Morbidelli', 21, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7741_1554806124.jpg', '2019-09-19', 'it'),
(8, null, 'Andrea', 'Iannone', 29, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6848_1554806231.jpg', '2019-09-19', 'gb'),
(9, null, 'Takaaki', 'Nakagami', 30, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6976_1554806193.jpg', '2019-09-19', 'es'),
(10, 5, 'Cal', 'Crutchlow', 35, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8010_1554806137.jpg', '2019-09-19', 'fr'),
(11, 6, 'Joan', 'Mir', 36, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8141_1554806147.jpg', '2019-09-19', 'au'),
(12, null, 'Aleix', 'Espargaro', 41, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6854_1562312179.jpg', '2019-09-19', 'ch'),
(13, 6, 'Alex', 'Rins', 42, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8150_1554806171.jpg', '2019-09-19', 'it'),
(14, 8, 'Jack', 'Miller', 43, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8049_1554806159.jpg', '2019-09-19', 'de'),
(15, null, 'Pol', 'Espargaro', 44, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7086_1554806132.jpg', '2019-09-19', 'de'),
(16, 2, 'Valentino', 'Rossi', 46, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_158_1554806223.jpg', '2019-09-19', 'de'),
(17, null, 'Sylvain', 'Guintoli', 50, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_5687_1560497665.jpg', '2019-09-19', 'de'),
(18, null, 'Michele', 'Pirro', 51, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6231_1559244853.jpg', '2019-09-19', 'de'),
(19, null, 'Tito', 'Rabat', 53, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7013_1554806201.jpg', '2019-09-192', 'de'),
(20, null, 'Hafizh', 'Syahrin', 55, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8132_1554806196.jpg', '2019-09-19', 'de'),
(21, 8, 'Francesco', 'Bagnaia', 63, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8273_1554806163.jpg', '2019-09-19', 'de'),
(22, null, 'Miguel', 'Oliveira', 88, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7199_1554806227.jpg', '2019-09-19', 'de');
(23, 1, 'Marc', 'Marquez', 93, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7444_1554806167.jpg', '2019-09-19', 'de');
(24, 1, 'Jorge', 'Lorenzo', 99, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6060_1554806219.jpg', '2019-09-19', 'de');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `circuitos`
--
ALTER TABLE `circuitos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clasificaciones`
--
ALTER TABLE `clasificaciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `SECUNDARY` (`circuito`,`categoria`,`piloto`),
  ADD KEY `id_piloto` (`piloto`),
  ADD KEY `id_circuito` (`circuito`);

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pilotos`
--
ALTER TABLE `pilotos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_equipo` (`equipo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `circuitos`
--
ALTER TABLE `circuitos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `clasificaciones`
--
ALTER TABLE `clasificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `pilotos`
--
ALTER TABLE `pilotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clasificaciones`
--
ALTER TABLE `clasificaciones`
  ADD CONSTRAINT `id_circuito` FOREIGN KEY (`circuito`) REFERENCES `circuitos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `id_piloto` FOREIGN KEY (`piloto`) REFERENCES `pilotos` (`id`);

--
-- Filtros para la tabla `pilotos`
--
ALTER TABLE `pilotos`
  ADD CONSTRAINT `id_equipo` FOREIGN KEY (`equipo`) REFERENCES `equipos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
