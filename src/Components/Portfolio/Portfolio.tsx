import { Button, Center, Divider, HStack, List, ListIcon, ListItem, SimpleGrid, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { AiFillApple, AiFillGithub, AiOutlineWifi } from 'react-icons/ai'
import { BiNetworkChart } from 'react-icons/bi'
import { BsFilm } from 'react-icons/bs'
import { FaFish, FaReact, FaSwift } from 'react-icons/fa'
import { IoLogoFirebase } from 'react-icons/io5'
import { MdCheckCircle, MdNetworkCheck, MdQueueMusic, MdWeb } from 'react-icons/md'
import { SiBootstrap, SiChakraui, SiDocker, SiExpress, SiHeroku, SiReact, SiSwift } from 'react-icons/si'
import ReactPlayer from 'react-player'
import '../../App.css'
import './Portfolio.css'
import PortfolioCard from './PortfolioCard/PortfolioCard'

// Current projects
const portfolioData = [
    {
        id:1,
        title:"DiscoList",
        description:"Turn record labels into Spotify Playlists.",
        video_url:"https://youtu.be/grQ_ANiDf3Y",
        avatar:<MdQueueMusic size="3em"/>,
        modalBody:
            function ModalBody(){
                const [videoMode, setVideoMode] = useState(false)
                return (
                    <>
                    <Text>
                        DiscoList is a React-based web app that takes a user-inputted record label and generates a Spotify playlist.
                        It queries the input against the Discogs Search API, then searches results in Spotify. Any tracks found in Spotify are
                        then added to an array and passed to Spotify's create playlist endpoint.
                    </Text>
                    <br/>
                    <Center>

                    <div className="button-row">
                        {/* <div><Button className="modal-button" onClick={()=>{setVideoMode(!videoMode)}}variant="outline" colorScheme="teal">{videoMode === true ? 'hide video' : 'watch a demo'}</Button></div> */}
                        <a target='_blank' rel="noreferrer" href="https://disco-list.herokuapp.com/"><Button className="modal-button" variant="outline" colorScheme="teal">go to the app</Button></a>
                        <a target='_blank' rel="noreferrer" href="https://github.com/Dooblr/DiscoList">
                            <Button className="modal-button" variant="outline" colorScheme="teal">
                                <HStack><AiFillGithub/><p>Github</p></HStack>
                            </Button>
                        </a>
                    </div>    
                    </Center>
                    <br/>
                    {videoMode && <>
                        <ReactPlayer width="100%" url='https://youtu.be/grQ_ANiDf3Y' />
                    </>}
                    {!videoMode && <>
                        <h2>Technologies used:</h2>
                        <div className="short-br"/>
                        <div className="flex-row space-evenly">
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon fontSize="1rem" as={SiReact} color='teal.500' className="icon"/>React
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SiExpress} color='teal.500' />Express
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SiBootstrap} color='teal.500' />Bootstrap
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SiDocker} color='teal.500' />Docker
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SiHeroku} color='teal.500' />Heroku
                                </ListItem>
                            </List>
                            
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon fontSize="1rem" as={MdCheckCircle} color='teal.500' className="icon"/>Spotify API
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='teal.500' />Discogs API
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='teal.500' />Axios
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='teal.500' />React Hot Toast
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='teal.500' />Async/Await
                                </ListItem>
                            </List>
                        </div>
                    </>}
                    
                    </>
                )
            }
    },
    {
        id:2,
        title:"Portfolio Website",
        description:"This website is running React!",
        avatar:<MdWeb size="3em"/>,
        modalBody:
            function ModalBody(){
                return (
                    <>
                    <Text>
                        This website is a React application. It is my first project using Chakra UI, 
                        which I'm finding to be a much better alternative to Bootstrap!
                    </Text>
                    <br/>
                    <Center>
                        <HStack>
                            <a target='_blank' rel="noreferrer" href="https://github.com/Dooblr/PortfolioApp">
                            <Button variant="outline" colorScheme="teal">
                                <AiFillGithub/><div className="h-spacer"/>Github
                            </Button></a>
                        </HStack>
                    </Center>
                    <br/>
                    <h2>Technologies used:</h2>
                    <div className="short-br"/>
                    <div className="flex-row space-evenly">
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={FaReact} color='teal.500' className="icon"/>React
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiChakraui} color='teal.500' />Chakra UI
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiHeroku} color='teal.500' />Heroku
                            </ListItem>
                        </List>

                    </div>
                    </>
                )
            }
    },
]

