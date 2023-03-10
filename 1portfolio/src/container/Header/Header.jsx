import React from 'react';
import {motion} from "framer-motion";
import {images} from "../../constants";
import "./Header.scss";
import AppWrap from '../../wrapper/AppWrap';


const Header = () => {

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
      whileInView={{x: [-100, 0], opacity: [0, 1]}}
      transition= {{duration: 0.5}}
      className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'> Hello, I am</p>
              <h1 className='head-text'>Thomas</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
              <p className='p-text'>Junior-Web Developer</p>
              
          </div>
        </div>
      </motion.div>
      <motion.div
       whileInView={{opacity: [0, 1]}}
       transition= {{duration: 0.5, delayChildren: 0.5}}
       className="app__header-img"
      >
        <img src={images.picture} alt="profile"/>
        <motion.img
           whileInView={{scale: [0, 1]}}
           transition= {{duration: 1, ease: "easeInOut"}}
           className="overlay__circle"
           src={images.circle}
           alt="profile_circle"
        />
      </motion.div>
      
      <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {[images.javascript, images.react, images.sass, images.sc].map((circle, index)=> (
          <div className='circle-cmp app__flex' key={`${circle-index}`}>
            <img src={circle} alt="circle"/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, "home")
