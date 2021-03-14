'use strict';



let filteredSearch=[];

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
    if(filteredPeople.length > 0){
        return filteredPeople;
    }


    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
        {
            alert('Sorry, looks like there is no one with that name.');
    }

    }
}




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


;

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

function mainSearchFunction(){
    searchByName({people});
    searchByGender({people});
    searchByDob({people});
    searchByHeight({people});
    searchByWeight({people});
    searchByEyecolor({people});
    searchByParents({people});
    searchByCurrentspouse({people});




}


window.addEventListener("load", function(){
    // (B) CREATE HTML TABLE STRING
    var perrow = 1, // 2 CELLS PER ROW
        html = "<table><tr>";
    // LOOP THROUGH ARRAY AND ADD TABLE CELLS
    for (var i=0; i<people.length; i++) {
      // "NORMAL" CELL
      html += `<td>${people[i].firstName}</td>`;
      html += `<td>${people[i].lastName}</td>`;
      html += `<td>${people[i].gender}</td>`;
      html += `<td>${people[i].dob}</td>`;
      html += `<td>${people[i].height}</td>`;
      html += `<td>${people[i].weight}</td>`;
      html += `<td>${people[i].eyeColor}</td>`;
      html += `<td>${people[i].occupation}</td>`;
      html += `<td>${people[i].parents}</td>`;
      html += `<td>${people[i].currentSpouse}</td>`;
      // BREAK INTO NEXT ROW
      var next = i+1;
      if (next%perrow==0 && next!=people.length) {
        html += "</tr><tr>";
      }
    }
    html += "</tr></table>";
    // (C) ATTACH HTML TO CONTAINER
    document.getElementById("myTable").innerHTML = html;
  });