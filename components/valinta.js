
var selectedTyylilaji;
var selectedSointuKoko;
var selectedSavellaji;
var selectedHint;
var droppienMaara = 0;
var kieltolaki = 0;

$("#jazz").on("click", function() {
    selectedTyylilaji = "Jazz";
    selectedSointuKoko = 4;
    console.log(selectedTyylilaji)
});

$("#bossanova").on("click", function() {
    selectedTyylilaji = "Bossa Nova";
    selectedSointuKoko = 4;
    console.log(selectedTyylilaji)
});

$("#poprock").on("click", function() {
    selectedTyylilaji = "Pop/Rock";
    selectedSointuKoko = 3;
    console.log(selectedTyylilaji)
});

$("#kamari").on("click", function() {
    selectedTyylilaji = "Kamarimusiikki";
    selectedSointuKoko = 3;
    console.log(selectedTyylilaji)
});

$("#3sointu").on("click", function() {
    selectedSointuKoko = 3;
    console.log(selectedSointuKoko);
});

$("#4sointu").on("click", function() {
    selectedSointuKoko = 4;
    console.log(selectedSointuKoko);
});


$("#cMajor").on("click", function() {
    selectedSavellaji = "cmajorkey" +selectedSointuKoko;
    //keySelection(selectedSavellaji)
    console.log(selectedSavellaji)
});

$("#aMinor").on("click", function() {
    selectedSavellaji = "aminorkey" +selectedSointuKoko;
    //keySelection(selectedSavellaji)
    console.log(selectedSavellaji)
});

$("#gMajor").on("click", function() {
    selectedSavellaji = "gmajorkey" +selectedSointuKoko;
    //keySelection(selectedSavellaji)
    console.log(selectedSavellaji)
});

$("#eMinor").on("click", function() {
    selectedSavellaji = "eminorkey" +selectedSointuKoko;
    //keySelection(selectedSavellaji)
    console.log(selectedSavellaji)
});

$("#dMajor").on("click", function() {
    selectedSavellaji = "dmajorkey" +selectedSointuKoko;
    //keySelection(selectedSavellaji)
    console.log(selectedSavellaji)
});

$("#bMinor").on("click", function() {
    selectedSavellaji = "bminorkey" +selectedSointuKoko;
    //keySelection(selectedSavellaji)
    console.log(selectedSavellaji)
});

$("#fMajor").on("click", function() {
    selectedSavellaji = "fmajorkey" +selectedSointuKoko;
    //keySelection(selectedSavellaji)
    console.log(selectedSavellaji)
});

$("#dMinor").on("click", function() {
    selectedSavellaji = "dminorkey" +selectedSointuKoko;
    //keySelection(selectedSavellaji)
    console.log(selectedSavellaji)
});

$("#bbMajor").on("click", function() {
    selectedSavellaji = "bbmajorkey" +selectedSointuKoko;
    //keySelection(selectedSavellaji)
    console.log(selectedSavellaji)
});

$("#gMinor").on("click", function() {
    selectedSavellaji = "gminorkey" +selectedSointuKoko;
    //keySelection(selectedSavellaji)
    console.log(selectedSavellaji)
});

/*function testiP() {
    document.getElementById("savellajiTestiP").innerHTML = selectedSavellaji;
}*/

//Default Buttons
$("#defaultNextBtn").on("click", function() {
    var jokuMuuValue = document.getElementById("jokumuu").value;
    if (selectedTyylilaji === undefined && jokuMuuValue.length === 0) {
        alert("Tyylilaji täytyy valita");
        return false;
    }else if (selectedSointuKoko === undefined) {
        alert("Sointujen laajuus täytyy valita");
        return false;
    } else if (jokuMuuValue.length > 0) {
        selectedTyylilaji = jokuMuuValue;
        console.log(selectedTyylilaji);
        showTyylilaji(selectedTyylilaji);
        $("#collapsePrimary").collapse('show');
        $("#collapseDefault").collapse('hide');
    }  else {
        console.log("sodikfsdf")
        showTyylilaji(selectedTyylilaji);
        $("#collapsePrimary").collapse('show');
        $("#collapseDefault").collapse('hide');
    }

    //showTyylilaji(selectedTyylilaji);
});

