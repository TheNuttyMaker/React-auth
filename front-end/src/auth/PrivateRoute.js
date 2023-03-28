import { Route, Redirect } from "react-router-dom";
import { useUser } from "./useUser";

export const PrivateRoute = props => {
    const user = useUser();

    if(!user) {
        console.log("User isn't logged in");
        return <Redirect to="/login" />;
    }

    return <Route {...props} />;
    
}