

// document.getElementById('amount').innerHTML = 'welcome to my first coding class';

// to change the font size of an element
// document.getElementById('amount').style.fontSize = '50px';

// // to cj=hange the color of an html element
// document.getElementById('olu').style.color = 'red';

// document.getElementById('fruit').style.display = 'none';

// function bulboff(){
//     document.getElementById('image').src='../images/bulb off.jpg';
// } 

// function bulbon(){
//     document.getElementById('image').src='../images/bulb on.jpg';
// }

var fname = document.getElementById('fname');
var email = document.getElementById('email');

// function submit(){
//     alert(fname.value)
//     // console.log(fname.value);
// }

function submit(){
    if(fname.value == ""){
        document.getElementById('fnameerror').innerHTML = 'Fullname must not be empty';
    }
    else if(email.value == ""){
        document.getElementById('emailerror').innerHTML = 'Email field must not be empty';
    }
    else{
        document.getElementById('success').innerHTML = 'Form submitted succesfully';
    }
    
}
