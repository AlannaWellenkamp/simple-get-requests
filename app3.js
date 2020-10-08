"use strict";

function getDogPics(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong'));
}



function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.code === 404) {
      alert("Sorry, can't find that dog breed. Try again with a different breed.")
  }
  else {
    $('.results').replaceWith(`<img src="${responseJson.message}" class="results">`);
    $('.results').removeClass('hidden');
  } 
}

function submitListen() {
    $('#js-breed-form').submit(e => {
        e.preventDefault();
        let breed = $('#breed').val();
        breed = breed.toLowerCase();
        console.log(breed);
        getDogPics(breed);
    })
}


function appRun(){
    console.log("app running");
    submitListen();
}

$(appRun);