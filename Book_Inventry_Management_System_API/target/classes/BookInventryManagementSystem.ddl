

CREATE DATABASE `bookinventrysystem` ;

use `bookinventrysystem` ;

CREATE TABLE `book` (
  `category_id` int DEFAULT NULL,
  `id` int NOT NULL,
  `page_count` int NOT NULL,
  `price` int NOT NULL,
  `published_date` date DEFAULT NULL,
  `auther` varchar(255) DEFAULT NULL,
  `edition` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `over_view` varchar(255) DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKam9riv8y6rjwkua1gapdfew4j` (`category_id`),
  CONSTRAINT `FKam9riv8y6rjwkua1gapdfew4j` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `book_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `category_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;