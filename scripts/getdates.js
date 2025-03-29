let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('lastModified').textContent = `LastModification: ${document.lastModified}`;