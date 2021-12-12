import axios from "axios";
import React from "react";
import { Form, Button } from 'semantic-ui-react'
import NavBar from "../admin/nav";
import './addnew.style.css'
const AddRecipe = () => {
    const [item, setItem] = React.useState({
        recipeName: "",
        ingredients: "",
        instructions: ""
    })
    const [img, setImg] = React.useState(null)
    const changehandler = (e, value) => {
        console.log(value)
        console.log(value.value)
        setItem({
            ...item,
            [value.name]: value.value
        })
    }

    const handelClick = () => {
        console.log(item)
        const sa3da = new FormData()
        sa3da.append('recipeName', item.recipeName)
        sa3da.append('ingredients', item.ingredients)
        sa3da.append('instructions', item.instructions)
        sa3da.append('img', img)
        axios.post('http://localhost:5000/api/recipes/addNewRecipe', sa3da, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res)
            }).catch(e => {
                console.log(e)
            })
    }
    return (
        <>
            <NavBar />
            <div className="addNew">
                <Form >
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Recipe name' placeholder='Recipe name' name='recipeName' value={item.recipeName} onChange={(e, value) => changehandler(e, value)} />
                    </Form.Group>
                    <Form.TextArea label='Ingredients' placeholder='Ingredients...' name='ingredients' value={item.ingredients} onChange={changehandler} />
                    <Form.TextArea label='Instructions' placeholder='Instructions...' name='instructions' value={item.instructions} onChange={changehandler} />
                </Form>
                <br />
                <input type='file' name='image' onChange={(e) => {
                    console.log('file', e.target.files[0])
                    setImg(e.target.files[0])
                }}
                />
                <br />
                <br />
                <Button onClick={handelClick} style={{ backgroundColor: 'green' }}>Publish</Button>

            </div>
        </>
    )
}
export default AddRecipe