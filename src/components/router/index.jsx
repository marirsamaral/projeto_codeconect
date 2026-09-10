import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../../pages/Login"
import { Register } from "../../pages/Register"
import { Feed } from "../../pages/Feed"
import { BlogPost } from "../../pages/BlogPost"
import { ProtectedRouter } from "../ProtectedRouter"
import { Logout } from "../Logout"
import { AuthLayout } from "../../layouts/Auth"
import { AppLayout } from "../../layouts/App"
import { NotFound } from "../../pages/NotFound" 


export const AppRouter = () => {
    return (
        <BrowserRouter>
      <Routes>

        <Route path='/auth' element={<AuthLayout /> }>  
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
        </Route>

        <Route path='/' element={<AppLayout /> }>  
          <Route path='' element={
            <ProtectedRouter>
              <Feed/>
            </ProtectedRouter>
          } />
          <Route path='blog-post/:slug' element={
            <ProtectedRouter>
              <BlogPost/>
            </ProtectedRouter>
          } />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
} 