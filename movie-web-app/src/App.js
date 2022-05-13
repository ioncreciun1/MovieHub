import { Route, Routes } from "react-router";
import Navbar from "./Navigation/Navbar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calender from "./Pages/Calender";
import Documents from "./Pages/Documents";
import Projects from "./Pages/Projects";
import Login from "./Pages/Authenthicate/Login"
import Register from "./Pages/Authenthicate/Register"
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";



const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  return (
    <>
      <Navbar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/calender" element={<Calender/>} />
            <Route path="/documents" element={<Documents/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />


          </Routes>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;