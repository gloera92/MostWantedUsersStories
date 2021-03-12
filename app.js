'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput || person.lastName === lastNameInput){
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
            console.log('confused gender');
        }
}
    

let genderResult = searchByGender({people});
console.log(genderResult); 


// function searchByGender(gender) {
//     let genderResult =
// }







console.log(document.forms["nameForm"]['gender'].value);
console.log(document.forms["nameForm"]['dob'].value);
console.log(document.forms["nameForm"]['height'].value);
console.log(document.forms["nameForm"]['weight'].value);
console.log(document.forms["nameForm"]['eyecolor'].value);
console.log(document.forms["nameForm"]['occupation'].value);
console.log(document.forms["nameForm"]['parents'].value);
console.log(document.forms["nameForm"]['currentspouse'].value);
