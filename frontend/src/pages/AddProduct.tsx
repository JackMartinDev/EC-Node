import { useRef, useState } from "react";
import T_Product from "../types/product";
import { useNavigate } from "react-router-dom";

const AddProductPage = ():JSX.Element =>{
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
        PostProduct(newProduct)

        nameRef.current!.value = "";
        urlRef.current!.value = "";
        descRef.current!.value = "";
        priceRef.current!.value = "";

        navigate("/products") 
    }

    return (<>
        <div>Add products page</div>
        {isPending && <p>Pending...</p>}
        <form autoComplete="off" onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="title">Name</label>
                <input name="title" ref={nameRef} type="text" id="title"/>
            </div>
            <div>
                <label htmlFor="url">Image url</label>
                <input name="url" ref={urlRef} type="text" id="url"/>
            </div>
            <div>
                <label htmlFor="desc">Description</label>
                <input name="desc" ref={descRef} type="text" id="desc"/>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input  name="price" ref={priceRef} type="number" id="price"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </>)
}

export default AddProductPage
