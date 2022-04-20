import Card from "./ex6card.js";
import bottomSide from "./ex6category.js";
const products = [
    {
      title: "Product 1",
      alt: "Image-1",
      description: ["In Stock", "3.7/5"],
      badges: ["sport", "lifestyle"],
    },
    {
      title: "Product 2",
      alt: "Image-1",
      description: ["In Stock", "3.5/5"],
      badges: ["sport", "lifestyle"],
    },
    {
      title: "Product 3",
      alt: "Image-1",
      description: ["In Stock", "3.5/5"],
      badges: ["sport", "lifestyle"],
    },
    {
      title: "Product 4",
      alt: "Image-1",
      description: ["In Stock", "3.5/5"],
      badges: ["sport"],
    },
    {
      title: "Product 5",
      alt: "Image-1",
      description: ["In Stock", "4/5"],
      badges: ["sport", "lifestyle"],
    },
    {
      title: "Product 6",
      alt: "Image-1",
      description: ["In Stock", "5/5"],
      badges: ["sport"],
    },
];

function app() {
    return React.createElement("div", {className: "root"}, [
        React.createElement('main', {className: "container"}, [
            ...products.map(product => React.createElement(Card, { 
                title: product.title,
                alt: product.alt,
                description: product.description,
                badges: product.badges
            })),
        ]),
        React.createElement(bottomSide, null)
    ]);
}

ReactDOM.render(app(), document.querySelector("#root"));
