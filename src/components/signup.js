import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            communication: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        axios.post(('http://localhost:5000/user'), {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            communication: this.state.communication
          })
          .then((response) => console.log(response))
          .catch((error) => console.log(error))
    }

    render() {
        return(
            <Col>
                SignUp
                <Form onSubmit={this.submitForm}>
                    <FormGroup>
                        <Label for="drName">Name</Label>
                        <Input type="text" name="name" id="drName" onChange={this.onInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="drEmail">Email</Label>
                        <Input type="email" name="email" id="drEmail" onChange={this.onInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="drPassword">Password</Label>
                        <Input type="password" name="password" id="drPassword" onChange={this.onInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="drCommunication">Receive Communications</Label>
                        <Input type="select" name="communication" id="drCommunication" onChange={this.onInputChange}>
                        <option>Yes</option>
                        <option>No</option>
                        </Input>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Col>
        )
    }
}

export {SignUp};