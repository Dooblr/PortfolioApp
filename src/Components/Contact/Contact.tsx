import { useFormik } from 'formik';
import {
    Box,
    Button, Divider,
    Flex,
    FormControl, FormErrorMessage, FormLabel, HStack, Input, Stack, Textarea, VStack
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";
import * as Yup from 'yup';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useToast } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { motionVariantContainer, motionVariantChild } from '../../Misc/framerMotionVariants';

export default function Contact() {

    const form = useRef();
    const toast = useToast()
    const [isSending, setIsSending] = useState(false)

    // Init email sending library on render
    useEffect(()=>{
        emailjs.init('ynIxeblRK_FN-x-OC')
    },[])

    // Form send email callback
    const sendEmail = (e) => {
        setIsSending(true)
        emailjs.sendForm('drf-portfolio', 'drf-portfolio-template', form.current, 'ynIxeblRK_FN-x-OC')
            .then((result) => {
                setIsSending(false)
                toast({
                    title: 'Message sent!',
                    description: "I'll get back to you as soon as possible.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position:'top',
                  })
                console.log(result.text);
                formik.resetForm()
            }, (error) => {
                setIsSending(false)
                toast({
                    title: 'Error sending message',
                    description: "Check your connection and try again.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position:'top',
                  }) 
                formik.resetForm()
                console.log(error.text);
            });
    };

    // Formik settings
    const formik = useFormik({
        initialValues: {
          email: "",
          firstName: "",
          lastName: "",
          message: "",
        },
        validationSchema: Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lasName: Yup.string()
            .max(20, 'Must be 20 characters or less'),
          email: Yup.string().email('Invalid email address').required('Required'),
          }),
        onSubmit: sendEmail
      });

    return (
      <motion.div
        initial='hidden'
        animate='show'
        variants={motionVariantContainer}>
        
        <motion.h1 variants={motionVariantChild}>Contact</motion.h1>

        <Stack direction={{base:'column',md:'row'}} display='flex' justifyContent="center"> 
            
          {/* Contact info */}
          <motion.div variants={motionVariantChild}>
            <VStack id='contact-info'>
              <h2>Dan Feinstein</h2>
              <HStack><AiFillPhone/><p>(858) 774-1024</p></HStack>
              <HStack><AiFillMail/><p>DanielRonFeinstein@Gmail.com</p></HStack>
              <HStack><AiFillLinkedin/><p>LinkedIn.com/in/DanFeinstein</p></HStack>
              <HStack><AiFillGithub/><p>Github.com/dooblr</p></HStack>
            </VStack>
          </motion.div>
          
          <div className="lg-hide">
            <br/>
            <Divider/>
          </div>

          {/* Form */}
          <motion.div variants={motionVariantChild}>
            <Flex align="start" justify="center">
              <Box p={6} rounded="md">
                <form ref={form} onSubmit={formik.handleSubmit}>
                  <VStack spacing={4} align="flex-start">
                    <HStack>
                      <FormControl isRequired isInvalid={(formik.errors.firstName && formik.touched.firstName) as boolean}>
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <Input
                            id="firstName"
                            name="firstName"
                            type="name"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                        <FormErrorMessage>{formik.errors.firstName as any}</FormErrorMessage>
                      </FormControl>
                      
                      <FormControl isInvalid={(formik.errors.lastName && formik.touched.lastName) as boolean}>
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <Input
                            id="lastName"
                            name="lastName"
                            type="name"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                      </FormControl>
                    </HStack>

                    <FormControl isRequired isInvalid={(formik.errors.email && formik.touched.email) as boolean}>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <Input
                          id="email"
                          name="email"
                          type="email"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                      />
                    </FormControl>

                    <FormControl isRequired isInvalid={(formik.errors.message && formik.touched.message) as boolean}>
                      <FormLabel htmlFor="email">Message</FormLabel>
                      <Textarea
                          id="message"
                          name="message"
                          // type="textarea"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.message}
                      />
                    </FormControl>
                    
                    <Button isLoading={isSending} 
                        loadingText='Submitting...'
                        type="submit" colorScheme="teal" variant='outline' width='100%'>
                        Submit
                    </Button>

                  </VStack>
                </form>
              </Box>
            </Flex>
          </motion.div>

        </Stack>

      </motion.div>
    )
}