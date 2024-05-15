var result = document.getElementById('results-div')

function removeNumber(){
    result.innerHTML = '';
}

function checkNumber(){
    
    var input = document.getElementById('user-input').value;
    var inputArray = input.split('');
    if(input == ''){
        alert('Please provide a phone number');
    } else if(
    //okay calm down, this is war crime
    
    (inputArray[0] == '1' && inputArray [1] == ' ' && inputArray[5] == '-' && 
    inputArray[9] == '-' && inputArray.length == 14) ||

    (inputArray[0] == '1' && inputArray [1] == ' '&& inputArray [2] == '(' && 
    inputArray[6] == ')' && inputArray[7] == ' ' && inputArray[11] == '-' &&
    inputArray.length == 16)||

    (inputArray[0] == '1' && inputArray [1] == '('&&  inputArray[5] == ')' && 
    inputArray[9] == '-' && inputArray.length == 14) ||

    (inputArray[0] == '1' && inputArray [1] == ' '&&  inputArray[5] == ' ' && 
    inputArray[9] == ' ' && inputArray.length == 14) ||

    (inputArray.length == 10) ||

    (inputArray[3] == '-' && inputArray[7] == '-' && inputArray.length == 12) ||

    (inputArray[0] == '(' && inputArray[4] == ')' && inputArray[8] == '-' && 
    inputArray.length == 13)
    ){

        result.innerHTML = 'Valid US number: ' + input;     
    } else {
        result.innerHTML = 'Invalid US number: ' + input;
    }
}