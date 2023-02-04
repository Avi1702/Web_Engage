let mail=JSON.parse(localStorage.getItem("Email"))  
let num=JSON.parse(localStorage.getItem("Phone"))
let code=JSON.parse(localStorage.getItem("Code"))


/*Getting the details from localstorage and dynamically assigning to thankyou.html page*/ 
document.getElementById("thanks").innerText= `Thanks a ton for taking out your precious time and for completing the survey Email:  ${mail} Contact: ${code} ${num}`


/* Function to get back to home page*/ 
const GoBack=()=>{
    location.assign("./index.html")
}
