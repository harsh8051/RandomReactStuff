import React, { useState } from "react";
import Draggable from "../Draggable.module.css";

export default function DraggableObject() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const boxSize = { width: 720, height: 300 };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    const offsetX = event.clientX - position.x;
    const offsetY = event.clientY - position.y;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const newX = event.clientX - offset.x;
      const newY = event.clientY - offset.y;

      const withinBoundariesX = newX >= 0 && newX + 100 <= boxSize.width;
      const withinBoundariesY = newY >= 0 && newY + 20 <= boxSize.height;

      if (withinBoundariesX && withinBoundariesY) {
        setPosition({ x: newX, y: newY });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{ top: position.y, left: position.x }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className={`${Draggable.box} ${Draggable.draggable} ${
        isDragging ? Draggable.dragging : ""
      }`}
    >
    </div>
  );
}
