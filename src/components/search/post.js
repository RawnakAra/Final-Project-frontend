import React from "react";
import {CardGroup, Card, Icon, Image, Button, Rating } from 'semantic-ui-react'
import {
  Link
 } from "react-router-dom";
import axios from "axios";

const Post = ({ data }) => {

const [like , setLike] = React.useState(data.like)

const addLike = (value ,content)=>{
  let a =parseInt(content.label.content)
 console.log(data._id)
 setLike(a +=1)
 updateLikes()
}

const updateLikes = ()=>{
 axios.put(`https://sweets-in-progress.herokuapp.com/api/recipes/update/${data._id}`,{like : like.toString()})
 .then(res =>{
   console.log(res)
 }).catch(e =>{
   console.log(e)
 })
}

  return (
    <>
      {
        //  <CardGroup itemsPerRow={3} stackable style={{backgroundColor :'green'}}> 
        <Card stackable>
          <Image src={data.img} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{data.recipeName}</Card.Header>
            <Rating icon='heart' defaultRating={1} maxRating={3} />
          </Card.Content>
          <Card.Content extra style={{display: 'flex' ,  justifyContent: "space-around" , alignItems: 'top'}}>
          <Link to={`/Page/${data.recipeName}`} style={{marginTop : '1vh'}}><Icon name='linkify' /></Link>
            <Button
              content='Like'
              icon='heart'
              label={{ as: 'a', basic: true, pointing: 'right', content: like }}
              labelPosition='left'
              value = {like}
              onClick={(value ,content) =>addLike(value,content)}
            />
          </Card.Content>
        </Card>
        //  </CardGroup>
      }
    </>
  )
}
export default Post
// {data.url}
