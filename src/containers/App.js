import React, {Component} from 'react';
import Header from '../components/Header.js';
import Chart from './Chart'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            longitude: 0,
            latitude: 0,
        }
    }

    
    componentDidMount() {
        
        fetch('http://api.open-notify.org/iss-now.json')
        .then (Response => {return Response.json()})
        .then (data => {
            this.setState({
                longitude: data.iss_position.longitude,
                latitude: data.iss_position.latitude,
            })
        })

    
        setInterval(() => {
        fetch('http://api.open-notify.org/iss-now.json')
        .then (Response => {return Response.json()})
        .then (data => {
            this.setState({
                longitude: data.iss_position.longitude,
                latitude: data.iss_position.latitude,
            })
        })
        }, 5000);
    }


    render() {


        return (
        
            <div className='tc'>
                <div>
                    <Header />
                </div>
                <div>
                    <p>The current location of the ISS is longitude: {this.state.longitude}, latitude {this.state.latitude} (Updates every 5 seconds...)</p>
                    <Chart longitude={this.state.longitude} latitude={this.state.latitude} />
                </div>
            </div>
        )
        
    }
}

export default App;
