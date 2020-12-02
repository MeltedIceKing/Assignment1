const darkButton = document.querySelector('.black-button');

let darkTheme = () => {
    if (darkButton.innerHTML == 'Dark Theme') {
        document.querySelector('.big-grid').style.backgroundColor = 'rgb(200, 200, 200)'
        document.querySelector('.top-head').style.backgroundColor = 'rgb(100, 82, 82)'
        document.querySelector('.top-head').style.color = 'rgb(225, 225, 225)'
        document.querySelector('.small-flex').style.backgroundColor = 'rgb(184, 169, 169)'
        document.querySelector('.textbox').style.backgroundColor = 'rgb(70, 70, 70)'
        document.querySelector('.textbox').style.color = 'rgb(225, 225, 225)'
        document.querySelector('.nav-class').style.backgroundColor = 'rgb(110, 110, 110)'
        document.querySelector('.nav-class').style.color = 'rgb(225, 225, 225)'
        document.querySelector('.green-button').style.backgroundColor = 'rgb(74, 123, 100)'
        document.querySelector('.section4 > .green-button').style.backgroundColor = 'rgb(74, 123, 100)'
        document.querySelector('.red-button').style.backgroundColor = 'rgb(174, 49, 17)'
        document.querySelector('.black-button').style.backgroundColor = 'rgb(120, 120, 120)'
        document.querySelector('.black-button').innerHTML = 'Light Theme'
        document.querySelector('.buttonS').style.color = 'rgb(225, 225, 225)'
        document.querySelector('footer').style.backgroundColor = 'rgb(130, 63, 63)'
        document.querySelector('footer').style.color = 'rgb(225, 225, 225)'
        document.querySelector('body').style.backgroundColor = 'rgb(200, 200, 200)'
    } else {
        document.querySelector('.big-grid').style.backgroundColor = 'white'
        document.querySelector('.top-head').style.backgroundColor = 'rgb(151, 126, 127)'
        document.querySelector('.top-head').style.color = 'black'
        document.querySelector('.small-flex').style.backgroundColor = 'rgb(236, 232, 232)'
        document.querySelector('.textbox').style.backgroundColor = 'white'
        document.querySelector('.textbox').style.color = 'black'
        document.querySelector('.nav-class').style.backgroundColor = 'rgb(192, 192, 192)'
        document.querySelector('.nav-class').style.color = 'black'
        document.querySelector('.green-button').style.backgroundColor = 'rgb(93, 153, 124)'
        document.querySelector('.section4 > .green-button').style.backgroundColor = 'rgb(93, 153, 124)'
        document.querySelector('.red-button').style.backgroundColor = 'rgb(212, 59, 21)'
        document.querySelector('.black-button').style.backgroundColor = 'rgb(105, 105, 105)'
        document.querySelector('.black-button').innerHTML = 'Dark Theme'
        document.querySelector('.buttonS').style.color = 'white'
        document.querySelector('footer').style.backgroundColor = 'rgb(223, 188, 184)'
        document.querySelector('footer').style.color = 'black'
        document.querySelector('body').style.backgroundColor = 'white'
    }
}

darkButton.addEventListener('click', darkTheme)

//     if (darkButton.innerHTML == 'Dark Theme'){
        
//     }else {
//         document.removeEventListener('click');
//     }
//     console.log('The heading was clicked!');
// });
