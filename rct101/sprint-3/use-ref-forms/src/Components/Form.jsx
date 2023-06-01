import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [maritalStatus, setMaritalStatus] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const handleChangeMaritalStatus = (e) => {
    setMaritalStatus(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional processing with the form data here
    console.log({
      name,
      gender,
      role,
      maritalStatus,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={handleChangeGender}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Role:
        <select value={role} onChange={handleChangeRole}>
          <option value="">Select</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </select>
      </label>
      <br />
      <label>
        Marital Status:
        <input
          type="checkbox"
          checked={maritalStatus}
          onChange={handleChangeMaritalStatus}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
