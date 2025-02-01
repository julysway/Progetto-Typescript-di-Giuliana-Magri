
# 📺 ** Progetto Professioniste dei Media** 

Questo progetto è una simulazione di un sistema che consente a professionisti del settore media di partecipare a programmi di formazione e pubblicare contenuti su diverse piattaforme. Il sistema è composto da diverse **interfacce** e **classi**, che permettono la gestione dei professionisti, dei programmi di formazione e delle piattaforme di pubblicazione.

## 🧑‍💻 **Struttura del progetto**

### Interfacce

- **IProfessionistaMedia**: Definisce le proprietà e i metodi che ogni professionista nel settore media deve avere. I professionisti possono partecipare a programmi di formazione.
  
- **IProgrammaFormazione**: Rappresenta un programma di formazione, che ha un titolo, una descrizione, una specializzazione, una durata e un elenco di partecipanti. I programmi possono aggiungere partecipanti.
  
- **IPiattaforma**: Rappresenta una piattaforma di pubblicazione, che ha un nome, un tipo (ad esempio Web o TV), una descrizione e una lista di categorie di contenuto. Le piattaforme possono pubblicare contenuti creati dai professionisti.

### Classi

- **ProfessionistaMedia**: Implementa l'interfaccia `IProfessionistaMedia`. Rappresenta un professionista che può partecipare a programmi di formazione e pubblicare contenuti.
  
- **ProgrammaFormazione**: Implementa l'interfaccia `IProgrammaFormazione`. Gestisce l'aggiunta di partecipanti e la registrazione dei programmi di formazione.
  
- **Piattaforma**: Implementa l'interfaccia `IPiattaforma`. Gestisce la pubblicazione dei contenuti sui diversi tipi di piattaforme.

## ⚙️ **Funzionalità**

1. **Creazione Professionisti**: Crea oggetti `ProfessionistaMedia` che rappresentano giornalisti, produttori video, fotografi e altri professionisti nel settore dei media.
  
2. **Creazione Programmi di Formazione**: Definisce programmi di formazione su vari temi, come giornalismo, produzione video, fotografia, ecc.
  
3. **Iscrizione ai Programmi**: I professionisti possono partecipare a uno o più programmi di formazione, che li aiutano a sviluppare le proprie competenze.
  
4. **Piattaforme di Pubblicazione**: Crea piattaforme di pubblicazione, sia online che su canali televisivi, dove i professionisti possono pubblicare contenuti multimediali.
  
5. **Pubblicazione dei Contenuti**: I professionisti possono pubblicare contenuti (reportage, documentari, articoli, ecc.) su piattaforme.

🛠️ **Tecnologie Utilizzate**

Il progetto è sviluppato in TypeScript, un superset di JavaScript che aggiunge tipizzazione statica e altre funzionalità.

🚀### Installazione
 Clona il repository:

git clone https://github.com/julysway/Progetto-Typescript-di-Giuliana-Magri

npm install

🤝
Se desideri contribuire a questo progetto, sentiti libero di inviare una pull request o segnalare problemi tramite le issue.

🔗 Link Utili

https://codepen.io/julysway/pen/KwPYzyN?editors=1111
