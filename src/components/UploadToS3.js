import React , {useState} from 'react';
import { uploadFile } from 'react-s3';
import { Button, Heading, Center } from '@chakra-ui/react';



const S3_BUCKET ='input-compressimages';
const REGION ='us-east-1';
const ACCESS_KEY ='AKIAWO6V2LFESYVI6XHB';
const SECRET_ACCESS_KEY ='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';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const UploadImageToS3WithReactS3 = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return <div>
        <Center>
            <Heading>Sube tu imagen</Heading>
        </Center>
        <Center h="24">
            <input type="file" onChange={handleFileInput}/>
        </Center>
        <Center h="24"><Button onClick={() => handleUpload(selectedFile)}>Subir</Button></Center>
    </div>
}

export default UploadImageToS3WithReactS3;