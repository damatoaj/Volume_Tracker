import Login from '../partials/Login';
import Signup from '../partials/Signup';

export default function Auth (props) {    
    return(
        <>
            <Signup 
                setCurrentUser={props.setCurrentUser} 
                handleAuth={props.handleAuth} 
                setToken={props.setToken} 
                password={props.password}
                setPassword={props.setPassword}
            />
            <Login 
                setData={props.setData}
                setCurrentUser={props.setCurrentUser} 
                handleAuth={props.handleAuth} 
                setToken={props.setToken}
                password={props.password}
                setPassword={props.setPassword}
            />
        </>
    )
}