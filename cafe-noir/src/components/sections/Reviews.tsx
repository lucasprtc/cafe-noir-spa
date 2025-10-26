// components/Menu.tsx
import InfiniteSLider, { Comment } from "../InfiniteSlider";

const comments: Comment[] = [
  {
    description: "Loving the concept, the coffee, the people there, the location. It’s a must visit",
    name: "Olivier Béaslas",
    color: "#044799",
  },
  {
    description: "Absolutely the best quality-price ratio in town! It opened just two weeks ago and I’m proud to say today was my 10th visit — that says it all. Highly recommended.",
    name: "Miika Lindqvist",
    color: "#AAD0F0",
  },
  {
    description: "Unbeatable value for money! Excellent service, atmosphere and location 🤝🏻 …",
    name: "Arttu Viipola",
    color: "#ED6956",
  },
  {
    description: "Un ajout charmant au paysage café d'Helsinki ! Un design minimaliste et élégant, un café exceptionnel à des prix abordables (2 € le double expresso, 3 € le cappuccino, 3,5 € le latte) et le sourire de tout le personnel sont toujours un plus 😊",
    name: "William Namessi",
    color: "#AAD0F0",
  },
];

export default function Reviews() {
  return (
    <section className="py-9">
      <div className="grid-layout grid-gap container-grid mb-9">
        <h3 className="col-span-6 col-start-2 text-lg font-secondary text-dark-blue">A sip of quality. A taste of community</h3>
      </div>
      <InfiniteSLider comments={comments} />
    </section>
  );
}
