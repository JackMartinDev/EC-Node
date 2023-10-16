import { Button, Title } from "@mantine/core"
import { Link, useParams } from "react-router-dom"

const ProductDetailsPage = (): JSX.Element =>{
    const params = useParams()
    return (
        <>
        <Title>Details Page</Title>
        <p>{params.productId}</p>
            <Link to="/products">
                <Button>Back</Button>
            </Link>
        </>
    )
}

export default ProductDetailsPage
