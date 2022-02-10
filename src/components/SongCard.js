import React from 'react';

export default function SongCard({image, title, album}) {
    const handleClick = ()=>{
        console.log(album);
        sessionStorage.setItem('img', 'https://source.unsplash.com/user/c_v_r/100x100');
    }
    return (
        <div className='card-wrapper w-40 p-4 bg-gray-50 rounded' onClick={handleClick}>
            <div className='w-32'>
                <div className='cursor-pointer'>
                    <img className='h-32 rounded-md bg-black shadow-lg hover:opacity-50 transition-opacity duration-500 ease-out'
                        src={image} alt='album cover'
                    />
                </div>
                <div>
                    <h1 className="font-sm font-bold text-clip mt-1">{title}</h1>
                </div>
                <div>
                    <h1 className="font-xs w-full h-12 overflow-hidden text-gray-500">lorem lorem lorem loremloremloremloremlorem lorem lorem lorem</h1>
                </div>

            </div>
        </div>
    )
}
