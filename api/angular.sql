-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-09-2019 a las 18:39:05
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
  `nombre` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pais` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `localidad` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `longitud` decimal(5,0) DEFAULT NULL,
  `imagen` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `circuitos`
--

INSERT INTO `circuitos` (`id`, `nombre`, `pais`, `localidad`, `longitud`, `imagen`) VALUES
(1, 'GP de Catalunya', 'Espana', 'Montmelo', '4655', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Formula1_Circuit_Catalunya.svg/1920px-Formula1_Circuit_Catalunya.svg.png'),
(2, 'GP de la Comunidad Valenciana', 'Espana', 'Cheste', '4005', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Ricardo_Tormo_%28Proposed_F1%29_track_map.svg/1920px-Ricardo_Tormo_%28Proposed_F1%29_track_map.svg.png'),
(3, 'GP de España', 'España', 'Jerez', '4423', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Jerez.svg/1024px-Jerez.svg.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasificaciones`
--

CREATE TABLE `clasificaciones` (
  `id` int(11) NOT NULL,
  `circuito` int(11) NOT NULL,
  `categoria` varchar(8) COLLATE utf8_spanish_ci DEFAULT NULL,
  `posicion` int(2) DEFAULT NULL,
  `piloto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `clasificaciones`
--

INSERT INTO `clasificaciones` (`id`, `circuito`, `categoria`, `posicion`, `piloto`) VALUES
(2, 1, 'MotoGP', 2, 5),
(3, 1, 'MotoGP', 3, 3),
(4, 1, 'Moto2', 1, 6),
(5, 1, 'MotoGP', 1, 1),
(6, 1, 'MotoGP', 10, 2),
(7, 2, 'MotoGP', 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `moto` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `imagen` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `categoria` varchar(8) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`id`, `nombre`, `moto`, `imagen`, `categoria`) VALUES
(1, 'Repsol Honda Team', 'Honda', 'https://www.eoi.es/blogs/alvaromartinezramos/files/2011/11/731.gif', 'MotoGP'),
(2, 'Monster Energy Yamaha MotoGP', 'Yamaha', 'https://pbs.twimg.com/profile_images/1092269488739733505/ZGLiNX8R_400x400.jpg', 'MotoGP'),
(3, 'EG 0,0 Marc VDS', 'Kalex', 'https://yt3.ggpht.com/a/AGF-l7_s99zqojmNHy4UiDu7PNKdBB7sUMT_jmAzaQ=s900-c-k-c0xffffffff-no-rj-mo', 'Moto2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pilotos`
--

CREATE TABLE `pilotos` (
  `id` int(11) NOT NULL,
  `equipo` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `imagen` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `edad` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pilotos`
--

INSERT INTO `pilotos` (`id`, `equipo`, `nombre`, `imagen`, `edad`) VALUES
(1, 1, 'Marc Marquez', 'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/08/03/Recortada/20190707-636981093574426049_20190707151852595-kJhC-U463825079563toF-992x558@LaVanguardia-Web.jpg', 26),
(2, 1, 'Jorge Lorenzo', 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/11/15682116243365.jpg', 32),
(3, 2, 'Valentino Rossi', 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/02/15/15502319577262.jpg', 40),
(5, 2, 'Maverick Viñales', 'https://cdn-1.motorsport.com/images/mgl/2y3E9mv6/s8/polesitter-maverick-vinales-ya-1.jpg', 24),
(6, 3, 'Alex Marquez', 'https://www.mundodeportivo.com/r/GODO/MD/p6/Motor/Imagenes/2019/05/22/Recortada/1150114706_20190518200439662-kZjB-U4624162512252WB-980x554@MundoDeportivo-Web.jpg', 23);

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
  ADD KEY `id_piloto` (`piloto`) USING BTREE,
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
  ADD KEY `pilotos_ibfk_1` (`equipo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `circuitos`
--
ALTER TABLE `circuitos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `clasificaciones`
--
ALTER TABLE `clasificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `pilotos`
--
ALTER TABLE `pilotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clasificaciones`
--
ALTER TABLE `clasificaciones`
  ADD CONSTRAINT `clasificaciones_ibfk_1` FOREIGN KEY (`piloto`) REFERENCES `pilotos` (`id`),
  ADD CONSTRAINT `id_circuito` FOREIGN KEY (`circuito`) REFERENCES `circuitos` (`id`);

--
-- Filtros para la tabla `pilotos`
--
ALTER TABLE `pilotos`
  ADD CONSTRAINT `pilotos_ibfk_1` FOREIGN KEY (`equipo`) REFERENCES `equipos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
