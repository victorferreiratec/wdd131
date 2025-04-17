let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `lastModified: ${document.lastModified}`;

function toggleMenu() {
    const navLinks = document.querySelector('.links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('show');
    hamburger.innerHTML = navLinks.classList.contains('show') ? 'X' : '&#9776;';
}

const planningItems = [
    {
      image: "images/weekend-planning.jpg",
      alt: "weekend-planning",
      title: "Importance of planning",
      text: "Planning your weekend helps you make the most of your time by balancing rest, fun, and meaningful connections. It also reduces stress, avoids last-minute decisions, and turns your free time into something truly rewarding."
    },
    {
      image: "images/relax.jpg",
      alt: "Benefits",
      title: "Benefits",
      text:` <ul>
      <li>✨ <strong>Expands your horizons</strong> – You discover new cultures, people, traditions, and perspectives.</li>
      <li>🧠 <strong>Stimulates the mind</strong> – Travel boosts creativity and mental flexibility.</li>
      <li>💆 <strong>Reduces stress</strong> – A change of scenery helps you relax and recharge.</li>
      <li>❤️ <strong>Strengthens relationships</strong> – Traveling with loved ones creates unforgettable memories.</li>
      <li>📚 <strong>Provides constant learning</strong> – Every destination teaches you something new about the world and yourself.</li>
    </ul>`
    },
  ];
  
  // Function to create each grid item
  function createGridItem({ image, alt, title, text }) {
    const item = document.createElement("div");
    item.className = "grid-item";
  
    item.innerHTML = `
      <img class="planning-img" src="${image}" alt="${alt}" loading="lazy">
      <h3>${title}</h3>
      <p>${text}</p>
    `;
  
    return item;
  }
  
  // Insert the items in the #planning section
  function populatePlanningSection() {
    const section = document.getElementById("planning");
    const container = document.createElement("div");
    container.className = "grid-container";
  
    planningItems.forEach(itemData => {
      const gridItem = createGridItem(itemData);
      container.appendChild(gridItem);
    });
  
    section.appendChild(container);
  }
  
  // Call function on load
  document.addEventListener("DOMContentLoaded", populatePlanningSection);