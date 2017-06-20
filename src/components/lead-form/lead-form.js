import React, { Component } from 'react'
import DatePickerWrapper from '../DatePickerWrapper/DatePickerWrapper';
import { Form, Container, Button, Header } from 'semantic-ui-react'

const options = [
	{ key: 'am1', text: 'Jenny', value: 'Jenny' },
	{ key: 'am2', text: 'John', value: 'John' },
]

export default class LeadForm extends Component {
	render() {

		return (
			<Container text>
        <Header as='h1'>New Lead</Header>
				<Form>
					<Form.Input label='Company Name' placeholder='Company Name'/>
					<Form.Input label='Company Name' placeholder='Company Name'/>
					<Form.Select label='Account Manager' options={options} placeholder='Account Manager' />
					<DatePickerWrapper/>
          <hr />
					<Button type='submit'>Add Lead</Button>
				</Form>
			</Container>
		)
	}

}


