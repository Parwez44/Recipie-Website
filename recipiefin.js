// ---------- Recipe data & rendering ----------

const recipes = [
  // Existing demo recipes
  {
    id: "green-goddess-salad",
    name: "Green Goddess Salad Bowl",
    category: "salad",
    categoryLabel: "Salad",
    time: "15 mins",
    difficulty: "Easy",
    description: "Crisp greens, avocado, and herbs with a light lemon dressing.",
    image:
      "images/image copy 4.jpg",
    ingredients: [
      "2 cups mixed salad greens",
      "1/2 avocado, sliced",
      "1/4 cup cucumber, chopped",
      "2 tbsp toasted seeds (sunflower or pumpkin)",
      "2 tbsp olive oil",
      "Juice of 1/2 lemon",
      "Salt & pepper to taste",
    ],
    steps: [
      "Add salad greens, avocado, and cucumber to a large bowl.",
      "Whisk together olive oil, lemon juice, salt, and pepper.",
      "Drizzle dressing over the salad and toss gently.",
      "Top with toasted seeds and serve immediately.",
    ],
    tip: "Assemble just before serving so the greens stay crisp and fresh.",
  },
  {
    id: "herb-grilled-chicken",
    name: "Herb-Grilled Chicken Plate",
    category: "non-veg",
    categoryLabel: "Non-Veg",
    time: "25 mins",
    difficulty: "Medium",
    description:
      "Juicy grilled chicken marinated in fresh herbs and lime, served with veggies.",
    image:
      "images/image copy 3.jpg",
    ingredients: [
      "2 boneless chicken breasts",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 tbsp mixed herbs (oregano, thyme, rosemary)",
      "Juice of 1 lime",
      "Salt & pepper to taste",
      "Steamed vegetables for serving",
    ],
    steps: [
      "In a bowl, mix olive oil, garlic, herbs, lime juice, salt, and pepper.",
      "Coat chicken with marinade and rest for at least 15 minutes.",
      "Preheat a grill pan on medium heat.",
      "Cook chicken 5–6 minutes per side until fully cooked.",
      "Serve with steamed vegetables or a green salad.",
    ],
    tip: "Make extra chicken to slice and store for wraps or salads the next day.",
  },
  {
    id: "avocado-toast",
    name: "Sunny Avocado Toast",
    category: "veg",
    categoryLabel: "Veg",
    time: "10 mins",
    difficulty: "Easy",
    description:
      "Whole grain toast topped with creamy avocado, cherry tomatoes, and seeds.",
    image:
      "images/image copy 5.jpg",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "6–8 cherry tomatoes, halved",
      "1 tsp lemon juice",
      "Salt & pepper to taste",
      "1 tsp mixed seeds (optional)",
    ],
    steps: [
      "Toast the bread slices until golden.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Spread avocado mixture generously on toast.",
      "Top with cherry tomatoes and sprinkle seeds if using.",
    ],
    tip: "Add chili flakes or a drizzle of olive oil for an extra flavor kick.",
  },
  {
    id: "chia-pudding",
    name: "Coconut Chia Dessert Cup",
    category: "dessert",
    categoryLabel: "Dessert",
    time: "5 mins + chill",
    difficulty: "Easy",
    description:
      "Light coconut chia pudding topped with seasonal fruits and nuts.",
    image:
      "images/image copy 6.jpg",
    ingredients: [
      "3 tbsp chia seeds",
      "1 cup coconut milk",
      "1 tbsp honey or maple syrup",
      "1/4 cup mixed fruits (berries, mango, etc.)",
      "1 tbsp chopped nuts",
    ],
    steps: [
      "In a jar, mix chia seeds, coconut milk, and sweetener.",
      "Stir well and refrigerate for at least 2 hours or overnight.",
      "Stir again to break any lumps.",
      "Top with fruits and nuts just before serving.",
    ],
    tip: "Prep this dessert at night for a ready-to-eat breakfast or snack.",
  },

  // 🥩 Top 5 Most Famous Non-Veg Dishes
  {
    id: "pizza-pepperoni",
    name: "Pizza Pepperoni",
    category: "non-veg",
    categoryLabel: "Non-Veg",
    time: "25 mins",
    difficulty: "Medium",
    description:
      "Iconic Italian pizza topped with spicy pepperoni and melted mozzarella.",
    image:
      "images/image.jpg",
    ingredients: [
      "1 pizza base",
      "1/3 cup pizza sauce",
      "1 cup shredded mozzarella",
      "12–15 pepperoni slices",
      "Dried oregano & chili flakes",
    ],
    steps: [
      "Preheat oven to 220°C.",
      "Spread pizza sauce over the base.",
      "Top with mozzarella and pepperoni slices.",
      "Bake 10–12 minutes until cheese is bubbly and edges are golden.",
      "Finish with oregano and chili flakes before serving.",
    ],
    tip: "Bake on a preheated pizza stone or hot tray for a crispier base.",
  },
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    category: "non-veg",
    categoryLabel: "Non-Veg",
    time: "60 mins",
    difficulty: "Hard",
    description:
      "Aromatic basmati rice layered with spiced, marinated chicken and herbs.",
    image:
      "images/image copy.jpg",
    ingredients: [
      "500 g chicken, cleaned",
      "2 cups basmati rice, soaked",
      "1 cup yogurt",
      "1 large onion, sliced & fried",
      "Biryani masala, ginger-garlic paste",
      "Fresh mint & coriander",
      "Saffron in warm milk",
      "Ghee, salt, whole spices",
    ],
    steps: [
      "Marinate chicken with yogurt, biryani masala, ginger-garlic, salt and rest 30 minutes.",
      "Parboil basmati rice with whole spices until 70% cooked.",
      "Cook marinated chicken in a heavy-bottom pot until almost done.",
      "Layer chicken and rice with fried onions, herbs, saffron milk and ghee.",
      "Seal lid and cook on low dum for 15–20 minutes.",
    ],
    tip: "Let biryani rest 10 minutes after dum before opening for best aroma.",
  },
  {
    id: "sushi-classic",
    name: "Classic Salmon Sushi",
    category: "non-veg",
    categoryLabel: "Non-Veg",
    time: "35 mins",
    difficulty: "Medium",
    description:
      "Japanese sushi rolls with seasoned rice and fresh salmon slices.",
    image:
      "images/image copy 2.jpg",
    ingredients: [
      "2 cups sushi rice, cooked",
      "3 tbsp rice vinegar",
      "1 tbsp sugar, 1/2 tsp salt",
      "Fresh salmon (sashimi grade)",
      "Nori sheets",
      "Soy sauce, wasabi, pickled ginger",
    ],
    steps: [
      "Season warm rice with rice vinegar, sugar, and salt; let cool.",
      "Place nori on a bamboo mat and spread rice evenly.",
      "Add strips of salmon and roll tightly.",
      "Slice into bite-sized pieces with a sharp wet knife.",
      "Serve with soy sauce, wasabi and pickled ginger.",
    ],
    tip: "Use very sharp, wet knives and cold rice to get clean sushi cuts.",
  },
  {
    id: "crispy-fried-chicken",
    name: "Crispy Fried Chicken",
    category: "non-veg",
    categoryLabel: "Non-Veg",
    time: "40 mins",
    difficulty: "Medium",
    description:
      "Buttermilk-marinated chicken fried to a golden, ultra-crispy crust.",
    image:
      "images/image copy 7.jpg",
    ingredients: [
      "8 chicken pieces",
      "1 cup buttermilk",
      "1 cup flour",
      "2 tbsp cornflour",
      "Garlic powder, paprika, pepper, salt",
      "Oil for deep frying",
    ],
    steps: [
      "Marinate chicken in buttermilk, salt and spices for 30 minutes or more.",
      "Mix flour, cornflour and spice mix in a bowl.",
      "Coat chicken pieces in the seasoned flour.",
      "Fry in medium-hot oil until golden and cooked through.",
      "Drain on paper towels before serving.",
    ],
    tip: "Double-dip chicken in buttermilk and flour for extra crunchy coating.",
  },
  {
    id: "chicken-shawarma",
    name: "Chicken Shawarma Wrap",
    category: "non-veg",
    categoryLabel: "Non-Veg",
    time: "35 mins",
    difficulty: "Medium",
    description:
      "Spiced, roasted chicken wrapped in pita with veggies and garlic sauce.",
    image:
      "images/image copy 8.jpg",
    ingredients: [
      "300 g chicken strips",
      "2 tbsp shawarma or Middle Eastern spice mix",
      "2 tbsp yogurt",
      "1 tbsp lemon juice",
      "Pita bread or wraps",
      "Lettuce, onion, tomato, cucumber",
      "Garlic sauce or tahini",
    ],
    steps: [
      "Marinate chicken with spices, yogurt, lemon and salt for 20–30 minutes.",
      "Cook in a hot pan or oven until slightly charred and fully cooked.",
      "Warm pita and spread garlic sauce.",
      "Add chicken and veggies, then roll tightly.",
      "Slice and serve with extra sauce.",
    ],
    tip: "Grill chicken on high heat at the end to get a smoky shawarma flavor.",
  },

  // 🌱 Top 5 Vegetarian Dishes
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    category: "veg",
    categoryLabel: "Veg",
    time: "20 mins",
    difficulty: "Easy",
    description:
      "Classic Italian pizza with tomato sauce, mozzarella, and fresh basil.",
    image:
      "images/image copy 9.jpg",
    ingredients: [
      "1 pizza base",
      "1/3 cup tomato pizza sauce",
      "1 cup mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil, salt & pepper",
    ],
    steps: [
      "Preheat oven to 220°C.",
      "Spread tomato sauce over the base.",
      "Top with mozzarella and a few basil leaves.",
      "Drizzle with olive oil and bake 8–10 minutes.",
      "Add fresh basil on top before serving.",
    ],
    tip: "Do not overload toppings; keep it simple for true Margherita taste.",
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    category: "veg",
    categoryLabel: "Veg",
    time: "30 mins",
    difficulty: "Medium",
    description:
      "Creamy, buttery tomato-based curry with soft paneer cubes.",
    image:
      "images/image copy 10.jpg",
    ingredients: [
      "200 g paneer, cubed",
      "3 tomatoes, pureed",
      "1 onion, chopped",
      "2 tbsp butter + 1 tbsp cream",
      "Ginger-garlic paste",
      "Garam masala, chili powder, salt",
    ],
    steps: [
      "Sauté onions in butter until golden, then add ginger-garlic.",
      "Add tomato puree and spices; cook until oil separates.",
      "Stir in cream and a little water to adjust consistency.",
      "Add paneer cubes and simmer 5–7 minutes.",
      "Garnish with coriander and serve hot.",
    ],
    tip: "Soak paneer in warm water for a few minutes to keep it soft.",
  },
  {
    id: "falafel-wrap",
    name: "Falafel with Tahini",
    category: "veg",
    categoryLabel: "Veg",
    time: "30 mins",
    difficulty: "Medium",
    description:
      "Crispy chickpea patties served with salads and tahini sauce.",
    image:
      "images/image copy 11.jpg",
    ingredients: [
      "1 cup soaked chickpeas (not boiled)",
      "Onion, garlic, coriander, parsley",
      "Cumin, coriander powder, salt",
      "Oil for frying",
      "Pita, salad and tahini sauce for serving",
    ],
    steps: [
      "Blend soaked chickpeas with herbs, onion, garlic and spices to a coarse paste.",
      "Shape into small balls or patties.",
      "Deep fry or shallow fry until crisp and golden.",
      "Serve with pita, salad, and tahini sauce.",
    ],
    tip: "Do not use boiled chickpeas, they make falafel too soft and crumbly.",
  },
  {
    id: "vegetable-pasta",
    name: "Vegetable Pasta",
    category: "veg",
    categoryLabel: "Veg",
    time: "20 mins",
    difficulty: "Easy",
    description:
      "Colorful mixed-vegetable pasta cooked in a light tomato or herb sauce.",
    image:
      "images/image copy 12.jpg",
    ingredients: [
      "2 cups pasta of choice",
      "1 cup mixed vegetables (capsicum, corn, carrots, peas)",
      "1/2 cup pasta sauce or tomatoes",
      "Olive oil, garlic",
      "Italian herbs, salt & pepper",
    ],
    steps: [
      "Boil pasta according to packet instructions.",
      "Sauté garlic in olive oil, add vegetables and cook until tender.",
      "Add pasta sauce and seasonings, cook a few minutes.",
      "Toss in cooked pasta and mix well.",
      "Serve hot with herbs sprinkled on top.",
    ],
    tip: "Keep some pasta water to adjust sauce consistency if it becomes thick.",
  },
  {
    id: "vegetable-curry",
    name: "Mixed Vegetable Curry",
    category: "veg",
    categoryLabel: "Veg",
    time: "30 mins",
    difficulty: "Easy",
    description:
      "Comforting curry with mixed vegetables in a mildly spiced gravy.",
    image:
      "images/image copy 13.jpg",
    ingredients: [
      "2 cups mixed vegetables (potato, peas, beans, carrots)",
      "1 onion, chopped",
      "2 tomatoes, chopped or pureed",
      "Ginger-garlic paste",
      "Turmeric, coriander powder, garam masala",
      "Oil, salt, water",
    ],
    steps: [
      "Sauté onion in oil, then add ginger-garlic and cook.",
      "Add tomatoes and spices; cook until masala is done.",
      "Add vegetables and water; cover and simmer until tender.",
      "Adjust salt and consistency, garnish with coriander.",
    ],
    tip: "Add a splash of coconut milk or cream for richer, restaurant-style curry.",
  },

  // 🥗 Top 5 Salads
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    category: "salad",
    categoryLabel: "Salad",
    time: "15 mins",
    difficulty: "Easy",
    description:
      "Romaine lettuce with crunchy croutons, parmesan, and creamy Caesar dressing.",
    image:
      "images/image copy 14.jpg",
    ingredients: [
      "Romaine lettuce, chopped",
      "Croutons",
      "Parmesan shavings",
      "Caesar dressing",
      "Salt & pepper",
    ],
    steps: [
      "Add lettuce to a large bowl.",
      "Toss with Caesar dressing until lightly coated.",
      "Top with croutons and parmesan shavings.",
      "Season with salt and pepper to taste.",
    ],
    tip: "Add grilled chicken if you want to turn it into a complete meal.",
  },
  {
    id: "greek-salad",
    name: "Greek Salad",
    category: "salad",
    categoryLabel: "Salad",
    time: "15 mins",
    difficulty: "Easy",
    description:
      "Refreshing salad with cucumber, tomatoes, olives, onion, and feta cheese.",
    image:
      "images/image copy 15.jpg",
    ingredients: [
      "Cucumber, chopped",
      "Tomatoes, chopped",
      "Red onion slices",
      "Black olives",
      "Feta cheese cubes",
      "Olive oil, lemon juice, oregano, salt",
    ],
    steps: [
      "Combine all vegetables and olives in a bowl.",
      "Add feta cheese on top.",
      "Drizzle with olive oil and lemon juice.",
      "Sprinkle oregano and salt, then toss gently.",
    ],
    tip: "Serve slightly chilled for the best taste and crunch.",
  },
  {
    id: "caprese-salad",
    name: "Caprese Salad",
    category: "salad",
    categoryLabel: "Salad",
    time: "10 mins",
    difficulty: "Easy",
    description:
      "Simple Italian salad of tomato, mozzarella, and basil with olive oil.",
    image:
      "images/image copy 16.jpg",
    ingredients: [
      "Tomato slices",
      "Fresh mozzarella slices",
      "Fresh basil leaves",
      "Olive oil",
      "Salt & pepper",
    ],
    steps: [
      "Arrange tomato and mozzarella slices alternately on a plate.",
      "Tuck basil leaves between slices.",
      "Drizzle with olive oil.",
      "Season with salt and pepper.",
    ],
    tip: "Use ripe tomatoes and good-quality mozzarella for authentic flavor.",
  },
  {
    id: "cobb-salad",
    name: "Cobb Salad",
    category: "salad",
    categoryLabel: "Salad",
    time: "20 mins",
    difficulty: "Medium",
    description:
      "Layered salad with greens, veggies, egg, and protein toppings.",
    image:
      "images/image copy 17.jpg",
    ingredients: [
      "Lettuce or mixed greens",
      "Tomatoes, chopped",
      "Cucumber, chopped",
      "Boiled egg slices",
      "Optional: grilled chicken or beans",
      "Your favorite salad dressing",
    ],
    steps: [
      "Spread greens on a large plate or bowl.",
      "Arrange toppings in neat rows over the greens.",
      "Drizzle with dressing before serving.",
    ],
    tip: "Use a wide plate to show off the colorful rows of ingredients.",
  },
  {
    id: "tabbouleh",
    name: "Tabbouleh Salad",
    category: "salad",
    categoryLabel: "Salad",
    time: "20 mins",
    difficulty: "Easy",
    description:
      "Fresh Middle Eastern salad with parsley, bulgur, mint, and lemon.",
    image:
      "image/image copy 18.jpg",
    ingredients: [
      "1/2 cup fine bulgur, soaked",
      "1 large bunch parsley, finely chopped",
      "Mint leaves, chopped",
      "Tomatoes, finely diced",
      "Spring onion or onion, finely chopped",
      "Olive oil, lemon juice, salt & pepper",
    ],
    steps: [
      "Soak bulgur in warm water until soft, then drain.",
      "Combine parsley, mint, tomatoes, and onion in a bowl.",
      "Add bulgur and toss gently.",
      "Dress with olive oil, lemon juice, salt and pepper.",
    ],
    tip: "Chop herbs very finely for the best tabbouleh texture.",
  },

  // 🍰 Top 5 Desserts
  {
    id: "chocolate-cake",
    name: "Classic Chocolate Cake",
    category: "dessert",
    categoryLabel: "Dessert",
    time: "45 mins",
    difficulty: "Medium",
    description:
      "Moist chocolate sponge layered or topped with rich chocolate frosting.",
    image:
      "images/image copy 19.jpg",
    ingredients: [
      "Flour, cocoa powder, sugar",
      "Eggs or egg replacer",
      "Butter or oil",
      "Baking powder",
      "Milk or water",
      "Chocolate or cocoa for frosting",
    ],
    steps: [
      "Prepare cake batter by mixing dry and wet ingredients separately then combining.",
      "Pour into a greased tin and bake until a skewer comes out clean.",
      "Cool completely before frosting.",
      "Spread chocolate frosting on top and sides.",
    ],
    tip: "Do not overbake; slightly moist crumb keeps the cake soft and rich.",
  },
  {
    id: "ice-cream-classic",
    name: "Vanilla Ice Cream",
    category: "dessert",
    categoryLabel: "Dessert",
    time: "15 mins + freeze",
    difficulty: "Easy",
    description:
      "Classic creamy vanilla ice cream, perfect on its own or with desserts.",
    image:
      "images/image copy 20.jpg",
    ingredients: [
      "2 cups cream",
      "1 cup milk",
      "1/2 cup sugar",
      "1–2 tsp vanilla extract",
    ],
    steps: [
      "Whisk cream, milk, sugar, and vanilla until sugar dissolves.",
      "Churn in an ice-cream maker or freeze, stirring every 30–40 minutes.",
      "Freeze until firm.",
    ],
    tip: "Add toppings like nuts, chocolate chips, or fruits when semi-set.",
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    category: "dessert",
    categoryLabel: "Dessert",
    time: "30 mins + chill",
    difficulty: "Medium",
    description:
      "Italian coffee-flavored dessert with mascarpone and soaked ladyfingers.",
    image:
      "images/image copy 21.jpg",
    ingredients: [
      "Ladyfinger biscuits",
      "Mascarpone cheese",
      "Whipped cream",
      "Strong coffee or espresso",
      "Cocoa powder",
      "Sugar, vanilla",
    ],
    steps: [
      "Dip ladyfingers quickly in coffee and layer in a dish.",
      "Beat mascarpone with sugar and fold in whipped cream.",
      "Spread cream mixture over the soaked biscuits.",
      "Repeat layers if desired and chill for several hours.",
      "Dust with cocoa powder before serving.",
    ],
    tip: "Do not oversoak the biscuits or the dessert can turn soggy.",
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    category: "dessert",
    categoryLabel: "Dessert",
    time: "40 mins",
    difficulty: "Medium",
    description:
      "Soft fried milk dumplings soaked in fragrant sugar syrup.",
    image:
      "images/image copy 22.jpg",
    ingredients: [
      "Ready mix or khoya + flour",
      "Ghee or oil for frying",
      "Sugar, water",
      "Cardamom and rose water",
    ],
    steps: [
      "Prepare a soft dough from mix or khoya and flour.",
      "Shape into small smooth balls.",
      "Fry on low-medium heat until golden brown.",
      "Boil sugar with water, cardamom and a little rose water to make syrup.",
      "Soak fried jamuns in warm syrup for at least 30 minutes.",
    ],
    tip: "Fry on low heat so the inside cooks evenly without burning the outside.",
  },
  {
    id: "cheesecake",
    name: "Baked Cheesecake",
    category: "dessert",
    categoryLabel: "Dessert",
    time: "60 mins",
    difficulty: "Medium",
    description:
      "Rich and creamy cheesecake with a buttery biscuit base.",
    image:
      "images/image copy 23.jpg",
    ingredients: [
      "Crushed biscuits and melted butter",
      "Cream cheese",
      "Sugar",
      "Eggs",
      "Vanilla extract",
      "Sour cream or yogurt (optional)",
    ],
    steps: [
      "Mix crushed biscuits with butter and press into a baking tin.",
      "Beat cream cheese with sugar, eggs and vanilla until smooth.",
      "Pour over the base and bake until just set.",
      "Cool completely and chill before slicing.",
    ],
    tip: "Bake in a water bath and avoid overbaking to prevent cracks.",
  },
];


