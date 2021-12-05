import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

export default class NavBar extends Component {
    state = { activeItem: 'home' }
    //const navigate = useNavigate()

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
           // onClick={()=> navigate('/adminHomePage')}
          />
          <Menu.Item
            name='Add Store'
            active={activeItem === 'Add Store'}
           // onClick={()=> navigate('/')}
          />
          <Menu.Item
            name='Add Recipe'
            active={activeItem === 'Add Recipe'}
          //  onClick={()=> navigate('/')}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
             // onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

