import React from 'react'

const LoadedFileInfo = ({ fileName, isWrongFile }) => {
  return (
    <>
      {isWrongFile && <div className='p-5 text-center text-error'> Załadowano plik <span className='font-bold'> {fileName}</span>, który nie jest poprawnym plikiem. <br /> Wybierz plik xml wydany przez ZUS </div>}
      
      {!isWrongFile && <div className='p-5 text-center text-success'> Załadowano plik o nazwie: <span className='font-bold'> {fileName}  </span></div>}
    </>
  )
}

export default LoadedFileInfo