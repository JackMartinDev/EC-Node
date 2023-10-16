import T_Product from "../types/product"
import T_ErrorResponse from "../types/error"
import Product from "./Product"
import { SimpleGrid } from "@mantine/core"
import { useLoaderData } from "react-router-dom";

const ProductsList = (): JSX.Element =>{
    const data = useLoaderData() as T_Product[] | T_ErrorResponse; 

    if("isError" in data){
        return <p>{data.message}</p>
    }

    const products = data;
    return( 
        <SimpleGrid  cols={3}>
            {products.map((product) => 
                <Product key={product.id} data={product}/>
            )} 
        </SimpleGrid>
    )
}

export default ProductsList

export async function loader (): Promise<any> {
    const response = await fetch("http://localhost:3000/products");
    if(!response.ok){
        return {isError: true, message: "Could not fetch products"}; 
    }else{
        return response;
    }
}

