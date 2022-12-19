import { Box, Button, Spacer, useColorModeValue } from "@chakra-ui/react";
import { useRef } from "react";
import PortfolioModal from "../PortfolioModal/PortfolioModal";
import VideoModal from "../VideoModal/VideoModal";
import './PortfolioCard.css';

export default function PortfolioCard({id, description, video_url, title, avatar, modalBody}:any){

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
                
                {/* <VStack key={id} p="1rem"> */}
                    
                    <h1 className="portfolio-title">{title}<div className='portfolio-icon'>{avatar}</div></h1>
                    
                    <h2 className='portfolio-card-description'>{description}</h2>
                    <Spacer/>

                    {/* if url is present, render a button that navigates to it */}
                    {video_url && <>
                        <VideoModal ref={openVideoModal} video_url={video_url}/>
                        <Button variant='outline' className='portfolio-card-button'
                        colorScheme='teal' 
                        size='lg'
                        onClick={handleOpenVideoModalClick}>watch a demo</Button>
                    </>}
                    
                    <Button variant='outline' className='portfolio-card-button'
                            colorScheme='teal' 
                            size='lg' 
                            onClick={handleOpenModalClick}>learn more</Button>
                {/* </VStack> */}
                <PortfolioModal ref={openModal} ModalBody={{body:<modalBody.body/>,title:title}}/>
            </Box>
        </>
    )
}