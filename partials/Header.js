import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';

export default function Header (props) {
    let conditionalHeader = !props.currentUser ?
        <Jumbotron>
            <h1 className="display-1">Login or Sign Up</h1>
            <h1>To Track Your Exercise Volume</h1> 
        </Jumbotron> :
         <Jumbotron>
            <h1 className="display-1">{`Welcome ${props.currentUser?.fname} ${props.currentUser?.lname}`}</h1>
            <h1>Keep Track Of Those Gains!</h1>
            <Button
                as="input"
                disabled={props.currentUser ? false : true} 
                onClick={props.handleLogout}
                type='submit' 
                value="Log Out"
                variant="primary" 
                size="lg" 
                active
                block
            />
        </Jumbotron>;
 
    return (
            <header>
                {conditionalHeader}
            </header>
        )
};

Header.propTypes = {
    currentUser: PropTypes.object,
    handleLogout: PropTypes.func.isRequired
};