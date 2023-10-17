import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";

const CartPage = () =>{
    const getCart = localStorage.getItem("cart");
    const [cart, setCart] = useState<string[]>([]);
    const [opened, {open, close}] = useDisclosure(false);


    useEffect(() => {
        if(getCart) {
            setCart(JSON.parse(getCart));
        }
    }, [])

    const handleClearCart = () => {
        localStorage.removeItem("cart");
        setCart([]);
        close();
    }

    return <div>
        <Modal opened={opened} onClose={close} title="Are you sure you want to clear your cart?" centered>
            <Button onClick={handleClearCart}>Confirm</Button>
        </Modal>

        <p>Cart page</p>
        <ul>
            {cart && cart.map((item, index) => (<p>{`${index + 1}: ${item}`}</p>))}
        </ul>
        <Button onClick={open}>Clear Cart</Button>

    </div>
}

export default CartPage
