import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
//import { useNavigation } from "react-router-dom";

const RootPage = () =>{
//    const navigation = useNavigation();
//            {navigation.state === "loading" && <p>Loading...</p>}
    return(
        <>
            <Navigation/>
            <Outlet/>
        </>)
}

export default RootPage
