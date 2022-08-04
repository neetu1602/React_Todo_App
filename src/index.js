import React from 'react';
import ReactDOM from 'react-dom';
//component file
import TodoContainer from './components/TodoContainer';
//stylesheet
import "./App.css"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
//copied from code
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'


ReactDOM.render(
    <React.StrictMode>
        <TodoContainer />
    </React.StrictMode>,


    document.getElementById("root"))
