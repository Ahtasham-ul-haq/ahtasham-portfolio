import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { FaRegCircle } from 'react-icons/fa6'

const Experience = () => {
  return (
    <div className='py-20' id='experience'>
        <h1 className='heading'>
            My {' '}
            <span className='text-purple'>Services</span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {workExperience.map((card) => (
                <Button 
                    key={card.id} 
                    borderRadius='2rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                    duration={Math.floor(Math.random() * 10000) + 10000}
                >
                    <div className='flex lg:flex-row lg:items-center flex-col p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img 
                            src={card.thumbnail}
                            alt={card.thumbnail}
                            className='lg:w-32 md:w-20 w-16'
                        />
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                            <ul className='text-start text-white-100 mt-3 font-normal'>
                                {card.keyFeatures?.map((feature, index) => (
                                    <div className='flex gap-4 items-center'>
                                        <FaRegCircle size={8} />
                                    <li key={index}>
                                        {feature}
                                    </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Experience