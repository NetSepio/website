const navbar = document.querySelector('.menu');
const hoverLinks = document.querySelector('.hover-links');
navbar.addEventListener('click',() => {
    hoverLinks.classList.toggle('show');
});
navbar.addEventListener('click',()=> {
    if(navbar.classList.contains('fa-bars'))
    {
        navbar.classList.remove("fa-bars");
        navbar.classList.add("fa-xmark");
    }
    else {
        navbar.classList.remove("fa-xmark");
        navbar.classList.add("fa-bars");
    }
    
})
window.addEventListener('size',()=> {
})