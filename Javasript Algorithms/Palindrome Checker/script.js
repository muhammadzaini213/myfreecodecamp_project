const resultText = document.getElementById('result');
button.addEventListener("click", clearSymbols);

function clearSymbols() {
    var textToCheck = document.getElementById('text-input').value;
    if (textToCheck == "") {
        alert('Please input a value');
    } else {
        var textToCheckWithoutTags = textToCheck.replace(/[() _/\-.,\s]/g, '').toLowerCase();

        isPalindrome(textToCheckWithoutTags);
    }
}

function isPalindrome(textToCheckWithoutTags) {
    var splitTextToCheck = textToCheckWithoutTags.split('');
    var length = splitTextToCheck.length;

    var result;
    if (length % 2 === 0) {
        result = even(splitTextToCheck, length);
    } else {
        result = odd(splitTextToCheck, length);
    }

    var textToCheck = document.getElementById('text-input').value;

    if (result) {
        resultText.innerHTML=`${textToCheck} is a palindrome`;
    } else {
        resultText.innerHTML=`${textToCheck} is not a palindrome`;
    }
}

function even(splitTextToCheck, length) {
    var firstCharOrder = 0;
    var lastCharOrder = length - 1;

    while (firstCharOrder < lastCharOrder) {
        if (splitTextToCheck[firstCharOrder] !== splitTextToCheck[lastCharOrder]) {
            return false;
        }
        firstCharOrder++;
        lastCharOrder--;
    }
    return true;
}

function odd(splitTextToCheck, length) {
    var mid = Math.floor(length / 2);
    var i = 0;
    while (i < mid) {
        if (splitTextToCheck[i] !== splitTextToCheck[length - 1 - i]) {
            return false;
        }
        i++;
    }
    return true;
}
