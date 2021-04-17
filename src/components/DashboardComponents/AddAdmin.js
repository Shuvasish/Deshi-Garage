import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../../style";
import { useHistory } from "react-router-dom";

function AddAdmin(props) {
  const [formData, setFormData] = useState({
    email: "",
    role: "admin",
  });
  const history = useHistory();
  const handleChange = (e) => {
    const updatedFormData = { ...formData };
    updatedFormData.ratting = e.target.value;
    setFormData(updatedFormData);
    console.log(updatedFormData);
  };

  const handleChangeInput = (e) => {
    const updatedFormData = { ...formData };
    updatedFormData.email = e.target.value;
    setFormData(updatedFormData);
    // console.log(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://peaceful-stream-74378.herokuapp.com/addAdmin", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push("/");
        }
      });
  };
  return (
    <StyledAddAdmin>
      <form
        method="POST"
        onSubmit={handleSubmit}
        action="http://localhost:4000/form"
      >
        <div className="form-group">
          <label htmlFor="Rating">Role</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            name="role"
            onChange={handleChange}
          >
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={handleChangeInput}
            placeholder="example@gmail.com"
            required
          />
        </div>

        <StyledAddAdminButton>Add Admin</StyledAddAdminButton>
      </form>
    </StyledAddAdmin>
  );
}
const StyledAddAdmin = styled.div`
  padding: 1rem 2rem;
  form {
    div {
      label {
        font-size: 1.6rem;
        color: var(--secondary);
        margin: 1rem 0rem;
      }

      select {
        /* height: 40px; */
        font-size: 2rem;
      }
      input {
        font-size: 2rem;
      }
    }
  }
`;
const StyledAddAdminButton = styled(StyledButton)`
  margin: 2rem 0rem;
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;
`;

export default AddAdmin;
