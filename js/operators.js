//  <   less than
//  <=  less than or equal to
if (10 <= 20) {
    console.log("10 is less than 20");
}

//  >   greater than
//  >=  greater than or equal to
if (20 >= 10) {
    console.log("20 is greater than 10");
}

//  =   assign to variable
var myPassword = "ou812";

//  ==  comapre values
if (1 == 1) {
    console.log("One is equal to one");
}
//  !=  not equal
if (5 != 1) {
    console.log("Five is not equal to one");
}

//  +   add
var apples = 10 + 5;
//  +=  add to current values
apples += apples;
//  -   subtract
apples - 10;
//  -=  subtract from current values
apples -= apples;
//  *   multiply
var oranges = 10 * 10;
//  /   divide
oranges /= 5;
    
//  ++  increment (add one to)
oranges++;
//  --  decrememt (subtract one from)
oranges--;

//  &&  and
if (apples >= 0 && oranges >= 2) {
    console.log(apples);
    console.log(oranges);
}
//  ||  or
if (apples < 0 || oranges >= 0) {
    console.log("One statement is true");
}