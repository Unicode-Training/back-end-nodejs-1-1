/*
Content-Type
- application/json --> Chỉ text
- application/x-www-form-urlencoded --> Chỉ text
- multipart/form-data --> Upload file và text
*/
const imageEl = document.querySelector(".image");
const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", async () => {
  const image = imageEl.files[0];
  const formData = new FormData();
  formData.append("file", image);
  const response = await fetch(`https://api.escuelajs.co/api/v1/files/upload`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  console.log(data);
});
