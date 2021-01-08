let array1 = [1,2,3,4];//for testing
let toremove = 1; //for testing
let toremove2 = 2; //for testing
let toremove3 = 3; //for testing
let toremove4 = 4; //for testing

//paramaters in function are array, then numbers in array to remove
const removeFromArray = function(array1, toremove, toremove2, toremove3, toremove4) {
    //only runs code if there is a paramater
    if (toremove != null) {
        //finds the index of paramater to remove
        let location1 = array1.indexOf(toremove);
            //makes the code only runs if the paramater matches one in the array
            if (location1 != -1) {
        //removes the selected paramater
        array1.splice(location1, 1); 
        }
    }
    //I don't know how to loop this yet for separate paramaters, 
    //so for now the code is copied 3 more times in case there are 3 more paramaters
    if (toremove2 != null) {
        let location1 = array1.indexOf(toremove2);
            if (location1 != -1) {
        array1.splice(location1, 1);
        }
    }
    if (toremove3 != null) {
        let location1 = array1.indexOf(toremove3);
            if (location1 != -1) {
        array1.splice(location1, 1);
        }
    }
    if (toremove4 != null) {
        let location1 = array1.indexOf(toremove4);
            if (location1 != -1) {
        array1.splice(location1, 1);
        }
    }
    return array1;
}

module.exports = removeFromArray