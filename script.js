document.addEventListener("DOMContentLoaded", getDogInfo());

let dropMenu = document.querySelector(".dog-selector");
let dogBreed = dropMenu.text;

console.log(dogBreed);

async function getDogInfo() {
    fetch(`https://api.thedogapi.com/v1/images/search`).then(function(resp) {
    console.log(resp);
    return resp.json()
    }).then(function(data) {
        printDogInfo(data);
})}

function printDogInfo(data) {
    let breedName = document.querySelector("#breedName");
    let breedGroup = document.querySelector("#breedGroup");
    let dogWeight = document.querySelector("#dogWeight");
    let dogHeight = document.querySelector("#dogHeight");
    let dogLifespan = document.querySelector("#dogLifespan");

    let breedNameInfo = data[0].breeds[0].name;
    let breedGroupInfo = data[0].breeds[0].breed_group;
    let dogWeightInfo = data[0].breeds[0].weight.metric;
    let dogHeightInfo = data[0].breeds[0].height.metric
    let dogLifespanInfo = data[0].breeds[0].life_span;

    breedName.innerHTML = "Breed name: " + breedNameInfo;
    breedGroup.innerHTML = "Breed group: " + breedGroupInfo;
    dogWeight.innerHTML = "Avarage weight: " + dogWeightInfo;
    dogHeight.innerHTML = "Avarage height: " + dogHeightInfo;
    dogLifespan.innerHTML = "Avarage Lifespan: " + dogLifespanInfo;
}
// breed: [0].breeds[0].bred_for
// breed group: [0].breeds[0].breed_group
// breed name: [0].breeds[0].name
// weight (kg): [0].breeds[0].weight.metric
// height: [0].breeds[0].height.metric
// life span: [0].breeds[0].life_span