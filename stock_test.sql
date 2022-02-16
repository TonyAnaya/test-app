-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-02-2022 a las 23:44:04
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `stock_test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `busquedas`
--

CREATE TABLE `busquedas` (
  `symbol` text NOT NULL,
  `num_searched` int(11) NOT NULL,
  `last_searched` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `busquedas`
--

INSERT INTO `busquedas` (`symbol`, `num_searched`, `last_searched`) VALUES
('AMZN', 1, '2022-02-16 22:32:28'),
('F', 1, '2022-02-16 22:36:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `register_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `last_search` text NOT NULL,
  `num_of_searches` int(11) NOT NULL,
  `account` text NOT NULL,
  `phone` text NOT NULL,
  `country` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `name`, `email`, `pass`, `register_date`, `last_search`, `num_of_searches`, `account`, `phone`, `country`) VALUES
(0, 'Antonio Anaya', 'ja_anaya00@hotmail.com', 'ddc5f5e86d2f85e1b1ff763aff13ce0a', '2022-02-15 01:28:32', '', 0, 'Usuario', '5555020301', 'Mexico'),
(0, 'Tony Anaya', 'jaanaya99@gmail.com', 'ddc5f5e86d2f85e1b1ff763aff13ce0a', '2022-02-15 01:52:57', 'F', 2, 'admin', '5555020301', 'México'),
(0, 'Eduardo Manos de Tijera', 'tijeras@manos.com', '6d6354ece40846bf7fca65dfabd5d9d4', '2022-02-15 01:56:04', '', 0, 'usuario', '5552271862', 'México'),
(0, 'Ximeno Hernandez', 'ximenito@bailador.com', '9dff71b2d18bc37e8f900d4df4e9fc76', '2022-02-15 02:01:15', '', 0, 'usuario', '5552271862', 'México'),
(0, 'Jorge Bailador', 'jorgito@gmail.com', 'd67326a22642a324aa1b0745f2f17abb', '2022-02-15 02:16:08', '', 0, 'usuario', '5442783414', 'Guatemala'),
(0, 'Mariano Estrada', 'mariano@sepsi.com', '0804048efcb1f0b3c2f18a4412b1016c', '2022-02-15 02:25:19', '', 0, 'usuario', '5552097892', 'Francia'),
(0, 'Enrique Jimenez', 'enrique@gmail.com', '8b9127934238e9a03691225c734a0a71', '2022-02-15 02:54:26', '', 0, 'usuario', '5555020303', 'Argentina'),
(0, 'Gandalf Gris', 'gandalf@gmail.com', 'ab17850978e36aaf6a2b8808f1ded971', '2022-02-15 04:13:45', '', 0, 'usuario', '5555020301', 'Gondor'),
(0, 'Legolas Hojaverde', 'legolas@gmail.com', '03f690195f59c32d566cfb79383e01c8', '2022-02-15 04:16:33', '', 0, 'usuario', '5555555555', 'Mirkwood'),
(0, 'Aragorn Arathorn', 'aragorn@gmail.com', 'fc26a25b41496f0d05eca5ded010218f', '2022-02-15 04:17:48', '', 0, 'usuario', '4444444444', 'Gondor'),
(0, 'Gimli Underrock', 'gimli@gmail.com', '99388e57e86604f93d09b40c465e42bb', '2022-02-15 04:21:07', '', 0, 'usuario', '2222222222', 'Lonley Mountain'),
(0, 'Sauron Dark Lord', 'sauron@gmail.com', '0f982fab53a6723e8abdc8e9bce0b614', '2022-02-15 04:22:15', '', 0, 'usuario', '6666666666', 'Mordor'),
(0, 'Harry Potter', 'harry@gmail.com', '3b87c97d15e8eb11e51aa25e9a5770e9', '2022-02-15 04:24:29', '', 0, 'usuario', '7777777777', 'Inglaterra'),
(0, 'Leonel Messi', 'messi@gmail.com', '1463ccd2104eeb36769180b8a0c86bb6', '2022-02-15 04:26:07', '', 0, 'usuario', '5555284728', 'Argentina'),
(0, 'Blue Demon', 'Blue_demon@gmail.com', '74186adf7f381c816fbb8dab121a6973', '2022-02-15 04:29:25', '', 0, 'usuario', '8888838475', 'Mexico'),
(0, 'Bilbo Bolson', 'bilbo@gmail.com', 'fc09d87d5e86c6002f04ece7ea95aa27', '2022-02-15 04:42:46', '', 0, 'usuario', '9999999999', 'Comarca'),
(0, 'Jito Mate', 'jitomate@gmail.com', '21a871bd0b0dab3bdcf5d8d5059804ea', '2022-02-15 04:47:37', '', 0, 'usuario', '1223232343', 'Jardin'),
(0, 'Pikachu Pokemon', 'pikachu@gmail.com', '9ce44f88a25272b6d9cbb430ebbcfcf1', '2022-02-15 04:49:30', '', 0, 'usuario', '8794372401', 'kanto'),
(0, 'Willy Wonka', 'wonka@gmail.com', '84279c04be87b3206718c5b53fa1e299', '2022-02-15 04:52:01', '', 0, 'usuario', '2348723987', 'England'),
(0, 'Frodo Bolson', 'frodo@gmail.com', 'f0f8820ee817181d9c6852a097d70d8d', '2022-02-15 04:55:09', '', 0, 'usuario', '239586293', 'Comarca'),
(0, 'Jake Peralta', 'jake@gmail.com', '1200cf8ad328a60559cf5e7c5f46ee6d', '2022-02-15 04:58:31', '', 0, 'usuario', '2935896235', 'Estados Unidos'),
(0, 'Sergio Bailador', 'sergio@gmail.com', '3bffa4ebdf4874e506c2b12405796aa5', '2022-02-15 05:07:34', '', 0, 'usuario', '2593830935', 'Mexico'),
(0, 'Luis Gomez', 'luis@gmail.com', '502ff82f7f1f8218dd41201fe4353687', '2022-02-15 05:08:37', '', 0, 'usuario', '293856322', 'El Salvador'),
(0, 'Tony Stark', 'stark@gmail.com', 'ddc5f5e86d2f85e1b1ff763aff13ce0a', '2022-02-15 05:10:17', '', 0, 'usuario', '773487238', 'Estados Unidos'),
(0, 'Prueba Aprueba', 'prueba@gmail.com', 'c893bad68927b457dbed39460e6afd62', '2022-02-15 05:15:58', '', 0, 'usuario', '5552951528', 'Suiza'),
(0, 'Linda Zamarripa', 'linda@gmail.com', 'eaf450085c15c3b880c66d0b78f2c041', '2022-02-15 05:17:32', '', 0, 'usuario', '2953872200', 'Luxemburgo');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
