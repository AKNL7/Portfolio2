let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY; 
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
        
        

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {

//                 console.log(links);
//                 links.classList.remove('active'); 
//                 document.querySelector('header nav a [href*=' + id + '] ').classList.add('active');
//             })
//         }
//     })
// }

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

document.addEventListener('click', function(event) {
    // Check if the clicked element is not part of the navbar
    if  (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
    //   If not, close the navbar (hide it)
    //   navbar.style.display = 'none';
        navbar.classList.remove('active');
        menuIcon.classList.toggle('bx-x');

    }
  });