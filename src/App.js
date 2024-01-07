import { useState } from 'react';
import './App.css';
import CertificateView from './components/CertificateView';
import DragAndDropContainer from './components/DragAndDropContainer';
import Footer from './components/Footer';
import LoadedFileInfo from './components/LoadedFileInfo';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';


const App = () => {

    const [certificateData, setCetificateData] = useState('')

    const [isFileSelected, setIsFileSelected] = useState(false);
    const [isShowSpinner, setIsShowSpinner] = useState(false);
    const [isWrongFile, setIsWrongFile] = useState(false);
    const [fileNameLoaded, setFileNameLoaded] = useState('');

    return (
        <div className='main-app-container'>
            <Navbar />
            <div className='flex justify-center items-center flex-col max-w-[50rem] min-h-[calc(100vh-5rem-7rem)]'>

                {!isFileSelected && <DragAndDropContainer getData={setCetificateData} handleSelectedFile={setIsFileSelected} fileNameLoaded={setFileNameLoaded} showSpinner={setIsShowSpinner} wrongFile={setIsWrongFile} />}

                {isShowSpinner && <Spinner />}

                {isFileSelected && !isShowSpinner && <LoadedFileInfo fileName={fileNameLoaded} isWrongFile={isWrongFile} />}

                {isFileSelected && !isShowSpinner && !isWrongFile && <CertificateView certificateData={certificateData} />}

            </div>
            <Footer />
        </div>
    )
};

export default App;


// spr czy jest nr zaświadcznia i wskazanie czy plik jest z zus
// logo