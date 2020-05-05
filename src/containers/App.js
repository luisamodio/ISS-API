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
        setInterval(() => {
            fetch('http://api.open-notify.org/iss-now.json')
        .then (Response => {return Response.json()})
        .then (data => {
            this.setState({
                longitude: data.iss_position.longitude,
                latitude: data.iss_position.latitude,
            })
        })
        .then (fetch ('https://www.openstreetmap.org/#map=6/22.238/-96.746')
            .then(Response => {return Response.json()}))
        }, 5000);
    }


    render() {


        return (
        
            <div className='tc'>
                <div>
                    <Header />
                </div>
                <div>
                    <p>The current location of the ISS is longitude: {this.state.longitude}, latitude {this.state.latitude}</p>
                    <Chart longitude={this.state.longitude} latitude={this.state.latitude} />
                </div>
            </div>
        )
        
    }
}

export default App;
