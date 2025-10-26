import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { provider } from "react-redux";
import { store } from './redux/store.js';

import './index.css'
import App from './App.jsx'

ReactDOm.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <provider>
      <App />
    </provider>
  </React.StrictMode>,
)