// ======================================
// RECIPE RENDERING
// ======================================

function renderRecipes() {
  const grid = document.getElementById("recipe-grid");
  if (!grid) return;

  grid.innerHTML = "";

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    const card = document.createElement("article");
    card.className = "recipe-card";
    card.dataset.category = recipe.category;

    card.innerHTML =
      '<div class="recipe-image-placeholder"><span>🍽️</span></div>' +
      '<div class="recipe-meta-top">' +
      '<span class="recipe-category">' + recipe.categoryLabel + "</span>" +
      '<span class="recipe-time">' + recipe.time + "</span>" +
      "</div>" +
      "<h3>" + recipe.name + "</h3>" +
      "<p>" + recipe.description + "</p>" +
      '<div class="recipe-footer">' +
      "<span>" + recipe.time + " | " + recipe.difficulty + "</span>" +
      '<button class="btn primary-btn view-recipe-btn" data-id="' +
      recipe.id +
      '">View Recipe</button>' +
      "</div>";

    grid.appendChild(card);
  }
}


// ======================================
// SEARCH & FILTER STATE
// ======================================

let currentFilter = "all";
let currentSearch = "";

function normalize(text) {
  return text.toLowerCase().trim();
}


// ======================================
// SEARCH & FILTER LOGIC
// ======================================

