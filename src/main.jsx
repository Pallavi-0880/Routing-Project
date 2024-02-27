import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
    // BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Details from './components/Details.jsx';





const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
      
        path: "/details",
        element: <Details />,
    },
    {
        path: "/topics",
        element: <Details/>, 
    }


]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
)
