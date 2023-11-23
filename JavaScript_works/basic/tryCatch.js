//try catch - resolving errors
//  function display(){
//     console.log("function working");
// }

try{//this checks the function or method for errors hence it always works
    display()
}
catch(err){//in here, it catches the error and we can display anything here instead of showing the error and stopping the pgm
    console.log("error occured is:",err);//here if we give a para to catch block we can use that para to display the error name
}
finally{//this always works wheather in the case of error or not(optional)
    console.log("Always works");
}