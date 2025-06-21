// let menuIcon=document.querySelector('#menu-icon');
// let navbar=document.querySelector('.navbar');
// let sections=document.querySelectorAll('section');
// let navLinks=document.querySelectorAll('header nav a');

// window.onscroll=()=>{
//     sections.forEach(sec=>{
//         let top=window.SecuritY;
//         let offset=sec.offsetTop-150;
//         let height=sec.offsetHeight;
//         let id=sec.getAttribute('id');


//         if (top>=offset && top<offset+height){
//             navLinks.forEach(links=>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a [href*=' + id+']').classList.add('active')
//             })
//         }
//     })
// }





// menuIcon.onclick=()=>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
function toggleReadMore() {
    var description = document.querySelector('.project-description');
    var button = document.querySelector('.read-more-btn');
    
    description.classList.toggle('expanded');
    
    if (description.classList.contains('expanded')) {
        button.textContent = "Read Less";
    } else {
        button.textContent = "Read More";
    }
}
