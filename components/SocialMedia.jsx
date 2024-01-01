import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
    return (
        <div className='app__social  border-l border-gray-color pl-4'>
            <div>
                <a href="https://github.com/Ahtasham-ul-haq" target='_blank' >
                    <BsGithub className='dark:hover:text-white' />
                </a>
            </div>
            <div>
                <a href="https://twitter.com/ahtasham1802">
                    <BsTwitter className='dark:hover:text-white' />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/ahtasham-ul-haq-9b0a41246/">
                    <BsLinkedin className='dark:hover:text-white' />
                </a>
            </div>
            <div>
                <a href="mailto:ahtasham1802@gmail.com">
                    <MdEmail className='dark:hover:text-white' />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia