import ReactDOM from "react-dom";
import SearchParams from "./searchparams";
import { StrictMode } from "react";

const App = () => {
  return (
    <div>
      <h1>Adopt ME</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
