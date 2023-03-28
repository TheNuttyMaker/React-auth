import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = props => {
    const user = null;

    if(!user) {
        console.log("User isn't logged in");
        return <Redirect to="/login" />;
    }

    return <Route {...props} />;
    
}