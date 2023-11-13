import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Users from "./pages/Users";
import NewUsers from "./pages/NewUsers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/new-users" element={<NewUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
