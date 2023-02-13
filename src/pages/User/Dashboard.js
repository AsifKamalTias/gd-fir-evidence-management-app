import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

import UserHeader from '../../components/user/UserHeader';
import Footer from '../../components/Footer';

const Dashboard = () => {
    return (
        <>
            <UserHeader></UserHeader>
            <div className='mt-4'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h4>Welcome to the Police Complaint and Crime Evidence Management System</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="text-center">
                            <Button className="m-3">Register FIR</Button>
                            <Button className="m-3">Register GD</Button>
                            <Button className="m-3">Upload Evidence</Button>
                            <Button className="m-3">Track Complaints</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default Dashboard;