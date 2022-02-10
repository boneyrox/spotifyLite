import React, { useEffect } from 'react';
import '../css/PlayerSection.scss';
import {FaRegHeart} from 'react-icons/fa';
import {HiOutlineViewList} from 'react-icons/hi';
import {AiOutlineDesktop} from 'react-icons/ai';
import {BsVolumeUp} from 'react-icons/bs';
import {BsFillPlayCircleFill} from 'react-icons/bs';
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';

const PlayerSection = () => {
    useEffect(() => {
        let url =  localStorage.getItem('img');
        console.log(url);
        
    }, [])
    return (
        <div className='player-wrapper flex items-center justify-between px-9'>
            <div className='song-info flex items-center  h-full '>
                <div className='cover-img '><img className='rounded' src="https://source.unsplash.com/user/c_v_r/75x75" alt='cover-img' /></div>
                <div className='song-artist-info ml-4'>
                    <div className='song-name pb-1'>Im My Feelings</div>
                    <div className='artist-name'>Drake</div>
                </div>
                <div className='favourite-icon pl-3.5'><FaRegHeart /></div>
            </div>
            <div className='player-controler flex'>
                <div className='list-icon pl-6'><BsChevronLeft /></div>
                <div className='list-icon pl-6'><BsFillPlayCircleFill /></div>
                <div className='list-icon pl-6'><BsChevronRight /></div>
            </div>
            <div className='player-volume flex'>
                <div className='play-icon pl-2.5'><HiOutlineViewList /></div>
                <div className='desktop-icon pl-2.5'><AiOutlineDesktop /></div>
                <div className='volume-icon pl-2.5'><BsVolumeUp /></div>
            </div>
        </div>
    )
}

export default PlayerSection
