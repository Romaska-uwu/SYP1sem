let spans = document.querySelectorAll("span");
for(let i = 0; i < spans.length; i++){
    // 1
    spans[i].onmouseover = function (){
        spans[i].style.color = "#FF8029";
    };

    spans[i].onmouseout = function (){
        spans[i].style.color = "black";
    };

    // 2
    spans[i].onclick = function (){
        if(spans[i].style.fontSize !== "1.5em")
            spans[i].style.fontSize = "1.5em";
        else
            spans[i].style.fontSize = "1em";
    };
}

// 3
let img1 = document.getElementById("img1");
img1.onclick = () => {
    let firstImg = "https://phonoteka.org/uploads/posts/2022-09/1663364780_11-phonoteka-org-p-eddsvorld-arti-instagram-12.jpg";
    let secondImg = "https://i.pinimg.com/236x/c2/6a/4a/c26a4a86d99d8b350a7ed12c338f9f05.jpg";
    if (img1.src === firstImg)
        img1.src = secondImg;
    else
        img1.src = firstImg;
}

// 4
let p1 = document.getElementById("p1");
p1.onclick = () => {
    let defaultImg = "https://i.pinimg.com/originals/2f/60/37/2f6037920a27203b7af1011a61fe99ad.gif";
    p1.innerHTML = '<img src= ' + defaultImg + ' alt="" >';
};

// 5
let imgs = document.querySelectorAll("img");
for(let i = 0; i < imgs.length; i++){
    imgs[i].onmouseover = function (){
        imgs[i].width = "1000";
    };

    imgs[i].onmouseout = function (){
        imgs[i].width = "500";
    };
}

// 6
let p2 = document.getElementById("p2");
p2.ondblclick = () => {
    if(!p2.style.border)
        p2.style.border = "solid blue 10px";
    else
        p2.style.border = "";
};
