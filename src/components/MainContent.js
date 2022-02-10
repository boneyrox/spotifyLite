import React from 'react'
import { FaAngleDown} from 'react-icons/fa';
import '../css/MainContent.scss'
import RecentlyPlayed from './RecentlyPlayed'
import Cookies from 'js-cookie'
import NewRelease from './NewRelease';

const MainContent = ({ data, token}) => {
    const [dropDown, setDropDown] = React.useState(false);

    const handleLogout = ()=>{
        // remove cookie and get new token
        Cookies.remove('spotifyAuthToken');
        window.location.reload();
    }

    // console.log(data.images[0].url);
    return (
        <div className="main-content w-screen ml-0 md:ml-16 overflow-y-scroll">
            <div className='flex justify-between m-4'>
                <div className='slider-arrow'></div>
                <div className='avatar-wrapper flex bg-gray-200 items-center cursor-pointer'>
                    <img className="inline-block md:h-12 md:w-12 h-8 w-8 rounded-full ring-2 ring-white" src={data.images[0].url} alt="" />
                    <div className='px-2 truncate w-24'>{data.display_name}</div>
                    <div onClick={() => {
                        setDropDown(!dropDown)
                    }}>
                        <FaAngleDown />
                    </div>
                </div>
                {/*drop down  */}
                {dropDown && <div class="origin-top-right absolute md:right-4 right-6 mt-12 md:mt-14 md:w-44 w-36  right-8 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                        <div class="text-gray-700 block px-4 py-2 text-sm" onClick={handleLogout}>Logout</div>
                    </div>
                </div>}
            </div>
            <div className='mb-7'>
                <RecentlyPlayed token={token} />
            </div>
            <NewRelease token={token} />
        </div>
    )
}

export default MainContent