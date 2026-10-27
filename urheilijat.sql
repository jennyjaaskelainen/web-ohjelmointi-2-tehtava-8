-- --------------------------------------------------------
-- Verkkotietokone:              127.0.0.1
-- Palvelinversio:               11.7.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Versio:              12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for urheilijat
CREATE DATABASE IF NOT EXISTS `urheilijat` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_swedish_ai_ci */;
USE `urheilijat`;

-- Dumping structure for taulu urheilijat.urheilijat
CREATE TABLE IF NOT EXISTS `urheilijat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `etunimi` varchar(100) DEFAULT NULL,
  `sukunimi` varchar(100) DEFAULT NULL,
  `kutsumanimi` varchar(100) DEFAULT NULL,
  `syntymavuosi` date DEFAULT NULL,
  `paino` decimal(6,2) DEFAULT NULL,
  `kuva` varchar(500) DEFAULT NULL,
  `laji` varchar(100) DEFAULT NULL,
  `saavutukset` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_swedish_ai_ci;

-- Dumping data for table urheilijat.urheilijat: ~2 rows (suunnilleen)
INSERT INTO `urheilijat` (`id`, `etunimi`, `sukunimi`, `kutsumanimi`, `syntymavuosi`, `paino`, `kuva`, `laji`, `saavutukset`) VALUES
	(2, 'Paavo', 'Nurmi', 'Lentävä suomalainen', '1897-06-13', 65.00, 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Paavo_Nurmi_%28Antwerp_1920%29.jpg?utm_source=fi.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', 'Yleisurheilija', '9 olympiakultaa ja 3 olympiahopeaa'),
	(4, 'Kimi', 'Räikkönen', 'Iceman', '1979-10-17', 70.00, 'https://upload.wikimedia.org/wikipedia/commons/f/ff/F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg?utm_source=fi.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled', 'Formula 1', 'Formula 1 -maailmanmestari 2007');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
