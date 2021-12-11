import axios from "axios";
import React from "react";
import FileBase64 from 'react-file-base64';
import { Form, Button } from 'semantic-ui-react'
import NavBar from "../admin/nav";
import './addnew.style.css'
const AddRecipe = ()=>{
 const [item , setItem] = React.useState({
    recipeName :"",
    ingredients : "",
    instructions:"",
    img:""
 })

  const changehandler =(e,value)=>{
      console.log(value)
      console.log(value.value)
      setItem({
          ...item,
          [value.name] : value.value
      })
  }  

  const handelClick = ()=>{
  console.log(item)

  axios.post('https://sweets-in-progress.herokuapp.com/api/recipes/addNewRecipe',item)
  .then(res=>{
      console.log(res)
      
  }).catch(e=>{
      console.log(e)
  })
  }
 return(
     <>
      <NavBar />
      <div className="addNew">
      <Form >
        <Form.Group widths='equal'>
          <Form.Input fluid label='Recipe name' placeholder='Recipe name' name='recipeName' value={item.recipeName} onChange={(e,value)=>changehandler(e,value)}/>
        </Form.Group>
        <Form.TextArea label='ingredients' placeholder='ingredients...' name='ingredients' value={item.ingredients} onChange={changehandler}/>
        <Form.TextArea label='instructions' placeholder='instructions...' name='instructions' value={item.instructions} onChange={changehandler}/>
        </Form>
        <br/>
       <FileBase64
        placeholder='Image...' 
        multiple={ false }
        // style={{marginRight :'15vh'}}
        onDone={(base64) => setItem({...item, img : base64})} 
        />
        <br/>
        <br/>
        <Button onClick={handelClick} style={{backgroundColor: 'green'}}>Publish</Button>
       
        </div>
     </>
 )
}
export default AddRecipe