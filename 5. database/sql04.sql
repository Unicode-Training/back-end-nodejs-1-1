-- JOIN TABLE

SELECT `users`.*, `phones`.`phone` FROM `users`
INNER JOIN `phones`
ON `users`.`id` = `phones`.`user_id`
WHERE `phones`.phone LIKE '%11%';

-- BÀI TẬP: Lấy danh sách khóa học của học viên có số điện thoại chứa chuỗi '22'
SELECT `courses`.* FROM `courses`
INNER JOIN `users_courses`
ON `courses`.`id` = `users_courses`.`course_id`
INNER JOIN `phones`
ON `users_courses`.`user_id` = `phones`.`user_id`
WHERE `phones`.`phone` LIKE '%11%';

-- Bẫy Query N + 1