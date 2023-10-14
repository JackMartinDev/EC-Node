import { NavLink } from "react-router-dom"
import classes from "./Navigation.module.css"
import { Group } from "@mantine/core"
const Navigation = () =>{
    const links = [
        {link: "/", label: "Shop"},
        {link: "/products", label: "Products"},
        {link: "/cart", label: "Cart"},
        {link: "/orders", label: "Orders"},
        {link: "/admin/add-product", label: "Add Product"},
        {link: "/admin/products", label: "Admin Products"},
    ]

    const items = links.map((link) => (
        <NavLink to={link.link} className={classes.link}>{link.label}</NavLink>
    ))

    return(
        <>
            <header className={classes.header}>
                <div className={classes.inner}>
                    <Group ml={50}  gap={5} className={classes.links} visibleFrom="sm">
                        {items}
                    </Group>
                </div>
            </header>
        </>)
}

export default Navigation
