"use strict";

function getDogPics(userNum) {
    if ((userNum < 1) || (userNum > 50)) {
        return alert("Please enter a number between 1 and 50.")
    }
    else {
        fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    }
}

function displayResults(responseJson) {
    console.log(responseJson);
}

function submitListen() {
    $('#js-number-form').submit(e => {
        e.preventDefault();
        const userNum = $('#pic-num').val();
        getDogPics(userNum);
    })
}


function appRun(){
    console.log("app running");
    submitListen();
}

$(appRun);