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

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `clasificaciones` (`id`, `circuito`, `categoria`, `posicion`, `piloto`) VALUES
(1, 1, 'MotoGP', 1, 1),
(2, 1, 'MotoGP', 2, 23),
(3, 1, 'MotoGP', 3, 10),

(4, 2, 'MotoGP', 1, 23),
(5, 2, 'MotoGP', 2, 16),
(6, 2, 'MotoGP', 3, 1),

(7, 3, 'MotoGP', 1, 13),
(8, 3, 'MotoGP', 2, 16),
(9, 3, 'MotoGP', 3, 14),

(10, 4, 'MotoGP', 1, 23),
(11, 4, 'MotoGP', 2, 13),
(12, 4, 'MotoGP', 3, 4),

(13, 5, 'MotoGP', 1, 23),
(14, 5, 'MotoGP', 2, 1),
(15, 5, 'MotoGP', 3, 3),

(16, 6, 'MotoGP', 1, 3),
(17, 6, 'MotoGP', 2, 23),
(18, 6, 'MotoGP', 3, 1),

(19, 7, 'MotoGP', 1, 23),
(20, 7, 'MotoGP', 2, 6),
(21, 7, 'MotoGP', 3, 3),

(22, 8, 'MotoGP', 1, 4),
(23, 8, 'MotoGP', 2, 23),
(24, 8, 'MotoGP', 3, 6),

(25, 9, 'MotoGP', 1, 23),
(26, 9, 'MotoGP', 2, 4),
(27, 9, 'MotoGP', 3, 10),

(28, 10, 'MotoGP', 1, 23),
(29, 10, 'MotoGP', 2, 1),
(30, 10, 'MotoGP', 3, 14),

(31, 11, 'MotoGP', 1, 1),
(32, 11, 'MotoGP', 2, 23),
(33, 11, 'MotoGP', 3, 6),

(34, 12, 'MotoGP', 1, 13),
(35, 12, 'MotoGP', 2, 23),
(36, 12, 'MotoGP', 3, 4),

(37, 13, 'MotoGP', 1, 23),
(38, 13, 'MotoGP', 2, 6),
(39, 13, 'MotoGP', 3, 4);
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
(1, 'Ducati Team', 'Ducati', 'https://www.motogp.com/en/api/rider/photo/bike/old/5885', 'MotoGP'),
(2, 'Red Bull KTM Factory Racing', 'KTM', 'https://www.motogp.com/en/api/rider/photo/bike/old/7236', 'MotoGP'),
(3, 'Monster Energy Yamaha MotoGP', 'Yamaha', 'https://www.motogp.com/en/api/rider/photo/bike/old/7409', 'MotoGP'),
(4, 'Reale Avintia Racing', 'Ducati', 'https://www.motogp.com/en/api/rider/photo/bike/old/6867', 'MotoGP'),
(5, 'Petronas Yamaha SRT', 'Yamaha', 'https://www.motogp.com/en/api/rider/photo/bike/old/8520', 'MotoGP'),
(6, 'Aprilia Racing Team Gresini', 'Aprilia', 'https://www.motogp.com/en/api/rider/photo/bike/old/6848', 'MotoGP'),
(7, 'LCR Honda IDEMITSU', 'Honda', 'https://www.motogp.com/en/api/rider/photo/bike/old/6976', 'MotoGP'),
(8, 'LCR Honda CASTROL', 'Honda', 'https://www.motogp.com/en/api/rider/photo/bike/old/8010', 'MotoGP'),
(9, 'Team SUZUKI ECSTAR', 'Suzuki', 'https://www.motogp.com/en/api/rider/photo/bike/old/8150', 'MotoGP'),
(10, 'Pramac Racing', 'Ducati', 'https://www.motogp.com/en/api/rider/photo/bike/old/8049', 'MotoGP'),
(11, 'Red Bull KTM Tech 3', 'KTM', 'https://www.motogp.com/en/api/rider/photo/bike/old/8132', 'MotoGP'),
(12, 'Repsol Honda Team', 'Honda', 'https://www.motogp.com/en/api/rider/photo/bike/old/7444', 'MotoGP');

