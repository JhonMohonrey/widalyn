import React from 'react';
import menuIcon from './assets/mobile/928726.png'
import musicIcon from './assets/mobile/music.png'
import MenuExit from './assets/mobile/button.png'
import open from './assets/mobile/open1.png'
import contactIcon from './assets/mobile/contactIcon.png'
import HomeIcon from './assets/mobile/HomeIcon.png'
import aboutIcon from './assets/mobile/aboutIcon.png'
import Music from './assets/mobile/musicIcon.png'
import soundIcon from './assets/mobile/sound.png'

function Header(props) {
    let [menu, setMenu] = React.useState(false)
    let [openL1, setOpenL1] = React.useState(false)

    const openNavL1 = () => {
        setOpenL1(prev => !prev)
    }
    
    const CloseMenu = () => {
        setMenu(false)
        setOpenL1(false)
    }

    const MenuBtn = () => {
        setMenu(prev => !prev)
    }

    const defaultNav = () => {
        return (
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
        )
    }

    const TestMenu = () => {
        const links = (icon, name, links) => {
            return (
                <>
                <a 
                onClick={CloseMenu}
                className='flex items-center gap-2 font-bold text-white active:opacity-80 transition-all duration-200' href={`#${links}`}>
                    <img className='w-8' src={icon} alt="" />
                    <p className={`${!openL1 ? "hidden" : "block"}`}>
                        {name}
                    </p>
                </a>
                </>
            )
        }
        return (
            <div 
            className={`
            
            bg-[#393939]
            fixed
            right-0
            top-0
            w-full
            bottom-0
            transition-all
            duration-500
            ${openL1 ? "translate-x-[40%]" :
            `${menu ? "translate-x-[calc(100%-55px)]" : "translate-x-[100%]"}`}
            `}>
                <div className=' p-2 flex items-center'>
                    <img
                    onClick={openL1 === true ? CloseMenu : openNavL1}
                    className={`
                    w-8 active:opacity-80
                    transition-all duration-75
                    ${openL1 ? "transform scale-x-[-1] duration-500" : null}
                    `}
                    src={open} alt="" />
                </div>
                <div className=' flex flex-col p-2 gap-5 mt-2'>
                    {links(HomeIcon, "Home", "main")}
                    {links(aboutIcon, "About")}
                    {links(Music, "Music")}
                    {links(contactIcon, "Contact", "contact")}
                </div>
            </div>
        )
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
                <div onClick={CloseMenu} className={`fixed bg-[#000000a8] top-0 bottom-0 right-0 left-0 ${menu ? "block" : "hidden"}`}>

                </div>

                <div className=' py-2 px-3  flex items-center justify-between '>
                    <div className='flex gap-[3px] items-center justify-center'>
                        <img className='w-5' src={musicIcon} alt="music icon" />
                        <p className='font-bold text-white select-none'>Widalyn</p>
                    </div>

                    <img onClick={MenuBtn} className={`w-8 active:opacity-50 transition-all duration-200 ${menu ? "opacity-0" : "block"}`} src={menuIcon} alt="menu" />
                </div>
                <div className=''>
                    {/* {defaultNav()} */}
                    {TestMenu()}
                </div>
            </div>
        </div>
    );
}

export default Header;