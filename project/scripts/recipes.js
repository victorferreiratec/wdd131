let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `lastModified: ${document.lastModified}`;


const recipes = [
    {
      recipeName: "Gingerbread Cookies",
      ingredients: `<ul>
  <li><strong>Flour:</strong> I traditionally use all-purpose flour for this recipe, but white whole wheat flour will also work.</li>
  <li><strong>Spices:</strong> Ground cinnamon, ginger, cloves and nutmeg.</li>
  <li><strong>Baking soda, salt, egg and vanilla extract:</strong> Because…cookies.</li>
  <li><strong>Molasses:</strong> I recommend using unsulphured molasses.</li>
  <li><strong>Brown sugar:</strong> To add some extra molasses-y flavor to the cookies.</li>
  <li><strong>Butter:</strong> Softened completely to room temperature.</li>
  <li><strong>(Optional) Orange Zest:</strong> The subtle citrus notes pair really nicely with the cinnamon.</li>
    </ul>`,
      prepare: `<ol>
  <li><strong>Whisk together your dry ingredients:</strong> Flour, cinnamon, ginger, baking soda, cloves, salt and nutmeg.</li>
  <li><strong>Beat the dough:</strong> Using a stand mixer or hand mixer, beat the butter and sugar until light and fluffy. Add in eggs and molasses, and beat until combined. Gradually add the flour mixture and beat until just combined.</li>
  <li><strong>Chill the dough:</strong> Divide into two equal portions, shape into disks, wrap in plastic wrap, and refrigerate for about 1 hour until chilled but still pliable.</li>
  <li><strong>Roll and cut the dough:</strong> On a lightly floured surface, roll to about 1/8-inch thick. Cut out desired shapes using cookie cutters. Place on a parchment-lined baking sheet.</li>
  <li><strong>Bake:</strong> Bake at 350°F (180°C) for 8–10 minutes until edges are crisp. Let cool for 5 minutes, then transfer to a wire rack to finish cooling.</li>
  <li><strong>Decorate:</strong> Once cooled, decorate with icing if desired. Enjoy immediately or store in a sealed container (or freeze for later).</li>
</ol>`,
      imageUrl:
      "https://www.academiaassai.com.br/sites/default/files/como-fazer-biscoitos-de-gengibre-com-glace.jpg"
    },
    {
      recipeName: "Fettuccine Alfredo",
      ingredients: `<ul>
  <li><strong>Fettuccine:</strong> Clearly fettuccine is the most popular choice for this recipe, but you can really use any pasta shape that you prefer. I just recommend opting for bronze-cut pasta, whose slightly rough texture will help the creamy alfredo sauce cling to the pasta.</li>
  <li><strong>Half and half:</strong> This blend of cream and milk makes the alfredo sauce perfectly rich and creamy without being too heavy.</li>
  <li><strong>Parmesan:</strong> Freshly-grated Parmesan cheese melts into the creamy sauce and infuses it with nutty, salty, umami flavor.</li>
  <li><strong>Butter and flour:</strong> This classic roux helps to thicken the alfredo sauce while giving it extra layers of rich buttery flavor.</li>
  <li><strong>Garlic:</strong> I recommend either grating or pressing fresh garlic for this recipe so that it cooks smoothly into the sauce without any lumps.</li>
  <li><strong>Seasonings:</strong> We’ll use a touch of fine sea salt, white pepper and ground nutmeg to lightly season the sauce. (Please note that white pepper is more intense than black pepper, so we’ll only use a pinch.)</li>
  <li><strong>Parsley (optional):</strong> Feel free to top the dish with a sprinkling of finely chopped fresh parsley for a pop of color and fresh flavor.</li>
  <li><strong>Pan-seared chicken (optional):</strong> Feel free to make a quick batch of pan-seared chicken to serve with the alfredo, using boneless skinless chicken breasts or thighs, fine sea salt, black pepper and olive oil.</li>
</ul>`,
      prepare: `<ol>
  <li><strong>Grate or press the garlic:</strong> As mentioned above, I recommend either grating or pressing the garlic for this recipe if you would like to avoid lumps. Or if you don’t recommend a grater or garlic press, just mince the garlic finely.</li>
  <li><strong>Grate the Parmesan by hand:</strong> Purchasing a wedge of Parmesan and grating it by hand will ensure that the cheese melts seamlessly into the sauce and has the richest flavor.</li>
  <li><strong>Cook the pasta al dente:</strong> Cook the fettuccine until it’s <em>just</em> barely al dente. (It should be slightly firm to the bite.) The pasta will continue cooking slightly while it’s tossed with the sauce, so you want to be sure that it’s not overcooked.</li>
  <li><strong>Don’t overheat the cheese:</strong> It’s essential to avoid overheating the cheese — otherwise it can seize up and clump — so be sure to turn off the heat before incorporating it into the sauce.</li>
  <li><strong>Serve immediately:</strong> Fettuccine alfredo always tastes best served immediately while the sauce is still warm and velvety!</li>
</ol>`,
      imageUrl:
      "https://media.istockphoto.com/id/612246764/pt/foto/massa-com-frango.jpg?s=612x612&w=0&k=20&c=Fry0QL8UJvBqjJdyYLmKo-K9GepA0FiK6iUfOtFgfoc="
    },
    {
      recipeName: "Chocolate Brownie Cookies",
      ingredients: `<ul>
  <li><strong>Chocolate:</strong> I chopped up a few dark chocolate bars, but you could also just use some semisweet chocolate chips.</li>
  <li><strong>Flour:</strong> I have only tested this recipe with all-purpose flour, but other varieties may work as well.</li>
  <li><strong>Cocoa powder:</strong> Just the usual unsweetened cocoa powder will work great.</li>
  <li><strong>Sugars:</strong> We will use both brown (be sure to pack it in tight) and white (granulated) sugar.</li>
  <li><strong>Butter:</strong> Unsalted.</li>
  <li><strong>Eggs and baking powder:</strong> Because…cookies.</li>
  <li><strong>Salt:</strong> I used fine sea salt in the cookies, but also highly recommend sprinkling some flaky sea salt on top.</li>
</ul>`,
      prepare: `<ol>
  <li><strong>Prep a large baking sheet:</strong> Line it with parchment paper or a silpat liner. (If you need to bake in two batches, do so immediately — waiting can reduce crinkles.)</li>
  <li><strong>Prep the dry ingredients:</strong> Whisk together the flour, cocoa powder, baking powder, and sea salt until combined.</li>
  <li><strong>Prep the chocolate:</strong> Melt the butter in a saucepan (or in the microwave), then stir in the chopped chocolate until fully melted.</li>
  <li><strong>Prep the egg/sugar mixture:</strong> Using a stand mixer or hand mixer, beat the eggs and sugars on medium-high speed for 5 minutes.</li>
  <li><strong>Fold, fold, fold:</strong> Slowly fold the chocolate mixture into the egg mixture with a rubber spatula until just combined. Then fold in the dry mixture until just combined (avoid over-mixing!).</li>
  <li><strong>Scoop:</strong> Use a large (3-tablespoon) cookie scoop or spoon to place batter balls on the baking sheet, spacing them at least two inches apart.</li>
  <li><strong>Bake:</strong> Bake at 10–12 minutes, until tops are crinkly and slightly domed. Cool the pan on a wire rack for 15–20 minutes before removing cookies.</li>
  <li><strong>Enjoy:</strong> Serve while still slightly warm and enjoy!</li>
</ol>`,
      imageUrl:
      "https://theglutenfreeaustrian.com/wp-content/uploads/2021/11/hero-brownie-720x540.jpg"
    },
]

const container = document.getElementById("recipesContainer");

recipes.forEach(recipe => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${recipe.recipeName}</h2>
    <img src="${recipe.imageUrl}" alt="${recipe.recipeName}" loading="lazy">
    <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
    <p><strong>Prepared on:</strong> ${recipe.prepare}</p>
  `;

  container.appendChild(card);
});

document.getElementById("recipeForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const recipeName = document.getElementById("recipeName").value.trim();
    const ingredients = document.getElementById("ingredients").value.trim();
    const prepare = document.getElementById("prepare").value.trim();
    const prepDate = document.getElementById("prepDate").value;
  
    const newRecipe = {
      recipeName: `${recipeName} (de ${name})`,
      ingredients: `<ul><li>${ingredients.replace(/\n/g, "</li><li>")}</li></ul>`,
      prepare: `<ol><li>${prepare.replace(/\n/g, "</li><li>")}</li></ol>`,
      imageUrl: "",
      date: prepDate
    };
  
    const saved = JSON.parse(localStorage.getItem("userRecipes")) || [];
    saved.push(newRecipe);
    localStorage.setItem("userRecipes", JSON.stringify(saved));
  
    window.location.href = "submit-recipes.html";
  });
