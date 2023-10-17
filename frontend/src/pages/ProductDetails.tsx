import { Button, Title } from "@mantine/core"
import { Link, useParams, useLoaderData } from "react-router-dom"
import Product from "../types/product";

const ProductDetailsPage = (): JSX.Element =>{
//    const params = useParams();
    const product = useLoaderData() as Product;

    return (
        <>
            <Title>Details Page</Title>
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to="/products">
                <Button>Back</Button>
            </Link>
        </>
    )
}

export default ProductDetailsPage

type Params = {
    productId: string
}

export async function loader ({request, params} : {request: Request, params: Params}):Promise<any> {
    const productId = params.productId;

    const response = await fetch("http://localhost:3000/products/" + productId);

    if(!response.ok){
        throw new Response(JSON.stringify({message: "Could not fetch product details"}), {status: 500});
    } else{
        return response
    }
}
