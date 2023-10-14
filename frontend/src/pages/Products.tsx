import { useEffect, useState } from "react"
import T_Product from "../types/product";
import ProductsList from "../components/ProductsList";
import { Title, rem } from "@mantine/core";
const ProductsPage = ():JSX.Element =>{
    const [products, setProducts] = useState<T_Product[]>([]);
    const [error, setError] = useState<Boolean>(false)

    useEffect(() => {
        const getProducts = async () =>{
            try {
                const response = await fetch("http://localhost:3000/products");

                if(!response.ok){
                    setError(true);
                }else{
                    const data = await response.json()
                    setProducts(data)
                }
            } catch (error) {
                setError(true)

            }finally {

            }
        }
        getProducts()
    }, [])
    return( <ul>
        <Title mb={rem(32)}>Products List</Title>
        {error && <p>Error!</p>}
        <ProductsList products={products}/>
    </ul>
    )
}

export default ProductsPage 
