export type MenuCategory =
  | "coffee"
  | "ice-tea"
  | "frappe"
  | "shakes"
  | "mocktails"
  | "aerated-drinks"
  | "salad"
  | "munching"
  | "rice-noodle-bowl"
  | "wrap-roll"
  | "china-town"
  | "pizza"
  | "pasta"
  | "desserts";

export type MenuItemData = {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  description?: string;
  ingredients?: string[];
  tags?: string[];
  image?: string;
  featured?: boolean;
};

export const categories: {
  id: MenuCategory;
  label: string;
  number: string;
}[] = [
  { id: "coffee", label: "Coffee", number: "01" },
  { id: "ice-tea", label: "Ice Tea", number: "02" },
  { id: "frappe", label: "Frappe", number: "03" },
  { id: "shakes", label: "Shakes", number: "04" },
  { id: "mocktails", label: "Mocktails", number: "05" },
  { id: "aerated-drinks", label: "Other Drinks", number: "06" },
  { id: "salad", label: "Salad", number: "07" },
  { id: "munching", label: "Munching", number: "08" },
  { id: "rice-noodle-bowl", label: "Rice & Noodle Bowl", number: "09" },
  { id: "wrap-roll", label: "Wrap & Roll", number: "10" },
  { id: "china-town", label: "China Town", number: "11" },
  { id: "pizza", label: "Pizza", number: "12" },
  { id: "pasta", label: "Pasta", number: "13" },
  { id: "desserts", label: "Desserts", number: "14" },
];

