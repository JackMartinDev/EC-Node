import { NavLink } from "react-router-dom"
import classes from "./Navigation.module.css"
const Navigation = () =>{
    return(
        <>
            <header className={classes.header}>
                <nav>
                    <ul className={classes.list}>
                        <li>
                            <NavLink to={"/"}>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/products"}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/cart"}>Cart</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/orders"}>Orders</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/add-product"}>Add Product</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/products"}>Admin Products</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>)
}

export default Navigation
