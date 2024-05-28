import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/Pin'
import { FaLocationArrow } from 'react-icons/fa6'
import { CardBody, CardContainer, CardItem } from './ui/3dCard'
import Image from 'next/image'

const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>
                A small selection of {' '}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] sm:w-[570px] flex items-center justify-center w-[80vw]'>
                        <CardContainer className="inter-var">
                            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-[#13162d] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={img}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    Make things float in air
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    Hover over this card to unleash the power of CSS perspective
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                    <CardItem
                                        translateZ={20}
                                        href="https://twitter.com/mannupaaji"
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Try now →
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        Sign up
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects