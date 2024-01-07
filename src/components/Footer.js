import React from 'react'

const Footer = () => {
  return (
    <div className='flex min-h-[5rem] w-full justify-center items-center bg-[#2c384c] text-white'>
      <div className='flex flex-wrap justify-between w-full px-2 md:px-5 lg:w-11/12 items-center'>
        <div className='flex basis-full items-center order-2 py-1 md:items-start md:order-1 md:basis-2/4 flex-col text-xs'>
          {/* <span className='py-2'> Liczba odsłon: {15}</span> */}
          <span> Copyright ©2023. All Rights Reserved.</span>
          <span> Create and design by Rafał.</span>
        </div>

        <div className='flex basis-full order-1 justify-center items-center text-center md:order-3 md:basis-2/4 md:justify-end gap-2 text-sm py-4'>
            <a href='https://www.zus.pl/firmy/rozliczenia-z-zus/zaswiadczenie-o-niezaleganiu/weryfikacja-zaswiadczen' target='_blank' rel="noreferrer"><abbr title="Przejdź do oficjalnej strony weryfikacji zaświadczeń ZUS"> Strona ZUS - weryfikacja zaświadczeń</abbr></a>
        </div>
      </div>
    </div>
  )
}

export default Footer