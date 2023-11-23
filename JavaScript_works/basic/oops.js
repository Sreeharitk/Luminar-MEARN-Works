// class Pearson{
//     //always start with capital letter while naming a class
//     //class consists of methods(functions) and attributes(variables)
//     walk(){
//         console.log("Pearson is walking");
//     }
//     read(){
//         console.log("Pearson is reading");
//     }
// }

// obj1 = new Pearson //creating a new object with "new" Keyword
// obj1.walk() //accessing and running a method from class
// obj2 = new Pearson //we can create multiple objects from a single class
// obj2.read()


// class Pearson{
//     details(name,age,location){
//         this.name = name
//         this.age = age
//         this.place = location
//     }
//     displayDetails(){
//         console.log("This Perason's name is",this.name);
//         console.log("This Perason's age is",this.age);
//         console.log("This Perason's place is",this.place);
//     }
// }
// pe1 = new Pearson
// pe1.details("Sreehari",23,"Kochi")
// pe1.displayDetails()
// console.log("-------------------------");
// pe2 = new Pearson
// pe2.details("Jazim",23,"Kannur")
// pe2.displayDetails()


// class Student{
//     college = "SOE" //this is a class attribute
//     setValues(name,roll){//these are method attributes
//         this.name = name
//         this.roll = roll
//     }
//     display(){
//         console.log("Student's Name is",this.name);
//         console.log("Student's Roll.No is",this.roll);
//         console.log("Student's College is",this.college);
//     }
// }
// st1 = new Student
// st1.setValues("Sreehari",82)
// st1.display()
// console.log(st1);//{ college: 'SOE', name: 'Sreehari', roll: 82 } - this represents an object from the class Student
// console.log("---------------------");
// st2 = new Student
// st2.setValues("Jazim",19)
// st2.display()


// class Employee{
//     constructor(id,name){
//         console.log("__Constructor method worked___");
//         this.id = id
//         this.name = name
//     }
//     display(){
//         console.log(this.id,this.name);
//     }
// }
// emp1 = new Employee(1,"Sreehari")
// emp1.display()
// console.log(emp1);
// emp2 = new Employee(2,"Jazim")
// emp2.display()


// class Bank{
//     constructor(acno,name,bankName){
//         this.acno = acno
//         this.name = name
//         this.bankName = bankName
//         this.balance = 0
//         console.log(this.acno,this.name,this.bankName,this.balance);
//     }
//     deposit(damnt){
//         this.balance += damnt
//         console.log("Amount of",damnt,"Have been credited");
//         this.balanceAmt()
//     }
//     withdraw(wamnt){
//         if(wamnt>this.balance){
//             console.log("Not enough balance");
//         }else{
//             this.balance -= wamnt
//             console.log("Amount of",wamnt,"have been debited");
//             this.balanceAmt()
//         }
//     }
//     balanceAmt(){
//         console.log("Remaining balance is",this.balance);
//     }

// }

// cus1 = new Bank("1234","Sreehari","SBI")
// cus1.deposit(1200)
// cus1.withdraw(1100)
// cus1.deposit(300)

// cus2 = new Bank("2345","Jazim","Baroda")
// cus2.deposit(200)
// cus2.withdraw(400)
// cus2.balanceAmt()

// class Calculator{
//     constructor(n1,n2){
//         this.n1 = n1
//         this.n2 = n2
//     }
//     add(){
//         console.log(this.n1+this.n2);
//     }
//     sub(){
//         console.log(this.n1-this.n2);
//     }
//     mul(){
//         console.log(this.n1*this.n2);
//     }
//     div(){
//         console.log(this.n1/this.n2);
//     }
// }
// Calc = new Calculator(5,5)
// Calc.add()
// Calc.mul()
// Calc.sub()
// Calc.div()  


//Inheritance(single inheritance)
// class A{ // parent class,Super class, Base class
//     methodA(){
//         console.log("A class");
//     }
// }
// class B extends A{ //here the class B inherits Class A properties(Method) (child class,sub class,derived class)
//     methodB(){
//         console.log("B class");
//     }
// }
// obj = new B
// obj.methodA()
// obj.methodB()


//Multi-level Inheritance
// class A{ // parent class,Super class, Base class
//     methodA(){
//         console.log("A class");
//     }
// }
// class B extends A{ //here the class B inherits Class A properties(Method) (child class,sub class,derived class)
//     methodB(){
//         console.log("B class");
//     }
// }
// class C extends B{//here C inherits B class
//     methodC(){
//         console.log("C class");
//     }
// }
// obj = new C
// obj.methodC()
// obj.methodB()
// obj.methodA()


//POLYMORPHISM(Many-form)

//Method Overloading
// class A{
//     method(n){
//         console.log("First",n);
//     }
//     method(){
//         console.log("Second");
//     }
// }
// obj = new A()
// obj.method(5)//this will call first method because we have given the parameter
// obj.method()//this will call 2nd method since no parameters are given
//but since JS does not support method overloading it always displays the 2nd method

//Method Overriding
// class Parent{
//     buyPhone(){
//         console.log("Samsung");
//     }
// }
// class Child extends Parent{
//     buyPhone(){
//         console.log("Iphone");
//     }
// }
// ch = new Child()
// ch.buyPhone()
//here the last method which calls iphone works instead of samsung because it overrides parent method

