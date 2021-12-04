import React from "react";

const HomePage = ()=>{
    const [item, setItem] = React.useState({
        search: ''
    })
    const textHandler = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        })
    }
return(
    <>
    <h1>Resipe in Progress</h1>
    <from>
        <div>
    <input type='text' name={'password'} value={item.search}  placeholder={'Search for resipe'} required onChange={textHandler} />
    </div>
    <div>
    <label for="text">Ingredients</label>
    <input type='text' name={'password'} value={'search'} required onChange={textHandler} />
    </div>
    </from>
    </>
)
}

export default HomePage