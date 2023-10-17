import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useNavigation } from "react-router-dom";
import { Loader } from "@mantine/core";
const RootPage = () =>{
    //TODO: Add the loading state to a modal
    const {state} = useNavigation();
    return(
        <>
            <Navigation/>
            {state === "loading" && <Loader color="blue"/>}
            <Outlet/>
        </>)
}

export default RootPage
