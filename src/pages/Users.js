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
  const [userState, setUserState] = useState({
    users: [],
    sizePage: 4,
    pageCurrent: 1,
    keyword: "",
  });
  useEffect(() => {
    GetAllUsers(userState.keyword, userState.pageCurrent, userState.sizePage)
      .then((res) => {
        setUserState({
          ...userState,
          users: res.data,
          sizePage: userState.sizePage,
          keyword: userState.keyword,
          pageCurrent: userState.pageCurrent,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteUser = (user) => {
    DeleteUser(user).then(() => {
      const newUsers = userState.users.filter((u) => u.id !== user.id);
      setUserState({ ...userState, users: newUsers });
    });
  };
  const handleCheckUser = (user) => {
    CheckUser(user).then(() => {
      const newUsers = userState.users.map((e) => {
        if (e.id === user.id) {
          e.checked = !user.checked;
        }
        return e;
      });
      setUserState({ ...userState, users: newUsers });
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
                  {userState.users.map((user, index) => (
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
