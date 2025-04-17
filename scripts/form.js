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


  // Review counter
const reviewCounter = document.getElementById('reviewCounter');

  // Update rating counter when form is submitted
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevents submission of form for local testing

  // Update the counter
  let count = parseInt(localStorage.getItem('reviewCount')) || 0;
  count++;
  localStorage.setItem('reviewCount', count);

  // Updates the counter on the page
  reviewCounter.textContent = count;

  alert('Review Submitted!');
});