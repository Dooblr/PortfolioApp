import { Button, Center, Image, SimpleGrid, Spinner, Stack, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../../App.css'
import profilePic from '../../Assets/profile_pic.webp'
import { motionVariantChild, motionVariantContainer } from "../../Misc/framerMotionVariants"
import "./Home.css"

export function Home() {

    const [imageLoaded, setImageLoaded] = useState(false)
    const [isMobile,setIsMobile] = useState(false)

    useEffect(()=>{
      // Check and set mobile state
      window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)

      // Listen to window resize and set mobile state
      window.addEventListener('resize',(e:any)=>{
        e.target.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
      })
    })

    return(
      <motion.div id="home-body"
        initial='hidden'
        animate='show'
        variants={motionVariantContainer}>
          
        <Stack direction={{base:'column',md:'row'}} display='flex' justifyContent="center" className="">

          <VStack marginTop={{base:'-1rem',md:'1rem'}} id="left-box" maxWidth={'20rem'} alignItems={'flex-start'}>
              
            {/* Mobile Image */}
            <div className="profile-wrapper" hidden={!imageLoaded || !isMobile}>
              <Image id="profile-pic-mobile" src={profilePic} onLoad={()=>{setImageLoaded(true)}}/>
            </div>

            <motion.h1 id="home-headline" variants={motionVariantChild}>Dan Feinstein</motion.h1>
            
            <motion.h2 className="home-subheadline" variants={motionVariantChild}>
              Freelance developer providing websites, applications, and digital media services</motion.h2>

            <motion.h2 className="home-subheadline" variants={motionVariantChild}>
              Seeking a full-time position as a Frontend or Mobile Developer</motion.h2> 
              
            <motion.h2 className='home-subheadline' variants={motionVariantChild}>
              Use the navigation menu or the buttons below to learn more</motion.h2>

            {/* Mobile buttons ==================================================================================================== */}

            {isMobile &&
              <div className="sbr"/>
            }

            {isMobile &&
              <motion.div className='home-mobile-nav-buttons' variants={motionVariantChild}>
                <SimpleGrid columns={2} spacing={2} w='100%' className='direct-button-grid'>
                  <Link to="/services">
                    <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Services</Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Portfolio</Button>
                  </Link>
                  <Link to="/skills">
                    <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Skills</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Contact</Button>
                  </Link>
                </SimpleGrid>
              </motion.div>
            }
            <br/>
          </VStack>
                

          {/* Desktop ==================================================================================================== */}

          {/* Desktop image */}
          <motion.div className="profile-wrapper" hidden={!imageLoaded || isMobile} variants={motionVariantChild}>
            <Image id="profile-pic-desktop" src={profilePic} onLoad={()=>{setImageLoaded(true)}}/>
          </motion.div>
          
          {/* Loading Spinner */}
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
        </Stack>

        {!isMobile &&
          <motion.div variants={motionVariantChild}>
            <Center>
              <SimpleGrid columns={2} spacing={2} w='67%' className='direct-button-grid'>
                <Link to="/services">
                    <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Services</Button>
                </Link>
                <Link to="/portfolio">
                    <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Portfolio</Button>
                </Link>
                <Link to="/skills">
                    <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Skills</Button>
                </Link>
                <Link to="/contact">
                    <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Contact</Button>
                </Link>
              </SimpleGrid>
            </Center>
          </motion.div>
        }
        
      </motion.div>
    )  
}
