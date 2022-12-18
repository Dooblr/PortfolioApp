import { Button, Center, Image, SimpleGrid, Spinner, Stack, VStack } from "@chakra-ui/react"
import { getDownloadURL, getStorage, ref } from "firebase/storage"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useAsyncEffect from "use-async-effect"
import '../../App.css'
import "./Home.css"
import profilePic from '../../Assets/profile_pic.webp'
import { FaDotCircle } from "react-icons/fa"

export function Home() {

    const [imageLoaded, setImageLoaded] = useState(false)
    const [isMobile,setIsMobile] = useState(false)

    useEffect(()=>{
        // Check and set mobile state
        if(window.innerWidth < 768){
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
        // Listen to window resize and set mobile state
        window.addEventListener('resize',(e:any)=>{
            if(e.target.innerWidth < 768){
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        })
    })

    return(
        <div id="home-body">
            
            <Stack direction={{base:'column',md:'row'}} display='flex' justifyContent="center" spacing={{base:5,md:0}}>
                    <VStack marginTop={{base:'-1em',md:'2em'}} id="left-box" maxWidth={'20rem'} alignItems={'flex-start'}>
                        
                        <div id="profile-wrapper" hidden={!imageLoaded || !isMobile}>
                            <Image id="profile-pic2" src={profilePic} onLoad={()=>{setImageLoaded(true)}}/>
                        </div>
                            <h1 id="home-headline">Dan Feinstein</h1>
                            
                            <div className='sbr'/>
                            <h2 className="home-subheadline"><FaDotCircle className='home-subtext-bullet'/> Web developer and Audiovisual engineer providing websites, applications, and other digital services.</h2>
                            {/* <div className='sbr'/> */}
                            
                            <h2 className="home-subheadline"><FaDotCircle className='home-subtext-bullet'/> Seeking a position as a React developer.</h2> 
                            <h2 className='home-subheadline'><FaDotCircle className='home-subtext-bullet'/> Use the navigation bar or the buttons below to learn more.</h2>
                        <div/>
                        <div className="sbr"/>
                            {isMobile &&
                                <SimpleGrid columns={2} spacing={2} w='100%'>
                                    <Link to="/portfolio">
                                        <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Services</Button>
                                    </Link>
                                    <Link to="/portfolio">
                                        <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Portfolio</Button>
                                    </Link>
                                    <Link to="/portfolio">
                                        <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Skills</Button>
                                    </Link>
                                    <Link to="/contact">
                                        <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Hire me</Button>
                                    </Link>
                                </SimpleGrid>
                            }
                        <br/>
                    </VStack>

                    
                    <div id="profile-wrapper" hidden={!imageLoaded || isMobile}>
                        <Image id="profile-pic" src={profilePic} onLoad={()=>{setImageLoaded(true)}}/>
                    </div>

                
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
            <Center>
                <SimpleGrid columns={2} spacing={2} w='50%'>
                    <Link to="/portfolio">
                        <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Services</Button>
                    </Link>
                    <Link to="/portfolio">
                        <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Portfolio</Button>
                    </Link>
                    <Link to="/portfolio">
                        <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Skills</Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant='outline' colorScheme='teal' size='lg' w='100%'>Hire me</Button>
                    </Link>
                </SimpleGrid>
            </Center>
            }
        </div>
    )  
}
