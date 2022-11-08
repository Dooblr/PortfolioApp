import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, useDisclosure } from "@chakra-ui/react"
import { forwardRef, useImperativeHandle } from "react"
import './PortfolioModal.css'


const PortfolioModal = forwardRef((props:any,ref:any)=> {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    useImperativeHandle(ref, () => ({
        onOpen() {
            onOpen()
        },
    }))


    return (
      <>
        <Modal size="md" isOpen={isOpen} onClose={onClose} isCentered scrollBehavior={'inside'}>
          <ModalOverlay />
          <ModalContent id="portfolio-modal">
            <ModalHeader>{props.ModalBody.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody className="modal-body">
              {props.ModalBody.body}
            </ModalBody>
  
            <ModalFooter>
                <Spacer/>
                <Button colorScheme='teal' size='lg' mr={3} onClick={onClose}>
                    close
                </Button>
                <Spacer/>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  })

  export default PortfolioModal