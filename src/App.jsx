import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/todo/" element={<Home />} />
        <Route path="/todo/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
