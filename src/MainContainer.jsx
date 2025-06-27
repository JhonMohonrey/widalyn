import React from 'react';
import spotifyLogo from './assets/mobile/spotify.png'
import instagram from './assets/mobile/instagram.png'
import tiktok from './assets/mobile/tiktok.png'
import girl from './assets/photo/stock29.jpg'

function MainContainer(props) {
    return (
        <div className='bg-[#ff95ac] flex items-center justify-center md:py-12 py-12 '>
            <div className='w-full max-w-screen-2xl flex flex-col-reverse md:flex-row items-center justify-center gap-6'>
                <div className=''>

                    <div className=''>
                        <p className='text-[clamp(1.2rem,4vw,25px)] text-white'>Hello my name is</p>
                        <h1 className='font-extrabold text-[clamp(4.5rem,10vw,75px)] md:text-start text-center md:text-[clamp(2.5rem,10vw,120px)] text-white leading-none'>
                            <span className='text-[#393939]'>Wida</span>lyn 
                            <br />Pateña
                        </h1>
                    </div>

                    <div className='mt-5 md:mt-2'>

                        <div className=''>
                            <p className='font-semibold text-[clamp(1.5rem,3vw,25px)] md:text-start text-center text-[#393939]' style={{ textShadow: '2px 2px 3px #39393949' }}>Newest Original Track</p>
                            <p className='font-bold text-white text-[clamp(1.75rem,5vw,60px)] md:text-start text-center -mt-1 md:-mt-5' style={{ textShadow: '5px 5px 5px #393939' }}>Pambihirang Pag ibig</p>
                        </div>

                        <div className=' mt-2 py-2 flex items-center justify-between flex-col md:flex-row gap-5 md:gap-0'>
                            <button className='bg-[#393939] shadow-md shadow-gray-600 p-2 px-5 rounded-2xl text-white font-semibold cursor-pointer active:opacity-90 transition-all duration-75 active:shadow-none'>
                                Listen on Spotify
                            </button>
                            <div className='flex gap-2'>
                                <a href="">
                                    <img className='w-10 rounded-full' src={spotifyLogo} alt="" />
                                </a>
                                <a href="">
                                    <img className='w-10 rounded-full' src={instagram} alt="" />
                                </a>
                                <a href="">
                                    <img className='w-10 rounded-full' src={tiktok} alt="" />
                                </a>
                       
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-center'>
                    <img className='md:w-[clamp(200px,40vw,450px)] md:h-[clamp(200px,40vw,450px)] w-[90%] h-[300px] object-cover rounded-3xl shadow-lg shadow-gray-600 mb-5 md:mb-0' src={girl} alt="girl" />
                </div>
            </div>
        </div>
    );
}

export default MainContainer;