'use strict';

// Name Search
function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        else {return false;
        }
    });

    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
}


let searchResult = searchByName({people});
console.log(searchResult);

// Gender search
function searchByGender(){
    let genderInput = document.forms[ 'nameForm']['gender'].value;
    let filteredGender = people.filter(function(person){
        if(person.gender == genderInput){
            return true;
        }
        else{
            return false;
        }
    });
        if(filteredGender.length > 0){
            console.log(filteredGender);
        }else{
            console.log("Gender is male or female!");
        }
}


let genderResult = searchByGender({people});
console.log(genderResult);

// DOB search

function searchByDob(){
    let dobInput = document.forms[ 'nameForm']['dob'].value;
    let filteredDob = people.filter(function(person){
        if(person.gender == dobInput){
            return true;
        }
        else{
            return false;
        }
    });
        if(filteredDob.length > 0){
            console.log(filteredDob);
        }else{
            console.log('Do you know thier DOB?');
        }
}


let dobResult = searchByDob({people});
console.log(dobResult);

// height search

function searchByHeight(){
    let heightInput = document.forms[ 'nameForm']['height'].value;
    let filteredHeight = people.filter(function(person){
        if(person.height == heightInput){
            return true;
        }
        else{
            return false;
        }
    });
        if(filteredHeight.length > 0){
            console.log(filteredHeight);
        }else{
            console.log('Do you know their Hieght?');
        }
}


let heightResult = searchByHeight({people});
console.log(heightResult);

// height search

function searchByWeight(){
    let weightInput = document.forms[ 'nameForm']['weight'].value;
    let filteredWeight = people.filter(function(person){
        if(person.weight == weightInput){
            return true;
        }
        else{
            return false;
        }
    });
        if(filteredWeight.length > 0){
            console.log(filteredWeight);
        }else{
            console.log('Do you know their Hieght?');
        }
}


let weightResult = searchByWeight({people});
console.log(weightResult);

// eyecolor search

function searchByEyecolor(){
    let eyecolorInput = document.forms[ 'nameForm']['eyecolor'].value;
    let filteredEyecolor = people.filter(function(person){
        if(person.eyecolor == eyecolorInput){
            return true;
        }
        else{
            return false;
        }
    });
        if(filteredEyecolor.length > 0){
            console.log(filteredEyecolor);
        }else{
            console.log('Pick a different color!');
        }
}


let eyecolorResult = searchByEyecolor({people});
console.log(eyecolorResult);

// occupation search

function searchByOccupation(){
    let occupationInput = document.forms[ 'nameForm']['occupation'].value;
    let filteredOccupation = people.filter(function(person){
        if(person.occupation == occupationInput){
            return true;
        }
        else{
            return false;
        }
    });
        if(filteredOccupation.length > 0){
            console.log(filteredOccupation);
        }else{
            console.log('Do you know their occupation?');
        }
}


let occupationResult = searchByOccupation({people});
console.log(occupationResult);

// Parents search

function searchByParents(){
    let parentsInput = document.forms[ 'nameForm']['parents'].value;
    let filteredParents = people.filter(function(person){
        if(person.parents == parentsInput){
            return true;
        }
        else{
            return false;
        }
    });
        if(filteredParents.length > 0){
            console.log(filteredParents);
        }else{
            console.log('Do you know their parents?');
        }
}


let parentsResult = searchByParents({people});
console.log(parentsResult);

// currentspouse search

function searchByCurrentspouse(){
    let currentSpouseInput = document.forms[ 'nameForm']['currentspouse'].value;
    let filteredCurrentSpouse = people.filter(function(person){
        if(person.currentSpouse == currentSpouseInput){
            return true;
        }
        else{
            return false;
        }
    });
        if(filteredCurrentSpouse.length > 0){
            console.log(filteredCurrentSpouse);
        }else{
            console.log('Do you know their curentspouse?');
        }
}


let currentSpouseResult = searchByCurrentspouse({people});
console.log(currentSpouseResult);
