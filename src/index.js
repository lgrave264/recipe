import React from 'react';
import Main from './routes/Main';
import { createRoot } from 'react-dom/client';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

// export default App
// import React from "react";
// import ReactDOM from "react-dom";
// import "./styles/main.css";
// import App from './App';

// ReactDOM.render(
//     <React.StrictMode>
//             <App />
//     </React.StrictMode>,
//     document.getElementById("root")
// );