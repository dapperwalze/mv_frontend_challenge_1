import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/reducers";
import App from "./App";
import "./normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.min.css";
import "remixicon/fonts/remixicon.css";
import reportWebVitals from "./reportWebVitals";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
