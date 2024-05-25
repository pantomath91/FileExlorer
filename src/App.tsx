// src/App.tsx
import React, { useState } from "react";
import "./App.css";
import FileExplorer from "./components/FileExplorer";
import { Files } from "./components/Files";

function App() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    fileName: string;
  } | null>(null);

  const handleSelectFile = (fileName: string) => {
    setSelectedFile(fileName);
  };

  const handleRightClickFile = (event: React.MouseEvent, fileName: string) => {
    event.preventDefault();
    setContextMenu({ x: event.clientX, y: event.clientY, fileName });
  };

  const handleContextMenuAction = (action: string) => {
    if (contextMenu) {
      console.log(`${action}: ${contextMenu.fileName}`);
      setContextMenu(null);
    }
  };

  return (
    <div className="App">
      <FileExplorer
        node={Files}
        selectedFile={selectedFile}
        onSelectFile={handleSelectFile}
        onRightClickFile={handleRightClickFile}
      />
      {contextMenu && (
        <ul
          className="context-menu"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <li onClick={() => handleContextMenuAction("copy")}>Copy</li>
          <li onClick={() => handleContextMenuAction("delete")}>Delete</li>
          <li onClick={() => handleContextMenuAction("rename")}>Rename</li>
        </ul>
      )}
    </div>
  );
}

export default App;
