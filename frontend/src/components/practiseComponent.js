import React, { useState } from 'react';

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    pincode: '',
  });

  const submitForm = () => {
    // Display data in the console
    console.log("Name: " + formData.name);
    console.log("Email: " + formData.email);
    console.log("Password: " + formData.password);
    console.log("Pincode: " + formData.pincode);

    // Store data in local storage
    localStorage.setItem("userData", JSON.stringify(formData));

    // Optionally, you can clear the form after submission
    setFormData({
      name: '',
      email: '',
      password: '',
      pincode: '',
    });
  };

  const loadData = () => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem("userData");

    if (storedData) {
      // Parse the JSON string to object
      const userData = JSON.parse(storedData);

      // Populate form fields with existing data
      setFormData(userData);
    } else {
      alert("No data found in local storage.");
    }
  };

  const deleteData = () => {
    // Clear data from local storage
    localStorage.removeItem("userData");

    // Clear data from the form
    setFormData({
      name: '',
      email: '',
      password: '',
      pincode: '',
    });
  };

  const readData = () => {
    // Read data from local storage and display on the page
    const storedData = localStorage.getItem("userData");

    if (storedData) {
      // Parse the JSON string to object
      const userData = JSON.parse(storedData);

      // Display data on the page
      // Note: In a real React application, you should use state and JSX to render content
      console.log("Read Data from Local Storage:");
      console.log("Name: " + userData.name);
      console.log("Email: " + userData.email);
      console.log("Password: " + userData.password);
      console.log("Pincode: " + userData.pincode);
    } else {
      alert("No data found in local storage.");
    }
  };

  return (
    <div>
      <h2>User Registration Form</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      /><br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      /><br />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      /><br />

      <label htmlFor="pincode">Pincode:</label>
      <input
        type="text"
        id="pincode"
        name="pincode"
        pattern="\d{6}"
        title="Enter a 6-digit pincode"
        value={formData.pincode}
        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
        required
      /><br />

      <button type="button" onClick={submitForm}>Submit</button>
      <button type="button" onClick={loadData}>Load Data</button>
      <button type="button" onClick={deleteData}>Delete Data</button>
      <button type="button" onClick={readData}>Read Data</button>

      <div id="displayData"></div>
    </div>
  );
};

export default UserRegistrationForm;
