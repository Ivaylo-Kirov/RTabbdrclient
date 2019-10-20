import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from './components/home'
import {SignUp} from './components/signup'
import {Container, Row, Col} from 'reactstrap'
import {Navigation} from './components/navigation'
import {Login} from './components/login'
import {Footer} from './components/footer'
import {Always404} from './components/404'
import {Profile} from './components/profile'

class AppRouter extends React.Component {
    render() {
        return(
            <Container>
            <Row><Col><Navigation /></Col></Row>
            <Row>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/login' component={Login} />
                    <Route path='/profile' component={Profile} />
                    <Route component={Always404} />
                </Switch>
            </Row>
            <Row><Col><Footer /></Col></Row>
            </Container>
        )
    }
}

export {AppRouter}