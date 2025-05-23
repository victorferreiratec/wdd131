function toggleMenu() {
    const navLinks = document.querySelector('.links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('show');
    hamburger.innerHTML = navLinks.classList.contains('show') ? 'X' : '&#9776;';
}

let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
      templeName: "Salvador Brazil",
      location: "Salvador, Bahia, Brazil",
      dedicated: " 2024, October, 20 ",
      area: 29963,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668.jpg"
    },
    {
      templeName: "Recife Brazil",
      location: "Recife, Pernambuco, Brazil",
      dedicated: "2000, December, 15",
      area: 37200,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36780.jpg"
    },
  ];

  createTempleCard(temples);

// Event Listeners for Filters

function getYear(dedicationDate) {
  return parseInt(dedicationDate.split(",")[0].trim());
}

document.querySelector("#oldTemple").addEventListener("click", () => {
  createTempleCard(temples.filter(t => getYear(t.dedicated) <= 1900));
});

document.querySelector("#newTemple").addEventListener("click", () => {
  createTempleCard(temples.filter(t => getYear(t.dedicated) >= 2000));
});

document.querySelector("#largeTemple").addEventListener("click", () => {
  createTempleCard(temples.filter(t => t.area >= 90000));
});

document.querySelector("#smalltemple").addEventListener("click", () => {
  createTempleCard(temples.filter(t => t.area <= 10000));
});


function createTempleCard(filterdTemples) {
  document.querySelector(".grid-container").innerHTML = "";
  filterdTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".grid-container").appendChild(card);
  });
  }