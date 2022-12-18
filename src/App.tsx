import {
  Box, ChakraProvider, color, Grid, useColorMode, VStack, extendTheme, type ThemeConfig
} from "@chakra-ui/react";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';

import './App.css';

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { Home } from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import { Services } from "./Components/Services/Services";
import { Skills } from "./Components/Skills/Skills";

const firebaseConfig = {
  apiKey: "AIzaSyDBMabNYH2DyzUUawlGM2XM21AqM5FTCyM",
  authDomain: "portfolio-app-e665f.firebaseapp.com",
  projectId: "portfolio-app-e665f",
  storageBucket: "portfolio-app-e665f.appspot.com",
  messagingSenderId: "628329913970",
  appId: "1:628329913970:web:2e873f63c9e70dfc436ceb",
  measurementId: "G-0W3KQLKYKN"
}

// Set chakra dfault theme to dark and use system color
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}
const theme = extendTheme({config})

export function App() {

  const app = initializeApp(firebaseConfig);

  useEffect(()=>{
    // Load Google Webfonts
    WebFont.load({
      google: {
        families:['Comfortaa'] // 'Open Sans','Bungee','Quicksand'
      }
    });
  },[])

  return (
    <ChakraProvider theme={theme}>
      <Box id="app-container" textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>

            <Navbar/>

            <Routes>
              <Route path='/' element={ <Home/> }></Route>
              <Route path='/home' element={ <Home/> }></Route>
              <Route path='/services' element={ <Services/> }></Route>
              <Route path='/portfolio' element={ <Portfolio/> }></Route>
              <Route path='/skills' element={ <Skills/> }></Route>
              <Route path='/resume' element={ <Resume/> }></Route>
              <Route path='/about' element={ <About/> }></Route>
              <Route path='/contact' element={ <Contact/> }></Route>
            </Routes>

          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
