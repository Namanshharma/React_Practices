import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import './index.css'
import AboutUs from './Components/About_us/About_Us'
import ContactUs from './Components/Contact_us/Contact_Us'

// this mentioned below way is the first way to create a router.
const router = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
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
    <RouterProvider router={router} />        {/*here router is variable which we need to create it as well as there are 2 ways to create that */}
  </StrictMode>
)