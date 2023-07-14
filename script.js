//your JS code here. If required.
let str = prompt("Enter a String");
let i = 0;
let j = 0;

while(i < str.length) {
  if(str[i] === str[j]) {
    i++;
  }
  else {
    if(i-j <= 1){
      console.log(str[j]);
      break;
    }
    j=i;
    i++;
  }
}