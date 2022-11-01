import { Button, Image, Stack, VStack } from "@chakra-ui/react"
import { getDownloadURL, getStorage, ref } from "firebase/storage"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useAsyncEffect from "use-async-effect"
import '../../App.css'
import "./Home.css"

export function Home() {

    const [profilePic, setProfilePic] = useState('')
    // Firebase storage
    const storage = getStorage();
    useAsyncEffect(async()=>{
        // getDownloadURL(ref(storage, 'profile_pic.jpg'))
        // .then((url) => {
        //     setProfilePic(url)
        // })
        const url = await getDownloadURL(ref(storage, 'profile_pic.jpg'))
        setProfilePic(url)
    },[])

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
                        <Image id="profile-pic" src={profilePic}/>
                    </div>
            </Stack>
        </div>
    )  
}
