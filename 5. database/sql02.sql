-- Thêm khóa ngoại khi tạo bảng
use backend_01;
CREATE TABLE `phones`(
	`id` INT PRIMARY KEY,
	`phone` VARCHAR(15),
	`user_id` INT,
	`created_at` TIMESTAMP,
	`updated_at` TIMESTAMP,
	CONSTRAINT user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Xóa khóa ngoại
use backend_01;
ALTER TABLE `phones` DROP FOREIGN KEY user_id_foreign;

-- Thêm khóa sau vào bảng có sẵn
use backend_01;
ALTER TABLE `phones` 
ADD CONSTRAINT user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id);

-- Default
use backend_01;
ALTER TABLE `users` MODIFY COLUMN `status` TINYINT(1) DEFAULT 1;

-- Auto Increment
use backend_01;
ALTER TABLE `users` MODIFY COLUMN `id` INT AUTO_INCREMENT;