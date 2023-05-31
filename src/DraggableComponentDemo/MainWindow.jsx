import React from "react";
import DraggableObject from "./components/DraggableObject";
import Draggable from './Draggable.module.css'

export default function DraggableWindow() {
  return <div className={Draggable.mainContainer}><DraggableObject/></div>;
}
