import { Box, Button, HStack, Spacer, useColorModeValue, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import PortfolioModal from "../PortfolioModal/PortfolioModal";
import VideoModal from "../VideoModal/VideoModal";
import './PortfolioCard.css';

export default function PortfolioCard(props:any){

    const openModal:any = useRef()
    function handleOpenModalClick() {
        if (openModal.current) {
            openModal.current.onOpen()
        }
      }

    const openVideoModal:any = useRef()
    function handleOpenVideoModalClick(){
        if (openVideoModal.current) {
            openVideoModal.current.onOpen()
        }
    }

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} className="portfolio-card-body">
                
                <VStack key={props.id} h='100%' p="1rem">
                    <HStack>
                        <h1 className="title">{props.title}</h1>
                        {props.avatar}
                    </HStack>
                    <h2>{props.description}</h2>
                    <Spacer/>

                    {/* if url is present, render a button that navigates to it */}
                    {props.video_url && <>
                        <VideoModal ref={openVideoModal} video_url={props.video_url}/>
                        <Button variant='outline' 
                        colorScheme='teal' 
                        size='lg' w="100%" 
                        onClick={handleOpenVideoModalClick}>watch a demo</Button>
                    </>}
                    
                    <Button variant='outline' 
                            colorScheme='teal' 
                            size='lg' w="100%" 
                            onClick={handleOpenModalClick}>learn more</Button>
                </VStack>
                <PortfolioModal ref={openModal} ModalBody={{body:<props.modalBody.body/>,title:props.title}}/>
            </Box>
        </>
    )
}