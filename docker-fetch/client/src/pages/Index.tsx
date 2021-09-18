import { Link } from "react-router-dom"



export const Index = () => {
    return (
        <div>
            <Link to="/count1">Count1 (clientOnly mode)</Link>
            <br/>
            <Link to="/count2">Count2 (SSR mode)</Link>
        </div>
    );
}