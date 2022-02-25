import { useMutation } from "@apollo/client";
import React from "react";
import { CREATE_PERSON } from "../mutations";
const formGroup = {
  display: "flex",
  flexDirection: "column",
};
const CreatePerson = () => {
  // You may also use loading, error states or the response's data
  const [mutate, { data, loading, error }] = useMutation(CREATE_PERSON);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      variables: {
        payload: {
          name: e.target[0].value,
          age: Number(e.target[1].value),
          bio: e.target[2].value,
        },
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Create person fields */}
        <div style={{ width: 300, margin: 10 }}>
          <h3>Create a person:</h3>
          <div style={formGroup}>
            <label for="name">Name: </label>
            <input type="text" name="name" />
          </div>
          <div style={formGroup}>
            <label for="age">Age: </label>
            <input type="number" name="age" />
          </div>
          <div style={formGroup}>
            <label for="bio">Bio:</label>
            <textarea name="bio" cols="30" rows="10" />
          </div>
          <button style={{ width: "100%" }}>Create person</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePerson;
