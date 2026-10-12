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
  { id: "americano", name: "Americano", price: 99, category: "coffee", tags: ["Classic"]},
  { id: "cappuccino", name: "Cappuccino", price: 129, category: "coffee", tags: ["Classic"] },
  { id: "caramel-latte", name: "Caramel Latte", price: 149, category: "coffee", tags: ["Sweet"] },
  { id: "cafe-latte", name: "Cafe Latte", price: 129, category: "coffee" },
  { id: "cafe-mocha", name: "Cafe Mocha", price: 149, category: "coffee" },
  { id: "espresso", name: "Espresso", price: 99, category: "coffee", tags: ["Classic"]},
  { id: "hazelnut-latte", name: "Hazelnut Latte", price: 149, category: "coffee" },

  // ICE TEA & TEA
  { id: "strawberry-jalapeno-ice-tea", name: "Strawberry & Jalapeno Ice Tea", price: 199, category: "ice-tea" },
  { id: "lemon-iced-tea", name: "Lemon Iced Tea", price: 199, category: "ice-tea" },
  { id: "blueberry-ginger-iced-tea", name: "Blueberry & Ginger Iced Tea", price: 199, category: "ice-tea" },
  { id: "peach-ice-tea", name: "Peach Ice Tea", price: 199, category: "ice-tea" },
  { id: "lavender-blueberry-ice-tea", name: "Lavender Blueberry Ice Tea", price: 199, category: "ice-tea" },
  { id: "earl-grey-ice-tea", name: "Earl Grey Ice Tea", price: 199, category: "ice-tea" },
  { id: "cucumber-strawberry-ice-tea", name: "Cucumber Strawberry Ice Tea", price: 199, category: "ice-tea" },
  { id: "on-the-black-ice-tea", name: "On The Black Ice Tea", price: 199, category: "ice-tea" },
  { id: "ready-made-tea", name: "Ready-Made Tea", price: 99, category: "ice-tea" },
  { id: "green-tea", name: "Green Tea", price: 79, category: "ice-tea" },
  { id: "darjeeling-tea", name: "Darjeeling Tea", price: 79, category: "ice-tea" },

  // FRAPPE
  { id: "caribbean-frappe", name: "Caribbean Frappe", price: 249, category: "frappe" },
  { id: "lavender-frappe", name: "Lavender Frappe", price: 249, category: "frappe" },
  { id: "salty-caramel-cold-latte", name: "Salty Caramel Cold Latte", price: 249, category: "frappe" },
  { id: "hazelnut-spiced-coffee", name: "Hazelnut Spiced Coffee", price: 249, category: "frappe" },
  { id: "butterscotch-cold-frappe", name: "Butterscotch Cold Frappe", price: 249, category: "frappe" },
  { id: "oreo-amaretto-cold-frappe", name: "Oreo & Amaretto Cold Frappe", price: 249, category: "frappe" },
  { id: "vanilla-frappe", name: "Vanilla Frappe", price: 249, category: "frappe" },
  { id: "coffee-caramel-vanilla-frappe", name: "Coffee Caramel Vanilla Frappe", price: 249, category: "frappe" },

  // SHAKES
  { id: "vanilla-oreo-chocolate-shake", name: "Vanilla Oreo Chocolate Shake", price: 249, category: "shakes" },
  { id: "broken-brownie-shake", name: "Broken Brownie Shake", price: 249, category: "shakes" },
  { id: "kit-kat-shake", name: "Kit Kat Shake", price: 249, category: "shakes" },
  { id: "strawberry-pineapple-shake", name: "Strawberry & Pineapple Shake", price: 249, category: "shakes" },
  { id: "mango-shake", name: "Mango Shake", price: 249, category: "shakes" },
  { id: "mud-shake", name: "Mud Shake", price: 249, category: "shakes" },
  { id: "black-currant-shake", name: "Black Currant Shake", price: 249, category: "shakes" },
  { id: "belgium-chocolate-shake", name: "Belgium Chocolate Shake", price: 249, category: "shakes" },
  { id: "brownie-loaded-choco-frappe", name: "Brownie Loaded Choco Frappe", price: 249, category: "shakes" },

  // MOCKTAILS
  { id: "fresh-mint-mojito", name: "Fresh Mint Mojito", price: 249, category: "mocktails" },
  { id: "cool-cucumber-mojito", name: "Cool Cucumber Mojito", price: 249, category: "mocktails" },
  { id: "red-knight", name: "Red Knight", price: 249, category: "mocktails" },
  { id: "cranberry-mojito", name: "Cranberry Mojito", price: 249, category: "mocktails" },
  { id: "blackberry-mojito", name: "Blackberry Mojito", price: 249, category: "mocktails" },
  { id: "virgin-pina-colada", name: "Virgin Pina Colada", price: 249, category: "mocktails" },
  { id: "blush-martini", name: "Blush Martini", price: 249, category: "mocktails" },
  { id: "cranberry-cinnamon-slush", name: "Cranberry & Cinnamon Slush", price: 249, category: "mocktails" },
  { id: "desi-mary", name: "Desi Mary", price: 249, category: "mocktails" },
  { id: "blue-hawaiian", name: "Blue Hawaiian", price: 249, category: "mocktails" },
  { id: "mango-delight", name: "Mango Delight", price: 249, category: "mocktails" },
  { id: "orange-ginger-cosmopolitan", name: "Orange Ginger Cosmopolitan", price: 249, category: "mocktails" },
  { id: "jasmine-sparkle", name: "Jasmine Sparkle", price: 249, category: "mocktails" },
  { id: "hawana-mocktail", name: "Hawana Mocktail", price: 249, category: "mocktails" },
  { id: "black-panther", name: "Black Panther", price: 249, category: "mocktails" },
  { id: "spicy-lips", name: "Spicy Lips", price: 249, category: "mocktails" },
  { id: "tango-mango", name: "Tango Mango", price: 219, category: "mocktails" },
  { id: "italian-kiss", name: "Italian Kiss", price: 219, category: "mocktails" },
  { id: "california-sunshine", name: "California Sunshine", price: 219, category: "mocktails" },
  { id: "fruit-punch", name: "Fruit Punch", price: 219, category: "mocktails" },
  { id: "orange-blossom", name: "Orange Blossom", price: 219, category: "mocktails" },

  // AERATED DRINKS
  { id: "thums-up", name: "Thums Up", price: 99, category: "aerated-drinks" },
  { id: "coca-cola", name: "Coca Cola", price: 99, category: "aerated-drinks" },
  { id: "diet-coke", name: "Diet Coke", price: 99, category: "aerated-drinks" },
  { id: "sprite", name: "Sprite", price: 99, category: "aerated-drinks" },
  { id: "red-bull", name: "Red Bull", price: 220, category: "aerated-drinks" },
  { id: "canned-juice-seasonal", name: "Canned Juice (Seasonal)", price: 99, category: "aerated-drinks" },
  { id: "mineral-water", name: "Mineral Water", price: 20, category: "aerated-drinks" },
  { id: "fresh-lime-water", name: "Fresh Lime Water", price: 119, category: "aerated-drinks" },
  { id: "soda", name: "Soda", price: 129, category: "aerated-drinks" },

  // SALAD
  { id: "ceaser-salad", name: "Ceaser Salad", price: 239, category: "salad" },
  { id: "texas-beans-salad", name: "Texas Beans Salad", price: 219, category: "salad" },
  { id: "sesame-peppanata-salad", name: "Sesame Peppanata Salad", price: 219, category: "salad" },
  { id: "veracruz-vinigrette", name: "Veracruz Vinigrette", price: 219, category: "salad" },

  // MUNCHING
  { id: "indori-chaat", name: "Indori Chaat", price: 249, category: "munching" },
  { id: "nachos-grande", name: "Nachos Grande", price: 329, category: "munching" },
  { id: "peri-peri-fries", name: "Peri-peri Fries", price: 209, category: "munching" },
  { id: "french-fries", name: "French Fries", price: 179, category: "munching" },
  { id: "zerk-spice-potato", name: "Zerk Spice Potato", price: 229, category: "munching" },
  { id: "corn-kernal-hash-brown", name: "Corn Kernal Hash Brown", price: 289, category: "munching" },
  { id: "european-cheese-pop", name: "European Cheese Pop", price: 289, category: "munching" },
  { id: "egyptian-falafal-tikki", name: "Egyptian Falafal Tikki With", price: 339, category: "munching" },
  { id: "thai-peanut-chatkara", name: "Thai Peanut Chatkara", price: 239, category: "munching" },
  { id: "momo-hot-garlic", name: "Momo Hot Garlic", price: 319, category: "munching" },
  { id: "japanese-soba-noodle", name: "Japanese Soba Noodle", price: 319, category: "munching" },

  // RICE AND NOODLE BOWL
  { id: "burmese-curry", name: "Burmese Curry", price: 359, category: "rice-noodle-bowl" },
  { id: "malaysian-stir-fry", name: "Malaysian Stir Fry", price: 349, category: "rice-noodle-bowl" },
  { id: "acapulco-salsa-curry", name: "Acapulco Salsa Curry", price: 349, category: "rice-noodle-bowl" },
  { id: "boston-pot-italian", name: "Boston Pot (Italian)", price: 359, category: "rice-noodle-bowl" },
  { id: "chicago-malfitini-balls", name: "Chicago Malfitini Balls", price: 379, category: "rice-noodle-bowl" },
  { id: "enchiladas", name: "Enchiladas", price: 379, category: "rice-noodle-bowl" },
  { id: "thai-red-curry", name: "Thai Red Curry", price: 380, category: "rice-noodle-bowl" },

  // WRAP AND ROLL
  { id: "falafal-roll", name: "Falafal Roll", price: 309, category: "wrap-roll" },
  { id: "paneer-khursan-quesadilla", name: "Paneer Khursan Quesadilla", price: 319, category: "wrap-roll" },
  { id: "burritos", name: "Burritos", price: 319, category: "wrap-roll" },
  { id: "cassino-pesto-crostini", name: "Cassino Pesto Crostini", price: 259, category: "wrap-roll" },
  { id: "florida-bread-baser", name: "Florida Bread Baser", price: 199, category: "wrap-roll" },
  { id: "cheesey-mushroom-toast", name: "Cheesey Mushroom Toast", price: 249, category: "wrap-roll" },
  { id: "veg-cheese-grilled-sandwich", name: "Veg Cheese Grilled Sandwich", price: 179, category: "wrap-roll" },

  // CHINA TOWN
  { id: "manchurian", name: "Manchurian", price: 219, category: "china-town" },
  { id: "chillie-paneer", name: "Chillie Paneer", price: 249, category: "china-town" },
  { id: "choice-of-potato", name: "Choice Of Potato", price: 279, category: "china-town" },
  { id: "choice-of-noodle", name: "Choice Of Noodle", price: 279, category: "china-town" },
  { id: "choice-of-fried-rice", name: "Choice Of Fried Rice", price: 269, category: "china-town" },

  // PIZZA
  { id: "tandoori-paneer-tikka-pizza", name: "Tandoori Paneer Tikka Pizza", price: 299, category: "pizza" },
  { id: "italian-pizza", name: "Italian Pizza", price: 299, category: "pizza" },
  { id: "fresh-garden-farm-pizza", name: "Fresh Garden Farm Pizza", price: 299, category: "pizza" },
  { id: "nepolian-margarita", name: "Neopolian Margarita", price: 349, category: "pizza" },
  { id: "turkies-cheese-garlic-pizza", name: "Turkies Cheese Garlic Pizza", price: 349, category: "pizza" },

  // PASTA
  { id: "penne-sauce", name: "Penne (Alfredo, arrabbiata, velvet) Sauce", price: 349, category: "pasta" },
  { id: "aglio-e-olio", name: "Aglio E Olio", price: 369, category: "pasta" },

  // DESSERTS
  { id: "brownie", name: "Brownie", price: 99, category: "desserts" },
  { id: "brownie-with-ice-cream", name: "Brownie With Ice Cream", price: 149, category: "desserts" },
  { id: "barcelona-volcano", name: "Barcelona Volcano", price: 219, category: "desserts" },
  { id: "sundae-icecream-due", name: "Sundae Icecream Due", price: 219, category: "desserts" },
];
