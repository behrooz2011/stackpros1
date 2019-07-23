const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema=mongoose.Schema;
// const server = require ('./server')
///

///Main Coding
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
        "id": 8,
        "president": 8,
        "nm": "Martin van Buren",
        "pp": "Democrat",
        "tm": "1837-1841"
        },
        {
        "id": 9,
        "president": 9,
        "nm": "William H. Harrison",
        "pp": "Whig",
        "tm": "1841"
        },
        {
        "id": 10,
        "president": 10,
        "nm": "John Tyler",
        "pp": "Whig",
        "tm": "1841-1845"
        },
        {
        "id": 11,
        "president": 11,
        "nm": "James K. Polk",
        "pp": "Democrat",
        "tm": "1845-1849"
        },
        {
        "id": 12,
        "president": 12,
        "nm": "Zachary Taylor",
        "pp": "Whig",
        "tm": "1849-1850"
        },
        {
        "id": 13,
        "president": 13,
        "nm": "Millard Fillmore",
        "pp": "Whig",
        "tm": "1850-1853"
        },
        {
        "id": 14,
        "president": 14,
        "nm": "Franklin Pierce",
        "pp": "Democrat",
        "tm": "1853-1857"
        },
        {
        "id": 15,
        "president": 15,
        "nm": "James Buchanan",
        "pp": "Democrat",
        "tm": "1857-1861"
        },
        {
        "id": 16,
        "president": 16,
        "nm": "Abraham Lincoln",
        "pp": "Republican",
        "tm": "1861-1865"
        },
        {
        "id": 17,
        "president": 17,
        "nm": "Andrew Johnson",
        "pp": "National Union",
        "tm": "1865-1869"
        },
        {
        "id": 18,
        "president": 18,
        "nm": "Ulysses S. Grant",
        "pp": "Republican",
        "tm": "1869-1877"
        },
        {
        "id": 19,
        "president": 19,
        "nm": "Rutherford Hayes",
        "pp": "Republican",
        "tm": "1877-1881"
        },
        {
        "id": 20,
        "president": 20,
        "nm": "James Garfield",
        "pp": "Republican",
        "tm": "1881"
        },
        {
        "id": 21,
        "president": 21,
        "nm": "Chester Arthur",
        "pp": "Republican",
        "tm": "1881-1885"
        },
        {
        "id": 22,
        "president": 22,
        "nm": "Grover Cleveland",
        "pp": "Democrat",
        "tm": "1885-1889"
        },
        {
        "id": 23,
        "president": 23,
        "nm": "Benjamin Harrison",
        "pp": "Republican",
        "tm": "1889-1893"
        },
        {
        "id": 24,
        "president": 24,
        "nm": "Grover Cleveland",
        "pp": "Democrat",
        "tm": "1893-1897"
        },
        {
        "id": 25,
        "president": 25,
        "nm": "William McKinley",
        "pp": "Republican",
        "tm": "1897-1901"
        },
        {
        "id": 26,
        "president": 26,
        "nm": "Theodore Roosevelt",
        "pp": "Republican",
        "tm": "1901-1909"
        },
        {
        "id": 27,
        "president": 27,
        "nm": "William Taft",
        "pp": "Republican",
        "tm": "1909-1913"
        },
        {
        "id": 28,
        "president": 28,
        "nm": "Woodrow Wilson",
        "pp": "Democrat",
        "tm": "1913-1921"
        },
        {
        "id": 29,
        "president": 29,
        "nm": "Warren Harding",
        "pp": "Republican",
        "tm": "1921-1923"
        },
        {
        "id": 30,
        "president": 30,
        "nm": "Calvin Coolidge",
        "pp": "Republican",
        "tm": "1923-1929"
        },
        {
        "id": 31,
        "president": 31,
        "nm": "Herbert C. Hoover",
        "pp": "Republican",
        "tm": "1929-1933"
        },
        {
        "id": 32,
        "president": 32,
        "nm": "Franklin Delano Roosevelt",
        "pp": "Democrat",
        "tm": "1933-1945"
        },
        {
        "id": 33,
        "president": 33,
        "nm": "Harry S Truman",
        "pp": "Democrat",
        "tm": "1945-1953"
        },
        {
        "id": 34,
        "president": 34,
        "nm": "Dwight David Eisenhower",
        "pp": "Republican",
        "tm": "1953-1961"
        },
        {
        "id": 35,
        "president": 35,
        "nm": "John Fitzgerald Kennedy",
        "pp": "Democrat",
        "tm": "1961-1963"
        },
        {
        "id": 36,
        "president": 36,
        "nm": "Lyndon Baines Johnson",
        "pp": "Democrat",
        "tm": "1963-1969"
        },
        {
        "id": 37,
        "president": 37,
        "nm": "Richard Milhous Nixon",
        "pp": "Republican",
        "tm": "1969-1974"
        },
        {
        "id": 38,
        "president": 38,
        "nm": "Gerald R. Ford",
        "pp": "Republican",
        "tm": "1974-1977"
        },
        {
        "id": 39,
        "president": 39,
        "nm": "Jimmy Carter",
        "pp": "Democrat",
        "tm": "1977-1981"
        },
        {
        "id": 40,
        "president": 40,
        "nm": "Ronald Wilson Reagan",
        "pp": "Republican",
        "tm": "1981-1989"
        },
        {
        "id": 41,
        "president": 41,
        "nm": "George H. W. Bush",
        "pp": "Republican",
        "tm": "1989-1993"
        },
        {
        "id": 42,
        "president": 42,
        "nm": "Bill Clinton",
        "pp": "Democrat",
        "tm": "1993-2001"
        },
        {
        "id": 43,
        "president": 43,
        "nm": "George W. Bush",
        "pp": "Republican",
        "tm": "2001-2009"
        },
        {
        "id": 44,
        "president": 44,
        "nm": "Barack Obama",
        "pp": "Democrat",
        "tm": "2009-2017"
        },
        {
        "id": 45,
        "president": 45,
        "nm": "Donald Trump",
        "pp": "Republican",
        "tm": "2017-"
        }
];
//Getting None Federalist Presidents

