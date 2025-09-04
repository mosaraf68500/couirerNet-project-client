import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Router'
import { RouterProvider } from 'react-router'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import AuthProvider from './Contex/AuthProvider/AuthProvider'
AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <div  className='font-urbanist max-w-7xl mx-auto'>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
 </div>
  </StrictMode>
)
