"use strict";

// the getDogInfo(); function runs as soon as the page is done loading
document.addEventListener("DOMContentLoaded", getDogInfo());

// fetching the api and we get the data back
async function getDogInfo() {
    fetch(`https://api.thedogapi.com/v1/images/search`).then(function(resp) {
    console.log(resp);
    return resp.json()
    }).then(function(data) {
        printDogInfo(data);
})}

function printDogInfo(data) {
    // make variables of the html elements where we want to put the picture and informations of the dogs
    let dogPic = document.querySelector("#dogPic");
    let breedName = document.querySelector("#breedName");
    let breedGroup = document.querySelector("#breedGroup");
    let dogWeight = document.querySelector("#dogWeight");
    let dogHeight = document.querySelector("#dogHeight");
    let dogLifespan = document.querySelector("#dogLifespan");

    // make variables of the data we get from the API about the dogs
    let insertDogPic = data[0].url;
    let breedNameInfo = data[0].breeds[0].name;
    let breedGroupInfo = data[0].breeds[0].breed_group;
    let dogWeightInfo = data[0].breeds[0].weight.metric;
    let dogHeightInfo = data[0].breeds[0].height.metric
    let dogLifespanInfo = data[0].breeds[0].life_span;

    // inserts picture and the strings of information to the elements in html
    dogPic.src = insertDogPic;
    breedName.innerHTML = "Breed name: " + breedNameInfo;
    breedGroup.innerHTML = "Breed group: " + breedGroupInfo;
    dogWeight.innerHTML = "Avarage weight: " + dogWeightInfo;
    dogHeight.innerHTML = "Avarage height: " + dogHeightInfo;
    dogLifespan.innerHTML = "Avarage Lifespan: " + dogLifespanInfo;
}