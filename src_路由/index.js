import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// 使用默认的确认函数
const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
}

ReactDOM.render(
    <BrowserRouter basename="/admin" getUserConfirmation={getConfirmation}>
        < App />
    </BrowserRouter>
    , document.getElementById('root'));
