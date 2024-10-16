-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: irrigo-db.cvweo26seous.us-east-2.rds.amazonaws.com    Database: irrigo-db
-- ------------------------------------------------------
-- Server version	8.0.35

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `dashboard_waterengine`
--

DROP TABLE IF EXISTS `dashboard_waterengine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dashboard_waterengine` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL,
  `last_updated` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dashboard_waterengine`
--

LOCK TABLES `dashboard_waterengine` WRITE;
/*!40000 ALTER TABLE `dashboard_waterengine` DISABLE KEYS */;
INSERT INTO `dashboard_waterengine` VALUES (1,'Engine 1','working','2024-08-01 09:00:00.000000'),(2,'Engine 2','not_working','2024-08-01 10:00:00.000000'),(3,'Engine 3','working','2024-08-01 11:00:00.000000'),(4,'Engine 4','issue_detected','2024-08-01 12:00:00.000000'),(5,'Engine 5','working','2024-08-01 13:00:00.000000'),(6,'Engine 6','not_working','2024-08-01 14:00:00.000000'),(7,'Engine 7','working','2024-08-01 15:00:00.000000'),(8,'Engine 8','issue_detected','2024-08-01 16:00:00.000000'),(9,'Engine 9','working','2024-08-01 17:00:00.000000'),(10,'Engine 10','not_working','2024-08-01 18:00:00.000000'),(11,'Engine 11','working','2024-08-01 19:00:00.000000'),(12,'Engine 12','issue_detected','2024-08-01 20:00:00.000000'),(13,'Engine 13','working','2024-08-02 09:00:00.000000'),(14,'Engine 14','not_working','2024-08-02 10:00:00.000000'),(15,'Engine 15','working','2024-08-02 11:00:00.000000'),(16,'Engine 16','issue_detected','2024-08-02 12:00:00.000000'),(17,'Engine 17','working','2024-08-02 13:00:00.000000'),(18,'Engine 18','not_working','2024-08-02 14:00:00.000000'),(19,'Engine 19','working','2024-08-02 15:00:00.000000'),(20,'Engine 20','issue_detected','2024-08-02 16:00:00.000000'),(21,'Engine 21','working','2024-08-02 17:00:00.000000'),(22,'Engine 22','not_working','2024-08-02 18:00:00.000000'),(23,'Engine 23','working','2024-08-02 19:00:00.000000'),(24,'Engine 24','issue_detected','2024-08-02 20:00:00.000000'),(25,'Engine 25','working','2024-08-03 09:00:00.000000'),(26,'Engine 26','not_working','2024-08-03 10:00:00.000000'),(27,'Engine 27','working','2024-08-03 11:00:00.000000'),(28,'Engine 28','issue_detected','2024-08-03 12:00:00.000000'),(29,'Engine 29','working','2024-08-03 13:00:00.000000'),(30,'Engine 30','not_working','2024-08-03 14:00:00.000000');
/*!40000 ALTER TABLE `dashboard_waterengine` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-16 16:08:14
