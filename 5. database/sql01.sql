-- Comment trong SQL
-- CREATE DATABASE backend_01;
-- DROP DATABASE backend_01;
-- SHOW DATABASES;
use backend_01;
CREATE TABLE users(
	`id` INT,
	`name` VARCHAR(30),
	`email` VARCHAR(100),
	`password` VARCHAR(100),
	`status` BOOLEAN,
	`created_at` TIMESTAMP,
	`updated_at` TIMESTAMP
);

-- Xem danh sách bảng trong database
use backend_01;
SHOW TABLES;

-- Xem cấu trúc bảng
use backend_01;
DESCRIBE users;

-- Xóa bảng
use backend_01;
DROP TABLE users;

-- Thêm cột mới vào bảng
use backend_01;
ALTER TABLE `users` ADD `phone` VARCHAR(15) AFTER `email`

-- Xóa cột ra khỏi bảng
use backend_01;
ALTER TABLE `users` DROP COLUMN `phone`;

-- Sửa cột
use backend_01;
ALTER TABLE `users` MODIFY COLUMN `password` INT;

-- Đổi tên cột
use backend_01;
ALTER TABLE `users` CHANGE COLUMN `name` TO `fullname`;

-- Chữa bài tập
use backend_01;
CREATE TABLE `customers`(
	`id` INT,
	`name` VARCHAR(15),
	`email` VARCHAR(100),
	`password` VARCHAR(100),
	`verfication_at` TIMESTAMP,
	`created_at` TIMESTAMP,
	`updated_at` TIMESTAMP
);

use backend_01;

ALTER TABLE `customers` ADD `phone` VARCHAR(15) AFTER `password`;
ALTER TABLE `customers` ADD `status` TINYINT(1) AFTER `phone`;

-- Sao chép cấu trúc từ bảng cũ sang bảng mới
CREATE TABLE `admins` LIKE `customers`;

-- Thêm not null khi tạo bảng
use backend_01;
CREATE TABLE users(
	`id` INT NOT NULL,
	`name` VARCHAR(30) NOT NULL,
	`email` VARCHAR(100) NOT NULL,
	`password` VARCHAR(100),
	`status` BOOLEAN,
	`created_at` TIMESTAMP,
	`updated_at` TIMESTAMP
);

-- Thêm not null ở 1 cột đã có
use backend_01;
ALTER TABLE `users` MODIFY COLUMN `password` VARCHAR(100) NOT NULL;

-- Thêm unique khi tạo bảng
use backend_01;
CREATE TABLE users(
	`id` INT,
	`name` VARCHAR(30) NOT NULL,
	`email` VARCHAR(100) NOT NULL,
	`password` VARCHAR(100),
	`status` BOOLEAN,
	`created_at` TIMESTAMP,
	`updated_at` TIMESTAMP,
	CONSTRAINT email_unique UNIQUE(email)
);

-- Thêm unique sau khi đã có table
use backend_01;
ALTER TABLE `users` ADD CONSTRAINT id_unique UNIQUE(id);

-- Xóa unique
use backend_01;
ALTER TABLE `users` DROP INDEX email_unique;

-- Thêm khóa chính khi tạo table
use backend_01;
CREATE TABLE users(
	`id` INT PRIMARY KEY,
	`name` VARCHAR(30) NOT NULL,
	`email` VARCHAR(100) NOT NULL,
	`password` VARCHAR(100),
	`status` BOOLEAN,
	`created_at` TIMESTAMP,
	`updated_at` TIMESTAMP,
	CONSTRAINT email_unique UNIQUE(email)
);

-- Xóa primary key ra khỏi table
use backend_01;
ALTER TABLE `users` DROP PRIMARY KEY;

-- Thêm primary key sau khi có table
use backend_01;
ALTER TABLE `users` ADD PRIMARY KEY (id);