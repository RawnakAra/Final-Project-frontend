import React from 'react'
import NavBar from './nav'
import CardP from './card'
const AdminHomePage = ({data}) => {

    return (
        <>
            <NavBar />
            {
              data? data.map(r=>{
                    if(!r.admin){
                   return <CardP data={r} />
                    }
                }):<></>
            }

        </>
    )
}

export default AdminHomePage