import React from "react";
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = ({ data }) => {
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
        const emaildandAdminFilter = data.filter(ele => {
            // console.log(ele.email)
            // console.log(item.email)
            return item.email === ele.email && ele.admin
        })
        // console.log(emaildandAdminFilter)
        if (emaildandAdminFilter.length === 1) {
            axios.post('https://sweets-in-progress.herokuapp.com/api/user/user/login', item)
                .then(res => {
                    //console.log(res)
                    sessionStorage.setItem("token", res.data.token)
                    setItem('')
                    setTimeout(() => {
                        navigate('/adminHomePage')
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
        <>
            <div className="homepage-bgimage">
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' style={{ 'color': '#74250e' }} textAlign='center'>
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
                                    style={{ 'backgroundColor': '#74250e', "color": "white" }}
                                    fluid
                                    size='large'
                                    onClick={getLogin}
                                >
                                    Lets make some business
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
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
        </>
    )
}

export default Admin