/* number 1 */
let inpu = prompt("Please enter number");
let starstr = "*   ";

for (i = 0; i < inpu; i++) {

    console.log(starstr);
    starstr = starstr + "*   ";
}
/* number 2 */
let input = prompt("Please enter number");
var start = '';
for (i = 0; i < input; i++) {
    var start = '';
    for (j = 0; j < input; j++) {
        if (j >= ((input - 1) - i)) {
            start = start + "*";
        } else {
            start = start + " ";
        }
    }
    console.log(start);
}
/* number 3 */
/* this is not my code. it was given to me before i could figure the logic out*/
const output = document.getElementById("output")
let n = 4;
/* this controls the rows and each iteration is a lower row */
for(let i = 1; i <= n; i++){
    /* this controls the columns and each increment of j is an additional cloumn */
    for(let j = 1; j <= n; j++){
        /* this checks to see if j is less than or equal to n-1 so that the spaces can be created before the stars on the pyrimid */
        if(j <= n-i){
            document.write("&nbsp  ");
        }
        /* this prints "* " when ever the above condition is false to produce the pyrimid */
        else{
            document.write("*");
            document.write("&nbsp;   ");
        }
    }
    document.write("<br>");
}
/* number 4 */
let input = prompt("Please enter number");
for (i = 0; i < input; i++) {
    var start = '';
    for (j = 0; j < input; j++) {
        if (j == i) {
            start = start + "*";
        } else if (j == ((input - 1) - i)) {
            start = start + "*";
        } else {
            start = start + " ";
        }
    }
    console.log(start);
}