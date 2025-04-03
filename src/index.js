//#region External project imports
import React from "react";
import ReactDOM from "react-dom/client";
//#endregion

//#region Internal project imports
import "./index.css";

import App from "./App";
//#endregion

//#region File body
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>
	<App />
</React.StrictMode>);
//#endregion
