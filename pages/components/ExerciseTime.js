import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import Container from 'react-bootstrap/Container';
export default function ExerciseTime (props) {
    const data = props.data;
    console.log(data)
    // console.log(data.length)
    // console.log(data.date)

    return (
        <Container fluid id="minutes-container">
            <h1>Minutes compared to Heart Rate</h1>
            <ResponsiveContainer height="100%" width="100%">
                <LineChart 
                    width={730} 
                    height={250} 
                    data={data}
                    margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
                    id="exerciseTime-graph"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={data.date} >
                        <Label value="Workout Session" position="top" className="workout-label"/>
                    </XAxis>
                    <YAxis yAxisId="left" type="number" >
                        <Label 
                            value="Minutes" 
                            angle="-90" 
                            position="left" 
                        />
                    </YAxis>
                    <YAxis yAxisId="right" orientation="right" type="number" domain={['dataMin - 20', 'dataMax + 20']}>
                        <Label 
                            value="Heart Rate" 
                            angle="90"
                            position="right"
                        />
                    </YAxis>
                    <Tooltip />
                    <Legend verticalAlign="top"/>
                    <Line yAxisId="left" type="monotone" dataKey="minutes" stroke="#32a852" />
                    <Line yAxisId="right" type="monotone" dataKey="heartRate" stroke="#db2b14" />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}