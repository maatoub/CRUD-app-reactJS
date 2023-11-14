import axios from "axios";

export const UsersApi = axios.create({
  baseURL: "http://localhost:2000",
});

export const GetAllUsers = () => {
  return UsersApi.get("/users");
};

export const GetUser = (id) => {
  return UsersApi.get(`/users/${id}`);
};

export const DeleteUser = (user) => {
  return UsersApi.delete(`/users/${user.id}`);
};

export const SaveUser = (user) => {
  return UsersApi.post(`/users`, user);
};

export const CheckUser = (user) => {
  return UsersApi.patch(`/users/${user.id}`, { checked: !user.checked });
};

export const UpdateUser = (user) => {
  return UsersApi.put(`/users/${user.id}`, user);
};
