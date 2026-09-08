import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './pages/Login/index.jsx'
import { Register } from './pages/Register/index.jsx'
import { Feed } from './pages/Feed/index.jsx'
import { BlogPost } from './pages/BlogPost/index.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRouter } from './components/ProtectedRouter'
import { Logout } from './components/Logout/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/auth'>  
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
        </Route>

        <Route path='/'>  
          <Route path='' element={
            <ProtectedRouter>
              <Feed/>
            </ProtectedRouter>
          } />
          <Route path='blog-post' element={
            <ProtectedRouter>
              <BlogPost/>
            </ProtectedRouter>
          } />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
