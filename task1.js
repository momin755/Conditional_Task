
// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk
// */

var age = 10;
var price = 800;
if( age <= 10){
    //50% Discound
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if( age >= 60){
    //discount 15%
    const discount1 = price * 50 / 100;
    const payAmount1 = price - discount;
    console.log(payAmount1);
}
else{
    console.log("Otherwise Regular ticket fare 800 tk")
}