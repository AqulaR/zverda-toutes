import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./header.jsx"
import FooterComponent from "./footer.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderComponent/>
      <App/>
      <FooterComponent/>
    </BrowserRouter>
  </React.StrictMode>,
)
