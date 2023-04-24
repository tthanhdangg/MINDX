function calculateAge(yearOfBirth) {
    if(yearOfBirth >= 2023) {
      console.log("you go from the future");
    } else {
      console.log(2023 - yearOfBirth);
    }
  }
  calculateAge(2003);
  
  function totalOfCompany(benifitOfEmployee) {
    let sum = 0;
    for (let i = 0; i < benifitOfEmployee.length; i++) {
  
      sum += benifitOfEmployee[i];    
    }
    return sum;
  }
  
  let ACompany = totalOfCompany([2,3,4,5,6,7,5,6]);
  let BCompany = totalOfCompany([5,6]);
  
  console.log(BCompany);
  console.log(ACompany);


function vendingMachine (money,numberOfProduct) {
switch (numberOfProduct) {
    case 1:
        console.log("cocacola");
         return money - 2;
    case 1:
        console.log("pepsi");
        return money - 2;
}
}

let total = prompt(" Please insert money:" );
let fund = vendingMachine (10,6);
console.log(fund);