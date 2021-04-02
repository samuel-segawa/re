DROP TABLE IF EXISTS `re`;
CREATE TABLE `re` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `icon` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `rarity` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `deleted` int(11) DEFAULT '0',
  `deleted_at` datetime DEFAULT NULL,
  `deleted_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

LOCK TABLES `re` WRITE;
INSERT INTO `re` VALUES (1,'icon1.png','a long name','Common','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate leo nisl, in suscipit velit faucibus quis. Fusce ultricies ut ipsum ut aliquet. Cras et maximus ipsum, ac volutpat nibh.','2021-03-18 00:00:00','1337',NULL,NULL,0,NULL,NULL),(2,'icon1.png','name','Uncommon','Nulla ultricies vel lectus ut auctor. Nulla purus elit, aliquet non pellentesque id, euismod eu augue. Phasellus vel scelerisque augue. Sed scelerisque, lectus quis consequat mollis, nisl ante eleifend leo, id accumsan turpis ex dignissim lorem. In fermen','2021-03-18 00:00:00','1337',NULL,NULL,0,NULL,NULL),(3,'icon1.png','name','Rare','description','2021-03-18 00:00:00','1337',NULL,NULL,0,NULL,NULL),(4,'icon1.png','name','Epic','description','2021-03-18 00:00:00','1337',NULL,NULL,0,NULL,NULL),(5,'icon1.png','name','Legendary','description','2021-03-18 00:00:00','1337',NULL,NULL,0,NULL,NULL);
UNLOCK TABLES;
