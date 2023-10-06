import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './components/DashBoard/Redux/Store';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
