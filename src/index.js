import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { beverages, ingredients } from "./digest";
import rootReducer from "./reducers";

const initialState = {
  entities: { beverages, ingredients },
  selectedIngredients: new Set()
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("content")
);
registerServiceWorker();
