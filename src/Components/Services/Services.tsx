import { SimpleGrid } from "@chakra-ui/react"
import { AiFillAudio, AiOutlineApple, AiOutlineCreditCard } from "react-icons/ai"
import {CgWebsite} from 'react-icons/cg'
import { RiAndroidLine } from "react-icons/ri"
import { IoLogoAppleAr } from "react-icons/io5"

import './Services.css'
import { BsFillLightbulbFill, BsPaintBucket } from "react-icons/bs"
import { MdGraphicEq, MdAudiotrack } from "react-icons/md"
import { SiAudiomack } from "react-icons/si"
import { motion } from "framer-motion"
import { motionVariantChild, motionVariantContainer } from "../../Misc/framerMotionVariants"

export function Services(){
  return(
    <motion.div
					initial='hidden'
					animate='show'
					variants={motionVariantContainer}>

      <motion.h1 variants={motionVariantChild}>Services</motion.h1>

      <br/>

      <SimpleGrid columns={{base:1,md:2}} spacing={5}>
        <motion.div className='service-column' variants={motionVariantChild}>
          <h2 className='service-header'>Web</h2>
          <div className='service-items-container'>
            <p className='service-column-text'><CgWebsite className='service-icon'/> Websites</p>
            <p className='service-column-text'><IoLogoAppleAr className='service-icon'/> Web apps</p>
            <p className='service-column-text'><AiOutlineCreditCard className='service-icon'/> E-Commerce</p>
            <p className='service-column-text'><BsFillLightbulbFill className='service-icon'/> IT Support</p>
          </div>
        </motion.div>

        <motion.div className='service-column' variants={motionVariantChild}>
          <h2 className='service-header'>Native</h2>
          <div className='service-items-container'>
            <p className='service-column-text'><AiOutlineApple className='service-icon'/> iOS apps</p>
            <p className='service-column-text'><AiOutlineApple className='service-icon'/> MacOS apps</p>
            <p className='service-column-text'><RiAndroidLine className='service-icon'/> Android apps</p>
          </div>
        </motion.div>

        <motion.div className='service-column' variants={motionVariantChild}>
          <h2 className='service-header'>Digital Media Services</h2>
          <div className='service-items-container'>
            <p className='service-column-text'><BsPaintBucket className='service-icon'/> Graphic Design</p>
            <p className='service-column-text'><MdGraphicEq className='service-icon'/> Audio Engineering</p>
            <p className='service-column-text'><AiFillAudio className='service-icon'/> Podcast Mixing</p>
            <p className='service-column-text'><MdAudiotrack className='service-icon'/> Music Mixing</p>
            <p className='service-column-text'><SiAudiomack className='service-icon'/> Audio Repair</p>
          </div>
        </motion.div>

      </SimpleGrid>
    </motion.div>
  )
}