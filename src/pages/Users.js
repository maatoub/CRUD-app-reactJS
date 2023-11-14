import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { CheckUser, DeleteUser, GetAllUsers } from "../metier/api";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    GetAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteUser = (user) => {
    DeleteUser(user).then(() => {
      const newUsers = users.filter((u) => u.id !== user.id);
      setUsers(newUsers);
    });
  };
  const handleCheckUser = (user) => {
    CheckUser(user).then((resp) => {
      const newUsers = users.map((e) => {
        if (e.id === user.id) {
          e.checked = !user.checked;
        }
        return e;
      });
      setUsers(newUsers);
    });
  };
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
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index} className="">
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>
                        <button
                          className="btn btn-outline-success"
                          onClick={() => handleCheckUser(user)}
                        >
                          <FontAwesomeIcon
                            icon={user.checked ? faCheckCircle : faCircle}
                          />
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleDeleteUser(user)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
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
