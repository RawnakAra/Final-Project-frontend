import React from "react";
import axios from 'axios'
import Postes from './post'
import Selector from './selector'
import '../homepage.style.css'
import './coffee.style.css'
import { CardGroup } from "semantic-ui-react";
const Searching = () => {
    const [Search, setSearch] = React.useState({
        recipeNameToSearch: ''
    })
    const [toPost, setToPost] = React.useState([])

    const textHandler = (e) => {
        console.log(e.target.value)
        setSearch({
            ...Search,
            [e.target.name]: e.target.value
        })
    }
    const searchRrecipe = async (e) => {
        if (e.keyCode === 13) {
            console.log('keycode')
            await axios.get("https://sweets-in-progress.herokuapp.com/api/recipes")
                .then(res => {
                    console.log(res)
                    console.log(res.data)
                    if (res.status === 200) {
                        const results = res.data.filter(element => {
                            const toSearch = (Search.recipeNameToSearch.trim().toLowerCase())
                            if (element.recipeName.toLowerCase().toString().search(toSearch) !== -1) {
                                return element
                            }
                        })
                        console.log(results)
                        setToPost(results)
                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    }


    return (
        <div className="searchpage">
            <from>
                <div className="ui search searchRecipe">
                    <div className="ui icon input">
                        <input className="prompt" type="text" name='recipeNameToSearch' value={Search.recipeNameToSearch} placeholder="Search for resipe" onChange={textHandler} onKeyUp={searchRrecipe} />
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
                <h1><b>Resipe in Progress</b></h1>
                <div>
                <Selector />
                </div>
                <div className='post'>
            {
                toPost ?<CardGroup itemsPerRow={2} stackable>
                {
                            toPost.map(ele => {
                                return <Postes data={ele} key={ele._id} />
                            })
                        }
                        </CardGroup>
                    :
                    <></>
            }
            </div> 
            </from>  
        </div>
    )
}

export default Searching