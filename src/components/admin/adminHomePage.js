import React from 'react'

const AdminHomePage = () => {

    return (
        <>
            <div class="ui secondary pointing menu" >
                <a class="item" >
                    Home
                </a>
                <a class="item">
                   Add Store
                </a>
                <a class="item" href='/delete'>
                    UnFriended
                </a>
                <div class="right menu">
                    <a class="ui item active" href='/logout'>
                        Logout
                    </a>
                </div>
            </div>
            <div class="ui segment">
                <p></p>
            </div>
        </>
    )
}

export default AdminHomePage