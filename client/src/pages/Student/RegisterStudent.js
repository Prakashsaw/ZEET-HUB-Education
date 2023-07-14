import React from "react";
import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterStudent = () => {
    return (
        <>
            <Form>
                <Row
                    style={{
                        height: "100vh",
                        justifyContent: "center",
                        paddingTop: "3%",
                    }}
                >
                    <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Student Register</h2>

                            <Form.Control
                                type="text"
                                placeholder="Name"
                            />

                            <Form.Control
                                type="email"
                                placeholder="Email"
                            />

                            <Form.Select aria-label="Default select example">
                                <option>Select your class...</option>
                                <option value="1">Class 1</option>
                                <option value="2">Class 2</option>
                                <option value="3">Class 3</option>
                                <option value="4">Class 4</option>
                                <option value="5">Class 5</option>
                                <option value="6">Class 6</option>
                                <option value="7">Class 7</option>
                                <option value="8">Class 8</option>
                                <option value="9">Class 9</option>
                                <option value="10">Class 10</option>
                                <option value="11">Class 11</option>
                                <option value="12">Class 12</option>
                            </Form.Select>

                            <Form.Select aria-label="Default select example">
                                <option>Choose Your language...</option>
                                <option value="1">Hindi</option>
                                <option value="2">English</option>
                                <option value="3">Marathi</option>
                                <option value="4">Tamil</option>
                                <option value="5">Telegu</option>
                                <option value="6">Gujrati</option>
                                <option value="7">Bengoli</option>
                            </Form.Select>

                            <Form.Control
                                type="text"
                                placeholder="School Name"
                            />

                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />

                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                            />

                            <Button variant="primary" type="submit" >
                                Register
                            </Button>
                            <p className="text-center" color="blue">
                                Already have an account? <Link to="/student-sign-up">Login here</Link>
                            </p>
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default RegisterStudent;
