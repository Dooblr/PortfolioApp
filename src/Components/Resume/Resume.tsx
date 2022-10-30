import { Button, Divider } from "@chakra-ui/react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

export default function Resume(){

    const storage = getStorage();
    const [resumeUrl, setResumeUrl] = useState("")

    useEffect(()=>{
        getDownloadURL(ref(storage, 'feinstein_webdev_resume_221027.pdf'))
          .then((url) => {
            console.log(url)
            setResumeUrl(url)
          })
          .catch((error) => {});
      },[])

    return (
        <>
            <Divider orientation='horizontal'/>
            <h1>resume</h1>
            <Divider orientation='horizontal'/>
            <a href={resumeUrl} download>
                <Button size="lg" colorScheme="teal">Download</Button>
            </a>
            <Divider orientation='horizontal'/>
            <iframe src={resumeUrl} width="100%" height="500px"/>
        </>
    )
}