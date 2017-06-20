import React, { Component } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleBasic extends Component {
	state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (
			<Segment inverted>
        <Menu inverted pointing secondary icon='labeled'>
          <Menu.Item
            name='Dashboard'
            active={activeItem === 'Dashboard'}
            onClick={this.handleItemClick}
            as={Link}
            to='/'
          >
            <Icon
              name='dashboard'
              color='orange'
            />
            Dashboard
          </Menu.Item>

          <Menu.Item
            name='Lead'
            active={activeItem === 'Lead'}
            onClick={this.handleItemClick}
            as={Link}
            to='/lead'
          >
            <Icon
              name='address book'
              color='orange'
            />
            Leads
          </Menu.Item>

          <Menu.Item
            name='Action'
            active={activeItem === 'Action'}
            onClick={this.handleItemClick}
            as={Link}
            to='/action'
          >
            <Icon
              name='tasks'
              color='orange'
            />
            Actions
          </Menu.Item>

          <Menu.Item
            name='Report'
            active={activeItem === 'Report'}
            onClick={this.handleItemClick}
            as={Link}
            to='/report'
          >
            <Icon
              name='line graph'
              color='orange'
            />
            Reports
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
            as={Link}
            to='/register'>
              <Icon name='add user' color='green' />
              Register
            </Menu.Item>

            <Menu.Item
            as={Link}
            to='/login'>
              <Icon name='sign in' color='green' />
              Log In
            </Menu.Item>
          </Menu.Menu>
        </Menu>
			</Segment>

		)
	}
}