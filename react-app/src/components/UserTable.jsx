import React, { useEffect, useState } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("Users", data);

        setUsers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
