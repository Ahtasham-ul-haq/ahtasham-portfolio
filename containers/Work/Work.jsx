'use client'

import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Work.css'

const works = [
  { title: "Manage Landing Page", description: 'A modern Landing Page', imgUrl: '/about01.png', projectLink: 'https://ahtasham-ul-haq.github.io/manage-landing-page/', codeLink: 'https://github.com/Ahtasham-ul-haq/manage-landing-page', tag: 'UI/UX' },
  { title: "Codex", description: 'A modern blog', imgUrl: '/about03.png', projectLink: '/', codeLink: '/', tag: 'Next JS' },
  { title: "Hoobank", description: 'A Responsive Landing Page', imgUrl: '/about02.png', projectLink: '/', codeLink: '/', tag: 'React JS' },
]

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  // const [works, setWorks] = useState([])
  // const [filterWork, setFilterWork] = useState([])

  // useEffect(() => {
  //   const query = '*[_type == "works"]'

  //   client.fetch(query)
  //     .then((data) => {
  //       setWorks(data)
  //       setFilterWork(data)
  //     })
  // }, [])


  const handleWorkFilter = (item) => {

  }
  return (
    <>
      <h2 className="head-text dark:text-white">My Creative <span className='dark:text-yellow-bg'>Portfolio </span>Section</h2>
      {/* <div className='app__work-filter'>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''} `}
          >
            {item}
          </div>
        ))}
      </div> */}

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }} 
        className='app__work-portfolio' 
      >
        {works.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25, }}
                    className='app__flex'>
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25, }}
                    className='app__flex'>
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex' >
              <h4 className="bold-text dark:text-white">{work.title}</h4>
              <p className="p-text dark:text-white/70" style={{ marginTop: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text dark:text-white">{work.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg  '
);