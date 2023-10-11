import T_Product from "../types/product"

interface T_Props {
    data: T_Product
}

const Product = ({data}:T_Props):JSX.Element => {
    return <>
        <div>
            <h1>{data.title}</h1>
        </div> 
        <div>
            <p>{data.description}</p>
        </div>
        <div>
            <p>{data.price}</p>
        </div>
        <div>
            <p>{data.imageUrl}</p>
        </div>
    </>
}

export default Product
