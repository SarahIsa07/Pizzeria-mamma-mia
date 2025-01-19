import React, { useEffect, useState } from 'react'
import Header from './Header'
import Cardpizza from './Cardpizza'
import './Home.css'


const Home = () => {
  const [newPizzas, setNewPizzas] = useState([]);

  useEffect(() => {
    consultarApi()
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const dataPizzas = await response.json();
    setNewPizzas(dataPizzas);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <section className="Cards-container">
        {
          newPizzas.map(pizza => (
            <Cardpizza img={pizza.img} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} />
          ))
        }
      </section>
    </>
  )
}

export default Home