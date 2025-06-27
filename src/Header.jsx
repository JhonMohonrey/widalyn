import React from 'react';
import menuIcon from './assets/mobile/928726.png'
import musicIcon from './assets/mobile/music.png'
import MenuExit from './assets/mobile/button.png'

function Header(props) {
    let [menu, setMenu] = React.useState(false)
    const MenuBtn = () => {
        setMenu(prev => !prev)
    }
    return (
        <div className='sm:flex items-center justify-center bg-[#ff95ac] border-b-[2px] border-[#ffffff56]'>
            <div className='hidden sm:block w-full max-w-screen-2xl my-5 px-2'>
                <div className=" flex items-center justify-between ">

                    <div className=' flex items-center justify-center gap-2'>
                        <img className='w-8' src={musicIcon} alt="" />
                        <p className='font-bold select-none cursor-pointer text-2xl text-white'>Widalyn</p>
                    </div>

                    <div className=' flex gap-4'>
                        <a className='font-semibold text-2xl text-white cursor-pointer active:opacity-80' href="">Home</a>
                        <a className='font-semibold text-2xl text-white cursor-pointer active:opacity-80' href="">About</a>
                        <a className='font-semibold text-2xl text-white cursor-pointer active:opacity-80' href="">Music</a>
                        <a className='font-semibold text-2xl text-white cursor-pointer active:opacity-80' href="">Contact</a>
                    </div>
                </div>
            </div>

            <div className='block sm:hidden bg-[#ff95ac] '>
                <div className={`fixed bg-[#000000a1] top-0 bottom-0 right-0 left-0 ${menu ? "block" : "hidden"}`}>

                </div>
                <div className=' py-2 px-3  flex items-center justify-between '>
                    <div className='flex gap-[3px] items-center justify-center'>
                        <img className='w-5' src={musicIcon} alt="music icon" />
                        <p className='font-bold text-white select-none'>Widalyn</p>
                    </div>

                    <img onClick={MenuBtn} className={`w-8 active:opacity-50 transition-all duration-200 ${menu ? "opacity-0" : "block"}`} src={menuIcon} alt="menu" />
                </div>
                <div className=''>
                    <div
                        className={` fixed  bg-[#ff95ac] top-0 w-[100%] right-0 flex flex-col transition-transform duration-500 ease-in-out px-2 py-3 rounded-b-2xl
                        ${menu ? 'translate-y-0' : '-translate-y-[100%]'}`}
                    >
                        <div className=' flex justify-end py-2'>
                            {/* <p className='font-bold'>something something...</p> */}
                            <img onClick={MenuBtn} src={MenuExit} className='w-6 active:opacity-50 transition-all duration-200' alt="" />
                        </div>

                        <div className='flex flex-col gap-2 my-1'>

                            <a className="font-semibold text-[clamp(1rem,6vw,25px)] active:ml-3 active:opacity-80 transition-all duration-75 " onClick={MenuBtn} href="#contact">Contact</a>
                            <a href="#">Testing</a>
                            <a href="#">Testing</a>
                            <a href="#">Testing</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;