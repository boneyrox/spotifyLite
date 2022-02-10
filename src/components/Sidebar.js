import React,{useState} from 'react'
import { FaHome, FaSearch, FaSubway, FaPlusCircle, FaHeart, FaDownload, FaBars} from 'react-icons/fa';
import '../css/Sidebar.scss';
const Sidebar = () => {
    const [menuBarVisibility, setMenuBarVisibility] = useState(false);
    return (
        <>
            <div className={`sidebar z-10 max-w-240 w-screen flex flex-col justify-between md:block md:px-4 px-8 absolute ${menuBarVisibility ? 'block menu-effect' : 'hidden'}`}>
                <div className='top-section px-2 cursor-pointer'>
                    <div className='spotify-logo mb-5 mt-6 ml-4'>
                        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png' width="134" />
                    </div>
                    <div className='home flex bg-white text-10B981 px-4 py-2 items-center'>
                        <FaHome />
                        <div className='pl-3'>Home</div>
                    </div>
                    <div className='search icon-wrapper'>
                        <FaSearch />
                        <div className='pl-3'>Search</div>
                    </div>
                    <div className='library icon-wrapper'>
                        <FaSubway />
                        <div className='pl-3'>Your Library</div>
                    </div>
                    <div className='playlist icon-wrapper'>
                        <FaPlusCircle />
                        <div className='pl-3'>Create Playlist</div>
                    </div>
                    <div className='likedSong icon-wrapper'>
                        <FaHeart />
                        <div className='pl-3' >Liked Songs</div>
                    </div>
                    <div className='premium px-4 py-3.5'>
                        Welcome to premium
                    </div>
                </div>
                <div className='bottom-section flex px-4 py-3.5 items-center cursor-pointer'>
                    <FaDownload />
                    <div className='pl-3'>Install App</div>
                </div>
            </div>
            <div className='mobile-view md:hidden block  p-5 cursor-pointer z-40 absolute' onClick={()=>{
                setMenuBarVisibility(!menuBarVisibility);
            }}>
                <FaBars />
            </div>
        </>
    )
}

export default Sidebar