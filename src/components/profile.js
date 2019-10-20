import React from 'react'
import { Col} from 'reactstrap'
import axios from 'axios'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: {}
        };
    }
    componentDidMount() {
        var config = {
            headers: {'Authorization': "BEARER " + localStorage.getItem('loginToken')}
        };
        console.log(`toke: ${localStorage.getItem('loginToken')}`)
        axios.get('http://localhost:5000/user', config)
            .then((results) => {
                this.setState({doctor: results.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        const {name, communication, email} = this.state.doctor;
        return(
            <Col>
                <h3>Name: {name}</h3>
                <h3>Email: {email}</h3>
                <h3>Communication: {communication}</h3>
            </Col>
        )
    }
}

export {Profile};