let noneFederalist=[];
for (let i=0; i<trial.length; i++){
    
    if(trial[i].pp !='Federalist' && trial[i].pp !='None, Federalist' ){
        
        noneFederalist.push(trial[i]);
    }
}
    console.log(noneFederalist);


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
        case "National Union":
                abbr="NU"
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

//Adding Date with ISO format (in milliseconds)
for(let i=0; i<noneFederalist.length; i++){

    noneFederalist[i].createdAt=new Date().toISOString()


}
console.log("New None Federalist with a added lastname:",noneFederalist)




////////////////////////////////////
////








var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
    
   

        let presidentSchema = new Schema({
            firstYear:{
                required:true,
                type:Number,
                maxlength:255
            },
            id:{
                required:true,
                type:Number,
                maxlength:255
            },
            justLastName:{
                required:true,
                type:String,
                unique:1,
                maxlength:100
            },
            justFirstName:{
                required:true,
                type:String,
                unique:1,
                maxlength:100
            },
            newFullName:{
                required:true,
                type:String,
                unique:1,
                maxlength:100
            },
            nm:{
                required:true,
                type:String,
                unique:1,
                maxlength:100
            },
            pp:{
                required:true,
                type:String,
                unique:1,
                maxlength:100
            },
            president:{
                required:true,
                type:Number,
                maxlength:255
            },
            tm:{
                required:true,
                type:String,
                unique:1,
                maxlength:100
            },
            createdAt:{
                required:true,
                type:String,
                maxlength:100
            }
          
         });
        
        
       
       
    // compile schema to model
    const President = mongoose.model('President',presidentSchema);
  
 
    // documents array
    var pres = noneFederalist;
    
 
    // save multiple documents to the collection referenced by Book Model
    President.collection.insert(pres, function (err, docs) {
      if (err){ 
          return console.error(err);
      } else {
        console.log("Multiple documents of presidents inserted to Collection");
      }
    });
    module.exports={President};
    
});


/////////////////////////////////////


module.exports={noneFederalist};