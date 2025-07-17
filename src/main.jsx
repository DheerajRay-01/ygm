import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import {ScrollTrigger,SplitText} from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger,SplitText);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
