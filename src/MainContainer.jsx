import React from 'react';
import spotifyLogo from './assets/mobile/spotify.png'
import instagram from './assets/mobile/instagram.png'
import tiktok from './assets/mobile/tiktok.png'
import soundIcon from './assets/mobile/sound.png'
import girl from './assets/photo/stock29.jpg'
import youtubeIcon from './assets/photo/youtube.png'

function MainContainer(props) {

    const socialMediaLinks = (imgIcon) => {
        return (
            <a href="">
                <img className={`
                    md:w-10
                    w-[clamp(1rem,14vw,90px)]
                    rounded-full
                `} src={imgIcon} alt="social media icon" />
            </a>
        )
    }

    const mainImg = (addStyle) => {
        return (
            <img className={`
            md:w-[clamp(200px,40vw,450px)] md:h-[clamp(200px,40vw,450px)] w-[90%] h-[300px] object-cover rounded-3xl shadow-lg shadow-gray-600 mb-5 md:mb-0
            ${addStyle}
            `} src={girl} alt="girl " />
        )
    }
    return (
        <div id={props.id} className='bg-[#ff95ac] flex items-center justify-center md:py-12 py-8 '>
            <div className='w-full max-w-screen-2xl flex flex-col-reverse md:flex-row items-center justify-center gap-6'>
                <div className=''>

                    <div className='px-2 md:px-0'>
                        <p className='md:text-[clamp(1.2rem,4vw,25px)] text-white text-[clamp(1rem,6vw,35px)] md:text-start hidden md:block text-center'>Hello my name is</p>
                        <h1 className='font-extrabold text-[clamp(1rem,22vw,120px)] md:text-start text-center md:text-[clamp(2.5rem,10vw,120px)] text-white leading-none'>
                            <span className='text-[#393939]'>Wida</span>lyn 
                            <br />Pateña
                        </h1>
                    </div>

                    <div className='mt-6 mb-12 md:mb-2 md:mt-2'>

                        <div className='md:mt-5'>
                            <div className={`
                                flex 
                                flex-col 
                                items-center 
                                md:hidden
                                my-2
                            `}>
                                {mainImg("h-[300px]")}
                            </div>
                            <p className=' font-semibold text-[clamp(1.5rem,3vw,25px)] md:text-start text-center text-[#393939]' style={{ textShadow: '2px 2px 3px #39393949' }}>
                                Newest Original Track📀
                            </p>

                            <p className='
                            font-bold 
                            leading-none
                            md:my-0
                            my-8
                            text-white 
                            md:text-[clamp(1.75rem,5vw,60px)]
                            text-[clamp(1rem,15vw,100px)]
                            md:text-start 
                            text-center 
                            mt-1 md:-mt-1' 
                            style={{ textShadow: '5px 5px 5px #393939' }}
                            >Pambihirang Pagibig
                            </p>
                        </div>

                        <div className=' mt-2 py-2 flex items-center justify-between flex-col md:flex-row gap-5 md:gap-0'>
                            <a href='https://open.spotify.com/track/6NQNKxCvp6nlpWUikRMrxP?si=e1caa7cc97364e0c' className='bg-[#393939] shadow-md shadow-gray-600 
                            p-2 px-5 
                            rounded-2xl 
                            text-white 
                            font-semibold 
                            cursor-pointer 
                            active:opacity-90 
                            transition-all 
                            duration-75
                            md:text-base
                            mb-3
                            text-[clamp(1rem,7vw,40px)]
                            active:shadow-none'
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                Listen on Spotify🎧
                            </a>
                            <div className='flex gap-2'>
                                {socialMediaLinks(spotifyLogo)}
                                {socialMediaLinks(instagram)}
                                {socialMediaLinks(tiktok)}
                                {/* {socialMediaLinks(youtubeIcon)} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-center'>
                    <div className='items-center justify-center hidden md:block'>
                        {mainImg()}
                    </div>
                    {/* <img className='md:w-[clamp(200px,40vw,450px)] md:h-[clamp(200px,40vw,450px)] w-[90%] h-[300px] object-cover rounded-3xl shadow-lg shadow-gray-600 mb-5 md:mb-0' src={girl} alt="girl" /> */}
                </div>
            </div>
        </div>
    );
}

export default MainContainer;