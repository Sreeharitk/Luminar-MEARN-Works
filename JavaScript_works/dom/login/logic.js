login = ()=>{
    uname = user.value
    //store - local storage
    localStorage.setItem("userName",uname)
    //redirect to home.html page
    window.location = "home.html"
}