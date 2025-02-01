//#region INTERFACCE
//interfaccia che definisce le professioniste
interface IProfessionistaMedia {

    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number;
    interessi: string[];

    partecipaProgramma(programma: IProgrammaFormazione): void
}

//interfaccia che definisce il programma di formazione
interface IProgrammaFormazione {

    titolo: string;
    descrizione: string;
    specializzazione: string;
    durata: number;
    elencoPartecipanti: (IProfessionistaMedia[]);

    aggiungiPartecipante(professionista: IProfessionistaMedia): void
}

//interfaccia che definisce la piattaforma di pubblicazione
interface IPiattaforma{

    nome: string;
    tipo: string[];
    descrizione: string;
    categorieContenuto: string[];

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void
}
//#endregion

//#region CLASSI
//classe ProfessionistaMedia che implementa l'interfaccia IProfessionistaMedia
class ProfessionistaMedia implements IProfessionistaMedia{

    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number;
    interessi: string[];

    constructor(nome: string, cognome: string, specializzazione: string, esperienza: number, interessi: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }

    partecipaProgramma(programma: IProgrammaFormazione): void {
        programma.aggiungiPartecipante(this);
    }   

}

//classe ProgrammaFormazione che implementa l'interfaccia IProgrammaFormazione
class ProgrammaFormazione implements IProgrammaFormazione {

    titolo: string;
    descrizione: string;
    specializzazione: string;
    durata: number;
    elencoPartecipanti: (IProfessionistaMedia[]);

    constructor(titolo: string, descrizione: string, specializzazione: string, durata: number) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.specializzazione = specializzazione;
        this.durata = durata;
        this.elencoPartecipanti = [];
    }

    aggiungiPartecipante(professionista: IProfessionistaMedia): void {
        this.elencoPartecipanti.push(professionista);
    }
}

//classe Piattaforma che implementa l'interfaccia IPiattaforma
class Piattaforma implements IPiattaforma {
    nome: string;
    tipo: string[];
    descrizione: string;
    categorieContenuto: string[];

    constructor(nome: string, tipo: string[], descrizione: string, categorieContenuto: string[]) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieContenuto = categorieContenuto;
    }

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void {
        console.log(`Pubblicando contenuto da ${professionista.nome} ${professionista.cognome}: ${contenuto}`);

    }
}   
//#endregion

//#region ESECUZIONE
// Creazione di alcune professioniste nei media
const professionista1 = new ProfessionistaMedia("Anna", "Tasso", "Giornalismo", 5, ["Scrittura", "Video editing"]);
const professionista2 = new ProfessionistaMedia("Laura", "Bianchini", "Produzione video", 3, ["Regia", "Montaggio"]);
const professionista3 = new ProfessionistaMedia("Marta", "Guardiola", "Fotografia", 7, ["Reportage", "Post-produzione"]);

// Creazione di programmi di formazione
const mentorship = new ProgrammaFormazione("Mentorship per giovani giornaliste", "Un programma di mentorship per aspiranti giornaliste", "Giornalismo", 6);
const sviluppoProfessionale = new ProgrammaFormazione("Sviluppo professionale nel settore media", "Un programma per migliorare le competenze", "Media", 8);
const specializzazioneTecnica = new ProgrammaFormazione("Masterclass in montaggio video", "Approfondimento sulle tecniche avanzate", "Produzione video", 10);

// Le professioniste si iscrivono ai programmi
professionista1.partecipaProgramma(mentorship);
professionista2.partecipaProgramma(specializzazioneTecnica);
professionista3.partecipaProgramma(sviluppoProfessionale);

// Creazione di piattaforme di pubblicazione
const piattaforma1 = new Piattaforma("MediaHub", ["Web", "Social Media"], "Piattaforma per la pubblicazione di contenuti multimediali", ["Giornalismo", "Fotografia", "Produzione video"]);
const piattaforma2 = new Piattaforma("DiversityChannel", ["TV", "Streaming"], "Canale dedicato alla diversità nel settore dei media", ["Talk show", "Documentari"]);

// Pubblicazione di contenuti da parte delle professioniste
piattaforma1.pubblicaContenuto(professionista1, "Un reportage esclusivo sulle nuove tendenze del giornalismo");
piattaforma2.pubblicaContenuto(professionista2, "Un documentario sulla parità di genere nei media");
//#endregion
