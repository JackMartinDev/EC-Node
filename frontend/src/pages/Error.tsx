import { Text, Title } from "@mantine/core";
import { ErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = ():JSX.Element =>{
    const error = useRouteError() as ErrorResponse;

    const title = "An error has occured!";
    let message = "Something went wrong!"; 
    
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
            <Title>{title}</Title>
            <Text>{message}</Text>
        </>
    )
}

export default ErrorPage 
