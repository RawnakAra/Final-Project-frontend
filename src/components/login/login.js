import React from 'react'
import { Button, Form, FormField, Grid, Header, Message, Segment } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './login.style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            axios.post('https://sweets-in-progress.herokuapp.com/api/user/user/login', item)
                .then(res => {
                    console.log(res)
                    sessionStorage.setItem("token", res.data.token)
                    setItem('')
                    setTimeout(() => {
                        navigate('/homepage')
                    }, 1000)
                }).catch(err => {
                    toast('email or pasword not correct', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        type: 'warning'
                    })
                })
        } else {
            console.log('email is wrong')
            toast('email or pasword not correct', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                type: 'warning'
            })
        }
    }
    return (
        <div className="homepage-bgimage">

            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 350 }}>
                    <Header as='h2' style={{ 'color': '#601813' }} textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked style={{ backgroundColor: 'transparent' }}>
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
                    <Message style={{ backgroundColor: 'transparent' }}>
                        New to us? <a style={{ 'color': 'black' }} href='/register'>Sign-In</a>
                    </Message>
                    <Button
                        style={{ 'backgroundColor': '#601813', color: "white" }}
                        fluid
                        size='large'

                    >
                        <a style={{ 'color': 'white' }} href='/admin'>Admin</a>
                    </Button>
                </Grid.Column>
            </Grid>
            <div>

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='dark'
                    type='warning'
                />
            </div>
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