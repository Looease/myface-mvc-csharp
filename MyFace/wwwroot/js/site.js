const element = document.getElementById("mobile-menu");


document.getElementById("mobile-menu-button").addEventListener("click", function()
{
    if(element.classList.contains("open")){
        element.classList.remove("open");
    }else{
        element.classList.add("open");
    } 
});

document.getElementById("menu-overlay").addEventListener("click", function(){
    element.classList.remove("open");
} );

