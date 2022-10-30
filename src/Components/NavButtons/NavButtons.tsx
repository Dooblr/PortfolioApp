import { Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom"

export default function NavButtons(){
    return (
        <VStack spacing='1em'>
            <Link to="/" className="w-100">
                <Button colorScheme='teal' size='lg' w="100%">Home</Button>
            </Link>
            
            <Link to="/portfolio" className="w-100">
                <Button colorScheme='teal' size='lg' w="100%">Portfolio</Button>
            </Link>
            
            <Link to="/resume" className="w-100">
                <Button colorScheme='teal' size='lg' w="100%">Resume</Button>
            </Link>
            
            <Link to="/about" className="w-100">
                <Button colorScheme='teal' size='lg' w="100%">About</Button>
            </Link>
                
            <Link to="/contact" className="w-100">
                <Button colorScheme='teal' size='lg' w="100%">Contact</Button>
            </Link>
        </VStack>
    )
}