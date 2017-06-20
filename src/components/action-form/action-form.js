import React, { Component } from 'react'

import { Form, Container, Button, Header } from 'semantic-ui-react'

const options = [
  { key: 'am1', text: 'Jenny', value: 'Jenny' },
  { key: 'am2', text: 'John', value: 'John' },
];
let max_chars = 140;

export default class LeadForm extends Component {

  state = { chars_left: max_chars};

  handleChange(event) {
    var input = event.target.value;
    this.setState({
      chars_left: max_chars - input.length
    });
  }

  render() {
    return (
      <Container text>
        <Header as='h1'>New Action</Header>
        <Form>
          <Form.Select label='Lead Company Name' options={options} placeholder='Lead Company Name' />
          <Form.Group widths='equal'>
            <Form.Input label='Account Manager' placeholder='Account Manager' disabled />
            <Form.Input label='Lead Type' placeholder='Lead Type' disabled />
          </Form.Group>
          <Form.Select label='Action Type' options={options} placeholder='Action Type' />
          <Form.Field label='Note' control='textarea' rows='3' onChange={this.handleChange.bind(this)} />
          <p>Characters Left: {this.state.chars_left}</p>
          <Button type='submit'>Add Action</Button>
        </Form>
      </Container>
    )
  }

}


