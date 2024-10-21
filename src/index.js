import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming you have an App component in the same folder
import './index.css'; // If you have any global styles

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // Make sure you have a div with id 'root' in your public/index.html
);
