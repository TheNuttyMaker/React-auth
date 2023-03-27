import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import { LogInPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { NoPageFound } from './pages/NoPageFound';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <UserInfoPage />
                </Route>
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