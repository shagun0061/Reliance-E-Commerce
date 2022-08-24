

//For crauser div

let images=document.querySelector("#crauseImg");
    let btn=document.querySelectorAll(".carusebtn");

    let imgNum=0;
    let imgArray=[
        "https://www.reliancedigital.in/medias/SONY-BRAVIA-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3w5Nzc2N3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGVlLzk4NzMxNTg5NjMyMzAuanBnfGIxMzdhM2VmMTBhMjZmODZhOGI1MzBjYWZiNzNlYmMwYzg0MGY2ZTY2Y2I0MjlkOTBjY2NmNWZhZmVlNTdlN2M",
        "https://www.reliancedigital.in/medias/LG-RD-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDA3MDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDk1L2g0Yy85ODczMTU5NDU0NzUwLmpwZ3xiNWE2MDQyMTY2NjA5ZTgwYjE3ZDMyNWQ2MDEzNTIyNTAzYmUyNGUzOGE3ZjYzOGQwNTFkZmEwYTcyZjViM2E1",
        "https://www.reliancedigital.in/medias/RD-website-banners-Website-version-1365-X-260-px-TV.png?context=bWFzdGVyfGltYWdlc3wxMzQ1MTF8aW1hZ2UvcG5nfGltYWdlcy9oMDEvaDNhLzk4NjI0NjcxNTgwNDYucG5nfGNmMDhkNjFlZTNkYzczNDgxZjBjMmIyMmUzMjRiMjBkMmY2ZDkwYTAwNDBlZjhhZDc3NzMzZWEzMmU1ZmZhZjA",
        "https://www.reliancedigital.in/medias/iffalcon-tv-RD-CLP-CLP-D-.jpg?context=bWFzdGVyfGltYWdlc3w5ODk0OXxpbWFnZS9qcGVnfGltYWdlcy9oNjYvaGE3Lzk4NzI2MDg5NTIzNTAuanBnfDUyODYzZWE4YjZlY2Y4MmNiMGM2ZTYzMjU0NTdkMGU5MDYyNTRhMzk5OWJjNjc2ZmM3ZTg2Nzk4NzcyOTUwMjE",

    ];

    btn[0].addEventListener("click",function(){

        if(imgNum===0){
            imgNum=imgArray.length-1
        }else{
            imgNum--;
        }
        images.setAttribute("src",imgArray[imgNum]);
    });

    btn[1].addEventListener("click",function(){

        if(imgNum===imgArray.length-1){
            imgNum=0
        }else{
            imgNum++;
        }
        images.setAttribute("src",imgArray[imgNum]);
    });

