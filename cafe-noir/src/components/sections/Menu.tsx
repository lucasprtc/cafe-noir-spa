// components/Menu.tsx
import Tabs, { Tab } from "../Tabs";

const menuTabs: Tab[] = [
  {
    title: "Classics",
    items: [
      { name: "Double Espresso", price: 2 },
      { name: "Filter", price: 2 },
      { name: "Americano", price: 2.5 },
      { name: "Tea", price: 3 },
      { name: "Cappucino", price: 3 },
      { name: "Flat White", price: 3 },
      { name: "Latte", price: 3.5 },
      { name: "Hot Chocolate", price: 4 },
      { name: "Matcha Latte", price: 4.5 },
      { name: "Chai Latte", price: 4.5 },
    ],
  },
  {
    title: "Specials & Extras",
    items: [
      { name: "Protein Matcha", price: 2 },
      { name: "Protein Coffee", price: 2 },
      { name: "Syrup", price: 2.5 },
      { name: "Extra Shot", price: 3 },
      { name: "Large", price: 3 },
      { name: "Milk", price: "FREE" },
      { name: "Iced", price: "FREE" },
    ],
  },
];

export default function Menu() {
  return (
    <section className="py-8">
      <Tabs tabs={menuTabs} />
    </section>
  );
}
