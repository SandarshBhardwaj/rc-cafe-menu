
export type MenuCategory =
  | "coffee"
  | "ice-tea"
  | "frappe"
  | "shakes"
  | "mocktails"
  | "aerated-drinks";

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
];

export const menuItems: MenuItemData[] = [
  {
    id: "americano",
    name: "Americano",
    price: 99,
    category: "coffee",
    tags: ["Classic"],
    image: "/images/menu/coffee.svg",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 129,
    category: "coffee",
    tags: ["Classic"],
    image: "/images/menu/coffee.svg",
  },
  {
    id: "caramel-latte",
    name: "Caramel Latte",
    price: 149,
    category: "coffee",
    tags: ["Sweet"],
    image: "/images/menu/coffee.svg",
  },
  {
    id: "cafe-latte",
    name: "Cafe Latte",
    price: 129,
    category: "coffee",
    image: "/images/menu/coffee.svg",
  },
  {
    id: "cafe-mocha",
    name: "Cafe Mocha",
    price: 149,
    category: "coffee",
    image: "/images/menu/coffee.svg",
  },
  {
    id: "espresso",
    name: "Espresso",
    price: 99,
    category: "coffee",
    tags: ["Classic"],
    image: "/images/menu/coffee.svg",
  },
  {
    id: "hazelnut-latte",
    name: "Hazelnut Latte",
    price: 149,
    category: "coffee",
    image: "/images/menu/coffee.svg",
  },
];