function filterRecipes() {
  const cards = document.querySelectorAll(".recipe-card");

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    const category = card.dataset.category;

    const titleElement = card.querySelector("h3");
    let title = "";
    if (titleElement) {
      title = titleElement.textContent;
    }

    let categoryMatch = false;
    if (currentFilter === "all") {
      categoryMatch = true;
    } else if (category === currentFilter) {
      categoryMatch = true;
    }

    let searchMatch = false;
    const normalizedTitle = normalize(title);
    const normalizedSearch = normalize(currentSearch);
    if (normalizedTitle.includes(normalizedSearch)) {
      searchMatch = true;
    }

    if (categoryMatch && searchMatch) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  }
}


// ======================================
// SEARCH & FILTER EVENTS
// ======================================

function setupRecipeControls() {
  const buttons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("recipe-search");

  for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];

    btn.addEventListener("click", function () {
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("active");
      }

      btn.classList.add("active");

      if (btn.dataset.filter) {
        currentFilter = btn.dataset.filter;
      } else {
        currentFilter = "all";
      }

      filterRecipes();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function (event) {
      currentSearch = event.target.value;
      filterRecipes();
    });
  }
}


// ======================================
// MODAL ELEMENTS
// ======================================

const modal = document.getElementById("recipe-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalMeta = document.getElementById("modal-meta");
const modalIngredients = document.getElementById("modal-ingredients");
const modalSteps = document.getElementById("modal-steps");
const modalTip = document.getElementById("modal-tip");


// ======================================
// MODAL OPEN / CLOSE
// ======================================

function openRecipeModal(id) {
  let recipe = null;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      recipe = recipes[i];
      break;
    }
  }

  if (!recipe || !modal) return;

  modalImage.src = recipe.image;
  modalImage.alt = recipe.name;
  modalTitle.textContent = recipe.name;
  modalMeta.textContent =
    recipe.categoryLabel + " • " + recipe.time + " • " + recipe.difficulty;

  modalIngredients.innerHTML = "";
  for (let i = 0; i < recipe.ingredients.length; i++) {
    const li = document.createElement("li");
    li.textContent = recipe.ingredients[i];
    modalIngredients.appendChild(li);
  }

  modalSteps.innerHTML = "";
  for (let i = 0; i < recipe.steps.length; i++) {
    const li = document.createElement("li");
    li.textContent = recipe.steps[i];
    modalSteps.appendChild(li);
  }

  modalTip.textContent = recipe.tip;
  modal.classList.add("open");
}

function closeRecipeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
}


// ======================================
// MODAL EVENTS
// ======================================

function setupModal() {
  if (!modal) return;

  document.addEventListener("click", function (event) {
    const btn = event.target.closest(".view-recipe-btn");
    if (btn) {
      openRecipeModal(btn.dataset.id);
    }
  });

  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeRecipeModal);
  }

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeRecipeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeRecipeModal();
    }
  });
}


// ======================================
// SMOOTH SCROLL
// ======================================

function setupSmoothScroll() {
  const links = document.querySelectorAll(".nav-links a");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = links[i].getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}


// ======================================
// ACTIVE NAV LINK
// ======================================

function setupActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    function (entries) {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          const id = entries[i].target.id;

          for (let j = 0; j < navLinks.length; j++) {
            if (navLinks[j].getAttribute("href") === "#" + id) {
              navLinks[j].classList.add("active");
            } else {
              navLinks[j].classList.remove("active");
            }
          }
        }
      }
    },
    { threshold: 0.5 }
  );

  for (let i = 0; i < sections.length; i++) {
    observer.observe(sections[i]);
  }
}


// ======================================
// MOBILE NAV
// ======================================

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("open");
    nav.classList.toggle("open");
  });
}


// ======================================
// TESTIMONIAL SLIDER
// ======================================

function setupTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  function showTestimonial(index) {
    for (let i = 0; i < testimonials.length; i++) {
      if (i === index) {
        testimonials[i].classList.add("active");
        dots[i].classList.add("active");
      } else {
        testimonials[i].classList.remove("active");
        dots[i].classList.remove("active");
      }
    }
    currentIndex = index;
  }

  const nextBtn = document.querySelector(".testimonial-nav.next");
  const prevBtn = document.querySelector(".testimonial-nav.prev");

  nextBtn.addEventListener("click", function () {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= testimonials.length) {
      nextIndex = 0;
    }
    showTestimonial(nextIndex);
  });

  prevBtn.addEventListener("click", function () {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = testimonials.length - 1;
    }
    showTestimonial(prevIndex);
  });

  showTestimonial(0);
}


// ======================================
// BACK TO TOP
// ======================================

function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


// ======================================
// CONTACT FORM
// ======================================

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.reset();

    const status = document.getElementById("form-status");
    status.textContent = "Thanks! We will get back to you soon.";
  });
}


// ======================================
// INIT
// ======================================

document.addEventListener("DOMContentLoaded", function () {
  renderRecipes();
  setupRecipeControls();
  setupModal();
  setupSmoothScroll();
  setupActiveNavLink();
  setupMobileNav();
  setupTestimonials();
  setupBackToTop();
  setupContactForm();
});
