import React, { useState } from 'react'
import { Menu} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NavBar = () => {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState('home')

const logout=async (e)=>{
const userLogOut = (e.target.getAttribute('value'))
await axios.get(`https://sweets-in-progress.herokuapp.com/api/user/user/logout`,{
  headers: {
    "Authorization": localStorage.getItem("token")
  }
})
  .then(res => {
    if (res.status === 200) {
      localStorage.clear()
      navigate('/')

    }
  }).catch(err => {
    console.log(err)
  })

}

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={() => navigate('/adminHomePage')}
        />
        <Menu.Item
          name='Add Store'
          active={activeItem === 'Add Store'}
          onClick={() => navigate('/')}
        />
        <Menu.Item
          name='Add Recipe'
          active={activeItem === 'Add Recipe'}
          onClick={() => navigate('/')}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            value='logout'
            active={activeItem === 'logout'}
            onClick={logout}
          />
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default NavBar