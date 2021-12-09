import React from "react";
import { Image, Item } from 'semantic-ui-react'
import NavBar from "../search/nav";
import './coffee.style.css'
import axios from 'axios'
import {
  useParams
} from "react-router-dom";
const Page = () => {
 
  const dataId = useParams().id
  const [ingredientsData, setIngredientsData] = React.useState([])

  React.useEffect(() => {
    searchByName()
  }, [])

  const searchByName = () => {
    axios.get('https://sweets-in-progress.herokuapp.com/api/recipes')
      .then(res => {
        // console.log(res.data)
        if (res.status === 200) {
          let result = res.data.filter(ele => {
            return ele._id === dataId
          })
          setIngredientsData(result)
        }
      }).catch(err => {
        console.log(err)
      })
  }

  const toHTML = (arg) =>{
    let frag = document.createDocumentFragment();
    let mydiv = document.createElement('div')
    mydiv.innerHTML = arg 
    while( mydiv.firstChild ) {
      frag.appendChild( mydiv.firstChild );
  }
  
  document.body.appendChild( frag );

  }

  return (
    <>
      <NavBar />
      {console.log(ingredientsData)}
     
      {
        ingredientsData.length === 1 ?
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as='h1'>{ingredientsData[0].recipeName}</Item.Header>
                <Item.Meta>{toHTML(ingredientsData[0].ingredients)}</Item.Meta>
                <Item.Description>
                  <Image src={ingredientsData[0].img} size="small"/>
                </Item.Description>
                <Item.Extra>{toHTML(ingredientsData[0].instructions)}</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
          : <><div class="container">
          <div class="coffee-header">
            <div class="coffee-header__buttons coffee-header__button-one"></div>
            <div class="coffee-header__buttons coffee-header__button-two"></div>
            <div class="coffee-header__display"></div>
            <div class="coffee-header__details"></div>
          </div>
          <div class="coffee-medium">
            <div class="coffe-medium__exit"></div>
            <div class="coffee-medium__arm"></div>
            <div class="coffee-medium__liquid"></div>
            <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
            <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
            <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
            <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
            <div class="coffee-medium__cup"></div>
          </div>
          <div class="coffee-footer"></div>
        </div></>
      }
     
    </>
  )
}




export default Page