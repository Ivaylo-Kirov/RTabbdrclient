import React from 'react'
import { Col, Button} from 'reactstrap'
import axios from 'axios'
import { Jumbotron } from 'reactstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        doctors: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000')
        .then((results) => {
            this.setState({doctors: results.data})
        })
    }
    render() {
        const {doctors} = this.state;
        const doctorsDisplay = doctors.map((doctor) => {
            return <li key={doctor.id}>{doctor.name}</li>
        });
        return(
            <Col>
                <Jumbotron>
                    <h1 className="display-3">Content from PostgreSQL</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
                {doctorsDisplay}
            </Col>
        )
    }
}

export {Home};