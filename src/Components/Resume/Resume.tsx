import { Button, Center, Divider, Spinner } from "@chakra-ui/react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { motionVariantChild, motionVariantContainer } from "../../Misc/framerMotionVariants";
import './Resume.scss'

export default function Resume() {

		const storage = getStorage();
		const [resumeUrl, setResumeUrl] = useState("")
		const [resumeLoaded, setResumeLoaded] = useState(false)

		useEffect(() => {
			getDownloadURL(ref(storage, 'feinstein_webdev_resume_230127.pdf'))
				.then((url) => {
						setResumeUrl(url)
				})
				.catch((error) => { });
		}, [])

		return (
				<motion.div
					initial='hidden'
					animate='show'
					variants={motionVariantContainer}
					className='framer-container-resume'>

					<motion.h1 variants={motionVariantChild}>
							Resume
					</motion.h1>

					<br/>
					
					<motion.div variants={motionVariantChild}>
						<a href={resumeUrl} download>
								<Button size="lg" colorScheme="teal">Download</Button>
						</a>
					</motion.div>

					<br/>

					<motion.div variants={motionVariantChild}>
						<Divider orientation='horizontal' />
						{!resumeLoaded &&
								<Spinner
										thickness='4px'
										speed='0.65s'
										emptyColor='gray.200'
										color='blue.500'
										size='xl'
								/>
						}
					</motion.div>
					<br/>

					<Center>
						<motion.iframe src={resumeUrl} id='resume-frame' hidden={resumeUrl === ""} onLoad={() => setResumeLoaded(true)} variants={motionVariantChild}/>
					</Center>

				</motion.div>
		)
}