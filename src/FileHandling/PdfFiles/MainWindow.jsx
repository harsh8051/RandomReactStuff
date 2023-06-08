import { React, useState } from "react";
import { Page, Document } from 'react-pdf';

export default function FileHandler() {
  const [fileContent, setFileContent] = useState(null);
  const [numPages, setNumPages] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    console.log(file)
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      setFileContent(reader.result);
    };
    
  }
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {fileContent && (
        <Document file={fileContent} onLoadSuccess={onDocumentLoadSuccess}>
          
            <Page  pageNumber={1} />
          
        </Document>
      )}
    </div>
  );
}
