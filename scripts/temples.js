function toggleMenu() {
    const navLinks = document.querySelector('.links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('show');
    hamburger.innerHTML = navLinks.classList.contains('show') ? 'X' : '&#9776;';
}

let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('lastModified').textContent = `Last Modification: ${document.lastModified}`;