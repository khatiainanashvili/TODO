import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import Page404 from "./components/Page404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<UserPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
