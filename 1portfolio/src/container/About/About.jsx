import React from 'react'
import "./About.scss"
import {motion} from "framer-motion"
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'

const About = () => {
const abouts = [
  {title: "Frontend Development", description: "My main skill and passion. I love to program and design applications and websites. In doing so, I always try new things to achieve the best possible result and constantly evolve.", imgUrl: images.about01},
  {title: "BackEnd", description: "I have mastered the basics of the backend and will continue to expand on this topic!", imgUrl:images.about02}
]

  return (
    <>
    <h2 className='head-text'>
    I know, 
    that <span>good dev</span>
    <br/>
    means<span> good business</span>
    </h2>
    <div className='app__profiles'>
    {abouts.map((about, index)=> (
      <motion.div
      whileInView={{opacity: 1}}
      whileHover={{scale: 1.1}}
      transition={{duration: 0.5, type: "tween"}}
      className='app__profile-item'
      key={about.title + index}
      >
        <img src={about.imgUrl} alt={about.title}/>
        <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
        <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
      </motion.div>
    ))}

    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);