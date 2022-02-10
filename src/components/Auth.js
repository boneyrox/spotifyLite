import React from 'react'
import Cookies from "js-cookie";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css";
import '../css/Auth.scss'
import Home from './Home'

const Auth = () => {
    const homeUrl = 'http://localhost:3000'
    const [token, setToken] = React.useState(null)
    const resetToken = () => {
        setToken(null)
        //remove token from cookies , path is localhost:3000
        Cookies.remove("spotifyAuthToken", { path: window.location.href })
        // redirect to home page
        window.location.href = homeUrl
    }
    React.useEffect(() => {
        if (token) {
            setToken(Cookies.get("spotifyAuthToken"))
            Cookies.set("spotifyAuthToken", token)
        }
    }, [token])
    return (
        <div className='auth'>
            {token ? (
                <Home token={token} resetToken={resetToken} />
            ) : (
                // Display the login page
                <SpotifyAuth className="auth"
                    redirectUri={homeUrl}
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
