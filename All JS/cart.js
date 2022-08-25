let user = [
  
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];
console.log("🚀 ~ file: cart.js ~ line 14 ~ user", user);
let x= user.length;
 document.querySelector('#totalitems').innerText=`My Cart (${x} Items)`;
//!  Append

let append = (data) => {
  data.forEach(function (ele, index) {
    let maindiv = document.createElement("div");
    maindiv.setAttribute("id", "CPmaindiv");
    let upperdiv = document.createElement("div");
    upperdiv.setAttribute("id", "CPupperdiv");
    let lowerdiv = document.createElement("div");
    lowerdiv.setAttribute("id", "lowerdiv");
    // ! img/ titel / discription
    let imgdiv = document.createElement("div");
    let titeldiv = document.createElement("div");
    let discriptiondiv = document.createElement("div");
    upperdiv.append(imgdiv, titeldiv, discriptiondiv);
    // ? imgdiv
    let img = document.createElement('img');
      img.src=ele.image;
      img.setAttribute("id","oneimg")
      let min = document.createElement('button');
      min.innerText="-"
      let cen = document.createElement('button');
      cen.innerText="0"
      cen.setAttribute("id","changecen")
      let plus = document.createElement('button');
      plus.innerText="+"
      plus.setAttribute("click",plusfun)
      
      let quantity = document.createElement('div');
      quantity.setAttribute("id","threebtnouter")
      quantity.append(min,cen,plus)
      imgdiv.append(img,quantity)

    // ?  titel
    let titel = document.createElement("h3");
    titel.innerText = ele.title;
    let id = document.createElement("p");
    id.innerText = ele.id;
    titeldiv.append(titel, id);
    // ? discription
    let price = document.createElement("h2");
    price.innerText = `₹${ele.price}`;
    price.setAttribute("id","changePrice")
    let mrp = document.createElement("p");
    mrp.innerText = `M.R.P.: ₹${ele.price + 800}  Inclusive of all taxes`;
    let save = document.createElement("p");
    save.innerText = "You Save: 27%(₹805)";
    save.style.marginTop="-14px"
    let Free_Shipping = document.createElement("p");
    Free_Shipping.innerText = "Free Shipping";
    Free_Shipping.style.color = "green";
    let Delivery = document.createElement("p");
    Delivery.innerText =
      "*Delivery assurance is subject to our delivery locations staying open as per govt. regulations";
    Delivery.style.color = "blue";
    Delivery.style.fontFamily = "sans-serif";
    discriptiondiv.append(price, mrp, save, Free_Shipping, Delivery);

    // ! remove button
    let removebtn = document.createElement("button");
    removebtn.innerText = "REMOVE";
    let movetowhbtn = document.createElement("button");
    movetowhbtn.innerText = "Move to wishlist";
    lowerdiv.append(removebtn, movetowhbtn);

    maindiv.append(upperdiv, lowerdiv);
    document.querySelector("#cartProduct").append(maindiv);
  });
};
append(user);
 function plusfun(){

 }