
// Carrega receitas do localStorage e exibe
const container = document.getElementById("userRecipesContainer");

function renderUserRecipes() {
  const userRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];

  if (userRecipes.length === 0) {
    container.innerHTML = "<p>Nenhuma receita enviada ainda.</p>";
    return;
  }

  userRecipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${recipe.recipeName}</h2>
      <img src="${recipe.imageUrl || 'https://via.placeholder.com/400x200?text=Receita'}" alt="${recipe.recipeName}" loading="lazy">
      <p><strong>Ingredientes:</strong><br>${recipe.ingredients}</p>
      <p><strong>Preparo:</strong><br>${recipe.prepare || 'Não informado.'}</p>
      <p><strong>Data:</strong> ${recipe.date || 'Sem data'}</p>
    `;
    container.appendChild(card);
  });
}

renderUserRecipes();