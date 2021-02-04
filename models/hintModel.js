if (window.localStorage) {
    // Store
    const keyId = null;
    const hint1 = { name: 'hint1', texti:["kusikusikusion"] };
    const hint3 = { name: 'hint3', texti:["Huomaa, että mollin sointuasteet otetaan harmonisesta mollista, jotta sen V-asteelle saadaan\n" +
        "                                    dominanttiteho. Samalla #VII-asteelle muodostuu vähennetty mollisointu, joka on V7-soinnun\n" +
        "                                    terssikäännös. Tämän takia #VII-asteelle syntyy dominanttivaikutelma ja kahta em. tehoa\n" +
        "                                    käytetäänkin usein samoissa konteksteissa. Kolmannella asteella käytetään kuitenkin perusduuria\n" +
        "                                    ylinousevan soinnun sijaan, koska se on toonikatehoinen."] };

    const hint4 = { name: 'hint4', texti:["Nelisoinnuissa mollin ensimmäinen aste korvataan usein m6-soinnulla, koska se koetaan\n" +
        "vakaampana kuin mmaj7- tai m7-soinnut. m6-soinnulla käytetään lähtökohtaisesti melodista\n" +
        "molliasteikkoa. Melodisen molliasteikon karaktäärisäveliä (#VI ja #VII) käytetään kuitenkin harvoin\n" +
        "melodiassa."] };

    const hint5 = { name: 'hint5', texti:["Jos melodialle ei meinaa syntyä ideoita, voit kokeilla säveltää käyttämällä vain sointujen säveliä tai\n" +
        "perusasteikon viittä ensimmäistä säveltä käyttäen. Voit keksiä itsellesi rajauksia, ne helpottavat\n" +
        "usein luovan työn tekemistä."] };

    const hint8 = { name: 'hint8', texti:["Huomaa, että mollin dominanttisoinnulla korotamme perusasteikon seitsemännen sävellen. Siten\n" +
        "saamme V-soinnulle duuriterssin. Tomusäppi tekee sen automaattisesti niille nuoteille, joille se\n" +
        "tarvitsee tehdä."] };

    const hint9 = { name: 'hint9', texti:["Huomaa, että nelisointuja käytettäessä ensimmäisen asteen sointu on m6-sointu, jonka läheinen\n" +
        "asteikko on melodinen molli. Tomusäppi tekee tarvittavat tilapäiset etumerkit automaattisesti.\n" +
        "Muista kuitenkin että melodisen molliasteikon karaktäärisäveliä (#VI ja #VII) käytetään kuitenkin\n" +
        "harvoin melodiassa."] };

    const hint10 = { name: 'hint9', texti:["Pop/Rock & kamari musiikin soinnutukseen vinkkejä"] };

    const hint11 = { name: 'hint9', texti:["Jazz ja Bossa Nova musiikin soinnutukseen vinkkejä"] };



    localStorage.setItem('hintkey1', JSON.stringify(hint1));
    localStorage.setItem('hintkey3', JSON.stringify(hint3));
    localStorage.setItem('hintkey4', JSON.stringify(hint4));
    localStorage.setItem('hintkey5', JSON.stringify(hint5));
    localStorage.setItem('hintkey8', JSON.stringify(hint8));
    localStorage.setItem('hintkey9', JSON.stringify(hint9));
    localStorage.setItem('hintkey10', JSON.stringify(hint10));
    localStorage.setItem('hintkey11', JSON.stringify(hint11));

    localStorage.setItem("key", "keyId");
    // Retrieve
    console.log("we  good");
} else {
    console.log("Sorry, your browser does not support Web Storage...;");
}