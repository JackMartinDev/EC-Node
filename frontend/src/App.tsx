import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'

const router = createBrowserRouter([{path:"/", element: <Root/>, errorElement: (<p>Something went wrong</p>), children:[]}]);

function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
