import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './routes/App';

const container = document.getElementById('root');

render(
  <React.StrictMode>
     <App />
  </React.StrictMode>, container
)
