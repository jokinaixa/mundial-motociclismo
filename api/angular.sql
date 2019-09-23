-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-09-2019 a las 18:22:21
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
-- Volcado de datos para la tabla `clasificaciones`
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
(39, 13, 'MotoGP', 3, 4),
(40, 14, 'MotoGP', 1, 23);

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
(12, 'Repsol Honda Team', 'Honda', 'https://www.motogp.com/en/api/rider/photo/bike/old/7444', 'MotoGP'),
(13, 'Kiefer Racing', 'KTM', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8355_1551780731.jpg', 'Moto2'),
(14, 'Dynavolt Intact GP', 'KTM', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_6121_1551780709.jpg', 'Moto2'),
(15, 'NTS RW Racing GP', 'NTS', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8028_1551966355.jpg', 'Moto2'),
(16, 'Italtrans Racing Team', 'Kalex', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8349_1551966341.jpg', 'Moto2'),
(17, 'FLEXBOX HP 40', 'kalex', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8030_1551780645.jpg', 'Moto2'),
(18, 'HDR Heidrun Speed Up', 'Speed Up', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_7742_1551966333.jpg', 'Moto2'),
(19, 'SKY Racing Team VR46', 'Kalex', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8431_1551780674.jpg', 'Moto2'),
(20, 'American Racing KTM', 'KTM', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_7946_1551780660.jpg', 'Moto2'),
(21, 'Gaviota Angel Nieto Team', 'KTM', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8518_1551780626.jpg', 'Moto2'),
(22, 'IDEMITSU Honda Team Asia', 'Kalex', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8165_1551780690.jpg', 'Moto2'),
(23, 'Federal Oil Gresini Moto2', 'Kalex', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8469_1551967334.jpg', 'Moto2'),
(24, 'Red Bull KTM Ajo', 'KTM', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_7646_1551780692.jpg', 'Moto2'),
(25, 'ONEXOX TKKR SAG Team', 'Kalex', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8443_1551780636.jpg', 'Moto2'),
(26, 'MV Agusta Temporary Forward', 'MV Agusta', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8177_1551966374.jpg', 'Moto2'),
(27, 'Red Bull KTM Tech 3', 'KTM', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8029_1551966330.jpg', 'Moto2'),
(28, 'EG 0,0 Marc VDS', 'Kalex', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8173_1551780726.jpg', 'Moto2'),
(29, 'Petronas Sprinta Racing', 'Kalex', 'https://photos.motogp.com/2019/riders/moto2/bike/263x200/rider_8758_1551780705.jpg', 'Moto2'),
(30, 'WWR', 'KTM', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_8540_1552151975.jpg', 'Moto3'),
(31, 'SKY Racing Team VR46', 'KTM', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_8873_1551780664.jpg', 'Moto3'),
(32, 'Estrella Galicia 0,0', 'Honda', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_9958_1551966394.jpg', 'Moto3'),
(33, 'Redox PruestelGP', 'KTM', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_8856_1551780641.jpg', 'Moto3'),
(34, 'VNE Snipers', 'Honda', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_8752_1552151958.jpg', 'Moto3'),
(35, 'Petronas Sprinta Racing', 'Honda', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_8000_1552151970.jpg', 'Moto3'),
(36, 'Kömmerling Gresini Moto3', 'Honda', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_8519_1551966363.jpg', 'Moto3'),
(37, 'BOE Skull Rider Mugen Race', 'KTM', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_8675_1551780683.jpg', 'Moto3'),
(38, 'SIC58 Squadra Corse', 'Honda', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_7811_1551966398.jpg', 'Moto3'),
(39, 'Gaviota Angel Nieto Team', 'KTM', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_8269_1551780715.jpg', 'Moto3'),
(40, 'Honda Team Asia', 'Honda', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_8492_1551780648.jpg', 'Moto3'),
(41, 'CIP Green Power', 'KTM', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_8296_1551780718.jpg', 'Moto3'),
(42, 'Leopard Racing', 'Honda', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_7744_1551780657.jpg', 'Moto3'),
(43, 'Sterilgarda Max Racing Team', 'KTM', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_8525_1551780632.jpg', 'Moto3'),
(44, 'Red Bull KTM Ajo', 'KTM', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_8826_1551966383.jpg', 'Moto3'),
(45, 'Baiko Racing Team', 'KTM', 'assets/images/sin_imagen.jpg', 'Moto3'),
(46, 'Reale Avintia Arizona', 'KTM', 'assets/images/sin_imagen.jpg', 'Moto3'),
(47, 'Fundacion Andreas Perez', 'KTM', 'assets/images/sin_imagen.jpg', 'Moto3'),
(48, 'Redox PruestelGP', 'KTM', 'https://photos.motogp.com/2019/riders/moto3/bike/263x200/rider_7459_1551966319.jpg', 'Moto3');

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
(1, 1, 'Andrea', 'DOVIZIOSO', 4, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_5885_1561562125.jpg', '1986-03-23', 'it'),
(2, 2, 'Johann', 'ZARCO', 5, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7236_1554806205.jpg', '1990-07-16', 'fr'),
(3, 1, 'Danilo', 'PETRUCCI', 9, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8148_1561562115.jpg', '1990-10-24', 'it'),
(4, 3, 'Maverick', 'VIÑALES', 12, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7409_1554806128.jpg', '1995-01-12', 'es'),
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
(19, 4, 'Tito', 'Rabat', 53, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7013_1554806201.jpg', '0000-00-00', 'es'),
(20, 11, 'Hafizh', 'Syahrin', 55, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8132_1554806196.jpg', '2019-09-19', 'th'),
(21, 10, 'Francesco', 'Bagnaia', 63, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_8273_1554806163.jpg', '2019-09-19', 'it'),
(22, 11, 'Miguel', 'Oliveira', 88, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7199_1554806227.jpg', '2019-09-19', 'pt'),
(23, 12, 'Marc', 'Marquez', 93, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_7444_1554806167.jpg', '2019-09-19', 'es'),
(24, 12, 'Jorge', 'Lorenzo', 99, 'https://photos.motogp.com/2019/riders/motogp/grid/206x181/rider_6060_1554806219.jpg', '2019-09-19', 'es'),
(25, 13, 'Lukas', 'TULOVIC', 3, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8355_1551890376.jpg', '2000-06-15', 'de'),
(26, 15, 'Steven', 'ODENDAAL', 4, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8028_1551953134.jpg', '1993-03-02', 'za'),
(27, 16, 'Andrea', 'LOCATELLI', 5, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8349_1551888098.jpg', '1996-10-16', 'it'),
(28, 17, 'Lorenzo', 'BALDASSARRI', 7, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8030_1551890355.jpg', '1996-11-06', 'it'),
(29, 18, 'Jorge', 'NAVARRO', 9, 'https://www.motogp.com/en/api/rider/photo/grid/old/7742', '1996-02-03', 'es'),
(30, 19, 'Luca', 'MARINI', 10, 'https://www.motogp.com/en/api/rider/photo/grid/old/8431', '1997-08-10', 'it'),
(31, 19, 'Nicolo', 'BULEGA', 11, 'https://www.motogp.com/en/api/rider/photo/grid/old/8756', '1999-10-16', 'it'),
(32, 14, 'Thomas', 'LUTHI', 12, 'https://www.motogp.com/en/api/rider/photo/grid/old/6121', '2019-09-19', 'ch'),
(33, 20, 'Joe', 'ROBERTS', 16, 'https://www.motogp.com/en/api/rider/photo/grid/old/7946', '1997-06-16', 'us'),
(34, 21, 'Xavi', 'CARDELUS', 18, 'https://www.motogp.com/en/api/rider/photo/grid/old/8518', '1998-05-15', 'md'),
(35, 22, 'Dimas', 'EKKY PRATAMA', 20, 'https://www.motogp.com/en/api/rider/photo/grid/old/8165', '1992-10-26', 'id'),
(36, 18, 'Fabio', 'DI GIANNANTONIO', 21, 'https://www.motogp.com/en/api/rider/photo/grid/old/8539', '1998-10-10', 'it'),
(37, 23, 'Sam', 'LOWES', 22, 'https://www.motogp.com/en/api/rider/photo/grid/old/8469', '1990-09-14', 'gb'),
(38, 14, 'Marcel', 'SCHROTTER', 23, 'https://www.motogp.com/en/api/rider/photo/grid/old/7538', '1993-01-02', 'de'),
(39, 15, 'Simone', 'CORSI', 24, 'https://www.motogp.com/en/api/rider/photo/grid/old/6077', '2019-09-19', 'it'),
(40, 20, 'Iker', 'LECUONA', 27, 'https://www.motogp.com/en/api/rider/photo/grid/old/8947', '2019-09-19', 'es'),
(41, 16, 'Enea', 'BASTIANINI', 33, 'https://www.motogp.com/en/api/rider/photo/grid/old/8295', '2019-09-19', 'it'),
(42, 22, 'Somkiat', 'CHANTRA', 35, 'https://www.motogp.com/en/api/rider/photo/grid/old/8476', '2019-09-19', 'th'),
(44, 17, 'Augusto', 'FERNANDEZ', 40, 'https://www.motogp.com/en/api/rider/photo/grid/old/9973', '2019-09-19', 'es'),
(45, 24, 'Brad', 'BINDER', 41, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_7646_1551890077.jpg', '2019-09-19', 'za'),
(46, 25, 'Tetsuta', 'NAGASHIMA', 45, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8443_1552151654.jpg', '2019-09-19', 'jp'),
(47, 29, 'Adam', 'NORRODIN', 47, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8486_1568365944.jpg', '2019-09-19', 'my'),
(49, 26, 'Stefano', 'MANZI', 62, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8177_1551953138.jpg', '2019-09-19', 'it'),
(51, 27, 'Philipp', 'OETTL', 65, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8029_1551953293.jpg', '2019-09-19', 'de'),
(52, 27, 'Marco', 'BEZZECCHI', 72, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8688_1551890371.jpg', '2019-09-19', 'it'),
(53, 28, 'Alex', 'MARQUEZ', 73, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8173_1551888085.jpg', '2019-09-19', 'es'),
(54, 26, 'Dominique', 'AEGERTER', 77, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_7190_1551890055.jpg', '2019-09-19', 'ch'),
(55, 25, 'Remy', 'GARDNER', 87, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8513_1551953147.jpg', '2019-09-19', 'au'),
(56, 24, 'Jorge', 'MARTIN', 88, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8146_1551890080.jpg', '2019-09-19', 'es'),
(57, 29, 'Khairul', 'IDHAM PAWI', 89, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8758_1551890084.jpg', '2019-09-19', 'my'),
(58, 21, 'Jake', 'DIXON', 96, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_10012_1551884950.jpg', '2019-09-19', 'gb'),
(59, 28, 'Xavi', 'VIERGE', 97, 'https://photos.motogp.com/2019/riders/moto2/grid/206x181/rider_8793_1551953120.jpg', '2019-09-19', 'es');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `pilotos`
--
ALTER TABLE `pilotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

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
