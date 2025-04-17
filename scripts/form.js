const products = [
    {
      id: "product1",
      name: "Flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp equalizer",
      averagerating: 5.0
    }
  ];

  const productSelect = document.getElementById('product_name');

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });


  // Contador de avaliações
const reviewCounter = document.getElementById('reviewCounter');

// Verificar se já existe um contador no localStorage
if (localStorage.getItem('reviewCount')) {
    reviewCounter.textContent = localStorage.getItem('reviewCount');
  }

  // Atualizar o contador de avaliações quando o formulário for enviado
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o envio do formulário para testes locais

  // Atualiza o contador
  let count = parseInt(localStorage.getItem('reviewCount')) || 0;
  count++;
  localStorage.setItem('reviewCount', count);

  // Atualiza o contador na página
  reviewCounter.textContent = count;

  // Aqui você pode adicionar qualquer ação após o envio, como redirecionamento
  alert('Review Submitted!'); // Teste visual
});