INSERT INTO `equipos` (`id`, `nombre`, `moto`, `imagen`, `categoria`) VALUES
(13, 'Kiefer Racing', 'KTM', 'https://www.motogp.com/en/api/rider/photo/bike/old/8355', 'Moto2');

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
(1, 1, 'Andrea', 'Dovizioso', 4, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_5885_1561562125.jpg', '2019-09-19', 'it'),
(2, 2, 'Johann', 'Zarco', 5, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7236_1554806205.jpg', '2019-09-19', 'fr'),
(3, 1, 'Danilo', 'Petrucci', 9, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8148_1561562115.jpg', '2019-09-19', 'it'),
(4, 3, 'Maverick', 'Viñales', 12, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7409_1554806128.jpg', '2019-09-19', 'es'),
(5, 4, 'Karel', 'Abraham', 17, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6867_1554806143.jpg', '2019-09-19', 'cz'),
(6, 5, 'Fabio', 'Quartararo', 20, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8520_1554806150.jpg', '2019-09-19', 'fr'),
(7, 5, 'Franco', 'Morbidelli', 21, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7741_1554806124.jpg', '2019-09-19', 'it'),
(8, 6, 'Andrea', 'Iannone', 29, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6848_1554806231.jpg', '2019-09-19', 'it'),
(9, 7, 'Takaaki', 'Nakagami', 30, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6976_1554806193.jpg', '2019-09-19', 'jp'),
(10, 8, 'Cal', 'Crutchlow', 35, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8010_1554806137.jpg', '2019-09-19', 'gb'),
(11, 9, 'Joan', 'Mir', 36, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8141_1554806147.jpg', '2019-09-19', 'es'),
(12, 6, 'Aleix', 'Espargaro', 41, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6854_1562312179.jpg', '2019-09-19', 'es'),
(13, 9, 'Alex', 'Rins', 42, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8150_1554806171.jpg', '2019-09-19', 'es'),
(14, 10, 'Jack', 'Miller', 43, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8049_1554806159.jpg', '2019-09-19', 'au'),
(15, 2, 'Pol', 'Espargaro', 44, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7086_1554806132.jpg', '2019-09-19', 'es'),
(16, 3, 'Valentino', 'Rossi', 46, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_158_1554806223.jpg', '2019-09-19', 'it'),
(17, 9, 'Sylvain', 'Guintoli', 50, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_5687_1560497665.jpg', '2019-09-19', 'fr'),
(18, 1, 'Michele', 'Pirro', 51, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6231_1559244853.jpg', '2019-09-19', 'it'),
(19, 4, 'Tito', 'Rabat', 53, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7013_1554806201.jpg', '2019-09-192', 'es'),
(20, 11, 'Hafizh', 'Syahrin', 55, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8132_1554806196.jpg', '2019-09-19', 'th'),
(21, 10, 'Francesco', 'Bagnaia', 63, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8273_1554806163.jpg', '2019-09-19', 'it'),
(22, 11, 'Miguel', 'Oliveira', 88, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7199_1554806227.jpg', '2019-09-19', 'pt'),
(23, 12, 'Marc', 'Marquez', 93, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7444_1554806167.jpg', '2019-09-19', 'es'),
(24, 12, 'Jorge', 'Lorenzo', 99, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6060_1554806219.jpg', '2019-09-19', 'es');


INSERT INTO `pilotos` (`id`, `equipo`, `nombre`, `apellido`, `dorsal`, `imagen`, `fecha`, `pais`) VALUES
(25, 13, 'Lukas', 'Tulovic', 3, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(26, 13, 'Steven', 'Odendaal', 4, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(27, 13, 'Andrea', 'Locatelli', 5, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(28, 13, 'Lorenzo', 'Baldassarri', 7, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(29, 13, 'Jorge', 'Navarro', 9, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(30, 13, 'Luca', 'Marini', 10, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(31, 13, 'Nicolo', 'Bulega', 11, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(32, 13, 'Thomas', 'Luthi', 12, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(33, 13, 'Joe', 'Roberts', 16, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(34, 13, 'Xavi', 'Cardelus', 18, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(35, 13, 'Dimas', 'Ekky Pratama', 20, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(36, 13, 'Fabio', 'Di Giannantonio', 21, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(37, 13, 'Sam', 'Lowes', 22, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(38, 13, 'Marcel', 'Schrotter', 23, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(39, 13, 'Simone', 'Corsi', 24, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(40, 13, 'Iker', 'Lecuona', 27, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(41, 13, 'Enea', 'Bastianini', 33, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(42, 13, 'Somkiat', 'Chantra', 35, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(43, 13, 'Andi', 'Farid Izdihar', 36, 'assets/images/sin_imagen.jpg', '2019-09-192', 'kk'),
(44, 13, 'Augusto', 'Fernandez', 40, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(45, 13, 'Brad', 'Binder', 41, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(46, 13, 'Tetsuta', 'Nagashima', 45, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(47, 13, 'Adam', 'Norrodin', 47, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(48, 13, 'Mattia', 'Pasini', 54, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(49, 13, 'Stefano', 'Manzi', 62, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(50, 13, 'Bo', 'Bendsneyder', 64, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(51, 13, 'Philipp', 'Oettl', 65, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(52, 13, 'Marco', 'Bezzecchi', 72, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(53, 13, 'Alex', 'Marquez', 73, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(54, 13, 'Dominique', 'Aegerter', 77, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(55, 13, 'Remy', 'Gardner', 87, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(56, 13, 'Jorge', 'Martin', 88, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(57, 13, 'Khairul', 'Idham Pawi', 89, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(58, 13, 'Jake', 'Dixon', 96, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk'),
(59, 13, 'Xavi', 'Vierge', 97, 'assets/images/sin_imagen.jpg', '2019-09-19', 'kk');
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
