import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js';
import { Provider } from 'react-redux';

import { GoogleOAuthProvider } from '@react-oauth/google'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SigninPage from './pages/SigninPage.jsx'
import DashBoardPage from './pages/DashBoardPage.jsx'
import UnhandledRoutePage from './pages/UnhandledRoutePage.jsx'
import UploadPage from './pages/UploadPage.jsx'
import Home from './pages/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="332249376360-5g7emeksu4v5c3a0d8bgmnfesm0tpqdc.apps.googleusercontent.com">
  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SigninPage/>} />
        <Route path='/user' element={<App />} >
          <Route path='dashboard' element={<DashBoardPage />} />
          <Route path='upload' element={<UploadPage />} />
          <Route path='*' element={<UnhandledRoutePage />} />
        </Route>
        <Route path='*' element={<UnhandledRoutePage />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
  </GoogleOAuthProvider>,
)
