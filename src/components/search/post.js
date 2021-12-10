import React from "react";
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'
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
        <Card>
          <Image src={data.img} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{data.recipeName}</Card.Header>
            <Rating icon='heart' defaultRating={1} maxRating={3} />
          </Card.Content>
          <Card.Content extra>
          <Link to={`/Page/${data.recipeName}`}><Icon name='linkify' /></Link>
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
      }
    </>
  )
}
export default Post
// {data.url}
