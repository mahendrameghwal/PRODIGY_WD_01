import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { WeatherProvider } from './context/WeatherContextt.jsx'
import CityProvider from './context/CityProvider.jsx'
import { SeachProvider } from './context/SearchContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SeachProvider>
  <CityProvider>
  <WeatherProvider>
  <App />
  </WeatherProvider>
  </CityProvider>
  </SeachProvider>
  </BrowserRouter>
)
