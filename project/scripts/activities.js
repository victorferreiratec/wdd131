let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `lastModified: ${document.lastModified}`;

const activities = [
    {
      image: "images/picnic.jpg",
      alt: "Activity 1",
      title: "Picnic in the Park",
      description: " Gather family and friends at a park or outdoor area for a picnic. Prepare sandwiches, snacks, and drinks, and enjoy the day with games, conversations, and relaxation.",
      duration: "One night",
      difficulty: "Easy"
    },
    {
      image: "images/movie.jpg",
      alt: "Activity 2",
      title: "Movie Night at Home",
      description: "Organize a movie night at home with films for all tastes. Have a marathon of comedy, action, or even classic films.",
      duration: "1 to 5 hours",
      difficulty: "Easy"
    },
    {
      image: "images/hunt.webp",
      alt: "Activity 3",
      title: "Outdoor Scavenger Hunt",
      description: "Plan a scavenger hunt at home or in a local park. Create clues and challenges that guide participants from one spot to the next until they find the 'treasure.'",
      duration: "1 Day",
      difficulty: "Moderate"
    },
    {
      image: "images/camping.jpg",
      alt: "Activity 4",
      title: "Camping",
      description: "Adventure on an unforgettable expedition! Enjoy the thrill of the rapids during the day and the magic of the canyon at dusk. Serene nights under the stars and gourmet meals at the campfire complete this unique experience.",
      duration: "2 Days",
      difficulty: "Easy"
    },
    {
      image: "images/emotion.jpg",
      alt: "Activity 5",
      title: "Outdoor Adventure Day (Rafting, Hiking, or Cycling)",
      description: "For groups that enjoy outdoor activities, plan an adventure day with rafting, hiking on trails, or cycling. Choose a location with beautiful scenery and explore nature together.",
      duration: "2 Days",
      difficulty: "Challenging"
    },
    {
      image: "images/game.jpg",
      alt: "Activity 6",
      title: "Game Night Tournament",
      description: "Organize a game night with a variety of board games, card games, or video games. Set up different game stations, and let everyone rotate between them.",
      duration: "1 Days",
      difficulty: "Moderate"
    }
  ];
  
  const activityGrid = document.getElementById("activityGrid");

  activities.forEach(activity => {
    const card = document.createElement("div");
    card.className = "activity-card";
  
    card.innerHTML = `
      <img src="${activity.image}" alt="${activity.alt}">
      <h3>${activity.title}</h3>
      <p>"${activity.description}"</p>
      <ul>
        <li>Duration: ${activity.duration}</li>
        <li>Difficulty: ${activity.difficulty}</li>
      </ul>
    `;
  
    activityGrid.appendChild(card);
  });