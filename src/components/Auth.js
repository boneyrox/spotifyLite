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
                    redirectUri={`http://localhost:3000`}
                    clientID='8727f35b55f04a62b8d39810d41192dd'
                    scopes={[Scopes.userReadPrivate, 'user-read-email', 'user-read-recently-played']} // either style will work
                    onAccessToken={(token) => setToken(token)}
                />
            )
            }
        </div >
    )
}

export default Auth
