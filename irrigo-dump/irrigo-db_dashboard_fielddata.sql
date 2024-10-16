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
-- Table structure for table `dashboard_fielddata`
--

DROP TABLE IF EXISTS `dashboard_fielddata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dashboard_fielddata` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `timestamp` datetime(6) NOT NULL,
  `soil_moisture_level` double NOT NULL,
  `temperature` double NOT NULL,
  `rainfall` decimal(10,4) DEFAULT NULL,
  `humidity` decimal(10,4) DEFAULT NULL,
  `ph_level` double NOT NULL,
  `uv_intensity` double NOT NULL,
  `water_pressure` double NOT NULL,
  `tank_water_volume` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1495 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dashboard_fielddata`
--

LOCK TABLES `dashboard_fielddata` WRITE;
/*!40000 ALTER TABLE `dashboard_fielddata` DISABLE KEYS */;
INSERT INTO `dashboard_fielddata` VALUES (1479,'2024-10-05 13:42:05.000000',45,25.3,0.0000,46.0000,7.384014459305331,9.58293955726896,1.7375145405286776,65.42338683725197),(1480,'2024-10-05 13:42:16.000000',45,25.3,0.0000,46.0000,7.393037127789099,9.497010817227078,1.8261854271367872,65.77696901084192),(1481,'2024-10-05 13:42:28.000000',45,25.8,0.0000,45.0000,7.345560630518582,9.659719856672874,1.909169204537532,66.44147572572503),(1482,'2024-10-05 13:42:39.000000',46,25.8,0.0000,44.0000,7.365717431080291,9.705919265013756,1.9415008651875576,67.31317209061837),(1483,'2024-10-05 13:42:51.000000',46,25.8,0.0000,44.0000,7.328040891453058,9.879110250588548,1.887850230218561,66.65050526992016),(1484,'2024-10-05 13:43:03.000000',43,25.8,0.0000,45.0000,7.352007822405871,9.89436032435579,1.7940810443111386,65.06991366381989),(1485,'2024-10-05 13:43:14.000000',45,25.8,0.0000,46.0000,7.374341394962798,9.805609902264122,1.8771302703504433,66.46497014537114),(1486,'2024-10-05 13:43:26.000000',87,25.8,0.0000,46.0000,7.405895300962591,9.944891625689436,1.8299082524348587,64.83671770528349),(1487,'2024-10-05 13:43:38.000000',44,25.8,0.0000,46.0000,7.383581670750808,10,1.8476820077150578,63.76651389285381),(1488,'2024-10-05 13:43:50.000000',90,25.8,0.0000,46.0000,7.3498552059986455,9.90955625003719,1.910373763038946,61.99036324765071),(1489,'2024-10-05 13:44:01.000000',44,25.8,0.0000,45.0000,7.337441372652002,10,1.9921200868957634,63.529272464368326),(1490,'2024-10-05 13:44:13.000000',45,25.8,0.0000,45.0000,7.35626219166559,10,1.9466918392773116,63.744642989505486),(1491,'2024-10-05 13:44:25.000000',45,26.2,0.0000,45.0000,7.334563526090517,9.929786041759264,1.9185661225419648,63.27007141251288),(1492,'2024-10-05 13:44:36.000000',45,26.2,0.0000,45.0000,7.358047082753831,9.956348225303849,1.9136159025397532,62.42785572116703),(1493,'2024-10-05 13:44:48.000000',45,26.2,0.0000,46.0000,7.343351329401936,9.805667589187756,1.9792875483423966,61.91201691131946),(1494,'2024-10-05 13:44:58.000000',45,26.2,0.0000,46.0000,7.335190607718563,9.878643494872689,1.9184447233873234,61.53146388083203);
/*!40000 ALTER TABLE `dashboard_fielddata` ENABLE KEYS */;
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

-- Dump completed on 2024-10-16 16:07:47
