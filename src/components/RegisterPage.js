import React, { Component } from "react";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  address: "",
  username: "",
};

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  // Add handle submit

  render() {
    // Add is valid
    return (
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ marginBottom: "50px" }}>Register</h1>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="1234 E Main"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button style={{ marginTop: "20px" }}>Register</Button>
        </Form>
      </div>
    );
  }
}

export default RegisterPage;
