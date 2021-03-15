'use strict';



let firstNameInput = document.forms['nameForm']['fname'].value;
let lastNameInput = document.forms['nameForm']['lname'].value;
let genderInput = document.forms[ 'nameForm']['gender'].value;
let dobInput = document.forms[ 'nameForm']['dob'].value;
let heightInput = document.forms[ 'nameForm']['height'].value;
let weightInput = document.forms[ 'nameForm']['weight'].value;
let eyecolorInput = document.forms[ 'nameForm']['eyecolor'].value;
let occupationInput = document.forms[ 'nameForm']['occupation'].value;
let parentsInput = document.forms[ 'nameForm']['parents'].value;
let currentSpouseInput = document.forms[ 'nameForm']['currentspouse'].value;


let filteredSearch=[];

// Name Search
function searchByName(nameArray){
    // Grabbing the values from our nameForm form and inputs.
    firstNameInput = document.forms['nameForm']['fname'].value;
    lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = nameArray.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });

    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
    return filteredPeople;
}

// Gender search
function searchByGender(filteredGenderArray){
    genderInput = document.forms[ 'nameForm']['gender'].value;
    let filteredGender = filteredGenderArray.filter(function(person) {
        if(person.gender == genderInput){
            return true;
        }
        return false;
    });
        if(filteredGender.length > 0){
            console.log(filteredGender);
            filteredSearch.push(filteredGender)
        }else{
            console.log("Gender is male or female!");
        }
        return filteredGender;
}



// DOB search
function searchByDob(dobArray){
    dobInput = document.forms[ 'nameForm']['dob'].value;
    let filteredDob = dobArray.filter(function(person){
        if(person.dob == dobInput){
            return true;
        }
        return false;
    });
        if(filteredDob.length > 0){
            console.log(filteredDob);
        }else{
            console.log('Do you know thier DOB?');
        }
        return filteredDob;
}



// height search
function searchByHeight(heightArray){
    heightInput = document.forms[ 'nameForm']['height'].value;
    let filteredHeight = heightArray.filter(function(person){
        if(person.height == heightInput){
            return true;
        }
            return false;
    });
        if(filteredHeight.length > 0){
            console.log(filteredHeight);
        }else{
            console.log('Do you know their Hieght?');
        }
        return filteredHeight;
}



// height search
function searchByWeight(weightArray){
    weightInput = document.forms[ 'nameForm']['weight'].value;
    let filteredWeight = weightArray.filter(function(person){
        if(person.weight == weightInput){
            return true;
        }
        return false;
    });
        if(filteredWeight.length > 0){
            console.log(filteredWeight);
        }else{
            console.log('Do you know their Hieght?');
        }
        return filteredWeight;
}


// eyecolor search
function searchByEyecolor(eyeColorArray){
    eyecolorInput = document.forms[ 'nameForm']['eyecolor'].value;
    let filteredEyecolor = eyeColorArray.filter(function(person){
        if(person.eyeColor == eyecolorInput){
            return true;
        }
        return false;
    });
        if(filteredEyecolor.length > 0){
            console.log(filteredEyecolor);
        }else{
            console.log('Pick a different color!');
        }
        return filteredEyecolor;
}


// occupation search
function searchByOccupation(occupationArray){
    occupationInput = document.forms[ 'nameForm']['occupation'].value;
    let filteredOccupation = occupationArray.filter(function(person){
        if(person.occupation == occupationInput){
            return true;
        }
        return false;
    });
        if(filteredOccupation.length > 0){
            console.log(filteredOccupation);
        }else{
            console.log('Do you know their occupation?');
        }
        return filteredOccupation;
}


// Parents search
function searchByParents(parentArray){
    parentsInput = document.forms[ 'nameForm']['parents'].value;
    let filteredParents = parentArray.filter(function(person){
        if(person.parents == parentsInput){
            return true;
        }
        return false;
    });
        if(filteredParents.length > 0){
            console.log(filteredParents);
        }else{
            console.log('Do you know their parents?');
        }
        return filteredParents;
}


// currentspouse search
function searchByCurrentspouse(spouseArray){
    currentSpouseInput = document.forms[ 'nameForm']['currentspouse'].value;
    let filteredCurrentSpouse = spouseArray.filter(function(person){
        if(person.currentSpouse == currentSpouseInput){
            return true;
        }
        return false;
    });
        if(filteredCurrentSpouse.length > 0){
            console.log(filteredCurrentSpouse);
        }else{
            console.log('Do you know their curentspouse?');
        }
        return filteredCurrentSpouse;
}


function mainSearchFunction(){
    firstNameInput = document.forms['nameForm']['fname'].value;
    lastNameInput = document.forms['nameForm']['lname'].value;
    genderInput = document.forms[ 'nameForm']['gender'].value;
    dobInput = document.forms[ 'nameForm']['dob'].value;
    heightInput = document.forms[ 'nameForm']['height'].value;
    weightInput = document.forms[ 'nameForm']['weight'].value;
    eyecolorInput = document.forms[ 'nameForm']['eyecolor'].value;
    occupationInput = document.forms[ 'nameForm']['occupation'].value;
    parentsInput = document.forms[ 'nameForm']['parents'].value;
    currentSpouseInput = document.forms[ 'nameForm']['currentspouse'].value;


    let results = people;
    if(firstNameInput.length && lastNameInput.length > 1){
        results = searchByName(results);
        filteredSearch.push(searchByName);
      
    }
        
    if(genderInput.length > 1) {
    results = searchByGender(results);
  
    }

    if(dobInput.length > 1) {
        results = searchByDob(results);
    }
    
    if(heightInput.length > 1) {
        results = searchByHeight(results);
 
    }
    
    if(weightInput.length > 1) {
        results = searchByWeight(results);
    
    }   
    
    if(eyecolorInput.length > 1) {
        results = searchByEyecolor(results);
    
    }         
    
    if(parentsInput.length > 1) {
        results = searchByParents(results);
   
    }
    
    if(currentSpouseInput.length > 1) {
        results = searchByCurrentspouse(results);
    }
    console.log(results);
    createTableWithResults(results);
}

let headers = ['First Name', 'Last Name', 'Gender', 'Date of Birth', 'Height', 'Weight', 'Eye Color', 'Occupation', 'Parents', 'CurrentSpouse'];

function createTableWithResults(test){
    let filteredTable = document.createElement('filteredTable');
    let headerRow = document.createElement('tr');
 
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
 
    filteredTable.appendChild(headerRow);
 
    test.forEach(emp => {
        let row = document.createElement('tr');
 
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
 
       filteredTable.appendChild(row);
    });
 
        myTable.appendChild(filteredTable);
};



//takes {people} data and pushes to a table
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