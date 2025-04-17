let totalReviews = parseInt(localStorage.getItem('reviewCount')) || 0;

// Incrementa o contador
totalReviews++;

// Salva o novo valor no localStorage
localStorage.setItem('reviewCount', totalReviews);

// Atualiza o texto na página
document.getElementById('totalReviews').textContent = totalReviews;

// Atualiza o ano atual no rodapé
document.getElementById('currentYear').textContent = `©${new Date().getFullYear()}`;