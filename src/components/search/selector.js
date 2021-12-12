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
  { value: 'flour', label: 'Flour' },
  { value: 'baking powder', label: 'Baking powder' },
  { value: 'baking soda', label: 'Baking soda' },
  { value: 'apples', label: 'Apples' },
  { value: 'cracker', label: 'Cracker' },
]
const Selector = () => {
  const [resipeData, setResipeData] = React.useState([])
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
        console.log('res',res)
        if (res.status === 200) {
          setResipeData(res.data)
        }
      }).catch(err => {
        console.log('res',err)
      })
      // axios.post('https://sweets-in-progress.herokuapp.com/api/easydesserts/searchbyingredients',toSend)
      // .then(res=>{
      //   console.log("easy",res)
      //   if (res.status === 200) {
      //     setResipeData(res.data)
      //     setToSend('')
      //   }
      // }).catch(err =>{
      //   console.log("easy",err)
      // })
  }



  return (
    <>
    {console.log(resipeData)}
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
          <CardGroup itemsPerRow={2} stackable >
            {
            resipeData.map(resipe => {
              return <Postes key={resipe._id} data={resipe} />
            }) 
        }
            </CardGroup>
            : <></>
        }
      </div>
    </>
  )
}

export default Selector