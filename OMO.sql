CREATE DATABASE  IF NOT EXISTS `omo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `omo`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: omo
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `achievement`
--

DROP TABLE IF EXISTS `achievement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `achievement` (
  `DataId` int NOT NULL,
  `EmployeeId` int DEFAULT NULL,
  `Year` varchar(45) DEFAULT NULL,
  `Month` varchar(45) DEFAULT NULL,
  `Achievement` varchar(45) DEFAULT NULL,
  `CreateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`DataId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `achievement`
--

LOCK TABLES `achievement` WRITE;
/*!40000 ALTER TABLE `achievement` DISABLE KEYS */;
/*!40000 ALTER TABLE `achievement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branch`
--

DROP TABLE IF EXISTS `branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branch` (
  `BranchId` int NOT NULL,
  `BranchName` varchar(45) DEFAULT NULL,
  `Status` tinyint(1) DEFAULT NULL,
  `CreateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`BranchId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch`
--

LOCK TABLES `branch` WRITE;
/*!40000 ALTER TABLE `branch` DISABLE KEYS */;
INSERT INTO `branch` VALUES (1,'中壢',1,'2023-06-08 21:54:47'),(2,'中原',1,'2023-06-08 21:54:47'),(3,'龍岡',1,'2023-06-08 21:54:47'),(4,'青埔',1,'2023-06-08 21:54:47'),(5,'桃園',1,'2023-06-08 21:54:47');
/*!40000 ALTER TABLE `branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branch_employee_relationship`
--

DROP TABLE IF EXISTS `branch_employee_relationship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branch_employee_relationship` (
  `BranchId` int NOT NULL,
  `EmployeeId` int NOT NULL,
  `Status` tinyint(1) DEFAULT NULL,
  `CreateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`BranchId`,`EmployeeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch_employee_relationship`
--

LOCK TABLES `branch_employee_relationship` WRITE;
/*!40000 ALTER TABLE `branch_employee_relationship` DISABLE KEYS */;
/*!40000 ALTER TABLE `branch_employee_relationship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `EmployeeId` int NOT NULL,
  `EmployeeName` varchar(45) DEFAULT NULL,
  `Permission` varchar(45) DEFAULT NULL,
  `Status` tinyint(1) DEFAULT '1',
  `CreateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`EmployeeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'陳大雄',NULL,1,'2023-06-08 22:05:14'),(2,'王小明',NULL,1,'2023-06-08 22:05:14'),(3,'林小君',NULL,1,'2023-06-08 22:05:14');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_mem_relationship`
--

DROP TABLE IF EXISTS `employee_mem_relationship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_mem_relationship` (
  `DataId` int NOT NULL,
  `EmployeeId` int DEFAULT NULL,
  `MemId` int DEFAULT NULL,
  `CreateTime` datetime DEFAULT NULL,
  `EndTime` datetime DEFAULT NULL,
  `Status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`DataId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_mem_relationship`
--

LOCK TABLES `employee_mem_relationship` WRITE;
/*!40000 ALTER TABLE `employee_mem_relationship` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee_mem_relationship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `MemId` int NOT NULL AUTO_INCREMENT,
  `MemName` varchar(45) DEFAULT NULL,
  `Phone` varchar(45) DEFAULT NULL,
  `Status` tinyint(1) DEFAULT '1',
  `CreateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`MemId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'黃仟儀','0911111111',1,'2023-06-08 21:41:18'),(2,'廖庭萱','0922222222',1,'2023-06-08 21:42:29'),(3,'郭筑熏','0933333333',1,'2023-06-08 21:42:29'),(4,'李世彥','0944444444',1,'2023-06-08 21:42:29');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `DataId` int NOT NULL,
  `BranchId` int DEFAULT NULL,
  `ProductName` varchar(45) DEFAULT NULL,
  `Price` varchar(45) DEFAULT NULL,
  `InventoryCount` varchar(45) DEFAULT NULL,
  `Status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`DataId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,1,'基本款','30000','5',1),(2,1,'升級款','40000','5',1),(3,2,'基本款','30000','5',1),(4,3,'基本款','30000','5',1),(5,3,'升級款','40000','5',1),(6,3,'高級零重力','55000','5',1),(7,4,'升級款','40000','5',1),(8,5,'升級款','40000','5',1),(9,5,'高級零重力','55000','5',1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `public_chair`
--

DROP TABLE IF EXISTS `public_chair`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `public_chair` (
  `BranchId` int NOT NULL,
  `PlaceId` int NOT NULL,
  `ChairId` int NOT NULL,
  `Price` varchar(45) DEFAULT NULL,
  `Minute` varchar(45) DEFAULT NULL,
  `Status` tinyint(1) DEFAULT '1',
  `CreateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`BranchId`,`PlaceId`,`ChairId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `public_chair`
--

LOCK TABLES `public_chair` WRITE;
/*!40000 ALTER TABLE `public_chair` DISABLE KEYS */;
INSERT INTO `public_chair` VALUES (1,1,1,'20','10',1,'2023-06-08 22:09:58'),(1,1,2,'30','10',1,'2023-06-08 22:09:58'),(1,2,1,'20','10',1,'2023-06-08 22:09:58'),(1,3,1,'20','10',1,'2023-06-08 22:09:58');
/*!40000 ALTER TABLE `public_chair` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `public_chair_place`
--

DROP TABLE IF EXISTS `public_chair_place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `public_chair_place` (
  `PlaceId` int NOT NULL,
  `PlaceName` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `CreateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`PlaceId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `public_chair_place`
--

LOCK TABLES `public_chair_place` WRITE;
/*!40000 ALTER TABLE `public_chair_place` DISABLE KEYS */;
INSERT INTO `public_chair_place` VALUES (1,'中壢大潤發','桃園市中壢中北路二段大潤發','2023-06-08 22:18:06'),(2,'中原家樂福','桃園市中壢區中華路二段501號','2023-06-08 22:18:06'),(3,'中壢SOGO','桃園市中壢區元化路中壢六和商圈遠東SOGO','2023-06-08 22:18:06'),(4,'桃園高鐵站','桃園市中壢區高鐵北路一段桃園高鐵','2023-06-08 22:18:06'),(5,'青埔華泰','桃園市中壢區春德路華泰名品城','2023-06-08 22:18:06');
/*!40000 ALTER TABLE `public_chair_place` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `public_chair_use_record`
--

DROP TABLE IF EXISTS `public_chair_use_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `public_chair_use_record` (
  `DataId` int NOT NULL,
  `ChairId` int DEFAULT NULL,
  `MemId` int DEFAULT NULL,
  `PayMethod` varchar(45) DEFAULT NULL,
  `Minute` varchar(45) DEFAULT NULL,
  `Sum` varchar(45) DEFAULT NULL,
  `CreateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`DataId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `public_chair_use_record`
--

LOCK TABLES `public_chair_use_record` WRITE;
/*!40000 ALTER TABLE `public_chair_use_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `public_chair_use_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales_comment`
--

DROP TABLE IF EXISTS `sales_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales_comment` (
  `DataId` int NOT NULL,
  `ProjectId` int DEFAULT NULL,
  `Comment` varchar(45) DEFAULT NULL,
  `CreateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`DataId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales_comment`
--

LOCK TABLES `sales_comment` WRITE;
/*!40000 ALTER TABLE `sales_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `DataId` int NOT NULL,
  `EmployeeId` int DEFAULT NULL,
  `MemberId` int DEFAULT NULL,
  `Quantity` varchar(45) DEFAULT NULL,
  `Sum` varchar(45) DEFAULT NULL,
  `CreateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`DataId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-09  6:27:30
