import { Button, Image, Stack, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import '../../App.css'
import profilePic from '../../assets/profile_pic.jpg'
import "./Home.css"

export function Home() {

    return(
        <div id="body">
            <Stack direction={{base:'column',md:'row'}} display='flex' justifyContent="center">
                    <VStack marginTop={{base:'-1em',md:'2em'}} id="left-box">
                        
                        <h1 className="headline">Hi, I'm Dan!</h1>
                        <h2 id="subheadline">
                            I'm a self-taught, full stack web developer who loves creating software
                            and solving problems.</h2>
                        <div/>
                        <div className="short-br"/>
                        <div className="flex-row">
                            <Link to="/portfolio" className="w-100">
                                <Button colorScheme='teal' size='lg' w="67%">view my work</Button>
                            </Link>
                        </div>

                        <br/>
                    </VStack>
                
                    <div id="profile-wrapper">
                        <Image id="profile-pic" src={profilePic} borderRadius='full'/>
                    </div>
            </Stack>
        </div>
    )  
}
