var theString = prompt("Text to convert")
var theChars = theString.split('')
var numbers = [];
var biaArray = [];
var finalHex = '';
var finalString = '';
var alp = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '9', 'a', 'b', 'c', 'd', 'e', 'f']
var tempNum;
var tempHexChars = '';
var tempChar;
var tempBia = '';
var tempHex = '';

for (let i = 0; i < theChars.length; i++) {
    for (var k = 0; k < alp.length; k++) {
        if (alp[k] == theChars[i].toLowerCase()) {
            numbers[i] = k;

        }
    }
}
for (var i = 0; i < numbers.length; i++) {
    tempNum = numbers[i]
    if (theChars[i].toUpperCase() == theChars[i]) {
        tempBia += "010"
    } else {
        tempBia += "011"
    }
    if (tempNum >= 16) {
        tempBia += "1"
        tempNum -= 16;
    } else {
        tempBia += "0"
    }
    if (tempNum >= 8) {
        tempBia += "1"
        tempNum -= 8;
    } else {
        tempBia += "0"
    }
    if (tempNum >= 4) {
        tempBia += "1"
        tempNum -= 4;
    } else {
        tempBia += "0"
    }
    if (tempNum >= 2) {
        tempBia += "1"
        tempNum -= 2;
    } else {
        tempBia += "0"
    }
    if (tempNum >= 1) {
        tempBia += "1"
        tempNum -= 1;
    } else {
        tempBia += "0"
    }
    if (tempBia == "01000000") {

        finalString += "00100000 "
        biaArray[i] = "00100000"
    } else { 
        finalString +=  tempBia + " " 
        biaArray[i] = tempBia
    }
    tempBia = '';
    tempNum = 0;
}
for (var i = 0; i < biaArray.length; i++) {
    tempNum = 0
    tempChar = biaArray[i].substr(0, 4)
    tempHexChars = tempChar.split('')
    if(tempHexChars[0] == '1') {
        tempNum += 8
    }
    if(tempHexChars[1] == '1') {
        tempNum += 4
    }
    if(tempHexChars[2] == '1') {
        tempNum += 2
    }
    console.log(""+tempHexChars[0]+tempHexChars[1]+tempHexChars[2]+tempHexChars[3])
    if(tempHexChars[3] == '1') {
        tempNum += 1
    }
    
    switch(tempNum) {
        case 10:
            finalHex += ' a'
            break;
        case 11:
            finalHex += ' b'
            break;
        case 12:
            finalHex += ' c'
            break;
        case 13:
            finalHex += ' d'
            break;
        case 14:
            finalHex += ' e'
            break;
        case 15:
            finalHex += ' f'
            break;
        default:
            finalHex += tempNum;
            break;
            
    }
    tempNum = 0
    tempChar = biaArray[i].substr(4)
    tempHexChars = tempChar.split('')
    if(tempHexChars[0] == '1') {

        tempNum += 8
    }
    if(tempHexChars[1] == '1') {

        tempNum += 4
    }
    if(tempHexChars[2] == '1') {

        tempNum += 2
    }
    if(tempHexChars[3] == '1') {

        tempNum += 1
    }

    switch(tempNum) {
        case 10:
            finalHex += 'a'
            break;
        case 11:
            finalHex += 'b'
            break;
        case 12:
            finalHex += 'c'
            break;
        case 13:
            finalHex += 'd'
            break;
        case 14:
            finalHex += 'e'
            break;
        case 15:
            finalHex += 'f'
            break;
        default:
            finalHex += tempNum;
            break;
            
    }
    finalHex += ' '
}

console.log(finalString + "\n" + finalHex)
alert(finalString + "\n" + finalHex)

