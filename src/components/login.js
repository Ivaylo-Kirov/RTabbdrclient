import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            unauthorized: ''
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
        axios.post(('http://localhost:5000/login'), {
            email: this.state.email,
            password: this.state.password
          })
          .then((response) => {
            localStorage.setItem('loginToken', response.data);
          })
          .catch((error) => {
              this.setState({error: 'Unauthorized'})
          })
    }

    render() {
        return(
            <Col>
                Login
                <Form onSubmit={this.submitForm}>
                    <FormGroup>
                        <Label for="drEmail">Email</Label>
                        <Input type="email" name="email" id="drEmail" onChange={this.onInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="drPassword">Password</Label>
                        <Input type="password" name="password" id="drPassword" onChange={this.onInputChange} />
                    </FormGroup>
                    <Button>Submit</Button>
                    {this.state.error && 'Unauthorized'}
                </Form>
            </Col>
        )
    }
}

export {Login};