import {useRef, useState} from "react"
import { useNavigate } from "react-router-dom"
import T_Product from "../types/product";
import { TextInput, Center, Text, rem, Box, Button, Group } from "@mantine/core";

const ProductForm = ():JSX.Element =>{

    const nameRef = useRef<HTMLInputElement|null>(null) 
    const urlRef = useRef<HTMLInputElement|null>(null) 
    const descRef = useRef<HTMLInputElement|null>(null) 
    const priceRef = useRef<HTMLInputElement|null>(null) 
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(false)

    const PostProduct = async (newProduct:T_Product) =>{
        setIsPending(true)
        try {
            const response = await fetch("http://localhost:3000/admin/add-product", {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(newProduct) 
            });
            console.log(await response.json())
            navigate("/products") 
        } catch (error) {
            console.log(error)
        }finally {
            setIsPending(false)
        }
    }

    const onSubmitHandler = (e:React.FormEvent) =>{
        e.preventDefault();
        let newProduct:T_Product = {
            id: crypto.randomUUID(),
            title: nameRef.current!.value,
            imageUrl: urlRef.current!.value,
            description: descRef.current!.value,
            price: priceRef.current!.valueAsNumber,
        }
        nameRef.current!.value = "";
        urlRef.current!.value = "";
        descRef.current!.value = "";
        priceRef.current!.value = "";

        PostProduct(newProduct)
    }
    return <>
        {isPending && <p>Pending...</p>}
        <Box maw={340} mx="auto">
           <form autoComplete="off" onSubmit={onSubmitHandler}>
                <TextInput ref={nameRef} label="Name" />
                <TextInput ref={urlRef} label="Image url" />
                <TextInput ref={descRef} label="Description" />
                <TextInput ref={priceRef} label="Price"  type="number"/>
                <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    </>
    
}

export default ProductForm
