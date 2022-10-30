import { Center, Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { forwardRef, useImperativeHandle } from "react"
import ReactPlayer from "react-player/youtube"

const VideoModal = forwardRef((props:any,ref:any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useImperativeHandle(ref, () => ({
        onOpen() {
            onOpen()
        },
    }))
    return (
      <>
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
                <Center>
                    <ReactPlayer controls url={props.video_url} />
                </Center>
          </ModalContent>
        </Modal>
      </>
    )
  })

  export default VideoModal