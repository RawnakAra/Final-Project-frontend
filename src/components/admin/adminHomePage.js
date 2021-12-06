import React from 'react'
import NavBar from './nav'
import CardP from './card'
const AdminHomePage = ({ data, updatedata }) => {

    return (

        <>
            <NavBar />
            {
                data ? data.map(user => {
                    if (!user.admin) {
                        return <CardP data={data} user={user} updatedata={updatedata} />
                    }
                }) : <>{""}</>
            }

        </>
    )
}

export default AdminHomePage