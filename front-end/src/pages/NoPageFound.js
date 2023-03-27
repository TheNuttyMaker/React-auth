import { useHistory } from "react-router-dom";


export const NoPageFound = () => {
    const history = useHistory();
    return (
        <div className="content-container">
            Sorry! This Page doesn't exists.. Please click here to go to 
            <button onClick={ () => {history.push('/login')}}>Login Page</button>.
        </div>
    )
}