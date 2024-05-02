-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-05-2024 a las 01:31:30
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blogs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(6, 'Alimentación'),
(4, 'Deportes'),
(8, 'Educacion'),
(5, 'Entretenimiento'),
(7, 'futbol'),
(3, 'Salud'),
(1, 'Tecnología'),
(2, 'Viajes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `publicacion_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `comentario` text NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `publicacion_id`, `usuario_id`, `comentario`, `fecha_creacion`) VALUES
(1, 1, 1, 'Excelente artículo!', '2024-04-27 13:30:00'),
(2, 1, 2, 'Muy interesante, gracias por compartir!', '2024-04-27 14:15:00'),
(3, 2, 3, '¿Dónde puedo encontrar más información sobre este tema?', '2024-04-27 15:00:00'),
(4, 2, 4, 'Buena pregunta, estaré atento a las respuestas.', '2024-04-27 15:30:00'),
(5, 3, 5, 'Este contenido cambió mi perspectiva, gracias.', '2024-04-27 16:00:00'),
(6, 3, 6, 'Me alegra que te haya sido útil!', '2024-04-27 16:30:00'),
(7, 4, 7, 'Necesito ayuda con este tema, ¿alguien puede orientarme?', '2024-04-27 17:00:00'),
(8, 4, 8, 'Estaré encantado de ayudarte, envíame un mensaje.', '2024-04-27 17:30:00'),
(9, 5, 9, 'Gran trabajo, sigue así!', '2024-04-27 18:00:00'),
(10, 5, 10, 'Gracias por tu apoyo!', '2024-04-27 18:30:00'),
(12, 3, 10, 'Perros', '2024-04-27 13:35:05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `contenido` text NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`id`, `usuario_id`, `titulo`, `contenido`, `fecha_creacion`) VALUES
(1, 1, 'Últimastecnología', 'Descubre las últimas innovaciones tecnológicas que están cambiando el mundo.', '2024-04-27 13:00:00'),
(2, 2, 'deportivo', 'Consejos y técnicas para alcanzar tus metas deportivas y mejorar tu rendimiento.', '2024-04-27 14:00:00'),
(3, 3, 'temporada', 'Descubre cuáles son los colores que marcarán tendencia esta temporada y cómo incorporarlos a tu estilo.', '2024-04-27 15:00:00'),
(4, 4, 'vacaciones', 'Explora los destinos más increíbles y sorprendentes para tu próximo viaje.', '2024-04-27 16:00:00'),
(5, 5, 'saludable', 'Aprende cómo mantener un estilo de vida saludable con hábitos sencillos y efectivos.', '2024-04-27 17:00:00'),
(6, 6, 'estrenosCine', 'Descubre las películas más esperadas del año y no te pierdas ningún estreno.', '2024-04-27 18:00:00'),
(7, 7, 'hogar', 'Conoce las últimas innovaciones tecnológicas diseñadas para hacer tu vida en casa más fácil y cómoda.', '2024-04-27 19:00:00'),
(8, 8, 'Entrenamientos', 'Descubre rutinas de ejercicio efectivas y consejos nutricionales para perder peso de forma saludable.', '2024-04-27 20:00:00'),
(9, 9, 'Criptomonedas', 'con 100 puntos', '2024-04-29 05:00:00'),
(10, 10, 'Consejosviajes', 'Descubre cómo viajar sin gastar demasiado y aprovechar al máximo tu presupuesto de viaje.', '2024-04-27 22:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones_categorias`
--

CREATE TABLE `publicaciones_categorias` (
  `publicacion_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publicaciones_categorias`
--

INSERT INTO `publicaciones_categorias` (`publicacion_id`, `categoria_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` enum('usuario','administrador') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'usuario'),
(2, 'administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `rol_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `contrasena`, `rol_id`) VALUES
(1, 'Lionel Andres Messi', 'liomessi@funval.com', 'Campeon213M', 2),
(2, 'Emiliano Martinez', 'martinez23@funval.com', 'indep24g', 1),
(3, 'angelDimaria', 'angelito204@gmail.com', '45&·$df', 1),
(4, 'Lautaro Martinez', 'L.martinez@funval.com', 'interChamp32_4', 1),
(5, 'Julian Alvarez', 'mancity@funval.com', 'halland24', 1),
(6, 'Cristian Romero', 'tottenhamC@funval.com', 'hacha30', 2),
(7, 'Nicolas Otamendi', 'otaBenf@funval.com', 'Benfiota567', 1),
(8, 'Cristiano Ronaldo', 'cr7_siuuuu@funval.com', 'Elbicho', 1),
(9, 'Sergio Aguero', 'elnueve@funval.com', 'goleadorinde', 1),
(10, 'Diego Maradona', 'antiingle@funval.com', 'islaMalvi342', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `publicacion_id` (`publicacion_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `publicaciones_categorias`
--
ALTER TABLE `publicaciones_categorias`
  ADD PRIMARY KEY (`publicacion_id`,`categoria_id`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_rol` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`publicacion_id`) REFERENCES `publicaciones` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD CONSTRAINT `publicaciones_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `publicaciones_categorias`
--
ALTER TABLE `publicaciones_categorias`
  ADD CONSTRAINT `publicaciones_categorias_ibfk_1` FOREIGN KEY (`publicacion_id`) REFERENCES `publicaciones` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `publicaciones_categorias_ibfk_2` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_rol` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
