import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "nasser",
      checked: false,
    },
    {
      id: 2,
      name: "ahmed",
      checked: true,
    },
  ]);
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="card text-start mt-4">
          <div className="card-body">
            <div className="table-responsive-lg bg-info">
              <table className="table table-light">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Checked</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr className="">
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>
                        <button className="btn btn-outline-success">
                          <FontAwesomeIcon icon={faCheckCircle} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
