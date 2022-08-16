import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export default function Login (props) {
    const router = useRouter();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    };

    const handleClick = e => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage(null);

        axios.post(`/api/User/userLogin`, form)
        .then(response => {
            props.handleAuth(response.data.user, response.data.token, response.data.data)

            setLoading(false);
            setErrorMessage(null);
            router.push('/');
        }).catch(err => {
            console.error(err);
            setLoading(false);
            setErrorMessage(err.message);
        })
    }


    return (
        <Form 
            id="login-form"
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                        required
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
                {errorMessage && <p>{errorMessage}</p>}     
            </fieldset>
        </Form>    
    )
};

Login.propTypes = {
    handleAuth: PropTypes.func.isRequired
};