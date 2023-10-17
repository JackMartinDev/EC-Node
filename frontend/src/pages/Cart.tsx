import { Button } from "@mantine/core";
import { useEffect, useState } from "react";

const CartPage = () =>{
    const getCart = localStorage.getItem("cart");
    const [cart, setCart] = useState<string[]>([]);
    
    useEffect(() => {
        if(getCart) {
            setCart(JSON.parse(getCart));
        }
    }, [])

    const handleClearCart = () => {
        localStorage.removeItem("cart");
        setCart([]);
    }

    return <div>
        <p>Cart page</p>
        <ul>
            {cart && cart.map((item) => (<p>{item}</p>))}
        </ul>
        <Button onClick={handleClearCart}>Clear Cart</Button>

    </div>
}

export default CartPage
