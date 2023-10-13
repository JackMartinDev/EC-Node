import T_Product from "../types/product"
import { Box, Card, Image, Badge, Text, Group} from "@mantine/core"
interface T_Props {
    data: T_Product
}

const imgLink = "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"

const Product = ({data}:T_Props):JSX.Element => {
    return(
        <Box maw={340} mx="auto">
            <Card shadow="sm" withBorder padding="lg" radius="md">
                <Card.Section>
                    <Image 
                        src={imgLink} width={500} height={160} alt="Product"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}> {data.title}</Text>
                    <Badge color="blue" variant="light">{`$${data.price}`}</Badge>
                </Group>

                <Text size="sm" c="dimmed">
                    {data.description}
                </Text>
            </Card>
        </Box>
    )
}

export default Product
