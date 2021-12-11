import React from 'react'
import NavBar from './nav'
import CardP from './card'
import { Card, CardGroup, Icon} from 'semantic-ui-react'

const AdminHomePage = ({ data, updatedata }) => {

    return (
        <>
            <NavBar />
            <h1><b>Resipe in Progress</b></h1>
            {
                data ?
                <CardGroup itemsPerRow={5} stackable >
{
                 data.map(user => {
                    if (!user.admin) {
                        return <CardP data={data} user={user} updatedata={updatedata} />
                    }
                })
             }
             </CardGroup> : <></>
            }

        </>
    )
}

export default AdminHomePage