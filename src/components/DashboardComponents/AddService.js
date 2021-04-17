import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { StyledButton } from "../../style";

const axios = require("axios").default;

function AddService(props) {
  const [formData, setFormData] = useState({
    Title: "",
    Price: "",
    image: "",
    Description: "",
  });
  const [uploading, setUploading] = useState(true);

  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "title") {
      const updatedFormData = { ...formData };
      updatedFormData.Title = e.target.value;
      setFormData(updatedFormData);

      //   console.log(formData);
    }
    if (e.target.name === "description") {
      const updatedFormData = { ...formData };
      updatedFormData.Description = e.target.value;
      setFormData(updatedFormData);

      //   console.log(formData);
    }
    if (e.target.name === "price") {
      const updatedFormData = { ...formData };
      updatedFormData.Price = e.target.value;
      setFormData(updatedFormData);

      //   console.log(formData);
    }
    if (e.target.name === "image") {
      //   console.log(e.target.files[0]);
      setUploading(false);
      const imgData = new FormData();
      imgData.set("key", "b7208d4692c9469eccc6968f41a30c06");
      imgData.append("image", e.target.files[0]);

      axios
        .post("https://api.imgbb.com/1/upload", imgData)
        .then(function (response) {
          const updatedFormData = { ...formData };
          updatedFormData.image = response.data.data.display_url;
          setFormData(updatedFormData);
          setUploading(true);
          //   console.log(response.data.data.display_url);
        })
        .catch(function (error) {
          //   console.log(error);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://peaceful-stream-74378.herokuapp.com/addService", {
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
    <StyledAddService>
      <form
        method="POST"
        onSubmit={handleSubmit}
        action="http://localhost:4000/form"
      >
        <div className="form-group">
          <label htmlFor="text">Service Title</label>
          <br />
          <input
            type="text"
            name="title"
            id="text"
            className="form-control"
            onChange={handleChange}
            placeholder="example"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <br />
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            onChange={handleChange}
            placeholder="description"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <br />
          <input
            type="number"
            name="price"
            id="price"
            className="form-control"
            onChange={handleChange}
            placeholder="12000"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="img">Image</label>
          <br />
          <input
            type="file"
            name="image"
            id="image"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        {uploading ? (
          <StyledServiceButton>Add Service</StyledServiceButton>
        ) : (
          <p className="text-danger py-2">Image Uploading, Please Wait!</p>
        )}
      </form>
    </StyledAddService>
  );
}

const StyledAddService = styled.div`
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

const StyledServiceButton = styled(StyledButton)`
  margin: 2rem 0rem;
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;
`;

export default AddService;
