//import Vex from "vexflow";
//const VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
/*const vf = new Vex.Flow.Factory({renderer: {elementId: 'stave', height: 200}});
const score = vf.EasyScore();
const system = vf.System();

system.addStave({
    voices: [score.voice(score.notes('C#5/q, B5, A4, G#4'))]
}).addClef('treble').addTimeSignature('4/4').addKeySignature("G");


vf.draw();*/

const VF = Vex.Flow;


// Create an SVG renderer and attach it to the DIV element named "boo".
var div = document.getElementById("stave")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Size our SVG:
renderer.resize(1500, 109);

// And get a drawing context:
var context = renderer.getContext();

var staveMeasure1 = new Vex.Flow.Stave(10, -5, 300);
staveMeasure1.addClef("treble").addTimeSignature("4/4").setContext(context).draw();



var notesMeasure1 = [
    new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),
    new Vex.Flow.StaveNote({ keys: ["a#/3"], duration: "q" }).
    addAccidental(0, new VF.Accidental("#")),
    new Vex.Flow.StaveNote({ keys: ["c#/6"], duration: "q", stem_direction: -1}).
    addAccidental(0, new VF.Accidental("#"))

];

// Helper function to justify and draw a 4/4 voice
Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure1, notesMeasure1);

// measure 2 - juxtaposing second measure next to first measure
var staveMeasure2 = new Vex.Flow.Stave(
    staveMeasure1.width + staveMeasure1.x, -5,
    300
);
staveMeasure2.setContext(context).draw();

var notesMeasure2 = [
    //new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "wr" }),

];
//dfgdfgdfg

/*var letter = "c";
var octave = 4;
var clef = "treble";
var accidental;

var note = new VF.StaveNote({clef: clef, keys: [letter+"/"+octave], duration: "w"}); // align_center: true
console.log(letter+octave);
var notes = [note];
notesMeasure2 = notes;
//var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
//voice.addTickables(notes);*/

//sdfgdfgdfg

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
    new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "wr" }),

];

Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure4, notesMeasure4);


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
    new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),
    new Vex.Flow.StaveNote({ keys: ["a#/3"], duration: "q" }).
    addAccidental(0, new VF.Accidental("#")),
    new Vex.Flow.StaveNote({ keys: ["c#/6"], duration: "q", auto_stem: true}).
    addAccidental(0, new VF.Accidental("#"))

];

// Helper function to justify and draw a 4/4 voice
Vex.Flow.Formatter.FormatAndDraw(context2, staveMeasure5, notesMeasure5);

// measure 2 - juxtaposing second measure next to first measure
var staveMeasure6 = new Vex.Flow.Stave(
    staveMeasure5.width + staveMeasure5.x, -5,
    300
);
staveMeasure2.setContext(context2).draw();

var notesMeasure6 = [
    new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "wr" }),

];

Vex.Flow.Formatter.FormatAndDraw(context2, staveMeasure6, notesMeasure6);

// measure 3 - juxtaposing second measure next to second measure
var staveMeasure7 = new Vex.Flow.Stave(
    staveMeasure6.width + staveMeasure6.x,
    -5,
    300
);
staveMeasure7.setContext(context2).draw();

var notesMeasure7 = [
    new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "wr" }),

];

Vex.Flow.Formatter.FormatAndDraw(context2, staveMeasure7, notesMeasure7);

var staveMeasure8 = new Vex.Flow.Stave(
    staveMeasure7.width + staveMeasure7.x,
    -5,
    300
);
staveMeasure8.setContext(context2).draw();

var notesMeasure8 = [
    new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "wr" }),


];

Vex.Flow.Formatter.FormatAndDraw(context2, staveMeasure8, notesMeasure8);



/*function writeNote(pitch, rhythm){
    //document.getElementById('stave');
// add additional if statements to include more rhythmic options
    if (rhythm === '/8') {
        notesMeasure2.set({time: "1/8"})
    } else if (rhythm === '/q') {
        notesMeasure2.set({time: "1/4"});
    } else if (rhythm === '/h') {
        notesMeasure2.set({time: "1/2"});
    }
    notesMeasure2 +=
        //voices: [score.voice(score.notes(pitch + rhythm))]
        new Vex.Flow.StaveNote({ keys: pitch, duration: rhythm })

    //vf.draw();
    notesMeasure2 += voices: [score.voice(score.notes(pitch + rhythm))]
        //new Vex.Flow.StaveNote({ keys: pitch, duration: rhythm })
    //var xyz = document.getElementById("writeNoteButton")
    //xyz.addEventListener(onclick(writeNote("c/4","/h")))
}
var xyz = document.getElementById("writeNoteButton");
xyz.addEventListener("click", function() {
    (writeNote("c/4","/h"));
});*/
var x = 1;

var selectedMeasure = "";
var measure;
var staveMeasure;


function incrementMeasure() {
    console.log("x oli " +x)
    x++;
    console.log("ja nyt x on "+ x)
    //selectedMeasure = "notesMeasure" +x;
}

function decrementMeasure() {
    console.log("x oli " +x)
    x--;
    console.log("ja nyt x on "+ x)
    //selectedMeasure = "notesMeasure" +x;
}

function selectMeasure() {

    selectedMeasure = "notesMeasure" +x;
    console.log(selectedMeasure)
}





function drawStaffWithPitch(pitch, octave, duration) {

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

    /*var letter = "c";
    var octave = 4;
    var clef = "treble";*/
    var accidental;
    console.log(selectedMeasure);


    measure.push(new Vex.Flow.StaveNote({keys: [pitch+"/"+octave], duration: duration},)); // align_center: true
    //console.log(letter+octave);
    //notes = note;
    //console.log(note);
    //notesMeasure2 = note;
    console.log(notesMeasure2);
    Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure, measure);
}

// function drawStaffWithPitch2() {
//     var letter = "c";
//     var octave = 4;
//     var clef = "treble";
//     var duration = "q"
//     var accidental;
//
//     var note = new VF.StaveNote({keys: [letter+"/"+octave], duration: duration}); // align_center: true
//     //console.log(letter+octave);
//     notes = note;
//     notesMeasure2 = notes;
//     console.log(notesMeasure2);
//     //Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure2, notesMeasure2);
// }

function kusi() {
    Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure3, notesMeasure3);
}


