import React, { useState } from 'react'
import Avatar from "@material-ui/core/Avatar"
import "../assets/css/Nav.css"
import { Button, Alert} from 'react-bootstrap'
import { Link , useHistory} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
function Nav() {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <div className = "nav">
            <h2>Home</h2>
            <h2>Travel Log</h2>
            <Avatar
                    alt = "Lance Toledo"
                    src = "https://avatars.githubusercontent.com/lancetoledo" 
                />       
            {error && <Alert variant="danger">{error}</Alert>} 
            <strong>Email: </strong> {currentUser.email}

            <Link to ="/update-profile" className = "btn btn-primary w-100 mt-3"></Link>

            <div className = "w-100 text-center mt-2">
                <Button variant = "link" onClick = {handleLogout}>Log Out</Button>
            </div>
        </div>
    )
}

export default Nav
