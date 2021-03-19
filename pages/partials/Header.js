import { useState, useEffect } from 'react';
import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default function Header (props) {
    const [isLoading, setLoading] = useState(false);
    console.log(props)

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading])

    const handleClick = e => {
        setLoading(true);
        e.preventDefault();
        console.log("logging out")
        props.setToken(null);
        props.setCurrentUser(null)
        props.setPassword(null);
        props.setData([])
    };


    let conditionalHeader = props.currentUser ?
            <Jumbotron>
                <h1 className="display-1">Welcome {props.currentUser.fname} {props.currentUser.lname}</h1>
                <h1>Keep Track Of Those Gains!</h1>
                <Button
                    as="input"
                    disabled={isLoading} 
                    onClick={!isLoading ? handleClick: null }
                    type='submit' 
                    value="Log Out"
                    variant="primary" 
                    size="lg" 
                    active
                    block
                />
            </Jumbotron>
         :
            <Jumbotron>
                <h1 className="display-1">Login or Sign Up</h1>
                <h1>To Track Your Exercise Volume</h1> 
            </Jumbotron>
    return (
            <header>
                {conditionalHeader}
            </header>
        )
}