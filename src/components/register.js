import React from 'react'
import axios from 'axios'
import HomePage from './homepage'

const Register = () => {
    const [item, setItem] = React.useState({
        name: "",
        email: '',
        password: '',
        confirmPassword: ""
    })
    const [data, setData] = React.useState('')

    React.useEffect(() => {
        getAllData()
    }, [])

    const getAllData = () => {

        axios.get('https://sweets-in-progress.herokuapp.com/api/user/')
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setData(res.data)
                    setItem('')
                }
            }).catch(err => {
                console.log('Error on getting data')
            })
    }
    const textHandler = (e) => {
        console.log(e.target.value)
        setItem({
            ...item,
            [e.target.name]: e.target.value,

        })
    }
    const getRegister = (e) => {
        console.log(e.target.value)
        const emailFilter = data.filter(ele => {
            return item.email === ele.email
        })
        console.log(emailFilter);
        console.log(item.password);
        if (emailFilter.length === 0 && item.password === item.confirmPassword) {
            axios.post('https://sweets-in-progress.herokuapp.com/api/user/user/register',item)
            .then(res=>{
                console.log('post',res.data)
                if(res.status === 200){
                    setData([...data , res.data])
                    
                }
            }).catch(err=>{
                console.log('data catch')
            })

        } else {
            console.log('the email exist or the password and confirm not the same')
            alert('the email or password not correct')
        }
    }
    return (
        <>
        
        <div>
            <h1>Register</h1>
            <form>
                <div>
                    <label for="name">Name</label>
                    <input type='text' name={'name'} value={item.name} required onChange={textHandler} />
                </div>
                <div>
                    <label for="email">Email address</label>
                    <input type='email' name={'email'} value={item.email} required onChange={textHandler} />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type='password' name={'password'} value={item.password} required onChange={textHandler} />
                </div>
                <div>
                    <label for="password">Confirm Password</label>
                    <input type='password' name={'confirmPassword'} value={item.confirmPassword} required onChange={textHandler} />
                </div>
                <input type="button" value='Register' onClick={getRegister} /><br />
                <span>Already have an account?<a href='/login'>Login here</a></span>
            </form>
            </div>
           
        </>
    )
}

export default Register