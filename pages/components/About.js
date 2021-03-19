import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import { Dropdown} from 'react-bootstrap';
export default function About() {
    return(
        <DropdownButton id="about-volume" title="Why Track Volume?" size="lg" block>
            <Dropdown.ItemText id="about-text">
                <p>
                Volume is one of the best ways to measure exercise intensity for aerobic sports, regardless of disciple.
                </p>
                <p>
                Whether rowing, skiing, running or weightlifting, you can measure the intensity of the workout by multiplying heart rate and time (in minutes).
                </p>
                <p>
                Generally, the volume of a weekly workout routine should not increase by more than 5% otherwise you can risk overtraining and injury.
                </p>
                <p>
                Whether doing lots of cross training, or different modalities of interval/distance training, volume will help you understand how you're improving and how hard you're training.
                </p>
            </Dropdown.ItemText>
        </DropdownButton>
    )
}