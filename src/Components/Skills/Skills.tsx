import { HStack, SimpleGrid } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { AiFillAmazonCircle, AiFillApi, AiFillAudio, AiFillGithub, AiOutlineApple, AiOutlineGoogle } from "react-icons/ai"
import { BiGitRepoForked } from "react-icons/bi"
import { BsFillBootstrapFill, BsPaintBucket } from "react-icons/bs"
import { DiSwift } from 'react-icons/di'
import { FaDocker, FaReact, FaSwift } from "react-icons/fa"
import { GrHeroku } from "react-icons/gr"
import { IoLogoFirebase } from "react-icons/io5"
import { MdAudiotrack, MdGraphicEq } from "react-icons/md"
import { RiAndroidLine } from "react-icons/ri"
import { SiAudiomack, SiExpress } from "react-icons/si"
import { motionVariantContainer, motionVariantChild } from "../../Misc/framerMotionVariants"
import './Skills.css'

export function Skills(){

  return(
    <motion.div
      initial='hidden'
      animate='show'
      variants={motionVariantContainer}>
    
      <h1>Skills</h1>
      <br/>
      <SimpleGrid columns={{base:1,md:2}} spacing={5}>

        <motion.div className='skills-grid-box' variants={motionVariantChild}>
          <h2>Web</h2>
          <HStack alignItems={'flex-start'} spacing={8} ml={8}>
            <div>
              <p className='skills-column-text'><FaReact className='service-icon'/> React</p>
              <p className='skills-column-text'><SiExpress className='service-icon'/> Express</p>
              <p className='skills-column-text'><BsFillBootstrapFill className='service-icon'/> Bootstrap</p>
              <p className='skills-column-text'><FaReact className='service-icon'/> ChakraUI</p>
              <p className='skills-column-text'><IoLogoFirebase className='service-icon'/> Firebase</p>
              <p className='skills-column-text'><AiOutlineGoogle className='service-icon'/> Cloud Run</p>
              {/* <div className='sbr'/><div className='sbr'/> */}
              <div style={{height:'1rem'}}/>
            </div>

            <div>
              <p className='skills-column-text'><GrHeroku className='service-icon'/> Heroku</p>
              <p className='skills-column-text'><FaDocker className='service-icon'/> Docker</p>
              <p className='skills-column-text'><AiFillAmazonCircle className='service-icon'/> AWS EC2</p>
              <p className='skills-column-text'><BiGitRepoForked className='service-icon'/> Git</p>
              <p className='skills-column-text'><AiFillGithub className='service-icon'/> GitHub</p>
              <p className='skills-column-text'><AiFillApi className='service-icon'/> APIs</p>
              {/* <div style={{height:'2rem'}}>asdf</div> */}
            </div>
            
          </HStack>
          
        </motion.div>

        <motion.div className='skills-grid-box' variants={motionVariantChild}>
          <h2>Mobile & Native</h2>
          <HStack alignItems={'flex-start'} spacing={8}>
            <div className='skills-list-container'>
              <p className='skills-column-text'><DiSwift className='service-icon'/> Swift</p>
              <p className='skills-column-text'><FaSwift className='service-icon'/> SwiftUI</p>
              <p className='skills-column-text'><AiOutlineApple className='service-icon'/> iOS</p>
              <p className='skills-column-text'><AiOutlineApple className='service-icon'/> MacOS</p>
              <p className='skills-column-text'><RiAndroidLine className='service-icon'/> Android</p>
            </div>
          </HStack>
        </motion.div>

        <motion.div className='skills-grid-box' variants={motionVariantChild}>
          <h2>Misc</h2>
          <HStack alignItems={'flex-start'} spacing={8}>
            <div className='skills-list-container'>
              <p className='skills-column-text'><BsPaintBucket className='service-icon'/> Graphic Design</p>
              <p className='skills-column-text'><MdGraphicEq className='service-icon'/> Audio Engineering</p>
              <p className='skills-column-text'><AiFillAudio className='service-icon'/> Podcast Mixing & Repair</p>
              <p className='service-column-text'><MdAudiotrack className='service-icon'/> Music Production</p>
            </div>
          </HStack>
        </motion.div>

      </SimpleGrid>

    </motion.div>
  )
}