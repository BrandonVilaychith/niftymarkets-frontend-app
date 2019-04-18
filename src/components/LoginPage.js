import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ marginBottom: "50px" }}>Login</h1>
        <Form>
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
          <Button style={{ marginTop: "20px" }}>Login</Button>
        </Form>
      </div>
    );
  }
}

export default LoginPage;
