// starting with React 17 you don't have to import React in TSX files anymore
import { VegaLite, VisualizationSpec } from "react-vega";

import logo from "./logo.svg";
import "./App.css";
import { barSpec, barData, imdbSpec } from "./vegaSpecs";

// function breakTheLaw() {
//   location.href = "javascript:void(0)";
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <VegaLite spec={barSpec as VisualizationSpec} data={barData} />
        <p>Click on bars to select only that genre</p>
        {/* use SVG renderer here instead of default canvas */}
        <VegaLite spec={imdbSpec as VisualizationSpec} renderer="svg" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
