import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// the RouterProvider is a react-router component
// the RouterProvider takes the router object we defined
import Weather from './pages/Weather.tsx'
import NotFound from './components/notfound.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App/> },  // index or home page of our application, the element is the component is will render at that path
  { path: "/weather", element: <Weather/>},
  { path: "*", element: <NotFound/>} // path: "*" handles any URL that isn't explicitly stated in our createBrowserRouter setup
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>
)
