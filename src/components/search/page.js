import React from "react";
import { Image, Item } from 'semantic-ui-react'
import NavBar from "../search/nav";
import axios from 'axios'
import {
  useParams
} from "react-router-dom";
const Page = () => {
  let frag = document.createDocumentFragment();
  let mydiv = document.createElement('div')
 // mydiv.innerHTML = 'text node <div>div node</div>text node<p>paraph node</p> text node';
  while( mydiv.firstChild ) {
    frag.appendChild( mydiv.firstChild );
}

document.body.appendChild( frag );
  const dataId = useParams().id
  const [ingredientsData, setIngredientsData] = React.useState([])

  React.useEffect(() => {
    searchByName()
  }, [])

  const searchByName = () => {
    axios.get('https://sweets-in-progress.herokuapp.com/api/recipes')
      .then(res => {
         console.log(res.data)
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

  return (
    <>
      <NavBar />
      {/* {console.log(ingredientsData)} */}
      {/* {console.log(dataId)} */}
      {
        ingredientsData.length === 1 ?
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as='h1'>{ingredientsData[0].recipeName}</Item.Header>
                <Item.Meta>{ingredientsData[0].ingredients}</Item.Meta>
                <Item.Description>
                  <Image src={ingredientsData[0].img} />
                </Item.Description>
                <Item.Extra>{ingredientsData[0].instructions}</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
          : <></>
      }
    </>
  )
}

export default Page