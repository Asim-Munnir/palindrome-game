function reverseString(str){

    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
function palindromeCheck(){
    let msg = document.getElementById("msg").value;
    let ans = document.getElementById("answer");
    msg = msg.toLowerCase();
    if(msg == reverseString(msg)){
        ans.innerHTML = `yes '${msg}' is a palindrome`;
    }
    else{
        ans.innerHTML = `isn't '${msg}' is not a palindrome`;
    }
