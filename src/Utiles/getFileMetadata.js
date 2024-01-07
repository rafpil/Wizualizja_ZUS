function getFileMetadata(event) {
    let file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];   
    return file;
}

export default getFileMetadata;