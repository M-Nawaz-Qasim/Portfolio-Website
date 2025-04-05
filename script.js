
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });
    document.getElementById('header').style.position = 'sticky';

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

var typed = new Typed('.hi', {
    strings: ["Web Services", "Frontend Development","Backend Development", "Andorid Developemtn", "Unity Game Development", "WordPress Development", "SEO Service", "Data Entry Services"],
    typeSpeed: 120,
    backSpeed: 120,
    loop : true
});

let toggle = false;

function inlen() {
    const para = document.querySelector('.p');
    const button = document.getElementById('btn');

    if (!toggle) {
        para.style.height = "auto"; 
        para.style.overflow = "visible";
        button.innerText = "Show Less";
    } else {
        para.style.height = "18vh"; 
        para.style.overflow = "hidden";
        button.innerText = "Read More..";
    }
    
    toggle = !toggle;
}

// var image = document.getElementById('change');

// function Changeme() {
//     if (document.body.classList.contains('dark')) {
//         image.src = 'moon.svg'; 
//     } else {
//         image.src = 'sun.svg'; 
//     }
//     document.body.classList.toggle("dark");
// }




var aside = document.querySelector('.aside');
var ul = document.querySelector('ul');
var links = ul.querySelectorAll('a');  

function side() {
    if (aside.style.width === '0px' && ul.style.display === 'none') {
        aside.style.width = '200px';
        ul.style.display = 'block';
    } else {
        aside.style.width = '0px';
        ul.style.display = 'none';
    }
}

links.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            aside.style.width = '0px';
            ul.style.display = 'none';
        }
    });
});
