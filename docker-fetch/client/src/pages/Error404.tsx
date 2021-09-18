import { StatusCode } from "react-http-status-code"

export const Error404 = () => {
    return (
        <div>
            <StatusCode code={404}/>
            <h1>404</h1>
        </div>
    );
}