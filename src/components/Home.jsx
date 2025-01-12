import React from 'react'
import Header from './Header'
import Cardpizza from './Cardpizza'
import './Home.css'
import { pizzas } from '../assets/js/pizzas'


const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <section className="Cards-container">
        {
          pizzas.map(pizza => (
            <Cardpizza img={pizza.img} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price}/>
          ))
        }
      </section>
    </>
  )
}

export default Home