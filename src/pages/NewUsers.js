import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { SaveUser } from "../metier/api";

const NewUsers = () => {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSaveUser = (e) => {
    e.preventDefault();
    const newUser = { name, checked };
    SaveUser(newUser)
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title text-center">Add New User</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSaveUser}>
              <div className="mb-3">
                <label className="form-label">Name : </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className=" form-check-input"
                  name="checked"
                  onChange={(e) => setChecked(e.target.value)}
                  checked={checked}
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Checked :{" "}
                </label>
              </div>
              <button type="submit" className="btn btn-outline-success">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewUsers;