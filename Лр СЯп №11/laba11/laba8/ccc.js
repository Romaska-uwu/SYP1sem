// 1
$("span").mouseover(function(){
    $(this).css("color", "#FF8029");
});

$("span").mouseout(function(){
    $(this).css("color", "black");
});

// 2
$("span").click(function(){
    if($(this).css("font-size") !== "1.5em") {
        $(this).css("font-size", "1.5em");
    } else {
        $(this).css("font-size", "1em");
    }
});

// 3
$("#img1").click(function(){
    let firstImg = "https://phonoteka.org/uploads/posts/2022-09/1663364780_11-phonoteka-org-p-eddsvorld-arti-instagram-12.jpg";
    let secondImg = "https://i.pinimg.com/236x/c2/6a/4a/c26a4a86d99d8b350a7ed12c338f9f05.jpg";
    if ($(this).attr("src") === firstImg) {
        $(this).attr("src", secondImg);
    } else {
        $(this).attr("src", firstImg);
    }
});

// similarly for img2

// 4
$("#p1").click(function(){
    let defaultImg = "https://i.pinimg.com/originals/2f/60/37/2f6037920a27203b7af1011a61fe99ad.gif";
    $(this).html('<img src=' + defaultImg + '>');
});

// 5
$("img").mouseover(function(){
    $(this).width(1000);
});

$("img").mouseout(function(){
    $(this).width(500);
});

// 6
$("#p2").dblclick(function(){
    if(!$(this).attr("style")) {
        $(this).css("border", "double #FF8029 5px");
    } else {
        $(this).attr("style", "");
    }
});