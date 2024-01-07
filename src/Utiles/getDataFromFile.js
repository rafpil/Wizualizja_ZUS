function getDataFromFile(parseXMLFile) {

    let dataFromFile =
    {
        numerZaswiadczenia: '',
        dataZaswiadczenia: '',
        daneWnioskodawcy: {
            nazwa: '',
            imie: '',
            nazwisko: '',
            ulica: '',
            numerBudynku: '',
            kodPocztowy: '',
            miejscowosc: '',
            nip: '',
            regon: '',
            pesel: '',
            seriaDokumentuTozsamosci: '',
        },
        oplacaneSkladki: '',
        dataWeryfikacjiZaleglosci: '',
        podstawaPrawna: '',
        pracownikWydajacyZaswiadczenie: {
            imie: '',
            nazwisko: ''
        },
        oddzialZUS: ''
    }

    try {
        dataFromFile.numerZaswiadczenia = parseXMLFile.getElementsByTagName("meta:Wartosc")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.numerZaswiadczenia = null
    }

    try {
        dataFromFile.dataZaswiadczenia = parseXMLFile.getElementsByTagName("meta:Czas")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.dataZaswiadczenia = 'brak danych'
    }

    try {
        dataFromFile.oplacaneSkladki = parseXMLFile.getElementsByTagName("zn:Zobowiazanie")
    } catch {
        dataFromFile.oplacaneSkladki = ['brak danych']
    }

    try {
        dataFromFile.dataWeryfikacjiZaleglosci = parseXMLFile.getElementsByTagName("meta:Czas")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.dataWeryfikacjiZaleglosci = '-'
    }

    try {
        dataFromFile.podstawaPrawna = parseXMLFile.getElementsByTagName("zn:PodstawaPrawna")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.podstawaPrawna = 'brak danych'
    }

    try {
        dataFromFile.pracownikWydajacyZaswiadczenie.imie = parseXMLFile.getElementsByTagName("inst:Pracownik")[0].getElementsByTagName("oso:Imie")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.pracownikWydajacyZaswiadczenie.imie = ''
    }

    try {
        dataFromFile.pracownikWydajacyZaswiadczenie.nazwisko = parseXMLFile.getElementsByTagName("inst:Pracownik")[0].getElementsByTagName("oso:Nazwisko")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.pracownikWydajacyZaswiadczenie.nazwisko = '-'
    }

    try {
        dataFromFile.oddzialZUS = parseXMLFile.getElementsByTagName("inst:Instytucja")[1].getElementsByTagName("inst:NazwaInstytucji")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.oddzialZUS = 'brak danych'
    }

    try {
        dataFromFile.daneWnioskodawcy.nazwa = parseXMLFile.getElementsByTagName("inst:NazwaInstytucji")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.daneWnioskodawcy.nazwa = 'brak danych'
    }

    try {
        dataFromFile.daneWnioskodawcy.imie = parseXMLFile.getElementsByTagName("oso:Imie")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.daneWnioskodawcy.imie = 'brak danych'
    }

    try {
        dataFromFile.daneWnioskodawcy.nazwisko = parseXMLFile.getElementsByTagName("oso:Nazwisko")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.daneWnioskodawcy.nazwisko = 'brak danych'
    }

    try {
        dataFromFile.daneWnioskodawcy.ulica = parseXMLFile.getElementsByTagName("adr:Ulica")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.daneWnioskodawcy.ulica = ''
    }

    try {
        dataFromFile.daneWnioskodawcy.numerBudynku = parseXMLFile.getElementsByTagName("adr:Budynek")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.daneWnioskodawcy.numerBudynku = ''
    }

    try {
        dataFromFile.daneWnioskodawcy.kodPocztowy = parseXMLFile.getElementsByTagName("adr:KodPocztowy")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.daneWnioskodawcy.kodPocztowy = 'brak danych'
    }

    try {
        dataFromFile.daneWnioskodawcy.miejscowosc = parseXMLFile.getElementsByTagName("adr:Miejscowosc")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.daneWnioskodawcy.miescowosc = 'brak danych'
    }

    try {
        dataFromFile.daneWnioskodawcy.nip = parseXMLFile.getElementsByTagName("inst:NIP")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.daneWnioskodawcy.nip = 'brak danych'
    }

    try {
        dataFromFile.daneWnioskodawcy.regon = parseXMLFile.getElementsByTagName("inst:REGON")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.daneWnioskodawcy.regon = 'brak danych'
    }

    try {
        dataFromFile.daneWnioskodawcy.pesel = parseXMLFile.getElementsByTagName("inst:Pesel")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.daneWnioskodawcy.pesel = 'brak danych'
    }

    try {
        dataFromFile.daneWnioskodawcy.seriaDokumentuTozsamosci = parseXMLFile.getElementsByTagName("adr:Dokument")[0].childNodes[0].nodeValue
    } catch {
        dataFromFile.daneWnioskodawcy.seriaDokumentuTozsamosci = 'brak danych'
    }

    return dataFromFile;

}
export default getDataFromFile;