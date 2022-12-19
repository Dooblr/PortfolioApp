import { Button, Divider } from "@chakra-ui/react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

export default function Resume(){

    const storage = getStorage();
    const [resumeUrl, setResumeUrl] = useState("")

    useEffect(()=>{
        getDownloadURL(ref(storage, 'feinstein_webdev_resume_221213.pdf'))
          .then((url) => {
            setResumeUrl(url)
          })
          .catch((error) => {});
      },[])

    return (
        <>
            <h1>Resume</h1>
            <a href={resumeUrl} download>
                <Button size="lg" colorScheme="teal">Download</Button>
            </a>
            <Divider orientation='horizontal'/>
            <iframe src={resumeUrl} width="100%" height="500px"/>
        </>
    )
}