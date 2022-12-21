/*
    12/27/22

    Here is an object literal. Accordingly, look at the password property,
    and find the number 3. 

    Once you find the number three log to the console a string that
    that indicates the numbers current position and the value, 
    of the number itself as a string. 

    Hint: the .split method can be used to convert a string
    into an array. 

    Hint: return statements need the encapsulation of a 
    function to work properly. 
    Number("1")
    `this is string ${variableOne} and ${variableTwo}`


 */

const person = {
    
    id : 132,
    firstName: "Jackson",
    lastName: "Alexander", 
    birthLocation: {
        city: "Jacksonville",
        state: "Florida", 
        country: "United States"
    },
    email: "jkAlex@gmail.com",
    password: "cGFzc3dvcmQxMjMh", 

};

function elementFind(arr, ele){
    let element = arr.split(''); // copies arr (person.password string in this case) and converts into an array
    for (let i = 0; i < element.length; i++){ // loops through the string (or array if using split method)
        if (Number(arr[i]) === ele){ // Number() converts a string number into an actual number and making sure its strictly equal to ele
            return `this is string ${element[i]} and ${i}`; // if correct, return element[i] as what you're looking for and i as the index number
        }
    }
}
console.log(elementFind(person.password, 3));