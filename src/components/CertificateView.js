import React from 'react'
import Card from './Card'

const CertificateView = ({ certificateData }) => {

  let txt = (array) => {
    let text = '';
    Object.keys(array).forEach(key => text += (+key + 1) + ". " + (array[key].childNodes[0].nodeValue)+ "\n");
    return text;
  }

  return (
    <div className='shadow-[0px_0px_100px_0px_rgba(0,0,0,.2)] animate-opacity-rise bg-[#263042] rounded-xl border-[#1f2733] whitespace-pre-line m-5 text-sm sm:text-base'>

      <Card title={"Numer zaświadczenia"} content={certificateData.numerZaswiadczenia} />

      <Card title={"Data wydania zaświadczenia"} content={certificateData.dataZaswiadczenia} />

      <Card title={"Dane wnioskodawcy (płatnika składek):"} content={
        `Nazwa: ${certificateData.daneWnioskodawcy.nazwa} \b 
        Imię: ${certificateData.daneWnioskodawcy.imie} \b
        Nazwisko: ${certificateData.daneWnioskodawcy.nazwisko} \b
        Adres (Ulica / numer): ${certificateData.daneWnioskodawcy.ulica} ${certificateData.daneWnioskodawcy.numerBudynku} \b
        Kod pocztowy: ${certificateData.daneWnioskodawcy.kodPocztowy} \b
        Miejscowość: ${certificateData.daneWnioskodawcy.miejscowosc} \b
        NIP: ${certificateData.daneWnioskodawcy.nip} \b
        Regon: ${certificateData.daneWnioskodawcy.regon} \b
        Pesel: ${certificateData.daneWnioskodawcy.pesel} \b
        Seria i nr dokumentu tożsamości: ${certificateData.daneWnioskodawcy.seriaDokumentuTozsamosci}`} />

      <Card title={"Zaświadcza się, że wnioskodawca (płatnik składek) zobowiązany jest do opłacania składek na:"} content={`${txt(certificateData.oplacaneSkladki)}  \n nie posiada zaległości według stanu na dzień ${certificateData.dataWeryfikacjiZaleglosci}`} />

      <Card title={"Zaświadczenie wydaje się na wniosek płatnika składek, na podstawie"} content={certificateData.podstawaPrawna} />

      <Card title={"Pracownik ZUS upoważniony do wydania zaświadczenia"} content={certificateData.pracownikWydajacyZaswiadczenie.imie + " " + certificateData.pracownikWydajacyZaswiadczenie.nazwisko} />

      <Card title={"ZUS wydający zaświadczenie"} content={certificateData.oddzialZUS} />

    </div>
  )
}

export default CertificateView