//Primary Buttons
$("#primaryNextBtn").on("click", function() {
    if (selectedSavellaji === undefined) {
        alert("Sävellaji täytyy valita")
        return false;
    } else {
        $("#collapseSuccess").collapse('show');
        $("#collapsePrimary").collapse('hide');
        hintSetter()
        hideHarm()
        keySelection(selectedSavellaji)
        kieltolaki += 1;
        magicMan()
    }
});

$("#primaryPrevBtn").on("click", function() {
    $("#collapseDefault").collapse('show');
    $("#collapsePrimary").collapse('hide');
});

//Success Buttons
$("#successNextBtn").on("click", function() {
    if (droppienMaara < 4) {
        alert("Jokaiselle tahdille on valittava jännite")
        return false;
    } else {
        $("#collapseInfo").collapse('show');
        $("#collapseSuccess").collapse('hide');
        hideChord()
    }

});

$("#successPrevBtn").on("click", function() {
    if (kieltolaki === 0) {
        $("#collapsePrimary").collapse('show');
        $("#collapseSuccess").collapse('hide');
    } else {
        alert("Pääset tästä taaksepäin vain päivittämällä sivun. (tekninen ongelma, ei ominaisuus :/)")
    }

});

//Info Buttons
$("#infoNextBtn").on("click", function() {
    if (droppienMaara < 8) {
        alert("Jokaiselle tahdille on valittava sointumerkki")
        return false;
    } else {
        $("#collapseWarning").collapse('show');
        $("#collapseInfo").collapse('hide');
        hideHarm()
    }
});

$("#infoPrevBtn").on("click", function() {
    $("#collapseSuccess").collapse('show');
    $("#collapseInfo").collapse('hide');
    hideChord();
});

//Warning Buttons
$("#warningNextBtn").on("click", function() {
    $("#collapseDanger").collapse('show');
    $("#collapseWarning").collapse('hide');

});

$("#warningPrevBtn").on("click", function() {
    $("#collapseInfo").collapse('show');
    $("#collapseWarning").collapse('hide');
    hideHarm()
});

//DangerButtons
$("#dangerPrevBtn").on("click", function() {
    $("#collapseWarning").collapse('show');
    $("#collapseDanger").collapse('hide');

});



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


function hideHarm() {
    //var x = document.getElementsByClassName("dropElement-harm");

    /*if (x.style.visibility === "hidden") {
        console.log(x.style.visibility)
        x.style.visibility = "visible";
        console.log("showing...")
    } else {
        x.style.visibility = "hidden";
        console.log("hiding...")
    }*/

    //x.classList.toggle('hideAlaContainer')

    [].forEach.call(document.querySelectorAll('.dropElement-harm'), function (el) {
        el.classList.toggle('hideHarmoniaContainer');
    });
    //x.classList.toggle('hideHarmoniaContainer')

}

function hideChord() {
    //var x = document.getElementById("dropzoneContainer2");
    //var y = document.getElementById("dropzoneContainer4");
    //var z = document.getElementsByClassName("dropElement-chord");
    /*if (x.style.visibility === "hidden") {
        console.log(x.style.visibility)
        x.style.visibility = "visible";
        console.log("showing...")
    } else {
        x.style.visibility = "hidden";
        console.log("hiding...")
    }*/

    //x.classList.toggle('hideAlaContainer')
    [].forEach.call(document.querySelectorAll('.dropElement-chord'), function (el) {
        el.classList.toggle('hideSointuContainer');
    });
}


function storageAvailable(type) {
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
}

function keySelection() {
    if (storageAvailable('localStorage')) {
        // Yippee! We can use localStorage awesomeness
        keySetter()
    }
    else {
        // Too bad, no localStorage for us
    }
}

function clearChords() {

}

