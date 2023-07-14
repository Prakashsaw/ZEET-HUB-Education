import React from "react";
import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";


const LoginStudent = () => {
    return (
        <>
            <Form>
                <Row
                    style={{
                        height: "78vh",
                        justifyContent: "center",
                        paddingTop: "5%",
                    }}
                >
                    <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Student Login</h2>

                            <Form.Control
                                type="email"
                                placeholder="Email"
                            />
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                            <Button variant="primary" type="submit" >
                                Login
                            </Button>
                            <p className="text-center" color="blue">
                                Don't have an account? <Link to="/register-student">Register here</Link>
                            </p>
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default LoginStudent;