export const menuItems: MenuItemData[] = [
  // COFFEE
  { id: "americano", name: "Americano", price: 99, category: "coffee", tags: ["Classic", "Hot"], description: "Bold black coffee with a clean, roasted flavour."},
  { id: "cappuccino", name: "Cappuccino", price: 129, category: "coffee", tags: ["Classic", "Creamy", "Hot"], description: "Espresso topped with a creamy milk foam."},
  { id: "caramel-latte", name: "Caramel Latte", price: 149, category: "coffee", tags: ["Sweet", "Hot"], description: "A latte with a sweet caramel flavour."},
  { id: "cafe-latte", name: "Cafe Latte", price: 129, category: "coffee", tags: ["Creamy", "Hot"], description: "Espresso softened with steamed milk."},
  { id: "cafe-mocha", name: "Cafe Mocha", price: 149, category: "coffee", tags: ["Chocolate", "Hot"], description: "Coffee paired with a chocolate flavour."},
  { id: "espresso", name: "Espresso", price: 99, category: "coffee", tags: ["Classic", "Hot"], description: "A small, concentrated shot of coffee."},
  { id: "hazelnut-latte", name: "Hazelnut Latte", price: 149, category: "coffee", tags: ["Nutty", "Hot"], description: "A latte with a nutty hazelnut twist."},

  // ICE TEA & TEA
  { id: "strawberry-jalapeno-ice-tea", name: "Strawberry & Jalapeno Ice Tea", price: 199, category: "ice-tea", tags: ["Fruity", "Cold"], description: "A fruity iced tea with a hint of heat."},
  { id: "lemon-iced-tea", name: "Lemon Iced Tea", price: 199, category: "ice-tea", tags: ["Citrusy", "Cold"], description: "Chilled tea with a bright lemon twist."},
  { id: "blueberry-ginger-iced-tea", name: "Blueberry & Ginger Iced Tea", price: 199, category: "ice-tea", tags: ["Fruity", "Cold"], description: "A fruity iced tea with a ginger kick."},
  { id: "peach-ice-tea", name: "Peach Ice Tea", price: 199, category: "ice-tea", tags: ["Fruity", "Cold"], description: "Chilled tea with a sweet peach flavour."},
  { id: "lavender-blueberry-ice-tea", name: "Lavender Blueberry Ice Tea", price: 199, category: "ice-tea", tags: ["Fruity", "Cold"], description: "A floral iced tea with blueberry notes."},
  { id: "earl-grey-ice-tea", name: "Earl Grey Ice Tea", price: 199, category: "ice-tea", tags: ["Classic", "Cold"], description: "A chilled take on classic Earl Grey tea."},
  { id: "cucumber-strawberry-ice-tea", name: "Cucumber Strawberry Ice Tea", price: 199, category: "ice-tea", tags: ["Fruity", "Cold"], description: "A refreshing mix of crisp and fruity flavours."},
  { id: "on-the-black-ice-tea", name: "On The Black Ice Tea", price: 199, category: "ice-tea", tags: ["Classic", "Cold"], description: "A bold, chilled black tea."},
  { id: "ready-made-tea", name: "Ready-Made Tea", price: 99, category: "ice-tea", tags: ["Tea", "Hot"], description: "A simple, ready-to-enjoy cup of tea."},
  { id: "green-tea", name: "Green Tea", price: 79, category: "ice-tea", tags: ["Classic", "Tea", "Hot"], description: "A light, refreshing green tea."},
  { id: "darjeeling-tea", name: "Darjeeling Tea", price: 79, category: "ice-tea", tags: ["Classic", "Tea", "Hot"], description: "A classic tea with a delicate flavour."},

  // FRAPPE
  { id: "caribbean-frappe", name: "Caribbean Frappe", price: 249, category: "frappe", tags: ["Fruity", "Cold"], description: "A chilled frappe with a tropical twist."},
  { id: "lavender-frappe", name: "Lavender Frappe", price: 249, category: "frappe", tags: ["Fruity", "Cold"], description: "A cool frappe with a floral lavender note."},
  { id: "salty-caramel-cold-latte", name: "Salty Caramel Cold Latte", price: 249, category: "frappe", tags: ["Sweet", "Cold"], description: "A chilled latte with sweet-salty caramel flavour."},
  { id: "hazelnut-spiced-coffee", name: "Hazelnut Spiced Coffee", price: 249, category: "frappe", tags: ["Nutty", "Cold"], description: "Coffee with hazelnut flavour and warming spice notes."},
  { id: "butterscotch-cold-frappe", name: "Butterscotch Cold Frappe", price: 249, category: "frappe", tags: ["Sweet", "Cold"], description: "A cold frappe with a butterscotch twist."},
  { id: "oreo-amaretto-cold-frappe", name: "Oreo & Amaretto Cold Frappe", price: 249, category: "frappe", tags: ["Chocolate", "Cold"], description: "A chilled frappe inspired by Oreo and amaretto flavours."},
  { id: "vanilla-frappe", name: "Vanilla Frappe", price: 249, category: "frappe", tags: ["Sweet", "Cold"], description: "A cool frappe with a classic vanilla flavour."},
  { id: "coffee-caramel-vanilla-frappe", name: "Coffee Caramel Vanilla Frappe", price: 249, category: "frappe", tags: ["Sweet", "Cold"], description: "Coffee frappe with caramel and vanilla notes."},

  // SHAKES
  { id: "vanilla-oreo-chocolate-shake", name: "Vanilla Oreo Chocolate Shake", price: 249, category: "shakes", tags: ["Chocolate", "Cold"], description: "A shake combining vanilla, Oreo and chocolate flavours."},
  { id: "broken-brownie-shake", name: "Broken Brownie Shake", price: 249, category: "shakes", tags: ["Chocolate", "Cold"], description: "A chocolatey shake with brownie-inspired flavour."},
  { id: "kit-kat-shake", name: "Kit Kat Shake", price: 249, category: "shakes", tags: ["Chocolate", "Cold"], description: "A creamy shake inspired by Kit Kat chocolate."},
  { id: "strawberry-pineapple-shake", name: "Strawberry & Pineapple Shake", price: 249, category: "shakes", tags: ["Sweet", "Cold"], description: "A fruity shake with strawberry and pineapple notes."},
  { id: "mango-shake", name: "Mango Shake", price: 249, category: "shakes", tags: ["Sweet", "Cold"], description: "A shake with sweet mango flavour."},
  { id: "mud-shake", name: "Mud Shake", price: 249, category: "shakes", tags: ["Chocolate", "Cold"], description: "A rich, chocolate-inspired shake."},
  { id: "black-currant-shake", name: "Black Currant Shake", price: 249, category: "shakes", tags: ["Fruity", "Cold"], description: "A fruity shake with blackcurrant flavour."},
  { id: "belgium-chocolate-shake", name: "Belgium Chocolate Shake", price: 249, category: "shakes", tags: ["Chocolate", "Cold"], description: "A shake with rich Belgian chocolate flavour."},
  { id: "brownie-loaded-choco-frappe", name: "Brownie Loaded Choco Frappe", price: 249, category: "shakes", tags: ["Chocolate", "Cold"], description: "A chilled chocolate frappe with brownie-inspired flavour."},

  // MOCKTAILS
  { id: "fresh-mint-mojito", name: "Fresh Mint Mojito", price: 249, category: "mocktails", tags: ["Refreshing", "Cold"], description: "A refreshing mojito with a fresh mint note."},
  { id: "cool-cucumber-mojito", name: "Cool Cucumber Mojito", price: 249, category: "mocktails", tags: ["Refreshing", "Cold"], description: "A crisp, refreshing cucumber-style mojito."},
  { id: "red-knight", name: "Red Knight", price: 249, category: "mocktails", tags: ["Refreshing", "Cold"], description: "A bold, colourful mocktail from the house menu."},
  { id: "cranberry-mojito", name: "Cranberry Mojito", price: 249, category: "mocktails", tags: ["Fruity", "Cold"], description: "A fruity mojito with cranberry flavour."},
  { id: "blackberry-mojito", name: "Blackberry Mojito", price: 249, category: "mocktails", tags: ["Fruity", "Cold"], description: "A fruity mojito with blackberry notes."},
  { id: "virgin-pina-colada", name: "Virgin Pina Colada", price: 249, category: "mocktails", tags: ["Refreshing", "Cold"], description: "A tropical, alcohol-free take on a piña colada."},
  { id: "blush-martini", name: "Blush Martini", price: 249, category: "mocktails", tags: ["Refreshing", "Cold"], description: "A bright, elegant mocktail with a blush-coloured look."},
  { id: "cranberry-cinnamon-slush", name: "Cranberry & Cinnamon Slush", price: 249, category: "mocktails", tags: ["Spiced", "Cold"], description: "A chilled slush with cranberry and cinnamon notes."},
  { id: "desi-mary", name: "Desi Mary", price: 249, category: "mocktails", tags: ["Spiced", "Cold"], description: "A savoury-inspired mocktail with a desi twist."},
  { id: "blue-hawaiian", name: "Blue Hawaiian", price: 249, category: "mocktails", tags: ["Fruity", "Cold"], description: "A tropical-style mocktail with a vibrant blue look."},
  { id: "mango-delight", name: "Mango Delight", price: 249, category: "mocktails", tags: ["Fruity", "Cold"], description: "A fruity mocktail with mango flavour."},
  { id: "orange-ginger-cosmopolitan", name: "Orange Ginger Cosmopolitan", price: 249, category: "mocktails", tags: ["Spiced", "Cold"], description: "A citrusy mocktail with orange and ginger notes."},
  { id: "jasmine-sparkle", name: "Jasmine Sparkle", price: 249, category: "mocktails", tags: ["Floral", "Cold"], description: "A floral-inspired mocktail with a sparkling feel."},
  { id: "hawana-mocktail", name: "Hawana Mocktail", price: 249, category: "mocktails", tags: ["Refreshing", "Cold"], description: "A tropical-inspired mocktail from the house menu."},
  { id: "black-panther", name: "Black Panther", price: 249, category: "mocktails", tags: ["Refreshing", "Cold"], description: "A bold, dark-looking mocktail from the house menu."},
  { id: "spicy-lips", name: "Spicy Lips", price: 249, category: "mocktails", tags: ["Spiced", "Cold"], description: "A punchy mocktail with a spicy twist."},
  { id: "tango-mango", name: "Tango Mango", price: 219, category: "mocktails", tags: ["Fruity", "Cold"], description: "A fruity mocktail led by mango flavour."},
  { id: "italian-kiss", name: "Italian Kiss", price: 219, category: "mocktails", tags: ["Refreshing", "Cold"], description: "A bright, refreshing mocktail with an Italian-inspired name."},
  { id: "california-sunshine", name: "California Sunshine", price: 219, category: "mocktails", tags: ["Refreshing", "Cold"], description: "A sunny, fruit-forward mocktail."},
  { id: "fruit-punch", name: "Fruit Punch", price: 219, category: "mocktails", tags: ["Fruity", "Cold"], description: "A colourful mix of fruity flavours."},
  { id: "orange-blossom", name: "Orange Blossom", price: 219, category: "mocktails", tags: ["Floral", "Cold"], description: "A refreshing mocktail with orange-inspired notes."},

  // AERATED DRINKS
  { id: "thums-up", name: "Thums Up", price: 99, category: "aerated-drinks", tags: ["Fizzy", "Cold"], description: "A chilled, fizzy Thums Up."},
  { id: "coca-cola", name: "Coca Cola", price: 99, category: "aerated-drinks", tags: ["Fizzy", "Cold"], description: "A chilled classic cola."},
  { id: "diet-coke", name: "Diet Coke", price: 99, category: "aerated-drinks", tags: ["Fizzy", "Cold"], description: "A chilled, lighter cola option."},
  { id: "sprite", name: "Sprite", price: 99, category: "aerated-drinks", tags: ["Fizzy", "Cold"], description: "A chilled, crisp lemon-lime soft drink."},
  { id: "red-bull", name: "Red Bull", price: 220, category: "aerated-drinks", tags: ["Fizzy", "Cold"], description: "A chilled energy drink."},
  { id: "canned-juice-seasonal", name: "Canned Juice (Seasonal)", price: 99, category: "aerated-drinks", tags: ["Cold"], description: "A canned juice selection that varies by season."},
  { id: "mineral-water", name: "Mineral Water", price: 20, category: "aerated-drinks", tags: ["Cold"], description: "Bottled mineral water, served chilled."},
  { id: "fresh-lime-water", name: "Fresh Lime Water", price: 119, category: "aerated-drinks", tags: ["Fresh", "Cold"], description: "A refreshing lime drink."},
  { id: "soda", name: "Soda", price: 129, category: "aerated-drinks", tags: ["Fizzy", "Cold"], description: "Chilled soda water with a crisp fizz."},

  // SALAD
  { id: "ceaser-salad", name: "Ceaser Salad", price: 239, category: "salad", tags: ["Fresh", "Savory"], description: "A classic Caesar-style salad."},
  { id: "texas-beans-salad", name: "Texas Beans Salad", price: 219, category: "salad", tags: ["Fresh", "Savory"], description: "A hearty salad with a Texas-inspired twist."},
  { id: "sesame-peppanata-salad", name: "Sesame Peppanata Salad", price: 219, category: "salad", tags: ["Fresh", "Savory"], description: "A salad with sesame and peppanata-inspired flavours."},
  { id: "veracruz-vinigrette", name: "Veracruz Vinigrette", price: 219, category: "salad", tags: ["Fresh", "Savory"], description: "A fresh salad with a Veracruz-inspired vinaigrette."},

  // MUNCHING
  { id: "indori-chaat", name: "Indori Chaat", price: 249, category: "munching", tags: ["Tangy", "Savory"], description: "A tangy, street-food-inspired chaat."},
  { id: "nachos-grande", name: "Nachos Grande", price: 329, category: "munching", tags: ["Crispy", "Savory"], description: "A generous serving of crunchy nachos."},
  { id: "peri-peri-fries", name: "Peri-peri Fries", price: 209, category: "munching", tags: ["Spicy", "Savory"], description: "Fries with a peri-peri spice kick."},
  { id: "french-fries", name: "French Fries", price: 179, category: "munching", tags: ["Crispy", "Savory"], description: "Classic golden fries."},
  { id: "zerk-spice-potato", name: "Zerk Spice Potato", price: 229, category: "munching", tags: ["Spicy", "Savory"], description: "A potato snack with a house-spice twist."},
  { id: "corn-kernal-hash-brown", name: "Corn Kernal Hash Brown", price: 289, category: "munching", tags: ["Crispy", "Savory"], description: "A crispy-style bite with corn and potato."},
  { id: "european-cheese-pop", name: "European Cheese Pop", price: 289, category: "munching", tags: ["Cheesy", "Savory"], description: "A cheesy snack in bite-sized form."},
  { id: "egyptian-falafal-tikki", name: "Egyptian Falafal Tikki With", price: 339, category: "munching", tags: ["Savory"], description: "A falafel-inspired tikki-style snack."},
  { id: "thai-peanut-chatkara", name: "Thai Peanut Chatkara", price: 239, category: "munching", tags: ["Spicy", "Savory"], description: "A Thai-inspired snack with peanut flavour."},
  { id: "momo-hot-garlic", name: "Momo Hot Garlic", price: 319, category: "munching", tags: ["Spicy", "Savory"], description: "Momos with a hot garlic-style flavour."},
  { id: "japanese-soba-noodle", name: "Japanese Soba Noodle", price: 319, category: "munching", tags: ["Savory"], description: "A Japanese-inspired soba noodle dish."},

  // RICE AND NOODLE BOWL
  { id: "burmese-curry", name: "Burmese Curry", price: 359, category: "rice-noodle-bowl", tags: ["Spicy", "Savory"], description: "A comforting curry inspired by Burmese flavours."},
  { id: "malaysian-stir-fry", name: "Malaysian Stir Fry", price: 349, category: "rice-noodle-bowl", tags: ["Spicy", "Savory"], description: "A Malaysian-inspired stir-fry."},
  { id: "acapulco-salsa-curry", name: "Acapulco Salsa Curry", price: 349, category: "rice-noodle-bowl", tags: ["Spicy", "Savory"], description: "A curry with an Acapulco-inspired salsa twist."},
  { id: "boston-pot-italian", name: "Boston Pot (Italian)", price: 359, category: "rice-noodle-bowl", tags: ["Savory"], description: "An Italian-inspired pot-style dish."},
  { id: "chicago-malfitini-balls", name: "Chicago Malfitini Balls", price: 379, category: "rice-noodle-bowl", tags: ["Savory"], description: "A hearty dish featuring malfitini-style balls."},
  { id: "enchiladas", name: "Enchiladas", price: 379, category: "rice-noodle-bowl", tags: ["Savory"], description: "A classic-inspired enchilada dish."},
  { id: "thai-red-curry", name: "Thai Red Curry", price: 380, category: "rice-noodle-bowl", tags: ["Spicy", "Savory"], description: "A Thai-style red curry."},

  // WRAP AND ROLL
  { id: "falafal-roll", name: "Falafal Roll", price: 309, category: "wrap-roll", tags: ["Savory"], description: "A falafel-inspired roll for an easy bite."},
  { id: "paneer-khursan-quesadilla", name: "Paneer Khursan Quesadilla", price: 319, category: "wrap-roll", tags: ["Cheesy", "Savory"], description: "A quesadilla with paneer and khursani-inspired flavour."},
  { id: "burritos", name: "Burritos", price: 319, category: "wrap-roll", tags: ["Savory"], description: "A filling, burrito-style meal."},
  { id: "cassino-pesto-crostini", name: "Cassino Pesto Crostini", price: 259, category: "wrap-roll", tags: ["Cheesy", "Savory"], description: "Crostini with a pesto-inspired twist."},
  { id: "florida-bread-baser", name: "Florida Bread Baser", price: 199, category: "wrap-roll", tags: ["Savory"], description: "A bread-based snack from the house menu."},
  { id: "cheesey-mushroom-toast", name: "Cheesey Mushroom Toast", price: 249, category: "wrap-roll", tags: ["Cheesy", "Savory"], description: "Toast with cheesy mushroom flavour."},
  { id: "veg-cheese-grilled-sandwich", name: "Veg Cheese Grilled Sandwich", price: 179, category: "wrap-roll", tags: ["Cheesy", "Savory"], description: "A grilled sandwich with vegetables and cheese."},

  // CHINA TOWN
  { id: "manchurian", name: "Manchurian", price: 219, category: "china-town", tags: ["Spicy", "Savory"], description: "A savoury, Indo-Chinese Manchurian favourite."},
  { id: "chillie-paneer", name: "Chillie Paneer", price: 249, category: "china-town", tags: ["Spicy", "Savory"], description: "Paneer with a chilli-style Indo-Chinese flavour."},
  { id: "choice-of-potato", name: "Choice Of Potato", price: 279, category: "china-town", tags: ["Savory"], description: "A potato dish prepared in your chosen style."},
  { id: "choice-of-noodle", name: "Choice Of Noodle", price: 279, category: "china-town", tags: ["Savory"], description: "A noodle dish with your choice of style."},
  { id: "choice-of-fried-rice", name: "Choice Of Fried Rice", price: 269, category: "china-town", tags: ["Savory"], description: "Fried rice prepared in your chosen style."},

  // PIZZA
  { id: "tandoori-paneer-tikka-pizza", name: "Tandoori Paneer Tikka Pizza", price: 299, category: "pizza", tags: ["Spicy", "Savory"], description: "Pizza topped with tandoori paneer tikka flavours."},
  { id: "italian-pizza", name: "Italian Pizza", price: 299, category: "pizza", tags: ["Savory"], description: "A pizza with classic Italian-inspired flavours."},
  { id: "fresh-garden-farm-pizza", name: "Fresh Garden Farm Pizza", price: 299, category: "pizza", tags: ["Savory"], description: "A garden-inspired pizza with fresh vegetable flavours."},
  { id: "nepolian-margarita", name: "Neopolian Margarita", price: 349, category: "pizza", tags: ["Savory"], description: "A Neapolitan-inspired Margherita pizza."},
  { id: "turkies-cheese-garlic-pizza", name: "Turkies Cheese Garlic Pizza", price: 349, category: "pizza", tags: ["Cheesy", "Savory"], description: "Pizza with cheese and garlic flavour."},

  // PASTA
  { id: "penne-sauce", name: "Penne (Alfredo, arrabbiata, velvet) Sauce", price: 349, category: "pasta", tags: ["Savory"], description: "Penne pasta with your choice of listed sauce."},
  { id: "aglio-e-olio", name: "Aglio E Olio", price: 369, category: "pasta", tags: ["Savory"], description: "Pasta inspired by garlic and olive oil."},

  // DESSERTS
  { id: "brownie", name: "Brownie", price: 99, category: "desserts", tags: ["Sweet"], description: "A classic chocolate brownie."},
  { id: "brownie-with-ice-cream", name: "Brownie With Ice Cream", price: 149, category: "desserts", tags: ["Sweet", "Cold"], description: "A brownie served with ice cream."},
  { id: "barcelona-volcano", name: "Barcelona Volcano", price: 219, category: "desserts", tags: ["Sweet"], description: "A dessert made for a rich, indulgent finish."},
  { id: "sundae-icecream-due", name: "Sundae Icecream Due", price: 219, category: "desserts", tags: ["Sweet", "Cold"], description: "A classic-style ice cream sundae."},
];
