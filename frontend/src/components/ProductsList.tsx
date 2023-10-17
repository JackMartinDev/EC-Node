import T_Product from "../types/product"
import Product from "./Product"
import { SimpleGrid, Loader } from "@mantine/core"
import { useLoaderData, useNavigation } from "react-router-dom";

const ProductsList = (): JSX.Element =>{
    const products = useLoaderData() as T_Product[]; 
    const {state} = useNavigation();

    return( 
        <>
            {state === "loading" && <Loader color="blue"/>}
            {console.log(state)}
            <SimpleGrid  cols={3}>
                {products.map((product) => 
                    <Product key={product.id} data={product}/>
                )} 
            </SimpleGrid>
        </>
    )
}

export default ProductsList

export async function loader (): Promise<any> {
    const response = await fetch("http://localhost:3000/products");
    if(!response.ok){
        throw new Response(JSON.stringify({message: "Could not fetch products"}), {status: 500});
    }else{
        return response;
    }
}

