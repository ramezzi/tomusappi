// URLs of Magenta checkpoint models
// let magentaCheckpoints = [
//     'https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn',
//     'https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/melody_rnn'
// ];
// let melodyRnn;
// let melodyRnnLoaded;

// Initialize magenta model
//initializeMagentaCheckPoint(magentaCheckpoints[0]);

// Variable to keep track of input notes
let renderNotes = [];

// Variable of temperatures
// let temperatures = [0.8, 0.9]

// Check current duration of the motiv
let totalCurrentDuration = 0;

// Vexflow variables
const VF = Vex.Flow;

// Add the notes entered by the user
let notes = [];
var paskakusihomo = ["a/4B", "b/4B",];
let currentMeasureLeft = 16;
var beats16 = 16;
let savellajiToRender = "cmajorkey3";
let kerrosInQuestion = 0;
let restsDuration = 64;

document.addEventListener('DOMContentLoaded', () => {

    // Start a new staff

    eraseStaff();

    // Template of melodies
    //var melodyTemplate = Handlebars.compile(document.querySelector('#melody-template').innerHTML);

    //let selectedModel = document.getElementById('magenta-model');

    // Change the model if required by user
    // selectedModel.addEventListener('change', () => {
    //     let idx = parseInt(selectedModel.value);
    //     let magentaModel = magentaCheckpoints[idx];
    //     initializeMagentaCheckPoint(magentaModel);
    // });

    // Start Tone
    // document.getElementById('input-play').onclick = async () => {
    //
    //     await Tone.start();
    //
    //     // Create a player and play the motif
    //     const player = new TonePlayer();
    //     const bpm = parseInt(document.getElementById('bpm').value);
    //
    //     player.play(notes, bpm);
    //
    // };

    // Button to erase notes
    document.getElementById('eraseNoteButton').addEventListener('click', eraseStaff);

    // Disable durations based on selected by user
    /*document.getElementById('input-duration').addEventListener('change', function(obj) {
        let inputPitch = document.getElementById('input-pitch');
        let inputAccidental = document.getElementById('input-accidental');
        let inputOctave = document.getElementById('input-octave');
        //let inputDot = document.getElementById('input-dot');

        inputPitch.disabled = (this.value.includes('r'));
        inputAccidental.disabled = (this.value.includes('r'));
        inputOctave.disabled = (this.value.includes('r'));
        //inputDot.disabled = (this.value.includes('16') || this.value.includes('1'));
    })*/
    function kusifunk(duration, pitch, octave) {
        console.log("kusisususksksus");
        // Prevent the form to be sent
        //e.preventDefault();
        savellajiToRender = selectedSavellaji;

        var juuh = setKeyToRender(savellajiToRender);
        console.log(juuh);
        //setKeyToRender(savellajiToRender);

        // Erase any alert comments
        document.getElementById('inputInfo').innerHTML = '';

        // Retrieve information sent by the user
        let inputDuration = duration;
        let inputPitch = pitch;
        let inputAccidental = "";
        let inputOctave = octave;
        let restsArray = [];
        let renderAll = [];


        // let inputNote = inputPitch + inputOctave;
        let inputNote = inputPitch+"/"+inputOctave+inputAccidental;
        let durationForVex;
        console.log(inputDuration);


       if (inputDuration === "1") {
           durationForVex = "w";
           //currentMeasureLeft -= 16;
       } else if (inputDuration === "2") {
           durationForVex = "h";
           //currentMeasureLeft -= 8;
       } else {
           durationForVex = "q";
           //currentMeasureLeft -= 4;
       }

       if (currentMeasureLeft === 0) {
           currentMeasureLeft = 16;
           console.log("tahti täytetty!");
       }


        // Check if new note would exceed allowed duration
        let currentNoteDuration = inputDuration.replace('r', '');
        let currentNoteDurationInSixteenth = (16 / parseInt(currentNoteDuration));

        console.log("currentNoteDurationInSixteenth: "+currentNoteDurationInSixteenth);


        // if (isDotted) {
        //     currentNoteDurationInSixteenth += currentNoteDurationInSixteenth / 2;
        // }

        // if (totalCurrentDuration + currentNoteDurationInSixteenth > 64) {
        //     document.getElementsByClassName('inputInfo').innerHTML = "The 1st stave is full, moving to 2nd";
        //     kerrosInQuestion = 1;
        //     restsDuration = 64;
        // }
        if (totalCurrentDuration + currentNoteDurationInSixteenth > 64) {
            document.getElementsByClassName('inputInfo').innerHTML = "The stave is full!";
            alert("Tämä sointu ei mahdu enää viivastolle!");
            return false;
        }
        if (currentMeasureLeft < currentNoteDurationInSixteenth) {
            document.getElementsByClassName('inputInfo').innerHTML = "The bar/measure is full!";
            alert("Tämä sointu ei mahdu enää tähän tahtiin!");
            return false;
        }

        if (inputDuration === "1") {
            // durationForVex = "w";
            currentMeasureLeft -= 16;
        } else if (inputDuration === "2") {
            // durationForVex = "h";
            currentMeasureLeft -= 8;
        } else {
            // durationForVex = "q";
            currentMeasureLeft -= 4;
        }

        // Add note to the array
        notes = [...notes, {'duration': inputDuration, 'note': inputNote}]

        // Calculate how many rests should be added to complete the bar
        let restsString = restsToComplete(notes);
        console.log("restsString: "+restsString);

        // Reset total current duration
        totalCurrentDuration = 0;

        console.log(notes);

        let [notesString, currentDuration, noteString] = parseNotesToVex(notes, totalCurrentDuration);

        totalCurrentDuration = currentDuration;
        console.log("notesString: "+notesString);


        renderNotes.push(noteString+durationForVex);

        console.log("noteString: "+noteString);
        console.log("renderNotes: "+renderNotes);
        //renderNotes = notesString + restsString;

        for (let i=0; i<restsString.length; i++) {
            restsArray.push("-");
        }
        //let totalLength = restsArray.length+renderNotes.length;
        for (let i=0; i<renderNotes.length; i++) {
            renderAll.push(renderNotes[i]);
        }
        for (let i=0; i<restsArray.length; i++) {
            renderAll.push(restsArray[i]);
        }

        console.log("restsArray: "+restsArray);
        console.log("renderAll: "+renderAll);

        //var paskakusihomo = ["a/4B", "b/4B",];  //"a/4B","-","b/4B","c/4#","e/4B","-","d/4B","d/4#","a/4B","-","b/4B","c/4#","e/4B","-","d/4B","d/4#"
        paskakusihomo.push(notesString);

        //console.log(paskakusihomo);
        //console.log(notes);
        // Add notes to staff
        //drawStaff(renderNotes);
        //getAllMeasures("C", 4, "h", "1");

        vexifunk(renderAll, juuh, kerrosInQuestion);

        // If motiv equals the allowed duration, disable more input
        if (totalCurrentDuration === 32) {
            //document.getElementById('input-submit').disabled = true;
            //document.getElementById('input-info').innerHTML = "You can't add more notes to your motif";
        }


    }

    //kokonuotin kutsuminen
    document.getElementById('writeWNoteButton').onclick = () => {
        kusifunk("1", "b", 4);
    };
    //"w", "C", 4   "1", "c", 4

    //puolinuotin klsdfkfk
    document.getElementById('writeHNoteButton').onclick = () => {
        kusifunk("2", "b", 4);
    };
    //neljäsosanuotin kutsuminen
    document.getElementById('writeQNoteButton').onclick = () => {
        kusifunk("4", "b", 4);
    };
    //viimeisimmän nuotin siirto ylöspäin
    document.getElementById('toUpButton').onclick = () => {
        //kusifunk("4", "c", 4);
        modifyLastNote(1);
    };
    //viimeisimmän nuotin siirto ylöspäin
    document.getElementById('toDownButton').onclick = () => {
        //kusifunk("4", "c", 4);
        modifyLastNote(2);
    };


function modifyLastNote(suunta) {
    let latestnote = renderNotes.pop();
    let sdgsdgsdg = notes.pop();
    let latestnoteDuration = latestnote.substring(4,5);
    let latestnotePitch = latestnote.substring(0,3);


    console.log("latestnote: "+latestnote);
    console.log("latestnoteDuration: "+latestnoteDuration);
    console.log("latestnotePitch: "+latestnotePitch);

    if (latestnoteDuration === "1") {
        currentMeasureLeft = 16;
        //beats16 = 16;
        totalCurrentDuration -= 16;
    } else if (latestnoteDuration === "2") {
        currentMeasureLeft += 8;
        //beats16 += 8;
        totalCurrentDuration -= 8;
    } else if (latestnoteDuration === "4") {
        currentMeasureLeft += 4;
        //beats16 += 4;
        totalCurrentDuration -= 4;
    } else {
        console.log("weirdos")
    }

    let korko;
    let taavi;

    if (suunta === 1) {
        // let korko;
        // let taavi;

        switch (latestnotePitch) {
            case "a/3":
                korko = "b";
                taavi = 3;
                break;
            case "b/3":
                korko = "c";
                taavi = 4;
                break;
            case "c/4":
                korko = "d";
                taavi = 4;
                break;
            case "d/4":
                korko = "e";
                taavi = 4;
                break;
            case "e/4":
                korko = "f";
                taavi = 4;
                break;
            case "f/4":
                korko = "g";
                taavi = 4;
                break;
            case "g/4":
                korko = "a";
                taavi = 4;
                break;
            case "a/4":
                korko = "b";
                taavi = 4;
                break;
            case "b/4":
                korko = "c";
                taavi = 5;
                break;
            case "c/5":
                korko = "d";
                taavi = 5;
                break;
            case "d/5":
                korko = "e";
                taavi = 5;
                break;
            case "e/5":
                korko = "f";
                taavi = 5;
                break;
            case "f/5":
                korko = "g";
                taavi = 5;
                break;
            case "g/5":
                korko = "a";
                taavi = 5;
                break;
            case "a/5":
                korko = "b";
                taavi = 5;
                break;
            case "b/5":
                korko = "c";
                taavi = 6;
                break;
            case "c/6":
                korko = "c";
                taavi = 6;
                break;

        }
    } else if (suunta === 2) {
        // let korko;
        // let taavi;
        switch (latestnotePitch) {
            case "a/3":
                korko = "a";
                taavi = 3;
                break;
            case "b/3":
                korko = "a";
                taavi = 3;
                break;
            case "c/4":
                korko = "b";
                taavi = 3;
                break;
            case "d/4":
                korko = "c";
                taavi = 4;
                break;
            case "e/4":
                korko = "d";
                taavi = 4;
                break;
            case "f/4":
                korko = "e";
                taavi = 4;
                break;
            case "g/4":
                korko = "f";
                taavi = 4;
                break;
            case "a/4":
                korko = "g";
                taavi = 4;
                break;
            case "b/4":
                korko = "a";
                taavi = 4;
                break;
            case "c/5":
                korko = "b";
                taavi = 4;
                break;
            case "d/5":
                korko = "c";
                taavi = 5;
                break;
            case "e/5":
                korko = "d";
                taavi = 5;
                break;
            case "f/5":
                korko = "e";
                taavi = 5;
                break;
            case "g/5":
                korko = "f";
                taavi = 5;
                break;
            case "a/5":
                korko = "g";
                taavi = 5;
                break;
            case "b/5":
                korko = "a";
                taavi = 5;
                break;
            case "c/6":
                korko = "b";
                taavi = 5;
                break;

        }
    } else {
        console.log("weirdous");
    }


            //let restsString = restsToComplete(notes);

    kusifunk(latestnoteDuration,korko,taavi);
    //return latestnote;
}



    // Undo button - remove last note added
    document.getElementById('noteUndoButton').onclick = () => {

        // Remove last note from array
        let lastNote = renderNotes.pop();
        let sdgsdgsdgg = notes.pop();
        let lastnoteDuration = lastNote.substring(4,5);
        let lastnotePitch = lastNote.substring(0,3);

        let renderOldStave = [];

        console.log(lastNote);

        if (lastnoteDuration === "1") {
            currentMeasureLeft = 16;
            //beats16 = 16;
            totalCurrentDuration -= 16;
        } else if (lastnoteDuration === "2") {
            currentMeasureLeft += 8;
            //beats16 += 8;
            totalCurrentDuration -= 8;
        } else if (lastnoteDuration === "4") {
            currentMeasureLeft += 4;
            //beats16 += 4;
            totalCurrentDuration -= 4;
        } else {
            console.log("weirdos")
        }


        // Calculate how many rests should be added to complete the bar
        restsString = restsToComplete(notes);

        // Reset total current duration
        totalCurrentDuration = 0;

        let [notesString, currentDuration, noteString] = parseNotesToVex(notes, totalCurrentDuration);

        totalCurrentDuration = currentDuration;

        var juuh2 = setKeyToRender(savellajiToRender);

        //renderNotes.push(noteString);

        // Add notes to staff
        //drawStaff(renderNotes);

        // If motiv equals the allowed duration, disable more input
        // if (totalCurrentDuration < 32) {
        //     document.getElementById('input-submit').disabled = false;
        //     document.getElementById('input-info').innerHTML = '';
        // }

        // renderNotes.push(noteString+durationForVex);
        //
        // console.log("noteString: "+noteString);
        // console.log("renderNotes: "+renderNotes);
        // //renderNotes = notesString + restsString;

        var restsArray2 = [];
         for (let i=0; i<restsString.length; i++) {
             restsArray2.push("-");
         }
        // //let totalLength = restsArray.length+renderNotes.length;
         for (let i=0; i<renderNotes.length; i++) {
             renderOldStave.push(renderNotes[i]);
         }
         for (let i=0; i<restsArray2.length; i++) {
             renderOldStave.push(restsArray2[i]);
         }
        //
        // console.log("restsArray: "+restsArray);
        // console.log("renderAll: "+renderAll);
        //
        // //var paskakusihomo = ["a/4B", "b/4B",];  //"a/4B","-","b/4B","c/4#","e/4B","-","d/4B","d/4#","a/4B","-","b/4B","c/4#","e/4B","-","d/4B","d/4#"
        // paskakusihomo.push(notesString);
        //
        // //console.log(paskakusihomo);
        // //console.log(notes);
        // // Add notes to staff
        // //drawStaff(renderNotes);
        // //getAllMeasures("C", 4, "h", "1");
        //
        vexifunk(renderOldStave, juuh2);



    };


});
let savellaji;
function setKeyToRender(keySi) {
    switch (keySi) {
        case "cmajorkey3":
            savellaji = "C";
            break;
        case "aminorkey3":
            savellaji = "Am";
            break;
        case "cmajorkey4":
            savellaji = "C";
            break;
        case "aminorkey4":
            savellaji = "Am";
            break;
        case "gmajorkey3":
            savellaji = "G";
            break;
        case "gmajorkey4":
            savellaji = "G";
            break;
        case "eminorkey3":
            savellaji = "Em";
            break;
        case "eminorkey4":
            savellaji = "Em";
            break;
        case "dmajorkey3":
            savellaji = "D";
            break;
        case "dmajorkey4":
            savellaji = "D";
            break;
        case "bminorkey3":
            savellaji = "Bm";
            break;
        case "bminorkey4":
            savellaji = "Bm";
            break;
        case "fmajorkey3":
            savellaji = "F";
            break;
        case "fmajorkey4":
            savellaji = "F";
            break;
        case "dminorkey3":
            savellaji = "Dm";
            break;
        case "dminorkey4":
            savellaji = "Dm";
            break;
        case "bbmajorkey3":
            savellaji = "Bb";
            break;
        case "bbmajorkey4":
            savellaji = "Bb";
            break;
        case "gminorkey3":
            savellaji = "Gm";
            break;
        case "gminorkey4":
            savellaji = "Gm";
            break;

    }

    return savellaji;
}


