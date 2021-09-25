import { React, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'

const MyDropzone = () => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    
    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Inserta tus imágenes aquí ...</p> :
                <p>Arrastra tus imágenes aquí o haz click para seleccionar las imágenes</p>
            }
        </div>
    );
}
 
export default MyDropzone;