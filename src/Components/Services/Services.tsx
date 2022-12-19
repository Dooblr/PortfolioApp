import { SimpleGrid } from "@chakra-ui/react"
import { AiFillAudio, AiOutlineApple, AiOutlineCreditCard } from "react-icons/ai"
import {CgWebsite} from 'react-icons/cg'
import { RiAndroidLine } from "react-icons/ri"
import { IoLogoAppleAr } from "react-icons/io5"

import './Services.css'
import { BsPaintBucket } from "react-icons/bs"
import { MdGraphicEq, MdAudiotrack } from "react-icons/md"
import { SiAudiomack } from "react-icons/si"

export function Services(){
  return(
    <>
      <h1>Services</h1>

      <SimpleGrid columns={{base:1,md:2}} spacing={5}>
        <div className='service-column'>
          <h2>Web</h2>
          <div className='service-items-container'>
            <p className='service-column-text'><CgWebsite className='service-icon'/> Websites</p>
            <p className='service-column-text'><IoLogoAppleAr className='service-icon'/> Web apps</p>
            <p className='service-column-text'><AiOutlineCreditCard className='service-icon'/> E-Commerce</p>
            <p className='service-column-text'><AiOutlineCreditCard className='service-icon'/> IT Support</p>
          </div>
        </div>

        <div className='service-column'>
          <h2>Native</h2>
          <div className='service-items-container'>
            <p className='service-column-text'><AiOutlineApple className='service-icon'/> iOS apps</p>
            <p className='service-column-text'><AiOutlineApple className='service-icon'/> MacOS apps</p>
            <p className='service-column-text'><RiAndroidLine className='service-icon'/> Android apps</p>
          </div>
        </div>

        <div className='service-column'>
          <h2>Other Services</h2>
          <div className='service-items-container'>
            <p className='service-column-text'><BsPaintBucket className='service-icon'/> Graphic Design</p>
            <p className='service-column-text'><MdGraphicEq className='service-icon'/> Audio Engineering</p>
            <p className='service-column-text'><AiFillAudio className='service-icon'/> Podcast Mixing</p>
            <p className='service-column-text'><MdAudiotrack className='service-icon'/> Music Mixing</p>
            <p className='service-column-text'><SiAudiomack className='service-icon'/> Audio Repair</p>
          </div>
        </div>

      </SimpleGrid>
    </>
  )
}