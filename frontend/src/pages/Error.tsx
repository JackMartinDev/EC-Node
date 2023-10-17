import { Center, Text, Title, Box } from "@mantine/core";
import { ErrorResponse, useRouteError } from "react-router-dom"
import Navigation from "../components/Navigation";

const ErrorPage = ():JSX.Element =>{
    const error = useRouteError() as ErrorResponse;

    const title = "An error has occured!";
    let message; 
    
    switch(error.status){
        case 500:
            message = JSON.parse(error.data).message;
            break;
        case 404:
            message = "Could not find resource or page.";
            break;
        default:
            message = "Something went wrong!" 
    }

    return(
        <>
            <Navigation/>
            <Center>
                <Box>
                    <Title>{title}</Title>
                    <Text ta="center">{message}</Text>
                </Box>
            </Center>
        </>
    )
}

export default ErrorPage 
