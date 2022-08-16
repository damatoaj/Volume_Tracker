import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
export default function Signup(props) {
    const router = useRouter();
    const [form, setForm] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    };

    const handleClick = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage(null);
        
        axios.post(`/api/User/userCreate`, form)
        .then(response => {
            setIsLoading(false);
            setErrorMessage(null);
            props.handleAuth(response.data.user, response.data.token);
            router.push('/');
        })
        .catch(error => {
            console.error(error.message);
            setErrorMessage(error.message);
            setIsLoading(false)
        });
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
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group id="signup-lname">
                    <Form.Label htmlFor='lname'>Last Name:</Form.Label>
                    <Form.Control 
                        type='text' 
                        id='lname' 
                        name='lname'
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group id="signup-email">
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Control 
                        type='email' 
                        id='email' 
                        name='email'
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group id="signup-password">
                    <Form.Label htmlFor='password'>Password:</Form.Label>
                    <Form.Control 
                        type='password' 
                        id='password' 
                        name='password'
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button 
                    as="input"
                    disabled={isLoading} 
                    onClick={handleClick}
                    type='submit' 
                    value="Submit"
                    variant="primary" 
                    size="lg" 
                    active
                />              
            </fieldset>
            {errorMessage && <p>{errorMessage}</p>}
        </Form>
    )
};

Signup.propTypes = {
    handleAuth: PropTypes.func.isRequired
};