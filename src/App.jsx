import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DraggableWindow from "./DraggableComponentDemo/MainWindow";
import TextWindow from "./TextDraft/MainWindow";
import Main from "./Style.module.css";
export default function App() {
  return (
    <div className={Main.container}>
    <div className={Main.sidenav}>
        <a href="drag">Drag</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>
      <div className={Main.main}>
      <header className={Main.header}>
        <h1>Test app real time update</h1>
      </header>
      
        <Routes>
          <Route path="/" element={<TextWindow />} />
          <Route path="/drag" element={<DraggableWindow />} />
        </Routes>
      </div>
    </div>
  );
}