function restsToComplete(notes) {

    // Intialize rests to the total 16 notes
    restsDuration = 64;

    // Initialize the duration of notes to zero
    let notesDuration = 0;

    for (note of notes) {

        // Remove r if is a rest
        noteDuration = note.duration.replace('r', '');

        // Calculate the duration of the notes in 16th
        let noteDurationInSixteenth = (16 / parseInt(noteDuration));

        // If dotted increase value respectively
        // if (note.dot) {
        //     noteDurationInSixteenth += noteDurationInSixteenth / 2;
        // }

        // Update total duration of the notes
        notesDuration += noteDurationInSixteenth;
        console.log("noteDuration: "+noteDuration);
        console.log("note.duration: "+note.duration);
        console.log("noteDurationIn16th: "+noteDurationInSixteenth);
    }

    // Calculate what is left to use in rests
    restsDuration -= notesDuration;
    console.log("notesDuration: "+notesDuration);
    console.log("restsDuration: "+restsDuration);

    let quarterRests = Math.floor(restsDuration / 4);
    let sixteenthRests = restsDuration % 4;
    console.log("quarterRests: "+quarterRests);

    // Stringify the values of the rests
    let quarterRestsString = '-'.repeat(quarterRests);
    let sixteenthRestsString = 'B4/16/r,'.repeat(sixteenthRests);

    return  quarterRestsString;
}

