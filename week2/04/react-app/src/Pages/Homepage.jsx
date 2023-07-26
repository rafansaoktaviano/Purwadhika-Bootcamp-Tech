import Card from "../Component/Card";
import "./homepage.css";
import Nav from "../Component/Nav";
import {Routes, Route} from "react-router-dom"

function Homepage() {
  const products = [
    {
      id: 1,
      name: "Nike",
      price: 1000000,
      stock: 120,
      desc: "Good product lorem ipsum dolor amet dolares saodkoakdwlqekaldlsa",
    },
    {
      id: 2,
      name: "Adidas",
      price: 4000000,
      stock: 10,
      desc: "Good product lorem ipsum dolor amet dolares saodkoakdwlqekaldlsa",
    },
    {
      id: 3,
      name: "New Balance",
      price: 3000000,
      stock: 75,
      desc: "Good product lorem ipsum dolor amet dolares saodkoakdwlqekaldlsa",
    },
  ];
  return (
    <div >
      <div className="home">
      {products.map((elements) => {
        return <Card key={elements.id} data={elements} />;
      })}
      </div>
      
    </div>
  );
}

export default Homepage;