function keySetter() {
    var keyData = JSON.parse(window.localStorage.getItem(selectedSavellaji));
    console.log(keyData)
    var tonik = keyData.ton;
    var subdomin = keyData.subdom;
    var domin = keyData.dom;


    // let newDiv = document.createElement('div');
    // newDiv.classList.add('chordHeader');
    // //newDiv.setAttribute("id","dragChordTon"+i.toString());
    // //console.log(tonikText);
    // let newContent = document.createTextNode(tonikText);
    // newDiv.appendChild(newContent);
    // let targetDiv = document.getElementById("tonChordContainer");
    // //document.body.insertBefore(div, targetDiv);



    //document.getElementById("targetDiv").innerHTML = newContent;
    //targetDiv.appendChild(newDiv)

    //var i;
    for (var i = 0; i < tonik.length; i++) {
        var tonikText = tonik[i];

        let newDiv = document.createElement('div');
        newDiv.classList.add('dragElement');
        newDiv.setAttribute("id","dragChordTon"+i.toString());
        console.log(tonikText);
        let newContent = document.createTextNode(tonikText);
        newDiv.appendChild(newContent);
        let targetDiv = document.getElementById("tonChordContainer");
        //document.body.insertBefore(div, targetDiv);



        //document.getElementById("targetDiv").innerHTML = newContent;
        targetDiv.appendChild(newDiv)
    }
    //document.getElementById("targetDiv").appendChild(newDiv)

    for (var x = 0; x < subdomin.length; x++) {
        var subdomText = subdomin[x];

        let newDiv = document.createElement('div');
        newDiv.classList.add('dragElement');
        newDiv.setAttribute("id","dragChordSubDom"+x.toString());
        console.log(subdomText);
        let newContent = document.createTextNode(subdomText);
        newDiv.appendChild(newContent);
        let targetDiv = document.getElementById("subdomChordContainer");
        //document.body.insertBefore(div, targetDiv);



        //document.getElementById("targetDiv").innerHTML = newContent;
        targetDiv.appendChild(newDiv)
    }

    for (var y = 0; y < domin.length; y++) {
        var domText = domin[y];

        let newDiv = document.createElement('div');
        newDiv.classList.add('dragElement');
        newDiv.setAttribute("id","dragChordDom"+y.toString());
        newDiv.setAttribute("draggable", "true")
        console.log(domText);
        let newContent = document.createTextNode(domText);
        newDiv.appendChild(newContent);
        let targetDiv = document.getElementById("domChordContainer");
        //document.body.insertBefore(div, targetDiv);



        //document.getElementById("targetDiv").innerHTML = newContent;
        targetDiv.appendChild(newDiv)
    }
    //$.getscript("toimiiks?",function(){
        //loadDraggables()
    //});
    console.log("kyllä muuten toimii");
}

function  magicMan() {
    console.log("magic happening...")
    var magic = document.createElement("script");
    //magic.setAttribute('type', 'text/javascript');
    magic.setAttribute('src', '../controllers/testi2.js');
    document.body.appendChild(magic);
    /*var magic2 = document.createElement("script");
    //magic.setAttribute('type', 'text/javascript');
    magic2.setAttribute('src', '../controllers/hintController.js');
    document.body.appendChild(magic2);*/
}

/*const e = React.createElement;

class ValintaButton1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'Valitsit jotain';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Jazzz'
        );
    }
}

class ValintaField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'Valitsit jotain 2';
        }

        return e(
            'div',
            { onClick: () => this.setState({ liked: true }) },
            'Jokumuumika'
        );
    }
}

document.querySelectorAll('.valinta1')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        ReactDOM.render(
            e(ValintaButton1, { commentID: commentID }),
            domContainer
        );
    });
document.querySelectorAll('.valinta2')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        ReactDOM.render(
            e(ValintaField, { commentID: commentID }),
            domContainer
        );
    });*/
//const domContainer = document.querySelector('#valinta');
//ReactDOM.render(e(Valinta), domContainer);


