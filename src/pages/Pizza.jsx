import React, { useEffect, useState } from 'react'
import '../components/Pizza.css'


const Pizza = () => {
      const [pizzaDetails, setPizzaDetails] = useState([]);

      useEffect(() => {
          consultarApi()
        }, []);

        const consultarApi = async () => {
            const url = "http://localhost:5000/api/pizzas/p001";
            const response = await fetch(url);
            const dataPizza = await response.json();
            setPizzaDetails(dataPizza);
          };
    
  return (
    <div className='Card-PizzaInfo'>
        <img src = {pizzaDetails.img} />
        <article className='Content-PizzaInfo'>
        <p className='pizza-name'> {pizzaDetails.name.toUpperCase()} </p>
        <p className='pizza-description'> {pizzaDetails.desc}</p>
        <p>Ingredientes:</p>
        <ul className='ing-list'> 
            {pizzaDetails.ingredients.map(ingredient =>
                            <li key={ingredient}>{ingredient}</li>
                        )}</ul>
        <p className='price-text'>Price: ${pizzaDetails.price.toLocaleString()}</p>
        <button className="add-button">Añadir🛒</button>
        </article>
    </div>
  )
}

export default Pizza