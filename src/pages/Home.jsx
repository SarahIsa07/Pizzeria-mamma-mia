import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Cardpizza from '../components/Cardpizza'
import '../components/Home.css'
// import Navbar from '../components/Navbar'


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
        {/* <Navbar /> */}
        <Header />
      </div>
      <section className="Cards-container">
        {
          newPizzas.map(pizza => (
            <Cardpizza key={pizza.id} img={pizza.img} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} id={pizza.id} />
          ))
        }
      </section>
    </>
  )
}

export default Home