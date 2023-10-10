import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const RootPage = () =>{
    return(
        <>
            <Navigation/>
            <Outlet/>
        </>)
}

export default RootPage
