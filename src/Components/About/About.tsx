import { Button, Divider, Spinner, Stack, VStack, Center } from "@chakra-ui/react"
import { getDownloadURL, getStorage, ref } from "firebase/storage"
import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './About.css'

function sleep(ms:number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function About() {

    // Firebase storage
    const storage = getStorage();

    // Holds currently showing pic
    const [pic, setPic] = useState('')

    // Holds list of pic urls
    const [slideshowPics, setSlideshowPics] = useState<string[]>([])

    // Delay between pic transitions
    const transitionDelay = 4000
    
    // List of filenames to query from firebase storage. They cannot be batch queried so this list is necessary
    const kojiPicNames = ['dj_pic.jpg','koji2.jpg','koji3.jpg','koji4.jpg','koji5.jpg','koji6.jpg',]
    // To be filled by firebase storage
    let kojiPicsUrls:any[] = []
    
    // Incrememnt index and set new picture
    let picIndex2 = 0
    const nextPicture = useCallback(()=>{
      picIndex2++
      if (picIndex2 > kojiPicNames.length - 1){picIndex2 = 0}
      setPic(slideshowPics[picIndex2])
    },[slideshowPics])

    useEffect(()=>{

      // Get the google download links for all pictures
      kojiPicNames.forEach((pic)=>{
          getDownloadURL(ref(storage, `about_slideshow/${pic}`))
          .then((url) => {
            kojiPicsUrls.push(url)
          })
      })
      // Remove duplicates
      kojiPicsUrls = kojiPicsUrls.filter(url => !kojiPicsUrls.includes(url));
      setSlideshowPics(kojiPicsUrls)
      
      // Set DJ pic as the first TODO: make this automatic
      getDownloadURL(ref(storage, 'about_slideshow/dj_pic.jpg'))
      .then((url) => {
        setPic(url)
      })
    },[])

    useEffect(()=>{
      // thing.onchange() = thing?.classList.add('picAnimation')
      if(slideshowPics){
        nextPicture()
        const interval = setInterval(nextPicture, transitionDelay);
        
        return () => clearInterval(interval);
      }
    },[slideshowPics, nextPicture])
    
    return (
        <>
            <Divider orientation='horizontal'/>
            <h1>about</h1>
            <Divider orientation='horizontal'/>
            
            {/* <br/> */}
            <Stack direction={{base:'column',md:'row'}} display='flex' justifyContent="center">

                    {/* Loading spinner */}
                    {!pic && <><Center><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='teal.200' size='xl'/></Center><br/></>}

                    {/* Slideshow image */}
                    {pic && <img alt="" id="about-pic" className='about-pic' src={pic}/>}
                      
                    
                    <VStack id="left-box">
                        
                        {/* <h1 className="headline">Programmer, Artist</h1> */}
                        <p id="about-text">
                            Hello world! My name is Dan Feinstein. I've been writing code since 
                            I took a class that taught audio and midi programming
                            using the C language during my junior year at Berklee College of Music.
                            <br/><br/>
                            At my first job out of college, I took on the task of porting a Windows application to
                            iOS and Android. After seeing the power that modern languages provide, I was hooked.
                            <br/><br/>
                            Since that project I've been writing web and mobile applications as a hobby developer, 
                            and I've made the decision to take it to the next level.
                            <br/><br/>
                            When I'm not writing code I'm hanging with my dog Koji, listening to electronic music, 
                            or being active, outdoors, and cooking with my better half, Rosie!
                            <br/><br/>
                            If you're a recruiter or would like to hire me for a project, click the button below
                            to get in touch:
                        </p>
                        <div/>
                        <div className="short-br"/>
                        <div className="flex-row hidden-sm">
                            <Link to="/contact" className="w-100">
                                <Button colorScheme='teal' size='lg' w="67%">contact</Button>
                            </Link>
                        </div>

                        <br/>
                    </VStack>
            </Stack>
        </>
    )
}