import T_Product from "../types/product"
import Product from "./Product"
import { SimpleGrid } from "@mantine/core"
interface Props {
    products: T_Product[]
}

const ProductsList = (props: Props): JSX.Element =>{
    return <SimpleGrid cols={3}>
        {props.products ? 
        props.products.map((product) => 
                <li key={product.id}>
                    <Product data={product}/>
                </li>) 
        : 
            <p>No products found</p>}
    </SimpleGrid>
}

export default ProductsList
