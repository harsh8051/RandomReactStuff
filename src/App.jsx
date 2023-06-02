import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DraggableWindow from "./DraggableComponentDemo/MainWindow";
import TextWindow from "./TextDraft/MainWindow";
import Header from "./App/components/Header";
import Container from "./App/components/Container";
import Main from "./Style.module.css";
export default function App() {
  const appList = [
    {
      title: "Editable",
      link: "edit",
      componentName: <TextWindow/>,
    },
    {
      title: "Drag",
      link: "drag",
      componentName: <DraggableWindow/>,
    },
  ];

  return (
    <div className={Main.container}>
      <div className={Main.sidenav}>
        <Link to="/" className={Main.LinkTab}>
          Home
        </Link>
        {appList.map((app) => {
          return (
            <Link to={`/${app.link}`}className={Main.LinkTab}>
              {app.title}
            </Link>
          );
        })}
      </div>
      <div className={Main.main}>
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          {appList.map((app)=>{
            return(<Route path={`/${app.link}`} element={app.componentName} />)
          })}
        </Routes>
      </div>
    </div>
  );
}
