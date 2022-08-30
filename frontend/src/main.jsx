import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';


import { BrowserRouter } from 'react-router-dom'
// import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
ReactDOM.createRoot(document.getElementById('root')).render(

  

    <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </BrowserRouter>
    

)
