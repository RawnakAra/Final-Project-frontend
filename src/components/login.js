import React from 'react'
import axios from 'axios'
import HomePage from './homepage'

const Loginbage = ()=>{
    const [item, setItem] = React.useState({
        email: '',
        password: ''
    })
    const [data, setData] = React.useState('')

    React.useEffect(() => {
        getAllData()
    },[])

    const getAllData = () => {
        axios.get('https://sweets-in-progress.herokuapp.com/api/user/')
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setData(res.data)
                }
            }).catch(err => {
                console.log('Error on getting data')
            })
    }
    const textHandler = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        })
    }
    const getLogin = async(e)=>{
       const emaildFilter = data.filter(ele=>{
           console.log(ele.email)
           console.log(item.email)
        //    const isMatch = await bcrypt.compare(item.password ,ele.password)
        //    console.log(isMatch)
        return item.email === ele.email 
       }) 
       if(emaildFilter.length === 1){
          axios.post('https://sweets-in-progress.herokuapp.com/api/user/user/login',item)
          .then(res=>{
              console.log(res)
             setItem('')
          }).catch(err=>{
              console.log(err)
          })
       }else{
           console.log('email is wrong')
           alert('email or pasword not correct')
       }
    }
    return(
        <> 
        
        <div>
      <h1>Login</h1>
      <form action='/login' method='POST'>
      <div>
          <label for="email">Email address</label>
          <input type='email' name={'email'} value={item.email} required onChange={textHandler} />
          </div>
          <div>
          <label for="password">Password</label>
           <input type='password' name={'password'} value={item.password} required onChange={textHandler} />
          </div>
          <input type="button" value='LogIn'onClick={getLogin}/>
          <span>Dont have an account?<a href='/register' >Register</a></span>
      </form>
      </div>
        
        </>
    )
}

export default Loginbage