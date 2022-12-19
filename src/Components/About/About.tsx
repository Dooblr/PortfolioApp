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

    // Delay between pic transitions
    const transitionDelay = 4000
    
    // List of filenames to query from firebase storage. They cannot be batch queried so this list is necessary
    const slideShowUrls = [dan_rosie_pic, dj_pic, koji2, koji3, koji6, profile_pic]

    const [slideShowIndex,setSlideShowIndex] = useState(0)

    function advanceSlideshow(){
      if (slideShowIndex < slideShowUrls.length - 1){
        setSlideShowIndex(slideShowIndex + 1)
      } else {
        setSlideShowIndex(0)
      }
    }

    useEffect(()=>{
      if(slideShowUrls){
        const interval = setInterval(advanceSlideshow, transitionDelay);
        return () => clearInterval(interval);
      }
    },[advanceSlideshow])
    
    return (
        <>
            {/* <Divider orientation='horizontal'/> */}
            <h1>About</h1>
            {/* <Divider orientation='horizontal'/> */}
            
            {/* <br/> */}
            <Stack direction={{base:'column',md:'row'}} display='flex' justifyContent="center">

                    {/* Slideshow image */}
                    {/* <div id='about-pic-container'> */}

                      <img alt="" 
                            className="about-pic"
                            src={slideShowUrls[slideShowIndex]}
                            onLoad={()=>{setImageLoaded(true)}}
                            hidden={!imageLoaded}
                            />
                    {/* </div> */}
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
                    
                    <VStack id="left-box">
                        
                        {/* <h1 className="headline">Programmer, Artist</h1> */}
                        <p id="about-text">
                          Hey, I'm Dan! I've been writing code since 2015, during a class that taught audio and MIDI programming using the C language at Berklee College of Music in Boston, MA.
                          <br/><br/>
                          After graduating and moving to San Luis Obpiso, CA, I began learning application development and within 3 months
                          ported a proprietary applcation for QSC Cinema from Windows to iOS and Android.
                          <br/><br/>
                          Since then, I've been focused on honing my mobile and web application development skills and currently work as a freelance developer for local
                          businesses and online clients.
                          <br/><br/>
                          When I'm not behind a keyboard, I'm hanging out with 
                          my girlfrind Rosie and my dog Koji out in nature or a music festival.
                          <br/><br/> 
                          Click below to inquire about pricing and employment:
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