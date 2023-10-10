import { useEffect, useState } from "react"
import Product from "../types/product";

const ProductsPage = ():JSX.Element =>{
    const [products, setProducts] = useState<Product[]>([]);
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
        {error && <p>Error!</p>}
        {products.map((product) => <li><p> {product.id}</p></li>)}
    </ul>
    )
}

export default ProductsPage 
