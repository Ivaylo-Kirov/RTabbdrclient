import React from 'react'
import { Row, Col } from 'reactstrap'

class Footer extends React.Component {
    render() {
        return(
            <Row>
            <Col>
            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                    <small className="d-block mb-3 text-muted">© 2017-2019</small>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li>Cool stuff</li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li>Resource</li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li>Business</li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li>Team</li>
                    </ul>
                    </div>
                </div>
                </footer>
            </Col>
            </Row>
        )
    }
}

export {Footer};