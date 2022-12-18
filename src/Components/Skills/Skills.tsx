import { SimpleGrid } from "@chakra-ui/react"
import './Skills.css'

export function Skills(){
  return(<>
  
    <h1>Skills</h1>
    <SimpleGrid columns={{base:1,md:2}} spacing={10}>
      <div className='skills-grid-box'>Web Development</div>
      <div className='skills-grid-box'>Mobile Development</div>
      <div className='skills-grid-box'>Audio & Video</div>
      <div className='skills-grid-box'>Misc</div>
    </SimpleGrid>

  </>)
}