function eraseStaff() {

    // Clear notes array and set current duration to zero
    notes = [];
    totalCurrentDuration = 0;
    renderNotes = [];
    currentMeasureLeft = 16;
    beats16 = 16;

    var juuh3 = setKeyToRender(savellajiToRender);

    // Remove staff to paint it again
    const staff = document.getElementById('stave');
    const staff2 = document.getElementById('stave2');

    while (staff.hasChildNodes()) {
        staff.removeChild(staff.lastChild);
    }
    while (staff2.hasChildNodes()) {
        staff2.removeChild(staff2.lastChild);
    }

    // Create an SVG renderer and attach it to the DIV element named 'staff-input'.
    // var vf = new VF.Factory({renderer: {elementId: 'staff-input', height: 1000}});
    // var score = vf.EasyScore();
    // var system = vf.System();

    //renderNotes.push("-","-","-","-","-","-","-","-",);
    var startingRests = [];
    startingRests.push("-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-",);
    console.log(startingRests);
    vexifunk(startingRests); //, juuh3, 0

    //getAllMeasures()
    // system.addStave({
    //     voices: [score.voice(score.notes(renderNotes))]
    // }).addClef('treble').addTimeSignature('4/4');
    //
    //
    // vf.draw();

    // Enable again the input of notes and clean the info message
    // if (document.getElementById('input-submit').disabled) {
    //     document.getElementById('input-submit').disabled = false;
    // }

    //document.getElementById('input-info').innerHTML = '';

}


