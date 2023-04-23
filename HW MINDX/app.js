// // tinh binh phuong cho tung so
// let num = [3, 4, 5, 6, 4, 5, 6, 7, 7, 77];

// BT1
let numbers = [3, 4, 5, 6, 4, 5, 6, 7, 7, 77];
let squares = [];
for(let i = 0; i < numbers.length; i++) {
    let square = numbers[i]*numbers[i];
    squares.push(square);
}
console.log("Bình phương của từng số theo thứ tự là: ",squares);




// // tim so nguyen to
// let num2 = [3, 5, 6, 6, 7, 8, 8, 8, 9, 9, 33];

let numberss = [3, 5, 6, 6, 7, 8, 8, 8, 9, 9, 33];
let primes = [];
for(let i=0; i<numberss.length; i++) {
    let num = numberss[i];
    if(num<2) continue;
    let isPrime =true;
    for(let j = 2; j<num; j++){
        if(num % j===0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        primes.push(num);
    }
}
console.log("Số nguyên tố của dãy số trên là: ",primes);

// // tao mot gio hang hoa qua
// (ten qua, mau, noi san xuat, ngay het han, don vi phan phoi (ten don vi, dia  chi don vi))
// - Thêm prompt:  Sửa ngày hết hạn theo index

//new
let cart = [
{
    name: "Táo",
    origin: "Tàu",
    expirationDate: "2022",
    distributor: {
        name: "Tung của 1",
        address: "China"},
    },

{
    name: "Cam",
    origin: "Vân Canh",
    expirationDate: "2022",
    distributor: {
        name: "HTX Camcam",
        address: "Việt Nam"},
    },
{
        name: "Quýt",
        origin: "Xịn",
        expirationDate: "2022",
        distributor: {
            name: "HTX Quit",
            address: "Việt Nam"},
        },
];

for(let i=0; i<cart.length; i++) {
    let newExpirationDate = prompt (" Nhập Hạn sử dụng mới: "+ cart[i].name +":");
    cart[i].expirationDate = newExpirationDate;};

    for(let i = 0; i < cart.length; i++) {
        console.log("Tên: ",cart[i].name);
        console.log("Xuất xứ: ",cart[i].origin);
        console.log("Hạn sử dụng: ",cart[i].expirationDate);
        console.log("NPP: ",cart[i].distributor.name);
        console.log("Địa chỉ NPP: ",cart[i].distributor.address);
    };
    

