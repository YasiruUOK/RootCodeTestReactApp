import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Reg from "./components/Reg";
import HomePage from "./components/HomePage";
import SeeStats from "./components/SeeStats";
import React from 'react'
import WriteAPost from "./components/WriteAPost";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <><BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Login />} />
          <Route path="reg" element={<Reg />} />
          <Route path="home" element={<HomePage />} />
          <Route path="writeapost" element={<WriteAPost />} />
          <Route path="seestats" element={<SeeStats />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter><script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script><script
      src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
      crossorigin></script><script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script><script>var Alert = ReactBootstrap.Alert;</script></>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);