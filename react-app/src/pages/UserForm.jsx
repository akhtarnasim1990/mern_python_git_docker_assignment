import React, { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({ name: "", email: "", age: "" });
  const [submittedUser, setSubmittedUser] = useState(null);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/users/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubmittedUser(data.data);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={user.age} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>

      {submittedUser && (
        <div>
          <h3>Submitted User:</h3>
          <p>Name: {submittedUser.name}</p>
          <p>Email: {submittedUser.email}</p>
          <p>Age: {submittedUser.age}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
