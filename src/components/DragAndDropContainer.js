import React from 'react'
import { handleDragOver } from '../Utiles/handleDragOver'
import handleDrop from '../Utiles/handleDrop'


const DragAndDropContainer = ({ getData, handleSelectedFile, fileNameLoaded, showSpinner, wrongFile }) => {
    return (
        <div onDragOver={handleDragOver} onDrop={(event) => ( handleDrop(event, getData, handleSelectedFile, fileNameLoaded, wrongFile), showSpinner(true), setTimeout(() => showSpinner(false), 800))} className="flex items-center justify-center w-full px-2 py-5 text-center">
            <label htmlFor="dropzone-file" className="transition-all shadow-[0px_0px_100px_8px_rgba(93,208,117,.2)] hover:shadow-[0px_0px_100px_8px_rgba(93,208,117,.3)] flex flex-col items-center justify-center w-full h-64 border-2 border-[#5dd075] border-dashed rounded-lg cursor-pointer hover:bg-gray-800 dark:bg-gray-700 text-gray-300 hover:text-txt-primary dark:border-[#5dd075] dark:hover:border-[#5dd075] dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="animate-bounce w-8 h-8 mb-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm"><span className="font-semibold">Kliknij aby wybrać i załadować plik</span> lub przeciągnij i upuść plik</p>
                    <p className="text-xs p-2">Przyjmowane są tylko pliki xml wytworzone przez Zakład Ubezpieczeń Społecznych</p>
                </div>
                <input id="dropzone-file" type="file" accept=".xml" className="hidden" onChange={(event) => (handleDrop(event, getData, handleSelectedFile, fileNameLoaded, wrongFile), showSpinner(true), setTimeout(() => showSpinner(false), 800))} />
            </label>
        </div>
    )
}

export default DragAndDropContainer