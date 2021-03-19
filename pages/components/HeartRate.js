import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import Container from 'react-bootstrap/Container'

export default function HeartRate(props) {
    const data = props.data
    // console.log(props.data)
    // console.log(`Heart Rate, ${data} 🤬`)
    return (
        <Container fluid id="heartRate-container">
            <h1>Volume Compared to Heart Rate</h1>
            <ResponsiveContainer height="100%" width="100%">
                <LineChart 
                    width={730} 
                    height={250} 
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    id="heartRate-graph"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={data.date} >
                        <Label value="Workout Session" position="top"/>
                    </XAxis>
                    <YAxis yAxisId="left" type="number" >
                        <Label 
                            value="Volume" 
                            angle="-90"
                            postition="left"
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
                    <Line yAxisId="left" type="monotone" dataKey="volume" stroke="#8884d8" />
                    <Line yAxisId="right" type="monotone" dataKey="heartRate" stroke="#db2b14" />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
};