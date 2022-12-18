import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Avatar, Box, Button, Flex, HStack, IconButton, Spacer, Stack, Text, useColorMode, useColorModeValue, useDisclosure
} from '@chakra-ui/react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Link as ReactLink } from 'react-router-dom';
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from 'react';
import shiba96 from '../../Assets/shiba96.png'
import './Navbar.css'

const Links = ['home', 'services', 'portfolio', 'skills', 'resume', 'about', 'contact']

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const { colorMode, toggleColorMode } = useColorMode()

  // State for async setting avatar pic
  const [kojiPicUrl, setKojiPicUrl] = useState("")
  const storage = getStorage();
  
  useEffect(()=>{
    getDownloadURL(ref(storage, 'koji1.jpg'))
      .then((url) => {
        // console.log(url)
        setKojiPicUrl(url)
      })
      .catch((error) => {});
  },[])

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={5} borderRadius={15}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          {/* hamburger/close icon */}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          {/* <Box display={{ md: 'none' }} id='menu-label'>Menu</Box> */}
          
          {/* <HStack spacing={{sm:3,md:5,lg:8}} alignItems={'center'}> */}
            {/* <HStack> */}
              {/* <Spacer/> */}
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MdLightMode/> : <MdDarkMode/>}
              </Button> */}
              {/* <Spacer/> */}
              {/* <p id='navbar-name'>Dan Feinstein</p> */}
              {/* <Spacer/> */}
              {/* <Avatar
                    size={'md'}
                    src={shiba96}
                  /> */}
            {/* </HStack> */}
            
            {/* Tablet/Desktop nav buttons */}
            <HStack
              as={'nav'}
              spacing={2}
              display={{ base: 'none', md: 'flex' }}
              className='button-stack'
              >
              {Links.map((link) => (
                // <NavLink key={link}>{link}</NavLink>
                <ReactLink key={link} to={'/'+link.toLowerCase()} className="w-100">
                  <Button variant='ghost' colorScheme='teal' size='md' w="100%">{link}</Button>
                </ReactLink>
              ))}
            </HStack>
          {/* </HStack> */}
        </Flex>

          
        {isOpen ? (
          // mobile nav buttons
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} className='button-stack'>
              {Links.map((link) => (
                <ReactLink key={link} to={'/'+link.toLowerCase()} className="w-100">
                  <Button onClick={onClose} variant='ghost' colorScheme='teal' size='lg' w="100%">{link}</Button>
                </ReactLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}