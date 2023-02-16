import { Button, Center, Spinner, Stack, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './About.css'

import dan_rosie_pic from '../../Assets/dan_rosie.webp'
import dj_pic from '../../Assets/dj_pic.webp'
import koji2 from '../../Assets/koji2.webp'
import koji3 from '../../Assets/koji3.webp'
import koji6 from '../../Assets/koji6.webp'
import profile_pic from '../../Assets/profile_pic.webp'

export default function About() {

    // Image loaded
    const [imageLoaded, setImageLoaded] = useState(false)
    // const [alternatingImageIndex,setAlternatingImageIndex] = useState(0)

    // Delay between pic transitions
    const transitionDelay = 4000
    
    // Array of slide show references
    const slideShowUrls = [dan_rosie_pic, dj_pic, koji2, koji3, koji6, profile_pic]

    const [slideShowIndex, setSlideShowIndex] = useState(0)

    const [image1,setImage1] = useState(slideShowUrls[0])
    const [image2,setImage2] = useState(slideShowUrls[1])

    function advanceSlideshow(){
      if (slideShowIndex < slideShowUrls.length - 1){
        setSlideShowIndex(slideShowIndex + 1)
      } else {
        setSlideShowIndex(0)
      }
    }

    // Set image1 to next image, set image2 to previous image
    useEffect(()=>{
      setImage2(image1)
      setImage1(slideShowUrls[slideShowIndex])
    },[slideShowIndex])

    useEffect(()=>{
      const interval = setInterval(advanceSlideshow, transitionDelay);
      return () => clearInterval(interval);
    },[advanceSlideshow])
    
    return (
        <>
          <h1>About</h1>
          
          <Stack direction={{base:'column',md:'row'}} display='flex' justifyContent="center">

            {/* Slideshow image */}
            <div className='img-container outer'>

              <img alt="" 
                className={(slideShowIndex % 2 === 0) ? "about-pic top" : "about-pic opacity-0 below"}
                src={(slideShowIndex % 2 === 0) ? image1 : image2}
                onLoad={()=>{setImageLoaded(true)}}
                />
              
              <img alt="" 
                className={(slideShowIndex % 2 !== 0) ? "about-pic top" : "about-pic opacity-0 below"}
                src={(slideShowIndex % 2 !== 0) ? image1 : image2}
                />
              
            </div>
            
            {/* Loading spinner */}
            {!imageLoaded &&
              <Center>
                  <Spinner
                    thickness='4px'
                    speed='1s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                  />
              </Center>
            }
                  
            {/* Text box */}
            <VStack id="left-box">
                
              <p id="about-text">                          
                I began coding In 2015, during an audio and MIDI programming class at Berklee College of Music.
                <br/><br/>
                After graduating and moving to San Luis Obispo, California, I taught myself application development and within 3 months
                ported a proprietary Windows application to iOS and Android for the team that is now QSC's Cinema Division.
                <br/><br/>
                Since then, I've focused on honing my mobile and web application development skills and currently work as a freelance developer for local
                businesses and online clients in Talent, Oregon.
                <br/><br/>
                When I'm not behind a keyboard, I'm hanging out with 
                my girlfriend Rosie and my dog Koji out in nature or a music festival!
                <br/><br/> 
                Click below to inquire about your project, pricing, or open developer position:
              </p>
              <div/>
              <div className="sbr"/>
              <div className="flex-row hidden-sm">
                  <Link to="/contact" className="w-100">
                      <Button colorScheme='teal' size='lg' w="67%">Contact</Button>
                  </Link>
              </div>

              <br/>
            </VStack>
          </Stack>
        </>
    )
}