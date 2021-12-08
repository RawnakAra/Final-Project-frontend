import {React} from "react";
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'
import {
  Link
 } from "react-router-dom";
const Post = ({ data }) => {
  return (
    <>
      {
        <Card>
          <Image src={data.img} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{data.recipeName}</Card.Header>
            <Rating icon='star' defaultRating={3} maxRating={4} />
          </Card.Content>
          <Card.Content extra>
            {console.log(data.recipeName)}
          <Link to={`/Page/${data._id}`}><Icon name='linkify' /></Link>
            <Button
              content='Like'
              icon='heart'
              label={{ as: 'a', basic: true, pointing: 'right', content: '2,048' }}
              labelPosition='left'
            />
          </Card.Content>
        </Card>
      }
    </>
  )
}
export default Post
// {data.url}
