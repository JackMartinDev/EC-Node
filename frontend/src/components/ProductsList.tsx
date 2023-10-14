import T_Product from "../types/product"
import Product from "./Product"
import { SimpleGrid } from "@mantine/core"
interface Props {
    products: T_Product[]
}

const ProductsList = (props: Props): JSX.Element =>{
    return( 
        <SimpleGrid  cols={3}>
            {props.products.map((product) => 
                <Product data={product}/>
            )} 
        </SimpleGrid>
    )
}

export default ProductsList
