import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import HomePages from './pages/HomePages.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/',
      element: <HomePages />,
    },
    {
      path: 'contact',
      element: <Contact />,
    }
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
