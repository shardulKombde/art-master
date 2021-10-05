import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { PaintingsProvider } from './context/paintings_context'


ReactDOM.render(
<PaintingsProvider>
  
    <App/>

</PaintingsProvider>, 

document.getElementById('root'))
