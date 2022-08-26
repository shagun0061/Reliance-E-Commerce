//  document.querySelector('#address').addEventListener("click",address);
function address() {
  console.log("hi");
  document.querySelector("#oneAdress").style.display = "block";
}
function cancel(){
    document.querySelector("#oneAdress").style.display = "none";
}
function submit() {
  let user = {
    name: document.querySelector("#fname").value,
    l: document.querySelector("#Lname").value,
    address:document.querySelector("#CN").value,
    pincode:document.querySelector("#pincode").value,
    mobileNo:document.querySelector("#no").value,
  };
  localStorage.setItem("uesrAdress",JSON.stringify(user));
  document.querySelector("#oneAdress").style.display = "none";

append();
}
function append(){
    let totalprice=JSON.parse(localStorage.getItem("totalprice"));
    console.log("🚀 ~ file: chechout.js ~ line 24 ~ append ~ totalprice", totalprice)
    document.querySelector("#oneAdress2").style.display="block";
    let newAdress=JSON.parse(localStorage.getItem("uesrAdress"))||{};
    document.querySelector("#Shippingadress").style.display = "none";
     let div = document.createElement('div');
     let name = document.createElement('h2');
     name.innerText=(newAdress.name+newAdress.l)
     let add = document.createElement('p');
     add.innerText=newAdress.address;
     let pin = document.createElement('p');
     pin.innerText=newAdress.pincode;
     let mo = document.createElement('p');
     mo.innerText=newAdress.mobileNo;
     let but = document.createElement('button');
     but.innerText="DELEVER HERE"
     but.style.backgroundColor="red";
     but.style.color="white"
     div.append(name,add,pin,mo,but);
     document.querySelector("#oneAdress2").append(div);
     document.querySelector('#subto2').innerText=totalprice;
     document.querySelector('#subto1').innerText=totalprice;
}