function drawStaff(renderNotes) {
    console.log(renderNotes);


    // Remove staff to paint it again
    const staff = document.getElementById('stave');
    const staff2 = document.getElementById('stave2');

    while (staff.hasChildNodes()) {
        staff.removeChild(staff.lastChild);
    }
    while (staff2.hasChildNodes()) {
        staff2.removeChild(staff2.lastChild);
    }

    // Paint new notes
    // var vf = new VF.Factory({renderer: {elementId: 'staff-input', height: 1000}});
    // var score = vf.EasyScore();
    // var system = vf.System();

    // system.addStave({
    //     voices: [score.voice(score.notes(renderNotes))]
    // }).addClef('treble').addTimeSignature('4/4');


    //getAllMeasures();

    //notesMeasure2.push(new Vex.Flow.StaveNote({keys: ["C/4"], duration: "h"},));

}


function parseNotesToVex(notes, totalCurrentDuration) {

    // Create string for the notes voice
    let notesString = '';
    let noteString = '';

    // Create each value of the array as a string
    for (note of notes) {

        // Initialize empty string for each note

        let noteDuration;

        // Check if is silence
        if (note.duration.includes('r')) {

            // Remove r if is a rest
            noteDuration = note.duration.replace('r', '');

            // Check if silence is dotted
            if (note.dot) {

                // Remove dot and write it in right position
                noteString = noteDuration.replace('.', '');
                noteString = 'B4/' + noteString +'/r.,'

            } else {

                // Create string of the silence
                noteString = 'B4/' + noteDuration + '/r,';
            }
        } else {

            // If not silence
            noteString = note.note + '/' + note.duration + ',';
            noteDuration = note.duration;
        }

        // Update the notes voice
        notesString += noteString;

        // Calculate the duration of the notes in 16th
        let noteDurationInSixteenth = (16 / parseInt(noteDuration));

        // If dotted increase value respectively
        // if (note.dot) {
        //     noteDurationInSixteenth += noteDurationInSixteenth / 2;
        // }

        // Update total duration of motive
        totalCurrentDuration += noteDurationInSixteenth;
    }

    return [notesString, totalCurrentDuration, noteString];
}

