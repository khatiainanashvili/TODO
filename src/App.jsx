import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import UserPage from "./components/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/todo" element={<Home />} />
        <Route path="todo/login" element={<Login />} />
        <Route path="todo/userpage" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
