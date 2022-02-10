import React from 'react';

export default function SongCard({ image, title, album }) {
    // handle clicks on the album image
    const handleClick = () => {
        console.log(album);
        sessionStorage.setItem('img', 'https://source.unsplash.com/user/c_v_r/100x100');
    }
    return (
        // style the song card
        <div className='card-wrapper flex justify-center h-72 text-center w-40 p-4 bg-gray-50 rounded' onClick={handleClick}>
            <div className='w-32 '>
                <div className='cursor-pointer'>
                    <img className='h-32 rounded-md bg-black shadow-lg hover:opacity-50 transition-opacity duration-500 ease-out'
                        src={image} alt='album cover'
                    />
                </div>
                <div>
                    {/* // show the title of the song card */}
                    <h1 className="font-sm font-bold truncate mt-1">{title}</h1>
                </div>
                <div>
                    {/* show detail of the song */}
                    <h1 className="font-xs w-full h-12 truncate text-gray-500">Lorem ipsum dolor sit amet</h1>
                </div>

            </div>
        </div>
    )
}
