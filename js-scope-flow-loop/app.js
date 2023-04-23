{
//let, const chỉ sử dụng được trong scope
}


// if(condition){
//     //statement true
// } else {
//     //statement fail
// }


// age = 18;
// if (age <= 18) {
//     console.log("Boy");
// } else {
//     console.log("man");
// }

// let i = 18;
// if (i> 0 && i <= 10){
//     console.log("Xỉu");
// } else if (i>=11 && i <= 23){
//     console.log ("tài");
// } else {
//     console.log ("?????");
// }

// switch(1) {
//     case 1:
//     case 2:
    
//     default:
//         break;
// }

// let a = 10;
// let b = 15;
// if(a>b) {
//     console.log ("a lon hon b");
// }

// if (a === "10") {
//     console.log ("hello");
// }

// for (let step=0; step <= 8; step++ ){
//     console.log(step);
// }

console.log ("start");
for (let i = 0; i< 10; i++) {
    let number = prompt("enter number");
    console.log(`${i} times.`);
    let random = Math.round(Math.random()*23);
    console.log("random");
    if (number == random){
        console.log ("winner");
    }
}