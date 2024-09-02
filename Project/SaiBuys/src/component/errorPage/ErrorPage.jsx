import { useRouteError } from "react-router-dom"


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    return (
        <>
            <div>
                {error.statusText}
                {error.status}
            </div>
        </>
    );
};

export default ErrorPage