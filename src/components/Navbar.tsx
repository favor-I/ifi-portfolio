import React from 'react'
import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa'

type deviceScreenType = 'mobile' | 'tab' | 'laptop' | 'wider-screen'
interface NavbarPropType {
    screenType?: deviceScreenType
}
const Navbar = (props: NavbarPropType) => {
    const {screenType} = props
    const styleBasedOnScreenSize = screenType ===  'laptop' ? '':'6';
    console.log(screenType)
  return (
    <nav className=' relative flex '>
        <div className=' flex justify-between mx-auto w-[80%] border py-4 px-2 rounded-br-[12px] rounded-bl-[12px] hover:border-[#C778DD] '>
            <a href='/'>
                <span></span>
                <p className=' '>Favour</p>
            </a>
            <div className=' flex w-[443px] justify-between '>
                <a href="/"><p className=' text-[#ABB2BF] hover:text-white'><span className=' text-[#C778DD] '>#</span>Home</p></a>
                <a href="/about"><p className=' text-[#ABB2BF] hover:text-white'><span className=' text-[#C778DD] '>#</span>About</p></a>
                <a href="/contact"><p className=' text-[#ABB2BF] hover:text-white'><span className=' text-[#C778DD] '>#</span>Contact</p></a>
            </div>
        </div>
        <div className=' absolute top-0 left-[30px] flex flex-col gap-4 h-[311px] w-[32px] items-center  '>
            <span>
                <svg width="2" height="191" viewBox="0 0 2 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499995 191L0.500004 0L1.5 4.37114e-08L1.5 191L0.499995 191Z" fill="#ABB2BF"/>
                </svg>
            </span>
            {/* Social Icons */}
            <div className=' flex flex-col gap-2 '>
                <a href="https://www.linkedin.com/in/ifeanacho-favour/" target='_blank'><FaLinkedin color='#ABB2BF' className=' h-4 w-4' /></a>
                <a href="https://github.com/favor-I" target='_blank'><FaGithub color='#ABB2BF' className=' h-4 w-4' /></a>
                <a href="" target='_blank'><FaGoogle color='#ABB2BF' className=' h-4 w-4' /></a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar