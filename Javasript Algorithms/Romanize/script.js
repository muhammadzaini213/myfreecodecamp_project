const resultOutput = document.getElementById('output');

function convertNumber() {
    var numberToConvert = document.getElementById('number').value;
    if (numberToConvert == "") {
        resultOutput.innerHTML='Please enter a valid number';
    } else if(numberToConvert < 1 ){
        resultOutput.innerHTML='Please enter a number greater than or equal to 1';
    } else if(numberToConvert > 3999){
        resultOutput.innerHTML='Please enter a number less than or equal to 3999';
    } else {
        resultOutput.innerHTML=romanize(numberToConvert)   
    }
}

  //i didn't own this code below, source is from https://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
function romanize (num) {
  if (!+num) return false;
  var digits = String(+num).split('');
  var key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
             '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
             '','I','II','III','IV','V','VI','VII','VIII','IX'];
  var roman = '', i = 3;
  while (i--) roman = (key[+digits.pop() + (i * 10)] || '') + roman;
  return Array(+digits.join('') + 1).join('M') + roman;
}