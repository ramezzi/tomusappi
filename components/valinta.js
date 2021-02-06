
var selectedTyylilaji;
var selectedSointuKoko;
var selectedSavellaji;
var selectedHint;

$("#jazz").on("click", function() {
    selectedTyylilaji = "jazz";
    selectedSointuKoko = 4;
    console.log(selectedTyylilaji)
});

$("#bossanova").on("click", function() {
    selectedTyylilaji = "bossanova";
    selectedSointuKoko = 4;
    console.log(selectedTyylilaji)
});

$("#poprock").on("click", function() {
    selectedTyylilaji = "poprock";
    selectedSointuKoko = 3;
    console.log(selectedTyylilaji)
});

$("#kamari").on("click", function() {
    selectedTyylilaji = "kamari";
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
    $("#collapsePrimary").collapse('show');
    $("#collapseDefault").collapse('hide');
    if (selectedTyylilaji === undefined) {
        var jokuMuuValue = document.getElementById("jokumuu").value;
        selectedTyylilaji = jokuMuuValue;
        console.log(selectedTyylilaji);
    }
});

//Primary Buttons
$("#primaryNextBtn").on("click", function() {
    $("#collapseSuccess").collapse('show');
    $("#collapsePrimary").collapse('hide');

    hintSetter()
    hideHarm()
    keySelection(selectedSavellaji)
    magicMan()
});

$("#primaryPrevBtn").on("click", function() {
    $("#collapseDefault").collapse('show');
    $("#collapsePrimary").collapse('hide');
});

//Success Buttons
$("#successNextBtn").on("click", function() {
    $("#collapseInfo").collapse('show');
    $("#collapseSuccess").collapse('hide');
    hideChord()

});

$("#successPrevBtn").on("click", function() {
    $("#collapsePrimary").collapse('show');
    $("#collapseSuccess").collapse('hide');
});

//Info Buttons
$("#infoNextBtn").on("click", function() {
    $("#collapseWarning").collapse('show');
    $("#collapseInfo").collapse('hide');
    hideHarm()
});

$("#infoPrevBtn").on("click", function() {
    $("#collapseSuccess").collapse('show');
    $("#collapseInfo").collapse('hide');
});

//Warning Buttons
$("#warningNextBtn").on("click", function() {
    $("#collapseDanger").collapse('show');
    $("#collapseWarning").collapse('hide');
});

$("#warningPrevBtn").on("click", function() {
    $("#collapseInfo").collapse('show');
    $("#collapseWarning").collapse('hide');
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

function keySetter() {
    var keyData = JSON.parse(window.localStorage.getItem(selectedSavellaji));
    console.log(keyData)
    var tonik = keyData.ton;
    var subdomin = keyData.subdom;
    var domin = keyData.dom;

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