// starting with React 17 you don't have to import React in TSX files anymore
import { VegaLite, VisualizationSpec } from "react-vega";

import logo from "./logo.svg";
import "./App.css";
import { barSpec, barData, imdbSpec } from "./vegaSpecs";

/**
 * Demonstrate eslint integration by breaking configured eslint rules.
 *
 * In this case we were interested in no-script-url.
 *
 * Default eslint rules for CRA can be found here:
 * https://github.com/facebook/create-react-app/blob/main/packages/eslint-config-react-app/index.js
 */
function breakTheLaw(bleh: string) {
  console.log(bleh);
  location.href = "javascript:void(0)";
}

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
