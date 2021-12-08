import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './login.style.css'

const Loginbage = ({ data }) => {
    const navigate = useNavigate()
    const [item, setItem] = React.useState({
        email: '',
        password: ''
    })
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
            return item.email === ele.email && !ele.admin
        })
        if (emaildFilter.length === 1) {
            axios.post('https://sweets-in-progress.herokuapp.com/api/user/user/login',item)
                .then(res => {
                    console.log(res)
                    localStorage.setItem("token", res.data.token)
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
        <div className="homepage-bgimage">
            <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 350 }}>
                    <Header as='h2' style={{ 'color': '#601813' }} textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked style={{backgroundColor:'transparent'}}>
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
                                style={{ 'backgroundColor': '#601813', "color": "white" }}
                                fluid
                                size='large'
                                onClick={getLogin}
                            >
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message style={{backgroundColor:'transparent'}}>
                        New to us? <a href='/register'>Register</a>
                    </Message>
                    <Button
                        style={{ 'backgroundColor': '#601813', color: "white" }}
                        fluid
                        size='large'
                        onClick={getLogin}
                    >
                        <a style={{'color':'black'}} href='/admin'>Admin</a>
                    </Button>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Loginbage


// ,{
//     headers :
//     {
//         "Authorization" : localStorage.getItem('token') 
//     }
// }