function hintSetter() {
    var keyData2 = JSON.parse(window.localStorage.getItem(selectedSavellaji));

    var hintData1 = JSON.parse(window.localStorage.getItem("hintkey1"));
    var hintData3 = JSON.parse(window.localStorage.getItem("hintkey3"));
    var hintData4 = JSON.parse(window.localStorage.getItem("hintkey4"));
    var hintData5 = JSON.parse(window.localStorage.getItem("hintkey5"));
    var hintData8 = JSON.parse(window.localStorage.getItem("hintkey8"));
    var hintData9 = JSON.parse(window.localStorage.getItem("hintkey9"));
    var hintData10 = JSON.parse(window.localStorage.getItem("hintkey10"));
    var hintData11 = JSON.parse(window.localStorage.getItem("hintkey11"));


    const hintText1 = hintData1.texti;
    const hintText3 = hintData3.texti;
    const hintText4 = hintData4.texti;
    const hintText5 = hintData5.texti;
    const hintText8 = hintData8.texti;
    const hintText9 = hintData9.texti;
    const hintText10 = hintData10.texti;
    const hintText11 = hintData11.texti;
    console.log("hint's been set");
    var isItMolli = keyData2.isMolli;


    //var i;
    /*for (var i = 0; i < tonik.length; i++) {
        var ismoText = tonik[i];

        let newDiv = document.createElement('div');
        //newDiv.classList.add('dragElement');
        newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(tonikText);
        let newContent = document.createTextNode(tonikText);
        newDiv.appendChild(newContent);
        let targetDiv = document.getElementById("tonChordContainer");
        //document.body.insertBefore(div, targetDiv);



        //document.getElementById("targetDiv").innerHTML = newContent;
        targetDiv.appendChild(newDiv)
    }*/
    //document.getElementById("targetDiv").appendChild(newDiv)






    //HINTBOX3 SEKOILU
    if (selectedSointuKoko === 3 && isItMolli === true) {
        //Mollin 3-sointu

        //Hintti 3
        let newDiv = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText3);
        let newContent = document.createTextNode(hintText3);
        newDiv.appendChild(newContent);
        let targetDiv = document.getElementById("hintBox3a");
        targetDiv.appendChild(newDiv);

        //Hintti 10
        let newDiv2 = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText10);
        let newContent2 = document.createTextNode(hintText10);
        newDiv2.appendChild(newContent2);
        let targetDiv2 = document.getElementById("hintBox3b");
        targetDiv2.appendChild(newDiv2);

    } else if (selectedSointuKoko === 4 && isItMolli === true) {
        //Mollin 4-sointu

        //Hintti 3
        let newDiv = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText3);
        let newContent = document.createTextNode(hintText3);
        newDiv.appendChild(newContent);
        let targetDiv = document.getElementById("hintBox3a");
        targetDiv.appendChild(newDiv);

        //Hintti 4
        let newDiv3 = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText4);
        let newContent3 = document.createTextNode(hintText4);
        newDiv3.appendChild(newContent3);
        let targetDiv3 = document.getElementById("hintBox3b");
        targetDiv3.appendChild(newDiv3);

        //Hintti 11
        let newDiv2 = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText11);
        let newContent2 = document.createTextNode(hintText11);
        newDiv2.appendChild(newContent2);
        let targetDiv2 = document.getElementById("hintBox3c");
        targetDiv2.appendChild(newDiv2);

    } else if (selectedSointuKoko === 4 && isItMolli === false){
        //Duurin 4-sointu

        //Hintti 11
        let newDiv2 = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText11);
        let newContent2 = document.createTextNode(hintText11);
        newDiv2.appendChild(newContent2);
        let targetDiv2 = document.getElementById("hintBox3a");
        targetDiv2.appendChild(newDiv2);
    } else {
        //Duurin 3-sointu

        //Hintti 10
        let newDiv = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText10);
        let newContent = document.createTextNode(hintText10);
        newDiv.appendChild(newContent);
        let targetDiv = document.getElementById("hintBox3a");
        targetDiv.appendChild(newDiv);
    }







    if (selectedSointuKoko === 3 && isItMolli === true) {
        let newDiv = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText5);
        let newContent = document.createTextNode(hintText5);
        newDiv.appendChild(newContent);
        let targetDiv = document.getElementById("hintBox5a");
        targetDiv.appendChild(newDiv);

        let newDiv2 = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText8);
        let newContent2 = document.createTextNode(hintText8);
        newDiv2.appendChild(newContent2);
        let targetDiv2 = document.getElementById("hintBox5b");
        targetDiv2.appendChild(newDiv2);

    } else if (selectedSointuKoko === 4 && isItMolli === true) {
        let newDiv = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText5);
        let newContent = document.createTextNode(hintText5);
        newDiv.appendChild(newContent);
        let targetDiv = document.getElementById("hintBox5a");
        targetDiv.appendChild(newDiv);

        let newDiv2 = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText8);
        let newContent2 = document.createTextNode(hintText8);
        newDiv2.appendChild(newContent2);
        let targetDiv2 = document.getElementById("hintBox5b");
        targetDiv2.appendChild(newDiv2);

        let newDiv3 = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText9);
        let newContent3 = document.createTextNode(hintText9);
        newDiv3.appendChild(newContent3);
        let targetDiv3 = document.getElementById("hintBox5c");
        targetDiv3.appendChild(newDiv3);

    } else {
        console.log("duurissa mennään");
        let newDiv = document.createElement('div');
        //newDiv.classList.add('dragElement');
        //newDiv.setAttribute("id","hintGenerated"+i.toString());
        console.log(hintText5);
        let newContent = document.createTextNode(hintText5);
        newDiv.appendChild(newContent);
        let targetDiv = document.getElementById("hintBox5a");
        targetDiv.appendChild(newDiv);
    }

    //$.getscript("toimiiks?",function(){
    //loadDraggables()
    //});
}

