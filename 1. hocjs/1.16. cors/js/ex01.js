const getUsers = async () => {
  const response = await fetch(`http://localhost:3000/api/users`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
};
getUsers();
