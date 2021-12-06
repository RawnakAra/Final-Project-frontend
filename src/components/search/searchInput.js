import React from "react";
import axios from 'axios'

const Searching = () => {
    const [search, setSearch] = React.useState('')
    const [ingredientsArray , setIngredientsArray] = React.useState([])
    const textHandler = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    const searcTextHandler = (e) => {
        console.log(e.target.value)
        setSearch([...ingredientsArray ,e.target.value])
    }
    const searchRrecipe =async (e) => {
      if(e.keyCode === 13 && search !== ''){
         await axios.get("https://sweets-in-progress.herokuapp.com/api/recipes/searchbyname",search)
         .then(res =>{
            // if(res.status === 200){
                console.log(res)
            /// }
             
         }).catch(err=>{
             console.log('Error')
         })
      }
    }
    return (
        <>

            <h1>Resipe in Progress</h1>
            <from>
                <div class="ui search">
                    <div class="ui icon input">
                        <input class="prompt" type="text" name='search' value={search} placeholder="Search for resipe" onChange={textHandler} onKeyUp={searchRrecipe}/>
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