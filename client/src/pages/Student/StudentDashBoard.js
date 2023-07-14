import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

const StudentDashboard = () => {
    return (
        <Container>
            <h1 className="mt-4">Student Dashboard</h1>
            <Row className="mt-4">
                <Col md={6} lg={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>My Courses</Card.Title>
                            <Card.Text>
                                View and manage your enrolled courses.
                            </Card.Text>
                            <Card.Link href="#">View Courses</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>My Grades</Card.Title>
                            <Card.Text>
                                Check your grades and academic performance.
                            </Card.Text>
                            <Card.Link href="#">View Grades</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Class Schedule</Card.Title>
                            <Card.Text>
                                Access your weekly class schedule.
                            </Card.Text>
                            <Card.Link href="#">View Schedule</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default StudentDashboard;
