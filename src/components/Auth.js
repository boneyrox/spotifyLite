import React from 'react'
import Cookies from "js-cookie";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css";
import '../css/Auth.scss'
import Home from './Home'

const Auth = () => {
    const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"))
    return (
        <div className='auth'>
            {token ? (
                <Home token={token} />
            ) : (
                // Display the login page
                <SpotifyAuth className="auth"
                    redirectUri={`http://localhost:3000` || 'https://awesome-hodgkin-ddc4a6.netlify.app/'}
                    clientID='761c538089074f8d806178d2045e7d21'
                    scopes={[Scopes.userReadPrivate, 'user-read-email', 'user-read-recently-played']} // either style will work
                    onAccessToken={(token) => setToken(token)}   
                />
            )
            }
        </div >
    )
}

export default Auth
