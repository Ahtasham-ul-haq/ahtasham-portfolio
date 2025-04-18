import React from 'react'

const About = () => {
  return (
    <div className='relative grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-7 gap-4 lg:gap-8 p-4'>
        <div className='lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] border border-purple rounded-lg shadow-lg p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform transition duration-500 hover:scale-105'>
            <div className="absolute ">
                <img src="/about_bg.svg" alt="" width={1000} height={2000} />
            </div>
            <h2 className='text-2xl font-bold mb-4'>About Me</h2>
            <p>Hello! I'm a passionate software developer with a love for creating dynamic and responsive web applications. With a background in computer science and a keen eye for design, I strive to build user-friendly and efficient solutions. In my free time, I enjoy exploring new technologies and contributing to open-source projects.</p>
        </div>
        <div className='lg:col-span-2 md:col-span-3 md:row-span-2 border border-purple rounded-lg shadow-lg p-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 transform transition duration-500 hover:scale-105'>
            <h2 className='text-2xl font-bold mb-4'>Tech Stack</h2>
            <div className='flex space-x-4'>
                <img src='/path/to/html5-logo.png' alt='HTML5' className='w-12 h-12'/>
                <img src='/path/to/css3-logo.png' alt='CSS3' className='w-12 h-12'/>
                <img src='/path/to/js-logo.png' alt='JavaScript' className='w-12 h-12'/>
                <img src='/path/to/react-logo.png' alt='React' className='w-12 h-12'/>
            </div>
        </div>
        <div className='lg:col-span-2 md:col-span-3 md:row-span-1 border border-purple rounded-lg shadow-lg p-6 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transform transition duration-500 hover:scale-105'>
            <h2 className='text-2xl font-bold mb-4'>Copy Email</h2>
            <button className='bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300'>Copy Email</button>
        </div>
        <div className='lg:col-span-2 md:col-span-3 md:row-span-1 border border-purple rounded-lg shadow-lg p-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform transition duration-500 hover:scale-105'>
            <h2 className='text-2xl font-bold mb-4'>Contact Me</h2>
            <p>Feel free to reach out to me via email or connect with me on LinkedIn. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
        </div>
    </div>
  )
}

export default About