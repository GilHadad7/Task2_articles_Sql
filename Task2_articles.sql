-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2025 at 01:29 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task2`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `author` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `content`, `author`, `created_at`, `updated_at`) VALUES
(1, 'Template article 1', 'Text of article 1', 'Author 1', '2025-05-04 08:42:25', '2025-05-04 08:42:25'),
(2, 'Template article 2', 'Text of article 2', 'Author 2', '2025-05-04 08:42:25', '2025-05-04 08:42:25'),
(3, 'Template article 3', 'Text of article 3', 'Author 3', '2025-05-04 08:42:25', '2025-05-04 08:42:25'),
(4, 'Template article 4', 'Text of article 4', 'Author 4', '2025-05-04 08:42:25', '2025-05-04 08:42:25'),
(5, 'Template article 5', 'Text of article 5', 'Author 5', '2025-05-04 08:42:25', '2025-05-04 08:42:25'),
(6, 'Template article 6', 'Text of article 6', 'Author 6', '2025-05-04 08:42:25', '2025-05-04 08:42:25'),
(7, 'Template article 7', 'Text of article 7', 'Author 7', '2025-05-04 08:42:25', '2025-05-04 08:42:25'),
(8, 'Template article 8', 'Text of article 8', 'Author 8', '2025-05-04 08:42:25', '2025-05-04 08:42:25'),
(9, 'Template article 9', 'Text of article 9', 'Author 9', '2025-05-04 08:42:25', '2025-05-04 08:42:25'),
(10, 'Template article 10', 'Text of article 10', 'Author 10', '2025-05-04 08:42:25', '2025-05-04 08:42:25'),
(12, 'Article Title', 'Article Text', 'Author Name', '2025-05-04 09:13:47', '2025-05-04 09:13:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
