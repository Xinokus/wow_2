import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './header/header.jsx'
import Main from './main/main.jsx'
import Footer from './footer/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </StrictMode>,
)
