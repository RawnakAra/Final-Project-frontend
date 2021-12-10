import React from "react";
import NavBar from "./search/nav";
import Search from "./search/searchInput";
import { useNavigate } from 'react-router-dom'
import { Button, Form, FormField } from 'semantic-ui-react'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <>
            {
                sessionStorage.getItem('token') ?
                    <>
                        <NavBar />
                        <Search />
                    </>
                    :
                    <>
                        <Form loading style={{ height: '90vh', width: '100vh', fontSize: '4vw', fontWeight: "500"  }}>
                            You Need To Authenticate
                        </Form>
                        <FormField style={{ fontSize: '2vw', fontWeight: '500' }}>To Authenticate<Button onClick={() => navigate('/')}>Click Here</Button></FormField>
                    </>
            }

        </>
    )
}

export default HomePage