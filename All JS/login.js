
 let userData=JSON.parse(localStorage.getItem("RegistrationData")) || [];

 let login=(e)=>{
     console.log(userData)
     e.preventDefault();
     let mobileNo=document.getElementById("mobile_no").value;
     let flag=false;

     userData.forEach((el) => {
         if(mobileNo==el.mobile){
             flag=true;
             gotoHomapage(el);
             alert("Login Successful")
         }
     });

     if(flag==false){
         alert("Please Register first!")
     }
 }

 let gotoHomapage=(e)=>{
     console.log(e)
     localStorage.setItem("loginData",JSON.stringify(e));

     window.location.href="index.html"
 }