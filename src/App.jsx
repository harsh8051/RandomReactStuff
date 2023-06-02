import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DraggableWindow from "./DraggableComponentDemo/MainWindow";
import TextWindow from "./TextDraft/MainWindow";
import Header from './App/components/Header'
import Container from './App/components/Container'
import Main from "./Style.module.css";
export default function App() {
  return (
    <div className={Main.container}>
      <div className={Main.sidenav}>
        <Link to="/" className={Main.LinkTab}>
          Home
        </Link>
        <Link to="/drag" className={Main.LinkTab}>
          Drag
        </Link>
        <Link to="/edittable" className={Main.LinkTab}>
          Editable
        </Link>
      </div>
      <div className={Main.main}>
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/drag" element={<DraggableWindow />} />
          <Route path="/edittable" element={<TextWindow />} />
        </Routes>
      </div>
    </div>
  );
}
