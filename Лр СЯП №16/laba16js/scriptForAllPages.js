document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("nav ul li");

    menuItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            const submenu = this.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseout", function() {
            const submenu = this.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });
});

let spans = document.querySelectorAll("span");
for(let i = 0; i < spans.length; i++){
    // 1
    spans[i].onmouseover = function (){
        spans[i].style.color = "#FF8029";
    };

    spans[i].onmouseout = function (){
        if (spans[i].id === 'footer')
            spans[i].style.color = "white";
        else
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