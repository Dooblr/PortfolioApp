import { useEffect } from "react"
import { Route, Routes } from 'react-router-dom'
import {
  Box, ChakraProvider, Grid,
  theme, VStack
} from "@chakra-ui/react"
import WebFont from 'webfontloader'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import './App.css'

import { Home } from "./Components/Home/Home"
import Navbar from './Components/Navbar/Navbar'
import Portfolio from "./Components/Portfolio/Portfolio"
import Resume from "./Components/Resume/Resume"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"

const firebaseConfig = {
  apiKey: "AIzaSyDBMabNYH2DyzUUawlGM2XM21AqM5FTCyM",
  authDomain: "portfolio-app-e665f.firebaseapp.com",
  projectId: "portfolio-app-e665f",
  storageBucket: "portfolio-app-e665f.appspot.com",
  messagingSenderId: "628329913970",
  appId: "1:628329913970:web:2e873f63c9e70dfc436ceb",
  measurementId: "G-0W3KQLKYKN"
};


export function App() {

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  useEffect(()=>{
    // Load Google Webfonts
    WebFont.load({
      google: {
        families:['Comfortaa', 'Open Sans'] // ,'Bungee','Quicksand'
      },
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
              <Route path='/portfolio' element={ <Portfolio/> }></Route>
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