function showTyylilaji(param) {
    document.getElementById("tyylilajinEsittely").innerHTML = param;
    //document.getElementById("tyylilajinEsittely2").innerHTML = param;
}

function printsavellus() {
    let printable = document.getElementById("printti");
    var savellusValue = document.getElementById("savelluksenNimi").value;
    var saveltajaValue = document.getElementById("saveltajanNimi").value;
    document.getElementById("savelluksenEsittely").innerHTML = savellusValue;
    document.getElementById("saveltajanEsittely").innerHTML = saveltajaValue;
    printable.innerHTML = document.getElementById("alaContainer").innerHTML;
    //printable.getElementsByClassName("dropElement-harm").innerHTML = "";


}

$.fn.extend({
    print: function() {
        var frameName = 'printIframe';
        var doc = window.frames[frameName];
        if (!doc) {
            $('<iframe>').hide().attr('name', frameName).appendTo(document.body);
            doc = window.frames[frameName];
        }
        doc.document.body.innerHTML = this.html();
        doc.window.print();
        return this;
    }
});


$("#sampleButton").on("click", function() {
    var keyData69 = JSON.parse(window.localStorage.getItem(selectedSavellaji));
    var ismo = keyData69.isMolli;
    if (selectedSointuKoko === 4 && ismo === true) {
        //molli4
        playAudio("../res/molli_nelisoinnut_3_6.mp3");

    } else if (selectedSointuKoko === 3 && ismo === true){
        playAudio("../res/mooli_kolmisoinnut_3_6.mp3");
    } else if (selectedSointuKoko === 4 && ismo === false) {
        playAudio("../res/Duuri_nelisoinnut_3_6.mp3");
    } else {
        playAudio("../res/Duuri_kolmisoinnut_3_6.mp3");
    }

});

function playAudio(url) {
    new Audio(url).play();
}

