import React, { useRef } from "react";
import "./RichTextEditor.css";

export default function TextDraft() {
  const editorRef = useRef(null);

  const handleFormat = (command) => {
    document.execCommand(command, false, null);
  };
  return (
    <div className="rich-text-editor">
      <div className="format-controls">
        <button  onClick={() => handleFormat("italic")}>
        <label className="switch">
        <input type="checkbox"></input>
        <span className="slider round"></span>
        </label>
        </button>
        <button className="square-button" onClick={() => handleFormat("bold")}>
          <strong>B</strong>
        </button>
        <button className="square-button" onClick={() => handleFormat("italic")}>
          <em>I</em>
        </button>
      </div>
      <div className="editor" contentEditable="true" ref={editorRef} />
    </div>
  );
}
