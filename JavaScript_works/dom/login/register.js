function registered(){
    //storing values
    userName = user.value
    password = psw.value
    cPassword = cpsw.value
    //logic for checking already registered users
    if(userName in localStorage){
        alert("Already registered")
    }else{
        noMatch.innerHTML = ""
        //checking if passwords match 
        if(password==cPassword){
            //create a collection for users
            users = {userName,password}
            //storing in local storage
            localStorage.setItem(userName,JSON.stringify(users))
            alert("Registered successfully")
        }else{
            noMatch.innerHTML = "Passwords doesnt match"
        }
    }
}