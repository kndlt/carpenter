import "./App.css";
import React, { createElement } from "react";
import ReactDom from "react-dom";

import VoxelCanvas from "../components/VoxelCanvas";

export default function App() {
  return (
    <div className="app-container">
      <div className="app-header">App Header</div>
      <div className="app-body">
        <VoxelCanvas />
      </div>
      <div className="app-footer">App Footer</div>
    </div>
  );
}
