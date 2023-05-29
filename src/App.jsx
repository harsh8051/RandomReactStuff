import React from "react";
//import MainWindow from "./DraggableComponentDemo/MainWindow";
import MainWindow from "./TextDraft/MainWindow";
import Main from './Style.module.css'
export default function App() {
  return (
    <div className={Main.main}>
      <h1>Test app real time update</h1>
      <MainWindow/>
    </div>
  );
}
