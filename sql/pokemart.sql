-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02-Ago-2022 às 18:50
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `pokemart`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL,
  `category` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `image` varchar(250) NOT NULL,
  `highlight` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `category`, `price`, `image`, `highlight`) VALUES
(1, 'Pokeball', '<p><b>Taxa de Captura:</b> 1×</p>\r\n<p><b>Sobre:</b> Usada para capturar pokémons selvagens em geral.</p>', 'Pokeball', 200, 'https://archives.bulbagarden.net/media/upload/7/79/Dream_Poké_Ball_Sprite.png', 1),
(2, 'Great Ball', '<p><b>Taxa de Captura:</b> 1,5×</p>\r\n<p><b>Sobre:</b> Usada para capturar pokémons selvagens em geral, tendo 1,5× mais chances de captura que a pokébola comum.</p>', 'Pokeball', 600, 'https://archives.bulbagarden.net/media/upload/b/bf/Dream_Great_Ball_Sprite.png', 0),
(3, 'Ultra Ball', '<p><b>Taxa de Captura: </b>2×</p>\r\n<p><b>Sobre: </b>Usada para capturar pokémons selvagens em geral, tendo 2× mais chances de captura que a pokébola comum.</p>', 'Pokeball', 1200, 'https://archives.bulbagarden.net/media/upload/a/a8/Dream_Ultra_Ball_Sprite.png', 1),
(4, 'Potion', '<p><b>Sobre: </b>Recupera 20 HP do seu Pokémon</p>', 'Potions', 300, 'https://archives.bulbagarden.net/media/upload/d/df/Dream_Potion_Sprite.png', 1),
(5, 'Super Potion', '<p><b>Sobre: </b>Recupera 60 HP do seu Pokémon</p>', 'Potions', 700, 'https://archives.bulbagarden.net/media/upload/5/57/Dream_Super_Potion_Sprite.png', 0),
(6, 'Hyper Potion', '<p><b>Sobre: </b>Recupera 120 HP do seu Pokémon</p>', 'Potions', 1200, 'https://archives.bulbagarden.net/media/upload/c/c8/Dream_Hyper_Potion_Sprite.png', 1),
(7, 'Max Potion', '<p><b>Sobre: </b>Recupera todo o HP do seu Pokémon</p>', 'Potions', 2500, 'https://archives.bulbagarden.net/media/upload/a/a2/Dream_Max_Potion_Sprite.png', 0),
(8, 'Full Restore', '<p><b>Sobre: </b>Recupera todo o HP e retira todas as condições de estado do seu Pokémon</p>', 'Potions', 3000, 'https://archives.bulbagarden.net/media/upload/0/0c/Dream_Full_Restore_Sprite.png', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(3, 'Kaepora Gaebora', 'guiajalla@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
