import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

import Volume from './Volume';
import HeartRate from './HeartRate';
import ExerciseTime from './ExerciseTime';
import WorkoutForm from './WorkoutForm';
import Auth from './Auth';

export default function Content (props) {
    const data = props.data;

    return (
        props.token ? 
        <div id="landing-page">
            <WorkoutForm 
                setData={props.setData}
                user={props.user}
            />
            
            <Carousel id="carousel">
                <Carousel.Item id="volume-carousel">
                    <Volume 
                        data={data}
                    />
                </Carousel.Item>
                <Carousel.Item id="volume-heartRate">
                    <HeartRate 
                        data={data}
                    />
                </Carousel.Item>
                <Carousel.Item id="volume-time">
                    <ExerciseTime 
                        data={data}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        :
        <div id="auth-landing">
            <Auth
                setData={props.setData}
                password={props.password}
                setPassword={props.setPassword}
                setToken={props.setToken}
                handleAuth={props.handleAuth}
                setCurrentUser={props.setCurrentUser}
                isAuthenticated={props.isAuthenticated}
            />
        </div> 
    )
};

Content.propTypes = {
    data: PropTypes.array,
    user: PropTypes.object,
    handleAuth: PropTypes.func,
    token: PropTypes.string,
    setData: PropTypes.func
};