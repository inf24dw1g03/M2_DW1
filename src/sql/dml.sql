CREATE DATABASE  IF NOT EXISTS `Tournament` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `Tournament`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tournament
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,'John Doe',25,1),(2,'Mike Smith',28,2),(3,'Chris Brown',30,3),(4,'David Lee',23,4),(5,'Tom Harris',27,5),(6,'Luke Wilson',24,6),(7,'Sam Carter',22,7),(8,'Ben Evans',26,8),(9,'Jake Turner',29,1),(10,'Ethan Davis',21,2),(11,'Ryan Young',31,3),(12,'Alex White',32,4),(13,'Nick Lewis',20,5),(14,'Matt Walker',25,6),(15,'Josh Scott',23,7);
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (1,1,2,'2024-01-01','18:00','Stadium A'),(2,3,4,'2024-01-02','20:00','Stadium B'),(3,5,6,'2024-01-03','17:30','Stadium C'),(4,7,8,'2024-01-04','19:15','Stadium D'),(5,1,3,'2024-01-05','16:45','Stadium E'),(6,2,4,'2024-01-06','18:00','Stadium F'),(7,5,7,'2024-01-07','20:30','Stadium G'),(8,6,8,'2024-01-08','19:00','Stadium H'),(9,1,5,'2024-01-09','17:00','Stadium I'),(10,2,6,'2024-01-10','18:45','Stadium J'),(11,3,7,'2024-01-11','19:30','Stadium K'),(12,4,8,'2024-01-12','20:00','Stadium L'),(13,1,6,'2024-01-13','21:00','Stadium M'),(14,2,7,'2024-01-14','16:30','Stadium N'),(15,3,8,'2024-01-15','19:45','Stadium O');
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'Team Alpha',1990),(2,'Team Beta',1995),(3,'Team Gamma',2000),(4,'Team Delta',2005),(5,'Team Epsilon',2010),(6,'Team Zeta',2015),(7,'Team Eta',2020),(8,'Team Theta',2021),(9,'Team Iota',1985),(10,'Team Kappa',1975),(11,'Team Lambda',1965),(12,'Team Mu',1955),(13,'Team Nu',1945),(14,'Team Xi',1935),(15,'Team Omicron',1925);
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tournaments`
--

LOCK TABLES `tournaments` WRITE;
/*!40000 ALTER TABLE `tournaments` DISABLE KEYS */;
INSERT INTO `tournaments` VALUES (1,'Championship A','2024-01-01','2024-02-01'),(2,'Championship B','2024-02-15','2024-03-15'),(3,'Championship C','2024-03-20','2024-04-20'),(4,'Championship D','2024-05-01','2024-06-01'),(5,'Championship E','2024-06-15','2024-07-15'),(6,'Championship F','2024-08-01','2024-09-01'),(7,'Championship G','2024-09-10','2024-10-10'),(8,'Championship H','2024-11-01','2024-12-01'),(9,'Championship I','2024-12-15','2025-01-15'),(10,'Championship J','2025-02-01','2025-03-01'),(11,'Championship K','2025-03-15','2025-04-15'),(12,'Championship L','2025-05-01','2025-06-01'),(13,'Championship M','2025-07-01','2025-08-01'),(14,'Championship N','2025-08-15','2025-09-15'),(15,'Championship O','2025-10-01','2025-11-01');
/*!40000 ALTER TABLE `tournaments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-05 18:36:04