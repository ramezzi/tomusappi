VF = Vex.Flow;

var names = ["a/4B","-","b/4B","c/4#","e/4B","-","d/4B","d/4#","a/4B","-","b/4B","c/4#","e/4B","-","d/4B","d/4#"];

var beatNum = 4;

div = document.getElementById("myStave");
div.innerHTML = "";
renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
renderer.resize(900, 200);
context = renderer.getContext();
stave = new VF.Stave(10, 40, 850);
stave.addClef("treble").addTimeSignature("4/4");
stave.setContext(context).draw();

var myNames = [];

for (let i=0; i<names.length; i++) {
    console.log("loop1");

    if (names[i] === "-") {

        myNames.push(new VF.StaveNote({keys: ["B/4"], duration: "qr" }));

    } else if (names[i].indexOf("#") >= 0) {

        myNames.push(new VF.StaveNote({keys: [names[i].substring(0,3)], duration: "q" }).addAccidental(0, new VF.Accidental("#")));

    } else if (names[i].indexOf("B") >= 0) {

        myNames.push(new VF.StaveNote({keys: [names[i].substring(0,3)], duration: "q" }).addAccidental(0, new VF.Accidental("b")));

    } else {
        myNames.push(new VF.StaveNote({keys: [names[i]], duration: "q" }));
    }

    if ( (i+1) % beatNum === 0) {
        myNames.push( new VF.BarNote());
    }


}

var names2 = ["a/4B","-","b/4B","c/4#","e/4B","-","d/4B","d/4#","a/4B","-","b/4B","c/4#","e/4B","-","d/4B","d/4#"];

var beatNum2 = 4;

div2 = document.getElementById("myStave2");
div2.innerHTML = "";
renderer2 = new VF.Renderer(div2, VF.Renderer.Backends.SVG);
renderer2.resize(900, 200);
context2 = renderer2.getContext();
stave2 = new VF.Stave(10, 40, 850);
stave2.addClef("treble");
stave2.setContext(context2).draw();

var myNames2 = [];

for (let x=0; x<names2.length; x++) {
    console.log("loop2");

    if (names2[x] === "-") {

        myNames2.push(new VF.StaveNote({keys: ["B/4"], duration: "qr" }));

    } else if (names2[x].indexOf("#") >= 0) {

        myNames2.push(new VF.StaveNote({keys: [names2[x].substring(0,3)], duration: "q" }).addAccidental(0, new VF.Accidental("#")));

    } else if (names2[x].indexOf("B") >= 0) {

        myNames2.push(new VF.StaveNote({keys: [names2[x].substring(0,3)], duration: "q" }).addAccidental(0, new VF.Accidental("b")));

    } else {
        myNames2.push(new VF.StaveNote({keys: [names2[x]], duration: "q" }));
    }

    if ( (x+1) % beatNum2 === 0) {
        myNames2.push( new VF.BarNote());
    }


}

/*var voice = new VF.Voice({
  num_beats: names.length,
  beat_value: 4
  });
  voice.addTickables(myNames);
  new VF.Formatter().joinVoices([voice]).formatToStave([voice], stave);
  voice.draw(context, stave);*/

VF.Formatter.FormatAndDraw(context, stave, myNames);
VF.Formatter.FormatAndDraw(context2, stave2, myNames2);