// Past projects
const portfolioDataLegacy = [
    {
        id:1,
        title:"Bigger Fish",
        description:"A motion-based iOS game based on eating smaller fish to grow larger and earn points.",
        video_url:null,
        avatar:<FaFish size="3em"/>,
        modalBody:
            function ModalBody(){
                return (
                    <>
                    <Text>
                        Biggerfish is a motion-based iOS game in which the player attempts to eat smaller fish
                        to grow larger and earn points. It uses a combination of iOS's built-in SpriteKit to render game
                        content and a SwiftUI overlay for the user interface. Uses Google Firebase to store a high scores list.
                    </Text>
                    <br/>
                    <Center>

                    <a target='_blank' rel="noreferrer" href="https://github.com/Dooblr/BiggerFish"><Button variant="outline" colorScheme="teal"><AiFillGithub/><div className="h-spacer"/>Github</Button></a>
                    </Center>
                    <br/>
                    <h2>Technologies used:</h2>
                    <br/>
                    <Center>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon fontSize="1rem" as={SiSwift} color='teal.500' className="icon"/>Swift
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaSwift} color='teal.500' />SwiftUI
                            </ListItem>
                            <ListItem>
                                <ListIcon as={AiFillApple} color='teal.500' />SpriteKit
                            </ListItem>
                            <ListItem>
                                <ListIcon as={AiFillApple} color='teal.500' />CocoaPods
                            </ListItem>
                            <ListItem>
                                <ListIcon as={IoLogoFirebase} color='teal.500' />Firebase
                            </ListItem>
                        </List>
                    </Center>
                    </>
                )
            }
    },
    {
        id:2,
        title:"Ethernet Device Discoverer",
        description:`Control and view details about theater equipment`,
        video_url:'https://www.youtube.com/shorts/h_pUh8F0r8A',
        avatar:<AiOutlineWifi size="3em"/>,
        modalBody:
            function ModalBody(){
                return (
                    <>
                    <Text>
                        A tool for users of Ultra Stereo Labs (now owned by QSC) to find information about their devices
                        such as IP address and theater location, as well as access web control interfaces for each device.
                        It was originally a Windows application, and I ported it to both iOS (Swift) and Android (Java).
                    </Text>
                    <br/>
                    <Center>

                    <a target='_blank' rel="noreferrer" href="https://github.com/ultrastereolabs/EDDiOS"><Button variant="outline" colorScheme="teal"><AiFillGithub/><div className="h-spacer"/>Github</Button></a>
                    </Center>
                    <br/>
                    <h2>Technologies used:</h2>
                    <br/>
                    <Center>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon fontSize="1rem" as={SiSwift} color='teal.500' className="icon"/>Swift
                            </ListItem>
                            <ListItem>
                                <ListIcon as={AiFillApple} color='teal.500' />UIKit
                            </ListItem>
                            <ListItem>
                                <ListIcon as={AiFillApple} color='teal.500' />CocoaPods
                            </ListItem>
                        </List>
                    </Center>
                    </>
                )
            }
    },
    {
        id:3,
        title:"Network Speed Monitor",
        description:`Continuously test internet speeds and generate reports`,
        video_url:null,
        avatar:<MdNetworkCheck size="3em"/>,
        modalBody:
            function ModalBody(){
                return (
                    <>
                    <Text>
                        Network Speed Monitor is a tool I developed because I had tested my network many times
                        and noticed that the speeds were not nearly what I was paying for. I wrote this app to
                        continuously run in the background and generate reports of my network speeds.
                        After completion, I used the report in this app to get a partial refund on my internet bill.
                    </Text>
                    <br/>
                    <Center>

                    <a target='_blank' rel="noreferrer" href="https://github.com/dooblr/networkspeedmonitor"><Button variant="outline" colorScheme="teal"><AiFillGithub/><div className="h-spacer"/>Github</Button></a>
                    </Center>
                    <br/>
                    <h2>Technologies used:</h2>
                    <br/>
                    <Center>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon fontSize="1rem" as={SiSwift} color='teal.500' className="icon"/>Swift
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaSwift} color='teal.500' />SwiftUI
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiNetworkChart} color='teal.500' />AlamoFire
                            </ListItem>
                            <ListItem>
                                <ListIcon as={AiFillApple} color='teal.500' />CocoaPods
                            </ListItem>
                        </List>
                    </Center>
                    </>
                )
            }
    },
    {
        id:4,
        title:"Theaterbae",
        description:`Find new movies based on what you've seen`,
        video_url:null,
        avatar:<BsFilm size="3em"/>,
        modalBody:
            function ModalBody(){
                return (
                    <>
                    <Text>
                        Theaterbae is an iOS app that uses the IMDB database to find new movie suggestions for the user. 
                        The core algorithm uses several factors such as actors and staff, and IMDB's own related movies endpoints.
                        It serves this information in a Tinder-like swipe left or right style, and allows users to view details about the film
                        and save it to a watch-later list.
                    </Text>
                    <br/>
                    <Center>

                    <a target='_blank' rel="noreferrer" href="https://github.com/dooblr/theaterbae"><Button variant="outline" colorScheme="teal"><AiFillGithub/><div className="h-spacer"/>Github</Button></a>
                    </Center>
                    <br/>
                    <h2>Technologies used:</h2>
                    <br/>
                    <Center>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon fontSize="1rem" as={SiSwift} color='teal.500' className="icon"/>Swift
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaSwift} color='teal.500' />SwiftUI
                            </ListItem>
                            <ListItem>
                                <ListIcon as={AiFillApple} color='teal.500' />CoreData
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiNetworkChart} color='teal.500' />AlamoFire
                            </ListItem>
                            <ListItem>
                                <ListIcon as={AiFillApple} color='teal.500' />CocoaPods
                            </ListItem>
                        </List>
                    </Center>
                    </>
                )
            }
    },
]

