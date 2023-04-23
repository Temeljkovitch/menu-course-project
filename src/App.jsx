import { useState } from "react";
import Categories from "./Categories";
import data from "./data";
import Menu from "./Menu";
import Title from "./Title";

const allCategories = data.map((item) => item.category);
const uniqueCategories = ["all", ...new Set(allCategories)];

const App = () => {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(uniqueCategories);

  const filterItems = (category) => {
    const newMenu = data.filter((item) => category === item.category);
    setItems(newMenu);
    if (category === "all") setItems(data);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={items} />
      </section>
    </main>
  );
};
export default App;
