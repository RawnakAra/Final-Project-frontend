import React from "react";

const Search = ()=>{
    const [item, setItem] = React.useState({
        search: '',
        ingredientsArray : []
    })
    const textHandler = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        })
    }
 const searcTextHandler = ()=>{

 }   
 const searchRrecipe =()=>{
     
 }
return(
    <>
    <h1>Resipe in Progress</h1>
    <from>
        <div>
    <input type='text' name={'password'} value={item.search}  placeholder={'Search for resipe'} required onChange={textHandler} />
    </div>
    <div onsubmit={searchRrecipe}>
    <label for="text">Ingredients</label>
    <input type='text' name={'password'} value={item.ingredientsArray} required onChange={searcTextHandler} />
    </div>
    </from>
    </>
)
}

export default Search