function clearHarmZones() {
    //const droppedElement = document.getElementById('sCont1');
    const dropzonesHarm1 = document.getElementById('hCont1');
    const dropzonesHarm2 = document.getElementById('hCont2');
    const dropzonesHarm3 = document.getElementById('hCont3');
    const dropzonesHarm4 = document.getElementById('hCont4');
    //const dropzonesChord = document.getElementById('sCont1');


    // $("button").click(function(){
        $("#hCont1").removeClass("hasChild");
        $("#hCont2").removeClass("hasChild");
        $("#hCont3").removeClass("hasChild");
        $("#hCont4").removeClass("hasChild");
    // });
    // dropzonesHarm.removeClass("hasChild");
    // dropzonesChord.removeClass("hasChild");

    while (dropzonesHarm1.hasChildNodes()) {
        dropzonesHarm1.removeChild(dropzonesHarm1.lastChild);
    }
    while (dropzonesHarm2.hasChildNodes()) {
        dropzonesHarm2.removeChild(dropzonesHarm2.lastChild);
    }
    while (dropzonesHarm3.hasChildNodes()) {
        dropzonesHarm3.removeChild(dropzonesHarm3.lastChild);
    }
    while (dropzonesHarm4.hasChildNodes()) {
        dropzonesHarm4.removeChild(dropzonesHarm4.lastChild);
    }

    // droppedElement.innerHTML = "";
    clearChordZones();
    droppienMaara = 0;
}

function clearChordZones() {
    //const droppedElement = document.getElementById('sCont1');
    const dropzonesChord1 = document.getElementById('sCont1');
    const dropzonesChord2 = document.getElementById('sCont2');
    const dropzonesChord3 = document.getElementById('sCont3');
    const dropzonesChord4 = document.getElementById('sCont4');
    //const dropzonesChord = document.getElementById('sCont1');


    // $("button").click(function(){
    $("#sCont1").removeClass("hasChild");
    $("#sCont2").removeClass("hasChild");
    $("#sCont3").removeClass("hasChild");
    $("#sCont4").removeClass("hasChild");
    // });
    // dropzonesHarm.removeClass("hasChild");
    // dropzonesChord.removeClass("hasChild");

    while (dropzonesChord1.hasChildNodes()) {
        dropzonesChord1.removeChild(dropzonesChord1.lastChild);
    }
    while (dropzonesChord2.hasChildNodes()) {
        dropzonesChord2.removeChild(dropzonesChord2.lastChild);
    }
    while (dropzonesChord3.hasChildNodes()) {
        dropzonesChord3.removeChild(dropzonesChord3.lastChild);
    }
    while (dropzonesChord4.hasChildNodes()) {
        dropzonesChord4.removeChild(dropzonesChord4.lastChild);
    }

    // droppedElement.innerHTML = "";
    droppienMaara = 4;
}

// $(function() {
//     $("#saveButton").click(function() {
//         html2canvas($("#alaContainer"), {
//             onrendered: function(canvas) {
//                 theCanvas = canvas;
//                 document.body.appendChild(canvas);
//
//                 canvas.toBlob(function(blob) {
//                     saveAs(blob, "Dashboard.png");
//                 });
//             }
//         });
//     });
// });

// $(function() {
//     $("#saveButton").click(function() {
//         html2canvas(document.querySelector('#alaContainer')).then(canvas => {   window.open(canvas.toDataURL('image/jpeg', 1.0), '_blank'); });
//
//     });
// });

// $("#b").onclick=async()=>{
//     let blob = await new Promise(resolve=>$("c").toBlob(resolve));
//     let url = URL.createObjectURL(blob);
//     // Won't work here, because
//     // "the request was made in a sandboxed frame whose 'allow-popups' permission is not set."
//     window.open(url);
//     let a = document.createElement('a');
//     a.href = url;
//     a.download = '';
//     a.click();
// };


// $(function() {
//     $("#b").click(function() {
//         genScreenshotgraph();
//
//     });
// });
//
// function genScreenshotgraph()
// {
//     html2canvas($('#alaContainer'), {
//
//         onrendered: function(canvas) {
//
//             var imgData = canvas.toDataURL("image/jpeg");
//             var pdf = new jsPDF();
//             pdf.addImage(imgData, 'JPEG', 0, 0, -180, -180);
//             pdf.save("download.pdf");
//
//
//
//         }
//     });
//
// }
//
// html2canvas($('#alaContainer'), {
//     onrendered: function(canvas) {
//         var img = canvas.toDataURL()
//         window.open(img);
//     }
// });