import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
// import './index.css'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import enUS from 'antd/lib/locale/en_US'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={enUS}>
    <RouterProvider router={router} />
  </ConfigProvider>,
)
