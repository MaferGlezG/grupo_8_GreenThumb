CREATE DATABASE  IF NOT EXISTS `green_thumb_test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `green_thumb_test`;


--
-- Table structure for table `products`
--
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(70) DEFAULT NULL,
  `price` decimal NOT NULL,
  `product_category_id` int(10) NOT NULL,
  `size_id`int(10) NOT NULL,
  `color` varchar(7) NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Aloe Vera', 'Planta de Aloe Vera', 'aloe1.png', '65.00', 1, 1,'#1c6334' ), (2,'Noche Buena', 'Planta tradicional de navidad en Mexico', 'nochebuena1.png', '25.00', 2, 2,'#ab0a0a' ), (3,'Suculenta Basica', 'Suculenta de poca altura, ideal para principiantes en el cuidado de plantas', 'suculenta1.png', '15.50', 3, 3,'#579620' );
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products category`
--
DROP TABLE IF EXISTS `products_category`;
CREATE TABLE `products_category`(
	`id` int(10) NOT NULL,
	`name` varchar(50) NOT NULL,
	PRIMARY KEY(`id`)
)DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products category`
--

LOCK TABLES `products_category` WRITE;
/*!40000 ALTER TABLE `products_category` DISABLE KEYS */;
INSERT INTO `products_category` VALUES (1, 'Medicinales'),(2, 'Decorativas'),(3, 'Low Maintenance'),(4, 'Gourmet');
/*!40000 ALTER TABLE `products_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--
DROP TABLE IF EXISTS `sizes`;
CREATE TABLE `sizes`(
	`id` int(10) NOT NULL,
    `name` varchar(50) NOT NULL,
	PRIMARY KEY(`id`)
)DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `size`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1, 'Jardin'),(2, 'Interiores'),(3, 'Escritorio'),(4, 'Miniatura');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
	`id` int(10) NOT NULL,
    `first_name` varchar(50) NOT NULL,
    `last_name` varchar(50) NOT NULL,
    `username` varchar(50) NOT NULL,
    `email` varchar(50) UNIQUE NOT NULL,
    `password` varchar(30) NOT NULL,
    `user_category_id` int(10) NOT NULL,
	PRIMARY KEY(`id`)
)DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1, 'Mafer', 'Gonzalez', 'Maferglez', '16012603@udec.edu.mx', 'admin*', '1'), (2, 'Cosme', 'Fulanito', 'CosmeFulanito', 'cf33@gmail.com', 'seller*', '2'), (3, 'Homer', 'Simpson', 'Donut1', 'donut@hotmail.com', 'user*', '3');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_category`
--
DROP TABLE IF EXISTS `user_category`;
CREATE TABLE `user_category`(
	`id` int(10) NOT NULL,
	`name` varchar(50) NOT NULL,
	PRIMARY KEY(`id`)
)DEFAULT CHARSET=utf8mb4;


--
-- Dumping data for table `products category`
--

LOCK TABLES `user_category` WRITE;
/*!40000 ALTER TABLE `user_category` DISABLE KEYS */;
INSERT INTO `user_category` VALUES (1, 'Admin'),(2, 'Seller'),(3, 'User');
/*!40000 ALTER TABLE `user_category` ENABLE KEYS */;
UNLOCK TABLES;