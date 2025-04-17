const totalReviews = localStorage.getItem('reviewCount') || 0;
document.getElementById('totalReviews').textContent = totalReviews;

// Mostrar o ano atual
document.getElementById('currentYear').textContent = `©${new Date().getFullYear()}`