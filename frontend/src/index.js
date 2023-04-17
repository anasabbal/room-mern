import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BaseProvider, LightTheme, DarkTheme} from 'baseui';
import { Provider } from "styletron-react";
import { Client } from "styletron-engine-atomic";

const engine = new Client();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider value={engine}>
        <BaseProvider theme={DarkTheme}>
            <App />
        </BaseProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
