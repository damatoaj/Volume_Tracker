import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
// import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';
// import { redirect } from 'next/dist/next-server/server/api-utils';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default function Login (props) {
    const password = props.password;
    const user = props.user;
    const [email, setEmail] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [isLoading, setLoading] = useState(false);
    console.log(email)

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading])

    const handleClick = e => {
        e.preventDefault();
        console.log("this is a login attempt")
        console.log(email)
        axios.post(`/api/User/userLogin`, {email, password})
        .then(response => {
            setRedirect(true);
            props.setToken(localStorage.getItem('jwtToken'));
            props.handleAuth(response.data.user)
            props.setData(response.data.data)
            setLoading(true);
            console.log(response)
            console.log('login click working')
            if (redirect) return <PrivateRoute />
        }).catch(err => {
            console.log(err, 'KILL ME PLEASE')
        })
    }


    return (
        <Form 
            id="login-form"
            // onSubmit={loginUser}

        >
            <fieldset>
                <legend>Login To Your Account</legend>
                <Form.Group id="login-email">
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Control 
                        type='email' 
                        id='email' 
                        name='email'
                        autoComplete="email"
                        onChange={e=> setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group id="login-password">
                    <Form.Label htmlFor='password'>Password:</Form.Label>
                    <Form.Control 
                        type='password' 
                        id='password' 
                        name='password'
                        autoComplete='password'
                        onChange={e=> props.setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button 
                    as="input"
                    disabled={isLoading} 
                    onClick={!isLoading ? handleClick: null }
                    type='submit' 
                    value="Submit"
                    variant="primary" 
                    size="lg" 
                    active
                />               
            </fieldset>
        </Form>    
    )
}

