var trial = [
    {
    "id": 1,
    "president": 1,
    "nm": "George Washington",
    "pp": "None, Federalist",
    "tm": "1789-1797"
    },
    {
    "id": 2,
    "president": 2,
    "nm": "John Adams",
    "pp": "Federalist",
    "tm": "1797-1801"
    },
    {
    "id": 3,
    "president": 3,
    "nm": "Thomas Jefferson",
    "pp": "Democratic-Republican",
    "tm": "1801-1809"
    },
     {
    "id": 4,
    "president": 4,
    "nm": "James Madison",
    "pp": "Democratic-Republican",
    "tm": "1809-1817"
    },
    {
    "id": 5,
    "president": 5,
    "nm": "James Monroe",
    "pp": "Democratic-Republican",
    "tm": "1817-1825"
    },
    {
    "id": 6,
    "president": 6,
    "nm": "John Quincy Adams",
    "pp": "Democratic-Republican",
    "tm": "1825-1829"
    },
    {
    "id": 7,
    "president": 7,
    "nm": "Andrew Jackson",
    "pp": "Democrat",
    "tm": "1829-1837"
    },
    {
        "id": 45,
        "president": 45,
        "nm": "Donald Trump",
        "pp": "Republican",
        "tm": "2017-"
        }
];

// var trialObj=[];
// var trialObj=trial.map(item=>{
//     item.president
let noneFederalist=[];
for (let i=0; i<trial.length; i++){
    
    if(trial[i].pp !='Federalist' && trial[i].pp !='None, Federalist' ){
        
        noneFederalist.push(trial[i]);
    }
}
    console.log(noneFederalist);

//     let pres={
//         {
//             name:"",
//             party:"",
//             term:"",
//             num:"",
//             timeI:""

//         }
//     }

// }
/// none federalist array 



// Sort based on Last name 
// for(let i=0; i<noneFederalist.length; i++){

// }
// .split(" ")[1]



// list.sort((a, b) => (a.color > b.color) ? 1 : -1)
// This sorts based on first name
// noneFederalist.sort((a, b) => (a.nm > b.nm) ? 1 : -1);
// console.log('new sorted list',noneFederalist);



// First name separated 
let firstName = [];
for(let i=0; i<noneFederalist.length; i++){
    var fullname = noneFederalist[i].nm;
   firstName.push(fullname.split(" ")[0]);
}
console.log("firstName: ",firstName);

//backward first names 


   var firstNameString = firstName.join(' ');// converted to string ,space-separated 
   console.log("string first names: ",firstNameString);


   function reverseWord (sentence) {
    return sentence.split(' ').map(function(word) {
      return word.split('').reverse().join('');
    }).join(' ');
  }  

var backName = reverseWord(firstNameString);//************************/
console.log("backName: ",backName)

// var reverseArray = reverseWord(firstNameString).split(" ");// Reversed array of first names
// for(let i=0; i<reverseArray.length; i++){                // "werdnA,nhoJ,semaJ,semaJ,samohT"
//     var pop = reverseArray.pop();
//     backName.push(pop);

// }
// console.log("backName :",backName);
// console.log(" 2nd element:",backName[1]);



//Getting the last names: some presidents' full names are made up of more than two names 
//that's why I've used Switch
let lastName = [];
for(let i=0; i<noneFederalist.length; i++){
    var fullname = noneFederalist[i].nm;
    switch(fullname.split(" ").length){
        case 4:
                lastName.push(fullname.split(" ")[3]);
                break;
        case 3:
                lastName.push(fullname.split(" ")[2]);
                break;
        default:
                lastName.push(fullname.split(" ")[1])

    }

}
console.log("lastName: ",lastName);


//New full names (with backward first names and regular last names)
// let newFullName = "";

// noneFederalist.sort((a, b) => (a.nm > b.nm) ? 1 : -1);
// console.log('new sorted list',noneFederalist);


// new key/value pair of "NewFirstName" is added
for(let i=0; i<noneFederalist.length; i++){
    noneFederalist[i].newFirstName=backName.split(' ')[i]
}
console.log("New None Federalist with a new elm:",noneFederalist)




// new key/value pair of "justLastName" is added
for(let i=0; i<noneFederalist.length; i++){
    noneFederalist[i].justLastName=lastName[i]
}
console.log("New None Federalist with a added lastname:",noneFederalist)


//new full name
for(let i=0; i<noneFederalist.length; i++){
    noneFederalist[i].newFullName=backName.split(' ')[i]+' '+lastName[i]
}
console.log("New None Federalist with a added lastname:",noneFederalist)


//Sorted alphabetically based on their last names
noneFederalist.sort((a, b) => (a.justLastName > b.justLastName) ? 1 : -1);
console.log('new sorted list',noneFederalist);

//Party abbreviation
for(let i=0; i<noneFederalist.length; i++){
    let abbr = "";
    switch(noneFederalist[i].pp){
        case "Democratic-Republican":
            abbr="DR"
           break;
        case "Democrat":
            abbr="D"
            break;
        case "Republican":
             abbr="R"
            break;
        case "Whig":
            abbr="W"
            break;
    }
    noneFederalist[i].pp=abbr;
}

console.log("New None Federalist with a added lastname:",noneFederalist)


//Getting the beginning year
let beginning = [];
for(let i=0; i<noneFederalist.length; i++){
    var term= noneFederalist[i].tm.split('-')[0];
    beginning.push(term)
}
console.log("beginning:",beginning);






// //Adding the beginning year 
for(let i=0; i<noneFederalist.length; i++){
    noneFederalist[i].firstYear=beginning[i]
}
console.log("New None Federalist with a added lastname:",noneFederalist)


var myJsonString = JSON.stringify(noneFederalist);
console.log("JSON: ",myJsonString)


var jsonParse = JSON.parse(myJsonString);
console.log("Parse: ",jsonParse)


// //Only the beginning year
// for(let i=0; i<noneFederalist.length; i++){
//     let beginning = "";
//     switch(noneFederalist[i].pp){
//         case "Democratic-Republican":
//             abbr="DR"
//            break;
//         case "Democrat":
//             abbr="D"
//             break;
//         case "Republican":
//              abbr="R"
//             break;
//         case "Whig":
//             abbr="W"
//             break;
//     }
//     noneFederalist[i].pp=abbr;
// }

