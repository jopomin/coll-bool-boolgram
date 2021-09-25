Boolgram

Replica della web app di Instagram per Boolean Careers

Il progetto si basa principalmente su VUE Cli e Sass, con chiamate axios rivolte a specifiche API per l'ottenimento di dati relativi a Stories e Post.

Il layout è semi-responsivo (impostate le viewport per da lg in su) e prevede la scomparsa della sezione laterale destra (oltre ad alcuni comandi della nav) al restringimento della viewport.

Sono stati coinvolti 15 Vue Components e 7 Sass partials che hanno consentito una maggiore flessibilità di progettazione.

All'apertura della App viene simulato un ritardo di 5 secondi che consente la visualizzazione dello Skeleton (definito come Component) che riprende le macrosezioni della pagina e prevede blocchi animati e uno spinner.

Al caricamento dei dati ottenuti tramite chiamate axios vengono visualizzati Stories, Post e Profili suggeriti.

I Post, in particolare, sono corredati da informazioni dettagliate, quali: nome utente che ha realizzato il post, nome completo, foto, likes (sia il primo like con relativa foto e utente, sia il numero dei like 'restanti'), commenti (se più di tre, compare la voce 'Mostra tutti e n\* i commenti'. Quando vengono mostrati tutti spunta la voce 'Torna a 3 commenti'), sezione di pubblicazione commento, data.

Le icone presenti cambiano colore in base a :hover e :active. Le stories presentano il caratteristico bordo con gradiente Instagram.

Sono stati inseriti degli emitted events ed event listeners per favorire la comunicazione Child-Parent.

Tra i bonus: like al post, salvare il post tra i preferiti, seguire i profili suggeriti tramite il click su 'segui' e il ritardo 'forzato' della chiamata axios.
