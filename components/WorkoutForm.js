import { useState, useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import moment from 'moment';
import PropTypes from 'prop-types';

const today = new Date();
export default function WorkoutForm (props) {
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        minutes: 0,
        heartRate: 0,
        date: ''
    });

    const volume = useMemo(() => {
        return form.heartRate * form.minutes
    }, [form.heartRate, form.minutes]);

    
    const handleChange = (e) => {
        if (e.target.name === 'date') {
            setForm(prev => ({
                ...prev,
                [e.target.name] : moment(e.target.value).format('YYYY-MM-DD')
            }))
        } else {
            setForm(prev => ({
                ...prev,
                [e.target.name] : e.target.value
            }))
        }
    };
    
    const handleClick = e => {
        e.preventDefault();
        setIsLoading(true)
        setErrorMessage(null);

        if (form.minutes < 1 || form.heartRate < 1) {
            setErrorMessage('Minutes & Heart Rate must be above zero');
            setIsLoading(false)
            return;
        };
        if (moment(form.date).isAfter(today) || !form.date) {
            setErrorMessage('Dates must be either today or in the past');
            setIsLoading(false);
            return 
        };

        axios.post(`/api/User/${props.user.id}/workoutCreate`, { ...form, volume, id: props.user.id})
        .then(response => {
            props.setData(prev => {
                return [ ...prev, response.data ]
            });
            setIsLoading(false);
            setErrorMessage(null);
        }).catch(err=> {
            console.error(err);
            setIsLoading(false);
            setErrorMessage(err.message)
        });
    };

    return(

            <Form 
                id="workout-form"
            >
                <fieldset >
                    <legend>Enter Your Exercise Data Here</legend>
                    <Form.Group id="workout-date">
                        <Form.Label htmlFor='date'>Workout Date:</Form.Label>
                        <Form.Control 
                            className="form-control"
                            type='date' 
                            id='date' 
                            name='date'
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group id="workout-minutes">
                        <Form.Label htmlFor='minutes'>Workout Time (minutes):</Form.Label>
                        <Form.Control
                            className="form-control"
                            type='number' 
                            id='minutes' 
                            name='minutes'
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group id="workout-heartRate">
                        <Form.Label htmlFor='heartRate'>Average Heart Rate:</Form.Label>
                        <Form.Control 
                            className="form-control"
                            type='number' 
                            id='heartRate' 
                            name='heartRate'
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group id="workout-volume">
                        <Form.Label htmlFor='volume'>Exercise Volume:</Form.Label>
                        <Form.Control 
                            className="form-control"
                            type='number' 
                            id='volume' 
                            name='volume'
                            value={volume}
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
                        block
                    />
                </fieldset>
                {errorMessage && <p>{errorMessage}</p>}
            </Form>
    )
}

WorkoutForm.propTypes = {
    user: PropTypes.obj,
    setData: PropTypes.func
};