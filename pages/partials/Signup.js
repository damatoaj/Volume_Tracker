import {useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default function Signup(props) {
    const user = props.user;
    const password= props.password;
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);

    //TODO add email/password verification
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading])

    const handleClick = (e) => {
        e.preventDefault();
        console.log('handle click works')
        axios.post(`/api/User/userCreate`, {fname, lname, email, password})
        .then(response => {
            setLoading(true);
            setRedirect(true);
            props.setToken(localStorage.getItem('jwtToken'))
            props.handleAuth(response.data)
            console.log(response)
            if(redirect) return( <PrivateRoute />)
        })
    }


    return (
        <Form 
            id="signup-form"
            method="POST"
            action="/api/User/userCreate"
        >
            <fieldset>
                <legend>Signup for the App</legend>
                <Form.Group id="signup-fname">
                    <Form.Label htmlFor='fname'>First Name:</Form.Label>
                    <Form.Control 
                        type='text' 
                        id='fname' 
                        name='fname'
                        onChange={e=> setFname(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group id="signup-lname">
                    <Form.Label htmlFor='lname'>Last Name:</Form.Label>
                    <Form.Control 
                        type='text' 
                        id='lname' 
                        name='lname'
                        onChange={e => setLname(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group id="signup-email">
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Control 
                        type='email' 
                        id='email' 
                        name='email'
                        onChange={e=> setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group id="signup-password">
                    <Form.Label htmlFor='password'>Password:</Form.Label>
                    <Form.Control 
                        type='password' 
                        id='password' 
                        name='password'
                        onChange={e=> props.setPassword(e.target.value)}
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