function parseFromFileToXML(event) {
    return new DOMParser().parseFromString(event.target.result, "text/xml");
}
export default parseFromFileToXML;