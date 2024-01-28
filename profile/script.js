const fs = require('fs');

function generateCombinedREADME(libri, organization) {
    let combinedREADME = "# Biblioteca\n\n";
    
    libri.forEach((libro) => {
        combinedREADME += `<img height="300px" src="https://github.com/${organization}/${libro.repository}/blob/main/${libro.immagineCopertina}" alt="${libro.titolo}" />\n\n`;     
        combinedREADME += `## ${libro.titolo}\n\n`;
        combinedREADME += `${libro.descrizione}\n\n`;
        combinedREADME += `Autore: ${libro.autore}\n\n`;
        combinedREADME += `Argomenti: ${libro.argomenti}\n\n`;
         combinedREADME += `- [Sfoglia PDF](https://github.com/${organization}/${libro.repository}/blob/main/${libro.repository}.pdf)\n- [Scarica EPUB](https://github.com/${organization}/${libro.repository}/blob/main/${libro.repository}.epub)\n\n`;
    });
  
    return combinedREADME;
  }
  
  // Esempio di utilizzo
  const libri = [
    {
      titolo: "Programmare - Tutti i segreti sullo sviluppo web lato server e client",
      descrizione: "La guida completa alla programmazione Python, Java, Javascript, C++, CSS, PHP, HTML, MYSQL. CONTIENE ESEMPI DI CODICE ED ESERCIZI",
      immagineCopertina: "copertina.png",
      autore: "Daniel E. Miller",
      argomenti: "Javascript, Python, HTML, CSS, PHP, MySQL, C++, Java.",
      repository: "PROGRAMMARE-Tutti-i-segreti-sullo-sviluppo-web-lato-server-e-client"
    },
    {
      titolo: "SVILUPPO WEB - Scopri la programmazione web design lato client",
      descrizione: "La guida completa per creare fogli di stule, sviluppare siti web e databese. CONTIENE ESEMPI DI CODICE ED ESERCIZI",
      immagineCopertina: "copertina.png",
      autore: "Daniel E. Miller",
      argomenti: "Javascript, HTML, CSS, PHP, MySQL.",
      repository: "SVILUPPO-WEB---Scopri-la-programmazione-web-design-lato-client"
    },
    {
      titolo: "HTML5 e CSS3 - La guida completa per il Web design",
      descrizione: "Un libro per imparare velocemente la programmazione e lo sviluppo lato client, con cenni di Javascript, JQuery, Json e XML",
      immagineCopertina: "copertina.png",
      autore: "Tony Chan",
      argomenti: "HTML, CSS, Javascript, JQuery, Json e XML",
      repository: "HTML5-e-CSS3-La-guida-completa-per-il-Web-design-Un-libro-per-imparare-velocemente-la-programmaz"
    },
    {
        titolo: "C#, Java, PHP, Python - La guida completa alla programmazione ad oggetti",
        descrizione: "Un libro per imparare velocemente 4 tra i migliori linguaggi per lo sviluppo Web lato server con esercizi e tanti esempi",
        immagineCopertina: "copertina.png",
        autore: "Tony Chan",
        argomenti: "C#, Java, PHP, Python",
        repository: "CSharp-Java-PHP-Python-La-guida-completa-alla-programmazione-ad-oggetti"
      },
      {
        titolo: "JavaScript - La guida definitiva facile per tutti",
        descrizione: "Un libro completo per imparare velocemente partendo dalle basi fino agli argomenti avanzati per lo sviluppo esperto",
        immagineCopertina: "copertina.png",
        autore: "Tony Chan",
        argomenti: "Javascript",
        repository: "JavaScript-la-guida-definitiva-facile-per-tutti"
      },
      {
        titolo: "Programmazione per Principianti - 2 libri in 1",
        descrizione: "Una guida passo-passo per imparare Python, C, SQL. CONTIENE Computer Programming Python e Computer Programming for Beginners",
        immagineCopertina: "copertina.png",
        autore: "Tony Chan",
        argomenti: "C, Python, SQL",
        repository: "Programmazione-per-Principianti_-2-libri-in-1"
      },
      {
        titolo: "HTML",
        descrizione: "La guida completa allo sviluppo web e web design per programmare siti web in 7 giorni",
        immagineCopertina: "copertina.png",
        autore: "Jack Fellers",
        argomenti: "HTML",
        repository: "HTML_-La-guida-completa-allo-sviluppo-web-e-web-design-per-programmare-siti-web-in-7-giorni"
      },
      {
        titolo: "CSS",
        descrizione: "La guida completa allo sviluppo di fogli di stile e web design per creare siti web in 7 giorni",
        immagineCopertina: "copertina.png",
        autore: "Jack Fellers",
        argomenti: "CSS",
        repository: "CSS_-La-guida-completa-allo-sviluppo-di-fogli-di-stile-e-web-design-per-creare-siti-web-in-7-giorni"
      },
      {
        titolo: "HTML & CSS",
        descrizione: "La guida completa al web design per progettare e sviluppare siti web in 7 giorni",
        immagineCopertina: "copertina.png",
        autore: "Jack Fellers",
        argomenti: "HTML, CSS",
        repository: "HTML-CSS_-La-guida-completa-al-web-design-per-progettare-e-sviluppare-siti-web-in-7-giorni"
      },
      {
        titolo: "PHP",
        descrizione: "Come diventare produttivi in soli 7 giorni con il manuale pratico e teorico aggiornato sulla prgrammazione web lato server. INCLUSI ESEMPI DI CODICE",
        immagineCopertina: "copertina.png",
        autore: "Jack Fellers",
        argomenti: "PHP",
        repository: "PHP---Come-diventare-produttivi-in-soli-7-giorni-con-il-manuale-pratico-e-teorico-aggiornato-sulla-r"
      },
  ];
  
  const organization = "vC6FwBZFnxVXGzltMimE074NJlFiVaFnyGfRTeW";
  const outputFileName = "README.md";

fs.writeFileSync(outputFileName, generateCombinedREADME(libri, organization));

console.log(`Il file ${outputFileName} è stato creato con successo.`);
  