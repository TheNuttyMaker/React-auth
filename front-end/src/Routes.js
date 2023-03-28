import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import { LogInPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { NoPageFound } from './pages/NoPageFound';
import { PrivateRoute } from './auth/PrivateRoute';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route path="/login">
                    <LogInPage/>
                </Route>
                <Route path="/signup">
                    <SignUpPage/>
                </Route>
                <Route path="/forgot-password">
                    <NoPageFound/>
                </Route>
            </Switch>
        </Router>
    );
}