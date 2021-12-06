import React from 'react'
import axios from 'axios'
import { Card, Icon} from 'semantic-ui-react'

const CardP = ({ data, user, updatedata }) => {

  const deleteHandler = async (id) => {
    console.log(id)
    axios.delete(`https://sweets-in-progress.herokuapp.com/api/user/delete/${id}`,{
      headers: {
          "Authorization": localStorage.getItem("token")
        } 
  })
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          updatedata(id)
        }
      }).catch(err => {
        console.log('something went wrong')
      })
  }

  return (
    <Card>
      {
        console.log(user)
      }
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{user.email}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <button value={user._id} onClick={() => deleteHandler(user._id)}>
          <Icon name='user delete' />
          Delete
        </button>
      </Card.Content>
    </Card>
  )
}

export default CardP



// const Card = () => {

//     return (
//         <div class="ui link cards">
//             <div class="card">
//                 <div class="image">
//                     <img src="/images/avatar2/large/matthew.png" />
//                 </div>
//                 <div class="content">
//                     <div class="header">Matt Giampietro</div>
//                     <div class="meta">
//                         <a>Friends</a>
//                     </div>
//                     <div class="description">
//                         Matthew is an interior designer living in New York.
//                     </div>
//                 </div>
//                 <div class="extra content">
//                     <span class="right floated">
//                         Joined in 2013
//                     </span>
//                     <span>
//                         <i class="user icon"></i>
//                         75 Friends
//                     </span>
//                 </div>
//             </div>
//             <div class="card">
//                 <div class="image">
//                     <img src="/images/avatar2/large/molly.png" />
//                 </div>
//                 <div class="content">
//                     <div class="header">Molly</div>
//                     <div class="meta">
//                         <span class="date">Coworker</span>
//                     </div>
//                     <div class="description">
//                         Molly is a personal assistant living in Paris.
//                     </div>
//                 </div>
//                 <div class="extra content">
//                     <span class="right floated">
//                         Joined in 2011
//                     </span>
//                     <span>
//                         <i class="user icon"></i>
//                         35 Friends
//                     </span>
//                 </div>
//             </div>
//             <div class="card">
//                 <div class="image">
//                     <img src="/images/avatar2/large/elyse.png" />
//                 </div>
//                 <div class="content">
//                     <div class="header">Elyse</div>
//                     <div class="meta">
//                         <a>Coworker</a>
//                     </div>
//                     <div class="description">
//                         Elyse is a copywriter working in New York.
//                     </div>
//                 </div>
//                 <div class="extra content">
//                     <span class="right floated">
//                         Joined in 2014
//                     </span>
//                     <span>
//                         <i class="user icon"></i>
//                         151 Friends
//                     </span>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Card