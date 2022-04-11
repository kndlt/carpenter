import "./index.css";
import React, { createElement } from "react";
import ReactDom from "react-dom";

import VoxelTracer from "../components/VoxelTracer";

function App() {
  return (
    <div>
      <VoxelTracer src="./foo.vox" />
    </div>
  );
}

const appContainer = document.createElement("div");
document.body.appendChild(appContainer);

ReactDom.render(<App />, appContainer);
