import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootPage from './pages/Root'
import ShopPage from './pages/Shop';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import OrdersPage from './pages/Orders';
import AddProductPage from './pages/AddProduct';
import AdminProductsPage from './pages/AdminProductsPage';
import ProductDetailsPage from './pages/ProductDetails';

import {loader as productsLoader} from "./components/ProductsList"

const router = createBrowserRouter([
    {path:"/", 
        element: <RootPage/>, 
        errorElement: (<p>Something went wrong</p>), 
        children:[
            {index: true, element: <ShopPage/>},
            {path: "/products", element: <ProductsPage/>, loader: productsLoader},
            {path: "/products/:productId", element: <ProductDetailsPage/>},
            {path: "/cart", element: <CartPage/>},
            {path: "/orders", element: <OrdersPage/>},
            {path: "/admin/add-product", element: <AddProductPage/>},
            {path: "/admin/products", element: <AdminProductsPage/>},
        ],
    },
]);

function App(): JSX.Element {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