//var x = 1;



//nyt tapahtuu vex1!!


function vexifunk(notesArray, selectedKey, kerros) {
    //VF = Vex.Flow;
    var names;
    var names2;
    var startingRests = [];
    startingRests.push("-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-",);
    names2 = startingRests;
    //names = startingRests;
    if (kerros === 0) {
        names = notesArray;
    } else if (kerros === 1) {
        names2 = notesArray;
    } else {
        names = notesArray;
        console.log("weirdouous");
    }
     //["a/4B","-","b/4B","c/4#","e/4B","-","d/4B","d/4#","a/4B","-","b/4B","c/4#","e/4B","-","d/4B","d/4#"];

    var beatNum = 4;
    //beats16 = 16;
    var beatsvar;

    if (selectedKey === undefined) {
        selectedKey = "C";
    }

    div = document.getElementById("stave");
    div.innerHTML = "";
    renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    renderer.resize(1150, 200);
    context = renderer.getContext();
    stave = new VF.Stave(10, 40, 1200);
    stave.addClef("treble").addTimeSignature("4/4").addKeySignature(selectedKey);
    stave.setContext(context).draw();

    var myNames = [];

    for (let i=0; i<names.length; i++) {
        console.log("loop1");
        //console.log(names);
        console.log(names[i]);

        beatsvar = names[i].substring(4,6);
        console.log(beatsvar);
        if (beatsvar === "1,"){
            beats16 -= 16;
        } else if (beatsvar === "2,") {
            beats16 -= 8;
        } else if (beatsvar === "4,") {
            beats16 -= 4;
        } else {
            console.log("moi");
            beats16 -= 4;
        }

        if (names[i] === "-") {

            myNames.push(new VF.StaveNote({keys: ["B/4"], duration: "qr" }));

        } else if (names[i].indexOf("#") >= 0) {

            myNames.push(new VF.StaveNote({keys: [names[i].substring(0,3)], duration: "q" }).addAccidental(0, new VF.Accidental("#")));

        } else if (names[i].indexOf("B") >= 0) {

            myNames.push(new VF.StaveNote({keys: [names[i].substring(0,3)], duration: "q" }).addAccidental(0, new VF.Accidental("b")));

        } else {
            //myNames.push(new VF.StaveNote({keys: [names[i]], duration: "q" }));
            myNames.push(new VF.StaveNote({keys: [names[i].substring(0,3)], duration: names[i].substring(6,8) }));
        }


        console.log("beats16: "+beats16);

        if (beats16 === 0) { // (i+1) % beatNum === 0
            myNames.push( new VF.BarNote());
            console.log("beats16: "+beats16+" & barline drawn...");
            beats16 = 16;
            console.log("beats16 updated to: "+beats16);
        } else if (beats16 < 0) {
            console.log("beats16 negatiivinen!");
        }


        //console.log(myNames);
    }

    //var names2 =  //["a/4B","-","b/4B","c/4#","e/4B","-","d/4B","d/4#","a/4B","-","b/4B","c/4#","e/4B","-","d/4B","d/4#"];

    var beatNum2 = 4;

    div2 = document.getElementById("stave2");
    div2.innerHTML = "";
    renderer2 = new VF.Renderer(div2, VF.Renderer.Backends.SVG);
    renderer2.resize(1150, 200);
    context2 = renderer2.getContext();
    stave2 = new VF.Stave(10, 40, 1200);
    stave2.addClef("treble").addKeySignature(selectedKey);
    //stave2.setContext(context2).draw();

    var myNames2 = [];

    for (let x=0; x<names2.length; x++) {
        console.log("loop2");

        // beatsvar = names2[x].substring(4,6);
        // console.log(beatsvar);
        // if (beatsvar === "1,"){
        //     beats16 -= 16;
        // } else if (beatsvar === "2,") {
        //     beats16 -= 8;
        // } else if (beatsvar === "4,") {
        //     beats16 -= 4;
        // } else {
        //     console.log("moi");
        //     beats16 -= 4;
        // }

        if (names2[x] === "-") {

            myNames2.push(new VF.StaveNote({keys: ["B/4"], duration: "qr" }));

        } else if (names2[x].indexOf("#") >= 0) {

            myNames2.push(new VF.StaveNote({keys: [names2[x].substring(0,3)], duration: "q" }).addAccidental(0, new VF.Accidental("#")));

        } else if (names2[x].indexOf("B") >= 0) {

            myNames2.push(new VF.StaveNote({keys: [names2[x].substring(0,3)], duration: "q" }).addAccidental(0, new VF.Accidental("b")));

        } else {
            myNames2.push(new VF.StaveNote({keys: [names2[x]], duration: [names2[x].substring(6,8)] }));
        }

        console.log("beats16: "+beats16);

        // if (beats16 === 0) { // (i+1) % beatNum === 0
        //     myNames.push( new VF.BarNote());
        //     console.log("beats16: "+beats16+" & barline drawn...");
        //     beats16 = 16;
        //     console.log("beats16 updated to: "+beats16);
        // } else if (beats16 < 0) {
        //     console.log("beats16 negatiivinen!");
        // }


    }

    /*var voice = new VF.Voice({
      num_beats: names.length,
      beat_value: 4
      });
      voice.addTickables(myNames);
      new VF.Formatter().joinVoices([voice]).formatToStave([voice], stave);
      voice.draw(context, stave);*/

    VF.Formatter.FormatAndDraw(context, stave, myNames);
    //VF.Formatter.FormatAndDraw(context2, stave2, myNames2);
}





