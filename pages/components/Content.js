import { useState, useEffect } from 'react';

import Carousel from 'react-bootstrap/Carousel';

import Volume from './Volume';
import HeartRate from './HeartRate';
import ExerciseTime from './ExerciseTime';
import WorkoutForm from './WorkoutForm';
import Auth from './Auth';

export default function Form (props) {
    const [minutes, setMinutes] = useState(0);
    const [date, setDate] = useState(0);
    const [heartRate, setHeartRate] = useState(0)
    const [volume, setVolume] = useState(0);

    const data = props.data;

    useEffect (() => {
        setVolume(minutes*heartRate)
    }, [minutes, heartRate]);
  
    return (
        props.token ? 
        <div id="landing-page">
            <WorkoutForm 
                setData={props.setData}
                date={date}
                setDate={setDate}
                minutes={minutes}
                setMinutes={setMinutes}
                volume={volume}
                setVolume={setVolume}
                heartRate={heartRate}
                setHeartRate={setHeartRate}
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
                setToken={props.setToken}ßß
                handleAuth={props.handleAuth}
                setCurrentUser={props.setCurrentUser}
                isAuthenticated={props.isAuthenticated}
            />
        </div> 
    );
};