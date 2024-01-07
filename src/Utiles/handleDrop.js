import getDataFromFile from "./getDataFromFile";
import getFileMetadata from "./getFileMetadata";
import loadFile from "./loadFile";
import parseFromFileToXML from "./parseFromFileToXML";

function handleDrop(event, getData, handleSelectedFile, fileNameLoaded, wrongFile) {
    event.preventDefault();

    let fileMetadata = getFileMetadata(event);

    if (fileMetadata.type === "text/xml") {
        loadFile(event).onload = (e) => {
            let xmlDoc = parseFromFileToXML(e);
            try {
                if(xmlDoc.getElementsByTagName("meta:Wartosc")[0].childNodes[0].nodeValue)
                getData(getDataFromFile(xmlDoc));
            }
            catch { wrongFile(true) }
        }
    } else {
        wrongFile(true);
    };
    handleSelectedFile(true);
    fileNameLoaded(fileMetadata.name);
};

export default handleDrop;