import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import AppEntryForm from "../Entry/AppEntryForm" 

const Header = () => {
    const authCtx = useContext(AuthContext)
    console.log('Header LOADED')
    return (
        <div>
            <h1 style={{margin:0}}>Budget Manager</h1>
            {!authCtx.isLoggedIn && <AppEntryForm />}
            {authCtx.isLoggedIn && 
                <div>
                    <h4>Welcome {authCtx.username}</h4>
                    <button onClick={authCtx.onLogout}>Log out</button>
                </div>}
        </div>
    )
}

export default Header