import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { TripProvider, useTrip } from './contexts/trip-context.jsx';

export {useTrip}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <TripProvider>
        <App />
      </TripProvider>
    </Router>
  </React.StrictMode>,
)
