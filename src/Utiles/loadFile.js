function loadFile(event) {
    let reader = new FileReader();
    reader.readAsText(event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0], "UTF-8");
    return reader;
}

export default loadFile;