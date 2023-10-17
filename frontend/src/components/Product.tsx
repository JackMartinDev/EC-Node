import T_Product from "../types/product"
import { Box, Card, Image, Badge, Text, Group, Button} from "@mantine/core"
import { IconShoppingCart } from "@tabler/icons-react"
import { Link } from "react-router-dom"

interface T_Props {
    data: T_Product
}

const placeholderImg = "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"


const Product = ({data}:T_Props):JSX.Element => {

    const handleAddToCart = (e:React.MouseEvent<HTMLElement>):void => {
        e.preventDefault();

        const currentCart = localStorage.getItem("cart");
        let newCart: string[] = [];
        if(currentCart){
            newCart = [...JSON.parse(currentCart)];
        } 

        newCart.push(data.id);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    
    return(
        <Box maw={340} miw={340} mx="auto">
            <Card shadow="sm" withBorder padding="lg" radius="md">
                <Card.Section>
                    <Image 
                        src={placeholderImg} width={500} height={160} alt="Product"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}> {data.title}</Text>
                    <Badge color="blue" variant="light">{`$${data.price}`}</Badge>
                </Group>

                <Text size="sm" c="dimmed">
                    {data.description}
                </Text>
                <Group justify="flex-end" mt="md">
                    <Link to={`/products/${data.id}`}>
                        <Button variant="light">
                            Details
                        </Button>
                    </Link>
                    <Button onClick={handleAddToCart} leftSection={<IconShoppingCart size={14}/>} variant="light">
                        Add to cart
                    </Button>
                </Group>
            </Card>
        </Box>
    )
}

export default Product
