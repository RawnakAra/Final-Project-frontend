import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './login.style.css'

const Loginbage = () => {
    const navigate = useNavigate()
    const [item, setItem] = React.useState({
        email: '',
        password: ''
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
    const getLogin = async (e) => {
        const emaildFilter = data.filter(ele => {
            console.log(ele.email)
            console.log(item.email)
            return item.email === ele.email
        })
        if (emaildFilter.length === 1) {
            axios.post('https://sweets-in-progress.herokuapp.com/api/user/user/login', item)
                .then(res => {
                    console.log(res)
                    localStorage.setItem("toker", res.data.token)
                    setItem('')
                    setTimeout(() => {
                        navigate('/homepage')
                    }, 1000)
                }).catch(err => {
                    alert('the email or password not correct')
                    console.log(err)
                })
        } else {
            console.log('email is wrong')
            alert('email or pasword not correct')
        }
    }
    return (
        <>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' style={{'color':'#74250e'}} textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                            required
                                fluid
                                icon='user'
                                iconPosition='left'
                                name={'email'}
                                value={item.email}
                                placeholder='E-mail address'
                                onChange={textHandler}
                            />
                            <Form.Input
                            required
                                fluid
                                icon='lock'
                                name={'password'}
                                value={item.password}
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={textHandler}
                            />

                            <Button
                             style={{'backgroundColor':'#74250e' ,"color" : "white"}} 
                             fluid 
                             size='large'
                              onClick={getLogin}
                              >
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='/register'>Register</a>
                    </Message>
                </Grid.Column>
            </Grid>

        </>
    )
}

export default Loginbage


// ,{
//     headers :
//     {
//         "Authorization" : localStorage.getItem('token') 
//     }
// }