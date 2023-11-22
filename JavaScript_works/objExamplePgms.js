// const users=[
//     {id:100,first_name:"ram",email:"ram@gmail.com",dept:"sales",salary:25000},
//     {id:101,first_name:"ravi",email:"ravi@gmail.com",dept:"it",salary:28000},
//     {id:102,first_name:"raju",email:"raju@gmail.com",dept:"ba",salary:35000},
//     {id:103,first_name:"rahul",email:"rahul@gmail.com",dept:"devop",salary:45000},
//     {id:104,first_name:"akhil",email:"akhil@gmail.com",dept:"devop",salary:55000},
//     {id:105,first_name:"aravind",email:"aravind@gmail.com",dept:"qa",salary:65000},
//     {id:106,first_name:"ajay",email:"ajay@gmail.com",dept:"qa",salary:28000},
// ]
//1.find total number of users
// console.log(users.length);

//2.print names of develop
// console.log(users.filter(i=>i.dept=="devop").map(i=>i.first_name));

//3.print the mail id of user whose user id is 102
// console.log(users.find(i=>i.id==102).email);

//4.print the user dept who have highest salary
// console.log(users.reduce((a,b)=>a.salary>b.salary?a:b).dept);

//5.salary of users whose dept is devop
// console.log(users.filter(i=>i.dept=="devop").map(i=>i.salary));

//6.sort the users according to their salaries
// console.log(users.sort((a,b)=>a.salary-b.salary));

//7.find the user who have lowest salary
// console.log(users.reduce((a,b)=>a.salary<b.salary?a:b).first_name);


var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
 
  ]

//1.Print all gpay transactions?
// console.log(accounts.map(i=>i.transactions).flat().filter(i=>i.method=="g-pay"));

//2.print all transaction whose amount>3000?
// console.log(accounts.map(i=>i.transactions).flat().filter(i=>i.amount>3000));

//3.print credit transaction of account 1002?
// console.log(accounts.map(i=>i.transactions).flat().filter(i=>i.to==1002).map(i=>i.amount));

//4.print debit transaction of account 1002?
// console.log(accounts.find(i=>i.acno==1002).transactions.map(i=>i.amount));

//5.print highest balance ac details?
// console.log(accounts.reduce((a,b)=>a.balance>b.balance?a:b));