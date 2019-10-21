import React from 'react'
import { Col} from 'reactstrap'
import axios from 'axios'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: {
                name: '',
                communication: '',
                email: '',
                loggedIn: false
            }
        };
    }
    componentDidMount() {
        if (localStorage.getItem('loginToken')) {
            this.setState({loggedIn: true})
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
    }
    render() {
        let name, communication, email;
        if (this.state.loggedIn) {
            name = this.state.doctor.name;
            communication = this.state.doctor.communication;
            email = this.state.doctor.email;
        }
        return(
             
            <Col>
            {this.state.loggedIn && 
            <section className="jumbotron text-center">
                <div className="container">
                <h1 className="jumbotron-heading">Album example</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <p>
                    <h3>Name: {name}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Communication: {communication}</h3>
                </p>
                </div>
            </section>
            }
            </Col>
        )
    }
}

export {Profile};