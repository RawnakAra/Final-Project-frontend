import React from 'react';
import axios from 'axios'
import { Button, Icon, CardGroup } from 'semantic-ui-react'
import Select from 'react-select'
import Postes from './post'
import '../homepage.style.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'Sugar', label: 'Sugar' },
  { value: 'eggs', label: 'Eggs' },
  { value: 'oreo', label: 'Oreo' },
  { value: 'lemon', label: 'Lemon' },
  { value: 'milke', label: 'Milke' },
  { value: 'buttern', label: 'Buttern' },
  { value: 'flour', label: 'Flour' }
]
const Selector = () => {
  const [resipeData, sitResipeData] = React.useState([])
  const [toSend, setToSend] = React.useState({
    recipeIngredients: ''
  })


  const handleChange = (value, name) => {
    // console.log(value.map(ele => ele.value))
    //console.log(name.name)
    //console.log(toSend)
    setToSend({
      ...toSend,
      [name.name]: value.map(ele => ele.value)
    })
  }

  const handelClick = () => {
    axios.post('https://sweets-in-progress.herokuapp.com/api/recipes/searchbyingredients', toSend)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          sitResipeData(res.data)
          setToSend('')
        }
      }).catch(err => {
        console.log(err)
      })
  }



  return (
    <>
      <div className="selector">
        <Button animated onClick={handelClick} style={{ backgroundColor: "#601813" }}>
          <Button.Content visible>Search</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
        <Select
          isMulti
          name="recipeIngredients"
          options={options}
          key={options}
          className="basic-multi-select ss"
          classNamePrefix="select"
          onChange={(value, name) => handleChange(value, name)}
        />
      </div>
      <div className='post'>
        {
          resipeData ?
            resipeData.map((resipe, index) => {
              return <Postes key={index} data={resipe} />
            }) : <></>
        }
      </div>
    </>
  )
}

export default Selector