/*function getAllMeasures(pitch, octave, duration, currentMeasure) {
    x = currentMeasure;


    var div = document.getElementById("stave");
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Size our SVG:
    renderer.resize(1500, 109);

// And get a drawing context:
    var context = renderer.getContext();

    var staveMeasure1 = new Vex.Flow.Stave(10, -5, 300);
    staveMeasure1.addClef("treble").addTimeSignature("4/4").setContext(context).draw();



    var notesMeasure1 = [
        // new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),
        // new Vex.Flow.StaveNote({ keys: ["a#/3"], duration: "q" }).
        // addAccidental(0, new VF.Accidental("#")),
        // new Vex.Flow.StaveNote({ keys: ["c#/6"], duration: "q", stem_direction: -1}).
        // addAccidental(0, new VF.Accidental("#"))

    ];

// Helper function to justify and draw a 4/4 voice
    //Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure1, notesMeasure1);

// measure 2 - juxtaposing second measure next to first measure
    var staveMeasure2 = new Vex.Flow.Stave(
        staveMeasure1.width + staveMeasure1.x, -5,
        300
    );
    staveMeasure2.setContext(context).draw();

    var notesMeasure2 = [
        new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "qr" }),

    ];


//Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure2, notesMeasure2);

// measure 3 - juxtaposing second measure next to second measure
    var staveMeasure3 = new Vex.Flow.Stave(
        staveMeasure2.width + staveMeasure2.x,
        -5,
        300
    );
    staveMeasure3.setContext(context).draw();

    var notesMeasure3 = [
        //new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "wr" }),

    ];

//Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure3, notesMeasure3);

    var staveMeasure4 = new Vex.Flow.Stave(
        staveMeasure3.width + staveMeasure3.x,
        -5,
        300
    );
    staveMeasure4.setContext(context).draw();

    var notesMeasure4 = [
        //new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "wr" }),

    ];

    //Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure4, notesMeasure4);


//new stave
//

    var div2 = document.getElementById("stave2")
    var renderer2 = new VF.Renderer(div2, VF.Renderer.Backends.SVG);

// Size our SVG:
    renderer2.resize(1500, 109);

// And get a drawing context:
    var context2 = renderer2.getContext();

    var staveMeasure5 = new Vex.Flow.Stave(10, -5, 300);
    staveMeasure5.addClef("treble").setContext(context2).draw();

    var notesMeasure5 = [
        // new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),
        // new Vex.Flow.StaveNote({ keys: ["a#/3"], duration: "q" }).
        // addAccidental(0, new VF.Accidental("#")),
        // new Vex.Flow.StaveNote({ keys: ["c#/6"], duration: "q", auto_stem: true}).
        // addAccidental(0, new VF.Accidental("#"))

    ];

// Helper function to justify and draw a 4/4 voice
    //Vex.Flow.Formatter.FormatAndDraw(context2, staveMeasure5, notesMeasure5);

// measure 2 - juxtaposing second measure next to first measure
    var staveMeasure6 = new Vex.Flow.Stave(
        staveMeasure5.width + staveMeasure5.x, -5,
        300
    );
    staveMeasure2.setContext(context2).draw();

    var notesMeasure6 = [
        //new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "wr" }),

    ];

    //Vex.Flow.Formatter.FormatAndDraw(context2, staveMeasure6, notesMeasure6);

// measure 3 - juxtaposing second measure next to second measure
    var staveMeasure7 = new Vex.Flow.Stave(
        staveMeasure6.width + staveMeasure6.x,
        -5,
        300
    );
    staveMeasure7.setContext(context2).draw();

    var notesMeasure7 = [
        //new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "wr" }),

    ];

    //Vex.Flow.Formatter.FormatAndDraw(context2, staveMeasure7, notesMeasure7);

    var staveMeasure8 = new Vex.Flow.Stave(
        staveMeasure7.width + staveMeasure7.x,
        -5,
        300
    );
    staveMeasure8.setContext(context2).draw();

    var notesMeasure8 = [
        //new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "wr" }),


    ];

    //Vex.Flow.Formatter.FormatAndDraw(context2, staveMeasure8, notesMeasure8);
    console.log(currentMeasure);


    switch (x) {
        case 0:
            measure = notesMeasure1;
            break;
        case 1:
            measure = notesMeasure2;
            break;
        case 2:
            measure = notesMeasure3;
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }

    switch (x) {
        case 0:
            staveMeasure = staveMeasure1;
            break;
        case 1:
            staveMeasure = staveMeasure2;
            break;
        case 2:
            staveMeasure = staveMeasure3;
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }

    console.log(measure);
    var stave_notes = notes.map(function(note) { return new VF.StaveNote(note); });
    notesMeasure1 += new VF.StaveNote({keys: [pitch+"/"+octave], duration: duration},);
    //VF.Formatter.FormatAndDraw(context, staveMeasure1, notesMeasure1);
    staveMeasure1.setContext(context).draw();

}*/



// Helper function to set the attributes of created elements
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

// function initializeMagentaCheckPoint(url) {
//     // Url of the checkpointi
//     let checkPointRnn = url;
//
//     // Initialize the model.
//     melodyRnn = new music_rnn.MusicRNN(checkPointRnn);
//     melodyRnnLoaded = melodyRnn.initialize();
//
// }


