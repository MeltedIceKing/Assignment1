const darkButton = document.querySelector('.black-button');
const redButton = document.querySelector('.red-button');
const botGreenButton = document.querySelector('.bot-green');
const topGreenButton = document.querySelector('.section1 > .green-button');
var notesListFirst = document.querySelector('.first-note').innerHTML;
var notesListSecond = document.querySelector('.second-note').innerHTML;

var notesArray = [
    {
        title:  "note one",
        body:   "some text 1",
    },
    {
        title:  "note two",
        body:   "some text 2",
    },
];

let darkTheme = () => {
    if (darkButton.innerHTML == 'Dark Theme') {
        document.querySelector('.big-grid').style.backgroundColor = 'rgb(200, 200, 200)';
        document.querySelector('.top-head').style.backgroundColor = 'rgb(100, 82, 82)';
        document.querySelector('.top-head').style.color = 'rgb(225, 225, 225)';
        document.querySelector('main').style.backgroundColor = 'rgb(184, 169, 169)';
        document.querySelector('.textbox').style.backgroundColor = 'rgb(70, 70, 70)';
        document.querySelector('.textbox').style.color = 'rgb(225, 225, 225)';
        document.querySelector('.nav-class').style.backgroundColor = 'rgb(110, 110, 110)';
        document.querySelector('.nav-class').style.color = 'rgb(225, 225, 225)';
        document.querySelector('.green-button').style.backgroundColor = 'rgb(74, 123, 100)';
        document.querySelector('.section4 > .green-button').style.backgroundColor = 'rgb(74, 123, 100)';
        document.querySelector('.red-button').style.backgroundColor = 'rgb(174, 49, 17)';
        document.querySelector('.black-button').style.backgroundColor = 'rgb(120, 120, 120)';
        document.querySelector('.black-button').innerHTML = 'Light Theme';
        document.querySelector('.buttonS').style.color = 'rgb(225, 225, 225)';
        document.querySelector('footer').style.backgroundColor = 'rgb(130, 63, 63)';
        document.querySelector('footer').style.color = 'rgb(225, 225, 225)';
        document.querySelector('body').style.backgroundColor = 'rgb(200, 200, 200)';
    } else {
        document.querySelector('.big-grid').style.backgroundColor = 'white';
        document.querySelector('.top-head').style.backgroundColor = 'rgb(151, 126, 127)';
        document.querySelector('.top-head').style.color = 'black';
        document.querySelector('main').style.backgroundColor = 'rgb(236, 232, 232)';
        document.querySelector('.textbox').style.backgroundColor = 'white';
        document.querySelector('.textbox').style.color = 'black';
        document.querySelector('.nav-class').style.backgroundColor = 'rgb(192, 192, 192)';
        document.querySelector('.nav-class').style.color = 'black';
        document.querySelector('.green-button').style.backgroundColor = 'rgb(93, 153, 124)';
        document.querySelector('.section4 > .green-button').style.backgroundColor = 'rgb(93, 153, 124)';
        document.querySelector('.red-button').style.backgroundColor = 'rgb(212, 59, 21)';
        document.querySelector('.black-button').style.backgroundColor = 'rgb(105, 105, 105)';
        document.querySelector('.black-button').innerHTML = 'Dark Theme';
        document.querySelector('.buttonS').style.color = 'white';
        document.querySelector('footer').style.backgroundColor = 'rgb(223, 188, 184)';
        document.querySelector('footer').style.color = 'black';
        document.querySelector('body').style.backgroundColor = 'white';
    }
};

let clearText = () => {
    document.querySelector('.textbox').style.visibility = 'hidden';
    document.querySelector('.red-button').style.visibility = 'hidden';
    document.querySelector('.section4 > .green-button').style.visibility = 'hidden';
};

let makeNewNote = () => {
    if (document.querySelector('.red-button').style.visibility == 'hidden') {
        document.querySelector('.textbox').style.visibility = 'visible';
        document.querySelector('.red-button').style.visibility = 'visible';
        document.querySelector('.section4 > .green-button').style.visibility = 'visible';
    }else{
        document.querySelector('.textbox').value = '';
    }
};

var saveText = (notesArray) => {
    var textValue = document.querySelector('.textbox').value;
    var textinnerValue = document.querySelector('.textbox').innerHTML;
    if (textValue == ''){
        document.querySelector('.textbox').value = '';
    }else if (textValue == notesArray[1].title || textValue == notesArray[0].title) {
        document.querySelector('.textbox').value = '';
    }else {
        let textArray = textValue.split('\n');
        notesArray.push(
            {
                title:  textArray[0],
                body:   textValue,
            }
        );
        return notesArray;
    }
};

var showText = (notesArray) => {
    noteToAdd = saveText(notesArray);
    if (noteToAdd.length > 2){
        var newListItem = document.createElement("li");
        newListItem.classList.add('list-item');
        newListItem.append(noteToAdd[noteToAdd.length - 1].title);
        var navList = document.getElementById("notes-list");
        navList.appendChild(newListItem);
    }
};

darkButton.addEventListener('click', darkTheme);
redButton.addEventListener('click', clearText);
topGreenButton.addEventListener('click', makeNewNote);
botGreenButton.addEventListener('click', function (){
    showText(notesArray);
});

var notesItemList = document.querySelector('#notes-list');
notesItemList.addEventListener('click', (e) => {
    var itemToBeUsed = e.target.innerHTML;
    for (var i = 0; i < notesArray.length; i++){
        if (notesArray[i].title == itemToBeUsed){
            document.querySelector('.textbox').value = notesArray[i].body;
        }
    }
});