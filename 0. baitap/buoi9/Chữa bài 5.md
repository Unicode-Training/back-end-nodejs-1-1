## Gợi ý
- Dùng hàng đợi (Queue): Lưu các Promise chưa chạy
- Chạy tối đa limit Promise cùng lúc
- Khi một Promise hoàn thành, tiếp tục lấy Promise tiếp theo từ hàng đợi
- Trả về một Promise resolve khi tất cả các Promise hoàn thành

## Code chữa bài

```js
function runWithLimit(tasks, limit) {
  return new Promise((resolve) => {
    let runningCount = 0;
    let index = 0;
    let results = [];
    
    function next() {
      if (index >= tasks.length && runningCount === 0) {
        resolve(results);
        return;
      }

      while (runningCount < limit && index < tasks.length) {
        let currentIndex = index;
        let task = tasks[index++];
        
        runningCount++;
        task().then(result => {
          results[currentIndex] = result;
        }).catch(error => {
          results[currentIndex] = error;
        }).finally(() => {
          runningCount--;
          next(); // Khi xong một task, lấy task mới
        });
      }
    }

    next();
  });
}
```

Giả lập API

```js
const tasks = Array.from({ length: 10 }, (_, i) => () =>
  new Promise(resolve =>
    setTimeout(() => resolve(`Task ${i + 1} hoàn thành`), Math.random() * 3000)
  )
);
```

Gọi hàm:

```js
runWithLimit(tasks, 3).then(data => {
  console.log(data);
})
```
