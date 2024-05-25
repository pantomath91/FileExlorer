// src/components/FileExplorer.tsx
import React, { useState } from "react";
import "./FileExplorer.css";
import { FileNode } from "./Files";

interface FileExplorerProps {
  node: FileNode;
  selectedFile: string | null;
  onSelectFile: (fileName: string) => void;
  onRightClickFile: (event: React.MouseEvent, fileName: string) => void;
}

const FileExplorer: React.FC<FileExplorerProps> = ({
  node,
  selectedFile,
  onSelectFile,
  onRightClickFile,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandOrSelect = (e: React.MouseEvent, nodeName: string) => {
    e.stopPropagation();
    if (node.type === "folder") {
      setExpanded(!expanded);
    } else {
      onSelectFile(nodeName);
    }
  };

  return (
    <div>
      <div
        className={`file-node ${node.type} ${
          selectedFile === node.name ? "selected" : ""
        }`}
        onClick={(e) => handleExpandOrSelect(e, node.name)}
        onContextMenu={(e) => onRightClickFile(e, node.name)}
      >
        {node.type === "folder" && <span>{expanded ? "📂" : "📁"}</span>}
        <span>{node.name}</span>
      </div>
      {expanded && node.data && (
        <div className="file-children">
          {node.data.map((child, index) => (
            <FileExplorer
              key={index}
              node={child}
              selectedFile={selectedFile}
              onSelectFile={onSelectFile}
              onRightClickFile={onRightClickFile}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileExplorer;
