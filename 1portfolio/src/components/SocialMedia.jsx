import React from 'react'

import {BsLinkedin, BsGithub} from "react-icons/bs"
import {FaXing} from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className='app__social'>
    <div>
       <a href='https://www.linkedin.com/in/thomas-weigert-7a609111b/' target="_blank" rel='noreferrer'><BsLinkedin /></a> 
    </div>
    <div>
    <a href='https://github.com/thomasweigert91' target="_blank" rel='noreferrer'><BsGithub /></a> 
    </div>
    <div>
    <a href='https://www.xing.com/profile/Thomas_Weigert14/cv' target="_blank" rel='noreferrer'><FaXing /></a> 
    </div>
    </div>
  )
}

export default SocialMedia