var email=""
var phoneNumber=""
var code=""

/*Funtion to store the email when entered by user*/ 
const setEmail=()=>{
    email=document.getElementById("email").value
   
}

/*Funtion to store the phone number when entered by user*/ 

const setNumber=()=>{
    phoneNumber=document.getElementById("number").value
}

/*Funtion to store the country code when seleted by user*/ 
const setCode=()=>{
    code=document.getElementById("code").value
    console.log(code)
    
}


/*Funtion to store the user details in localstorage*/ 
const submit=()=>{
    
    if(phoneNumber.length<10){
        alert("Phone number length can't be less than 10")
    }
    else if(phoneNumber.length>10){
        alert("Phone number length can't be greater than 10")
    }
    else if(!email.includes("@gmail.com")){
        alert("Inproper email or phone number")
    }
    else{
 
    localStorage.setItem("Email", JSON.stringify(email))
    localStorage.setItem("Phone",JSON.stringify(phoneNumber))
    localStorage.setItem("Code",JSON.stringify(code))

    location.assign("./thankyou.html")
           
}
  
}


