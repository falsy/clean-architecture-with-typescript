/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table CarrierModels
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CarrierModels`;

CREATE TABLE `CarrierModels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` char(36) NOT NULL,
  `no` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `displayName` varchar(255) NOT NULL,
  `isCrawlable` tinyint(1) NOT NULL,
  `isPopupEnabled` tinyint(1) NOT NULL,
  `popupURL` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

LOCK TABLES `CarrierModels` WRITE;
/*!40000 ALTER TABLE `CarrierModels` DISABLE KEYS */;

INSERT INTO `CarrierModels` (`id`, `uid`, `no`, `name`, `displayName`, `isCrawlable`, `isPopupEnabled`, `popupURL`, `createdAt`, `updatedAt`)
VALUES
	(1,'2de90e9c-1fda-11ef-8884-0a8cb08d3aea',1,'epost','우체국 택배',1,1,'https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?displayHeader=N&sid1=','2024-05-31 11:47:09','2024-05-31 11:47:09'),
	(2,'2de91044-1fda-11ef-8884-0a8cb08d3aea',2,'cjlogistics','CJ 대한통운',1,1,'http://nplus.doortodoor.co.kr/web/detail.jsp?slipno=','2024-05-31 11:48:04','2024-05-31 11:48:04'),
	(3,'2de9109b-1fda-11ef-8884-0a8cb08d3aea',3,'hanjin','한진 택배',1,1,'http://www.hanjinexpress.hanjin.net/customer/hddcw18.tracking?w_num=','2024-05-31 11:49:03','2024-05-31 11:49:03'),
	(4,'2de910d2-1fda-11ef-8884-0a8cb08d3aea',4,'lotte','롯데 택배',1,1,'https://www.lotteglogis.com/open/tracking?invno=','2024-05-31 11:49:34','2024-05-31 11:49:34'),
	(5,'ed4ec7e2-20ee-11ef-8884-0a8cb08d3aea',5,'logen','로젠 택배',1,1,'https://www.ilogen.com/web/personal/trace/','2024-06-02 14:46:42','2024-06-02 14:46:42'),
	(6,'2de91105-1fda-11ef-8884-0a8cb08d3aea',6,'gspostbox','GS 편의점 택배',0,1,'https://www.cvsnet.co.kr/invoice/tracking.do?invoice_no=','2024-05-31 11:50:45','2024-05-31 11:50:45'),
	(7,'2de9113a-1fda-11ef-8884-0a8cb08d3aea',7,'cupost','CU 편의점 택배',0,1,'https://www.cupost.co.kr/postbox/delivery/localResult.cupost?invoice_no=','2024-05-31 11:51:51','2024-05-31 11:51:51'),
	(8,'2de9116d-1fda-11ef-8884-0a8cb08d3aea',8,'kdexp','경동 택배',1,0,'','2024-05-31 11:52:28','2024-05-31 11:52:28'),
	(9,'2de9119c-1fda-11ef-8884-0a8cb08d3aea',9,'daesin','대신 택배',1,0,'','2024-05-31 11:53:05','2024-05-31 11:53:05'),
	(10,'2de911ca-1fda-11ef-8884-0a8cb08d3aea',10,'ilyanglogis','일량로지스',0,1,'http://www.ilyanglogis.com/functionality/card_form_waybill.asp?hawb_no=','2024-05-31 11:54:03','2024-05-31 11:54:03'),
	(11,'2de911fb-1fda-11ef-8884-0a8cb08d3aea',11,'ems','국체우편(EMS)',0,1,'https://service.epost.go.kr/trace.RetrieveEmsRigiTraceList.comm?displayHeader=N&POST_CODE=','2024-05-31 11:54:36','2024-05-31 11:54:36');

/*!40000 ALTER TABLE `CarrierModels` ENABLE KEYS */;
UNLOCK TABLES;

DELIMITER ;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`falsy`@`%` */ /*!50003 TRIGGER `before_insert_CarrierModels` BEFORE INSERT ON `CarrierModels` FOR EACH ROW BEGIN
  IF NEW.uid IS NULL THEN
    SET NEW.uid = UUID();
  END IF;
END */;;
DELIMITER ;
/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
