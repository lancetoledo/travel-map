import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import "../assets/css/Nav.css"
function Nav() {
    return (
        <div className = "nav">
            <h2>Home</h2>
            <h2>Travel Log</h2>
            <Avatar
                    alt = "Lance Toledo"
                    src = "https://avatars.githubusercontent.com/lancetoledo" 
                />       
        </div>
    )
}

export default Nav
