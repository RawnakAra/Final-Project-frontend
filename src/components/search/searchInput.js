import React from "react";
import axios from 'axios'
import Postes from './post'
const Searching = () => {
    const [Search, setSearch] = React.useState({
        recipeNameToSearch : ''
    })
    const [ingredientsArray , setIngredientsArray] = React.useState([])
    const [toPost , setToPost] = React.useState([])
    const textHandler = (e) => {
        console.log(e.target.value)
        setSearch({
            ...Search,
           [e.target.name]:e.target.value
        })
    }
   // const searcTextHandler = (e) => {
    //     console.log(e.target.value)
    //     setIngredientsArray([...ingredientsArray ,e.target.value])
    // }
    const searchRrecipe =async(e) => {
        const toSearch = (Search.recipeNameToSearch.trim().toLowerCase())
        console.log(toSearch)
      if(e.keyCode === 13){
          console.log('keycode')
        await axios.get("https://sweets-in-progress.herokuapp.com/api/recipes")
         .then(res =>{
             //console.log(res)
             console.log(res.data)
            if(res.status === 200){
              const result = res.data.filter(element=>{
                const toSearch = (Search.recipeNameToSearch.trim().toLowerCase())
                console.log(element.recipeName)
                  if(element.recipeName.toLowerCase().toString().search(toSearch) !== -1){
                    toPost.push(element)
                    setToPost(toPost)
                }
               })
              console.log(toPost)
              return result
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
                        <input class="prompt" type="text" value={ingredientsArray} placeholder="Search for resipe" />
                        <i class ="search icon"></i>
                    </div>
                    <div class="results"></div>
                </div>
            </from>
            {/* {
                toPost ? 
                    toPost.map(val=>{
                        <Postes/>
                    })
                 :<></>
            } */}
        </>
    )
}

export default Searching