import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import { hydrate } from 'react-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

hydrate(<App />, document.getElementById("root"));

// const app = document.getElementById('root');
// const root = ReactDOM.hydrateRoot(app, <App suppressHydrationWarning/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
