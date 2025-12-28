import React from 'react';

interface VSCodeProps { onClose: () => void; }

const VSCode: React.FC<VSCodeProps> = ({ onClose }) => (
  <div className="h-full w-full bg-[#1e1e1e]">
    <iframe src="https://vscode.dev/" className="w-full h-full border-0" allow="clipboard-read; clipboard-write" title="VS Code" />
  </div>
);

export default VSCode;
