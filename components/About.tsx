import React from 'react'

const skills = [
  {
    name: 'NEXT JS',
    icon: '/next.svg',
  },
  {
    name: 'REACT',
    icon: '/re.svg',
  },
  {
    name: 'NEXT JS',
    icon: '/next.svg',
  },
  {
    name: 'REACT',
    icon: '/re.svg',
  },
  {
    name: 'NEXT JS',
    icon: '/next.svg',
  },
  {
    name: 'REACT',
    icon: '/re.svg',
  },
]

const About = () => {
  return (
    // <div className='relative grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-7 gap-4 lg:gap-8 p-4'>
    //     <div className='lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] border border-purple rounded-lg shadow-lg p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform transition duration-500 hover:scale-105'>
    //         <div className="absolute ">
    //             <img src="/about_bg.svg" alt="" width={1000} height={2000} />
    //         </div>
    //         <h2 className='text-2xl font-bold mb-4'>About Me</h2>
    //         <p>Hello! I'm a passionate software developer with a love for creating dynamic and responsive web applications. With a background in computer science and a keen eye for design, I strive to build user-friendly and efficient solutions. In my free time, I enjoy exploring new technologies and contributing to open-source projects.</p>
    //     </div>
    //     <div className='lg:col-span-2 md:col-span-3 md:row-span-2 border border-purple rounded-lg shadow-lg p-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 transform transition duration-500 hover:scale-105'>
    //         <h2 className='text-2xl font-bold mb-4'>Tech Stack</h2>
    //         <div className='flex space-x-4'>
    //             <img src='/path/to/html5-logo.png' alt='HTML5' className='w-12 h-12'/>
    //             <img src='/path/to/css3-logo.png' alt='CSS3' className='w-12 h-12'/>
    //             <img src='/path/to/js-logo.png' alt='JavaScript' className='w-12 h-12'/>
    //             <img src='/path/to/react-logo.png' alt='React' className='w-12 h-12'/>
    //         </div>
    //     </div>
    //     <div className='lg:col-span-2 md:col-span-3 md:row-span-1 border border-purple rounded-lg shadow-lg p-6 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transform transition duration-500 hover:scale-105'>
    //         <h2 className='text-2xl font-bold mb-4'>Copy Email</h2>
    //         <button className='bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300'>Copy Email</button>
    //     </div>
    //     <div className='lg:col-span-2 md:col-span-3 md:row-span-1 border border-purple rounded-lg shadow-lg p-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform transition duration-500 hover:scale-105'>
    //         <h2 className='text-2xl font-bold mb-4'>Contact Me</h2>
    //         <p>Feel free to reach out to me via email or connect with me on LinkedIn. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
    //     </div>
    // </div>
    
<div className="grid grid-cols-5 grid-rows-7 gap-4">
    <div className="relative col-span-3 row-span-4 min-h-[60vh] h-[550px] rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-start flex flex-col space-y-8"
    style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
        <div className='w-full h-full absolute' >
            <img src="/about_bg.svg" alt="" className='object-cover object-center w-full h-full' />
        </div>
        <h1 className='ml-10 font-sans text-lg lg:text-3xl max-w-96 font-bold z-10'>About Me</h1>
        <p className='mx-10 font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ratione ducimus ipsam recusandae ipsa eos eaque impedit. Dignissimos quasi a officia, esse cum mollitia minus ipsa unde. Aperiam, et sunt.</p>
    </div>
    <div className="col-span-2 row-span-2 col-start-4 about-card relative overflow-hidden">
        <div className='w-full h-[100% + 20px] absolute top-[-10%] ' >
          <img src="/grid.svg" alt="" className='object-cover object-center w-full h-full z-10' />
        </div>
      <div className='w-[520px] h-[125px] absolute bottom-0 left-[-20px] ' >
          <img src="/map.svg" alt="" className='object-cover object-center w-full h-full z-40' />
      </div>
        <h1 className='ml-10 font-sans text-lg lg:text-3xl max-w-96 font-bold z-50'>
          I’m very flexible with time zone communications
        </h1>
      </div>
    <div className="col-span-2 row-span-2 col-start-4 row-start-3 about-card">3</div>
    <div className="col-span-2 row-start-5 about-card">4</div>
    <div className="col-span-2 row-span-2 col-start-1 row-start-6 about-card">5</div>

      {/* TECH STACK */}

    <div className="col-span-3 row-span-3 col-start-3 row-start-5 about-card min-h-[400px] relative overflow-hidden">
      <div className='w-full h-[500px] absolute top-[-10%] ' >
          <img src="/grid.svg" alt="" className='object-cover w-full h-full z-10 opacity-60' />
      </div>
      <div className='flex h-full'>
        <div className='flex flex-col min-h-full justify-center items-start'>
          <p className='mx-10 font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3]'>I constantly try to improve</p>
          <h1 className='ml-10 font-sans text-lg lg:text-3xl max-w-96 font-bold'>My Tech Stack</h1>
        </div>
        <div className='flex flex-wrap flex-1'>
          {skills.map((skill) => (
            <div key={skill.name} className='flex flex-col items-center space-x-2'>
              <div className='m-1 border border-white/[0.1] rounded-full p-2 bg-[#0D0E2C]'>
              <img src={skill.icon} alt={skill.name} className='w-20 h-20' />
              </div>
              <span className='text-lg font-bold'>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
</div>
    
  )
}

export default About