// String Exercise
// 1. Write a js program to find length of a string.
var UserName = "google.com"
var Count = UserName.length
console.log("String :",UserName);
console.log("Length of an array :",Count);
console.log("...................................");
// 2. Write a js program to copy one string to another string.
var CompaneyName = "google"
var NewCompaney = [] 
for (let i = 0; i < CompaneyName.length; i++) {
    NewCompaney[i] = CompaneyName[i]
    
}
console.log("First Array :",CompaneyName,"Length :",CompaneyName.length);
console.log("Another Array :",NewCompaney.join(""));
console.log("........................");
// 3. Write a js program to concatenate two strings.
var Name = "M. Usman"
var Locations = "Turkey"
console.log(Name,"is in",Locations);
console.log("...............................");
// 4. Write a js program to compare two strings.
var Name = "Turkey"
var Locations = "Turkey"
if (Name===Locations) {
    console.log(Name,"=",Locations);
} 
else {
    console.log(Name,"!=",Locations);
}
console.log(".............................");
// 5. Write a js program to convert lowercase string to uppercase.
var Name = "Dubai"
var UppercaseName= Name.toUpperCase() 
console.log("String :",Name);
console.log("Uppercase :",UppercaseName);
console.log("..............................");
// 6. Write a js program to convert uppercase string to lowercase.
var Name = "Dubai"
var LowercaseName= Name.toLowerCase()
console.log("String :",Name);
console.log("Lowercase :",LowercaseName);
console.log("..............................");
// 7. Write a js program to toggle case of each character of a string.
var newString = "DuBaI".split("")
console.log("String :",newString);
for (let i = 0; i < newString.length; i++) {
    if (newString[i]>='A' && newString[i]<='Z') {
        newString[i] = String.fromCharCode(newString[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0))
    }
    else if (newString[i]>='a' && newString[i]<='z') {
        newString[i] = String.fromCharCode(newString[i].charCodeAt(0) + 'A'.charCodeAt(0) - 'a'.charCodeAt(0))
    }
    
}
console.log("Toggle of each element :",newString.join(""));
console.log("....................................");
// 8. Write a js program to find total number of alphabets, digits or special character in a string.
var newString = "Muhamad099@gmail.com"
console.log("String :",newString);
var alphabets = /[a-zA-Z]+$/
var digits = /[0-9]+$/ 
var specialChar = /^[^a-zA-Z0-9]+$/
var alphabetCount = 0
var specialCharCount = 0
var digitCount = 0
for (let i = 0; i < newString.length; i++) {
    if (newString[i].match(alphabets)) {
        alphabetCount +=1
    }
    else if (newString[i].match(specialChar)) {
        specialCharCount +=1
    }
    else if (newString[i].match(digits)) { 
        digitCount +=1
    }
    
}
console.log("Total number of alphabets :",alphabetCount);
console.log("Total number of special char :",specialCharCount);
console.log("Total number of digits :",digitCount);
console.log("..............................");
// 9. Write a js program to count total number of vowels and consonants in a string.
var newString = "Muhammad"
console.log("String : ",newString);
var vowelCount = 0
var consonantCount = 0
for (let i = 0; i < newString.length; i++) {
   if (newString[i]==="a" || newString[i]==="e" || newString[i]==="i" || newString[i]==="o" || newString[i]==="u" ) {
       vowelCount +=1
   }
   else{
        consonantCount +=1
   }
    
}
console.log("Vowel elements :",vowelCount);
console.log("Consonant elements :",consonantCount);
console.log(".................................");
// 10. Write a js program to count total number of words in a string.
var newString = "Dr. Zeeshan Usmani"
var spaceCount = 1
console.log("String :",newString);
for (let i = 0; i < newString.length; i++) {
    if (newString[i]== " ") {
        spaceCount +=1
    }
    
}
console.log("Total Words :",spaceCount);
console.log(".................................");













