// Initialize the function
function wordCount(myString){

 

  // Convert string to an array of words
  
 var stringArray = myString.split(" ");
  // An object to hold word frequency
 var wordfrequency = {};

  // Iterate through the array and count the occurrence of each word
 stringArray.forEach(function(currentword){
   if(wordfrequency(currentword) != undefined){
     wordfrequency += 1;
     
   }
   
 });

//  Call the function with the string as a parameter.