import React from "react";
import axios from "axios";
import NavBar from "./nav";
import './coffee.style.css'
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'
import {
  Link
 } from "react-router-dom";

const ViewAllRecipes = ()=>{
  const [resipeData , sitResipeData] = React.useState([])
   
  React.useEffect(()=>{
    searchByName()
  },[])
    const searchByName = () => {
        axios.get('https://sweets-in-progress.herokuapp.com/api/recipes/new')
          .then(res => {
            
            if (res.status === 200) {
                //console.log(res.data)
              sitResipeData(res.data)
           }
          }).catch(err => {
            console.log(err)
          })
      }
    return(
 <>
  <NavBar />
 {
    resipeData?
    resipeData.map((ele ,index) =>{
       return <Card  key={index}> 
        <Image src={ele.img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{ele.recipeName}</Card.Header>
          <Rating icon='heart' defaultRating={1} maxRating={3} />
        </Card.Content>
        <Card.Content extra>
        <Link to={`/Page/${ele.recipeName}`}><Icon name='linkify' /></Link>
        </Card.Content>
      </Card>
    }) :<>
    <div class="container">
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
          </div>
    </>
 }
 
 </>
    )
}
export default ViewAllRecipes