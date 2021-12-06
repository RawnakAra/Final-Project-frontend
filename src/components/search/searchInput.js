import React from "react";
import axios from 'axios'
import Postes from './post'
const Searching = () => {
    const [Search, setSearch] = React.useState({
        recipeNameToSearch : ''
    })
    const [ingredientsArray , setIngredientsArray] = React.useState([])
    
    const textHandler = (e) => {
        console.log(e.target.value)
        setSearch({
            ...Search,
           [e.target.name]:e.target.value
        })
    }
    const searcTextHandler = (e) => {
        console.log(e.target.value)
        setIngredientsArray([...ingredientsArray ,e.target.value])
    }
    const searchRrecipe =(e) => {
        console.log(e.keyCode)
        console.log(Search.recipeNameToSearch.toLowerCase())
      if(e.keyCode === 13){
          console.log('keycode')
         axios.get("https://sweets-in-progress.herokuapp.com/api/recipes/searchbyname",Search)
         .then(res =>{
             console.log(res.data)
             console.log(res.status)
            if(res.status === 200){
                res.data.map(post=>{
                   <Postes post={post}/>
               })
             }  
         }).catch(err=>{
             console.log(err)
         })
      }
    }
    return (
        <>

            <h1>Resipe in Progress</h1>
            <from>
                <div class="ui search">
                    <div class="ui icon input">
                        <input class="prompt" type="text" name='recipeNameToSearch' value={Search.recipeNameToSearch} placeholder="Search for resipe" onChange={textHandler} onKeyUp={searchRrecipe}/>
                        <i class ="search icon"></i>
                    </div>
                    <div class="results"></div>
                </div>

                <div class="ui search">
                    <div class="ui icon input">
                        <input class="prompt" type="text" value={ingredientsArray} placeholder="Search for resipe" onChange={searcTextHandler}/>
                        <i class ="search icon"></i>
                    </div>
                    <div class="results"></div>
                </div>
            </from>
        </>
    )
}

export default Searching