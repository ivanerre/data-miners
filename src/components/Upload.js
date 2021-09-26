import React, { useRef } from "react";
import S3 from "react-aws-s3";

function Upload() {

  const fileInput = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name.replace(/\..+$/, "");
    const config = {
      bucketName: "input-compressimages",
      dirName: "hackathon",
      region: "us-east-1",
      accessKeyId: "AKIAWO6V2LFESYVI6XHB",
      secretAccessKey: "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"
    };
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      console.log(data);
      if (data.status === 204) {
        console.log("success");
      } else {
        console.log("fail");
      }
    });
  };
  return (
    <>
      <form className='upload-steps' onSubmit={handleClick}>
        <label>
          Upload file:
          <input type='file' ref={fileInput} />
        </label>
        <br />
        <button type='submit'>Upload</button>
      </form>
    </>
  );
}

export default Upload;