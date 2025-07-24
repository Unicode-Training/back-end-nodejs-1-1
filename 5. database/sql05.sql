-- FUNCTION GROUP
-- SUM --> Tính tổng
-- AVG --> Trung bình cộng
-- COUNT --> Đếm số hàng
-- MAX --> Lấy giá trị lớn nhất của 1 cột
-- MIN --> Lấy giá trị nhỏ nhất của 1 cột

SELECT COUNT(*) AS `status_count`, `status` 
FROM `users` 
GROUP BY `status`
HAVING `status_count` > 1
ORDER BY `status_count` DESC

-- Bài tập 1: Hiển thị danh sách users và số lượng đơn hàng từng users
SELECT `users`.*, COUNT(`orders`.`user_id`) AS `order_count`
FROM `users`
LEFT JOIN `orders`
ON `users`.`id` = `orders`.`user_id`
GROUP BY `orders`.`user_id`

-- Bài tập 2: Trả về thông tin users có tổng số đơn lớn nhất

SELECT `users`.*, COUNT(`orders`.`user_id`) AS `order_count`
FROM `users`
LEFT JOIN `orders`
ON `users`.`id` = `orders`.`user_id`
GROUP BY `orders`.`user_id` 
HAVING `order_count` = (
SELECT MAX(`users_tmp`.`order_count`) AS `max_order_count`
FROM (
	SELECT COUNT(`orders`.`user_id`) AS `order_count`
	FROM `users`
	LEFT JOIN `orders`
	ON `users`.`id` = `orders`.`user_id`
	GROUP BY `orders`.`user_id`
) AS `users_tmp`)
ORDER BY `orders`.`created_at` DESC;

-- Bài tập: Truy vấn trả về danh sách sản phẩm 
-- và sắp xếp theo thứ tự giảm dần của số lượng đơn hàng

SELECT `products`.*, SUM(`order_details`.quantity) AS `order_count`
FROM `products`
LEFT JOIN `order_details`
ON `products`.`id` = `order_details`.product_id
GROUP BY `order_details`.product_id
ORDER BY `order_count` DESC;

-- Lấy danh sách orders
SELECT *, (
CASE
	WHEN `status` = 'pending' THEN 1
	WHEN `status` = 'completed' THEN 2
	ELSE 3
END
) AS `status_order` FROM `orders`
ORDER BY `status_order` ASC;

-- Trả về danh sách sản phẩm kèm theo số tiền bán được của từng sản phẩm
SELECT `products`.*, SUM(`order_details`.`amount`) AS `total`, 
`inventory`.`total` AS `purchase_total`,
(
CASE
	WHEN SUM(`order_details`.`amount`) > `inventory`.`total` THEN 'Lãi'
	ELSE 'Lỗ'
END
) AS `rate`,
CONCAT(
ROUND(((SUM(`order_details`.`amount`) - `inventory`.`total`) / `inventory`.`total` * 100)),
'%')
AS `diff`
FROM `products`
INNER JOIN `inventory`
ON `products`.`id` = `inventory`.`product_id`
LEFT JOIN `order_details`
ON `products`.`id` = `order_details`.`product_id`
GROUP BY `order_details`.`product_id`;

-- Index
-- Locks
-- Transactions