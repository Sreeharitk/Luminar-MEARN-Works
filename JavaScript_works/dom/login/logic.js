login = ()=>{
    userName = uname.value
    password = pass.value

    //checking if user exists
    if(userName in localStorage){
        error.innerHTML = ""
        userObj = JSON.parse(localStorage.getItem(userName))
        if(password == userObj.password){
            error.innerHTML = ""
            window.location = "home.html"
            alert("Login successful")
        }else{
            error.innerHTML = "Incorrect password"
        }
    }else{
        error.innerHTML = "Not registered yet"
    }
}