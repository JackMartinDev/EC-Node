import ProductsList from "../components/ProductsList";
import { Title, rem } from "@mantine/core";

const ProductsPage = ():JSX.Element =>{
    return( 
    <ul>
        <Title mb={rem(32)}>Products List</Title>
        <ProductsList/>
    </ul>
    )
}

export default ProductsPage 