function Portfolio(){

    return(
        <>
        <Divider orientation='horizontal'/>
        <h1>portfolio</h1>
        <Divider orientation='horizontal'/>
        
        <SimpleGrid columns={[1,2,3]} spacing='0.5em' id="portfolio-container">
            {portfolioData.map((portfolioItem, index)=>{
                return(
                    <PortfolioCard key={index}
                        id={portfolioItem.id} 
                        title={portfolioItem.title} 
                        description={portfolioItem.description}
                        avatar={portfolioItem.avatar}
                        video_url={portfolioItem.video_url}
                        modalBody={{body:portfolioItem.modalBody,title:portfolioItem.title}}/>
                )
            })}
        </SimpleGrid>
        <Divider orientation='horizontal'/>
        <h1>past projects</h1>
        <Divider orientation='horizontal'/>
        <SimpleGrid columns={[1,2,3]} spacing='0.5em' id="portfolio-container">
            {portfolioDataLegacy.map((portfolioItem, index)=>{
                return(
                    <PortfolioCard key={index}
                        id={portfolioItem.id} 
                        title={portfolioItem.title} 
                        description={portfolioItem.description}
                        avatar={portfolioItem.avatar}
                        video_url={portfolioItem.video_url}
                        modalBody={{body:portfolioItem.modalBody,title:portfolioItem.title}}/>
                )
            })}
        </SimpleGrid>
        </>
    )
}
export default Portfolio