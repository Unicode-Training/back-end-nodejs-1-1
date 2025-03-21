console.log(Date.prototype);

// const date = new Date();
// console.log(date);

// console.log(`Ngày: `, date.getDate());
// console.log(`Thứ: `, date.getDay());
// console.log(`Tháng: `, date.getMonth());
// console.log(`Năm: `, date.getFullYear());
// console.log(`Giờ: `, date.getHours());
// console.log(`Phút: `, date.getMinutes());
// console.log(`Giây: `, date.getSeconds());
// console.log(`Millisecond: `, date.getMilliseconds());
// console.log(`Time: `, date.getTime());

// console.log(`Giờ UTC`, date.getUTCHours());

const tomorrow = new Date("2025-03-22 09:30:35");
// console.log(tomorrow.getUTCHours());

//Bài tập: Tính số ngày, giờ, số phút, số giây còn lại từ thời điểm hiện tại đến thời điểm của tomorrow

setInterval(() => {
  const now = new Date();
  let timeDiff = (tomorrow.getTime() - now.getTime()) / 1000;

  const days = Math.floor(timeDiff / 86400);
  timeDiff -= days * 86400;
  const hours = Math.floor(timeDiff / 3600);
  timeDiff -= hours * 3600;
  const minutes = Math.floor(timeDiff / 60);
  const seconds = Math.floor(timeDiff - minutes * 60);
  document.body.innerHTML = `
    <h1>${days} ngày, ${hours} giờ, ${minutes} phút, ${seconds} giây</h1>`;
}, 1000);

//Regular Expression
