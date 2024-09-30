import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import './index.css'
import AboutUs from './Components/About_us/About_Us'
import ContactUs from './Components/Contact_us/Contact_Us'

const router = createBrowserRouter([
  {
    path: '/', element: Layout, children: [
      { path: '', element: <Home /> },
      { path: 'About', element: <AboutUs /> },
      { path: 'Contact', element: <ContactUs /> }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  <StrictMode>
    <RouterProvider router={router} />        // 
  </StrictMode>
)
