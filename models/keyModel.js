
if (window.localStorage) {
    // Store
    const keyId = null;
    const cmajor3 = { name: 'Cmajor3', ton:[ "C", "Em", "Am" ], subdom:[ "Dm", "F"], dom:[ "G", "B°"], isMolli: false };
    const cmajor4 = { name: 'Cmajor4', ton:[ "C6", "Em7", "Am7" ], subdom:[ "Dm7", "Fmaj7"], dom:[ "G7", "Bm7(♭5)"], isMolli: false  };
    const aminor3 = { name: 'Aminor3', ton:[ "Am", "C"], subdom:[ "B°", "Dm", "F"], dom:[ "E", "G♯°"], isMolli: true  };
    const aminor4 = { name: 'Aminor4', ton:[ "Am6", "C6"], subdom:[ "Bm7(♭5)", "Dm7", "Fmaj7"], dom:[ "E7", "G♯°7"] , isMolli: true };
    const gmajor3 = { name: 'Gmajor3', ton:[ "G", "Bm", "Em,"], subdom:[ "Am", "C"], dom:[ "D", "F♯°"], isMolli: false  };
    const gmajor4 = { name: 'Gmajor4', ton:[ "G6", "Bm7", "Em7,"], subdom:[ "Am7", "Cmaj7"], dom:[ "D7", "F♯m7(♭5)"], isMolli: false  };
    const eminor3 = { name: 'Eminor3', ton:[ "Em", "G"], subdom:[ "F♯°", "Am", "C"], dom:[ "B", "D♯°"], isMolli: true  };
    const eminor4 = { name: 'Eminor4', ton:[ "Em6", "G6"], subdom:[ "F♯m7(♭5)", "Am7", "Cmaj7"], dom:[ "B7", "D♯°7"], isMolli: true  };
    const dmajor3 = { name: 'Dmajor3', ton:[ "D", "F♯m", "Bm" ], subdom:[ "Em", "G"], dom:[ "A", "C♯°"], isMolli: false  };
    const dmajor4 = { name: 'Dmajor4', ton:[ "D6", "F♯m7", "Bm7" ], subdom:[ "Em7", "Gmaj7"], dom:[ "A7", "C♯m7(♭5)"], isMolli: false  };
    const bminor3 = { name: 'Bminor3', ton:[ "Bm", "D"], subdom:[ "C♯°", "Em", "G"], dom:[ "F♯", "A♯°"], isMolli: true  };
    const bminor4 = { name: 'Bminor4', ton:[ "Bm6", "D6"], subdom:[ "C♯m7(♭5)", "Em7", "Gmaj7"], dom:[ "F♯7", "A♯°7"], isMolli: true  };
    const fmajor3 = { name: 'Fmajor3', ton:[ "F", "Am", "Dm" ], subdom:[ "Gm", "B♭"], dom:[ "C", "E°"], isMolli: false  };
    const fmajor4 = { name: 'Fmajor4', ton:[ "F6", "Am7", "Dm7" ], subdom:[ "Gm7", "B♭maj7"], dom:[ "C7", "Em7(♭5)"], isMolli: false  };
    const dminor3 = { name: 'Dminor3', ton:[ "Dm", "F"], subdom:[ "E°", "Gm", "B♭"], dom:[ "A", "C♯°"], isMolli: true  };
    const dminor4 = { name: 'Dminor4', ton:[ "Dm6", "F6"], subdom:[ "Em7(♭5)", "Gm7", "B♭maj7"], dom:[ "A7", "C♯°7"], isMolli: true  };
    const bbmajor3 = { name: 'Bbmajor3', ton:[ "B♭", "Dm", "Gm" ], subdom:[ "Cm", "E♭"], dom:[ "F", "A°"], isMolli: false  };
    const bbmajor4 = { name: 'Bbmajor4', ton:[ "B♭6", "Dm7", "Gm7" ], subdom:[ "Cm7", "E♭maj7"], dom:[ "F7", "Am7(♭5)"] , isMolli: false };
    const gminor3 = { name: 'Gminor3', ton:[ "Gm", "B♭"], subdom:[ "A°", "Cm", "E♭"], dom:[ "D", "F♯°"], isMolli: true  };
    const gminor4 = { name: 'Gminor4', ton:[ "Gm6", "B♭6"], subdom:[ "Am7(♭5)", "Cm7", "E♭maj7"], dom:[ "D7", "F♯°7"], isMolli: true  };


    localStorage.setItem('cmajorkey3', JSON.stringify(cmajor3));
    localStorage.setItem('cmajorkey4', JSON.stringify(cmajor4));
    localStorage.setItem('aminorkey3', JSON.stringify(aminor3));
    localStorage.setItem('aminorkey4', JSON.stringify(aminor4));
    localStorage.setItem('gmajorkey3', JSON.stringify(gmajor3));
    localStorage.setItem('gmajorkey4', JSON.stringify(gmajor4));
    localStorage.setItem('eminorkey3', JSON.stringify(eminor3));
    localStorage.setItem('eminorkey4', JSON.stringify(eminor4));
    localStorage.setItem('dmajorkey3', JSON.stringify(dmajor3));
    localStorage.setItem('dmajorkey4', JSON.stringify(dmajor4));
    localStorage.setItem('bminorkey3', JSON.stringify(bminor3));
    localStorage.setItem('bminorkey4', JSON.stringify(bminor4));
    localStorage.setItem('fmajorkey3', JSON.stringify(fmajor3));
    localStorage.setItem('fmajorkey4', JSON.stringify(fmajor4));
    localStorage.setItem('dminorkey3', JSON.stringify(dminor3));
    localStorage.setItem('dminorkey4', JSON.stringify(dminor4));
    localStorage.setItem('bbmajorkey3', JSON.stringify(bbmajor3));
    localStorage.setItem('bbmajorkey4', JSON.stringify(bbmajor4));
    localStorage.setItem('gminorkey3', JSON.stringify(gminor3));
    localStorage.setItem('gminorkey4', JSON.stringify(gminor4));
    localStorage.setItem("key", "keyId");
    // Retrieve
    console.log("we  good");
} else {
    console.log("Sorry, your browser does not support Web Storage...;");
}






/*function key(id, chords) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
                // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }


}*/

var keyArray = []
const keyId = null;
const keyChordsArray = [null];