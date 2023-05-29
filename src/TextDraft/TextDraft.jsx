import React, { useRef } from 'react';
import './RichTextEditor.css';

export default function TextDraft() {
  const editorRef = useRef(null);

  const handleFormat = (command) => {
    document.execCommand(command, false, null);
  };
  return (
    <div className="rich-text-editor">
      <div className="format-controls">
        <button onClick={() => handleFormat("bold")}>
          <strong>B</strong>
        </button>
        <button onClick={() => handleFormat("italic")}>
          <em>I</em>
        </button>
      </div>
      <div className="editor" contentEditable="true" ref={editorRef} />
    </div>
  );
}
