import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const Register = () => {
    const navigate =useNavigate()
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
                console.log('post',res.data.token)
                if(res.status === 200){
                    localStorage.setItem("token",res.data.token)
                    setData([...data , res.data])
                    setTimeout(()=>{
                        navigate('/homepage')
                    },1000) 
                    setItem('') 
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
        <div className="homepage-bgimage">
            <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' style={{'color':'#601813'}} textAlign='center'>
                        WelcOme
                    </Header>
                    <Form size='large'>
                        <Segment stacked style={{backgroundColor:'transparent'}}>
                            <Form.Input
                            required
                                fluid
                                icon='user'
                                iconPosition='left'
                                name={'name'}
                                value={item.name}
                                placeholder='First_Name'
                                onChange={textHandler}
                            />
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
                            <Form.Input
                            required
                                fluid
                                icon='lock'
                                iconPosition='left'
                                name={'confirmPassword'}
                                value={item.confirmPassword}
                                placeholder='Confirm Password'
                                onChange={textHandler}
                            />

                            <Button
                             style={{'backgroundColor':'#601813' ,"color" : "white"}} 
                             fluid 
                             size='large'
                              onClick={getRegister}
                              >
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message style={{backgroundColor:'transparent'}}>
                    Already have an account? <a style={{'color':'black'}} href='/'>LogIn</a>
                    </Message>
                </Grid.Column>
            </Grid>

        </div>
    )
}

export default Register

// ,{
//     headers :
//     {
//         "Authorization" : localStorage.getItem('token') 
//     }
// }