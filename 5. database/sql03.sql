-- Thêm, sửa, xóa

-- 1. Thêm: INSERT INTO
use backend_01;
INSERT INTO `users`(`name`, `email`, `password`) 
VALUES ('User 2', 'user2@gmail.com', '123456'),
('User 3', 'user3@gmail.com', '123456');

-- 2. Sửa: UPDATE SET (Phải có điều kiện: WHERE)
use backend_01;
UPDATE `users` 
SET `name` = 'User 1 - Update', `status` = 0
WHERE `id` = 1

-- 3. Xóa: DELETE FROM (Phải có điều kiện: WHERE)
use backend_01;
DELETE FROM `users`
WHERE `id` = 1;

-- Function
use backend_01;
INSERT INTO `users`(`name`, `email`, `password`) 
VALUES ('User 2', 'user2@gmail.com', PASSWORD('123456'));

use backend_01;
INSERT INTO `users`(`name`, `email`, `password`, `created_at`, `updated_at`) 
VALUES ('User 3', 'user3@gmail.com', PASSWORD('123456'), NOW(), NOW());

-- Truy vấn lấy dữ liệu
use backend_01;
SELECT * FROM `users`
WHERE created_at IS NOT NULL;

-- Thực hành lọc dữ liệu
SELECT * FROM `users`
WHERE `status` = 1 AND (`name` LIKE '%an%' OR `email` LIKE '%an%');

CREATE TABLE `customers` LIKE `users`;

INSERT INTO `customers` SELECT * FROM `users`;

-- Bài tập: Nhân bản bản ghi có id = 11 (Bỏ qua created_at và updated_at)
INSERT INTO 
`customers`(`name`, `email`, `password`, `status`, `created_at`, `updated_at`)
SELECT `name`, `email`, `password`, `status`, NOW(), NOW()
FROM `customers`
WHERE `id` = 11;

-- ORDER BY
SELECT * FROM `users`
ORDER BY `name` ASC, `id` DESC;

-- LIMIT OFFSET
SELECT * FROM `users`
ORDER BY `id` DESC
LIMIT 0, 3;