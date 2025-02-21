import React, { useEffect, useState } from 'react'
import '../components/Pizza.css'
import { useParams } from 'react-router-dom';


const Pizza = () => {
  const { id } = useParams()

  const [pizzaDetails, setPizzaDetails] = useState({});

  const [error, setError] = useState(null)


  useEffect(() => {
    consultarApi()
  }, [id]);

  const consultarApi = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      if (!response.ok) {
        throw new Error("Pizza no encontrada")
      }
      const dataPizza = await response.json();
      setPizzaDetails(dataPizza);
    } catch (err) {
      setError(err.message)
    }
  };




  return (
    <div className='Card-PizzaInfo'>
      <img src={pizzaDetails.img} />
      <article className='Content-PizzaInfo'>
        <p className='pizza-name'> {pizzaDetails.name} </p>
        <p className='pizza-description'> {pizzaDetails.desc}</p>
        <p>Ingredientes:</p>
        <ul className='ing-list'>
          {pizzaDetails?.ingredients?.map(ingredient =>
            <li key={ingredient}>{ingredient}</li>
          )}
        </ul>
        <p className='price-text'>Price: ${pizzaDetails?.price?.toLocaleString()}</p>
        <button className="add-button">Añadir🛒</button>
      </article>
    </div>
  )
}

export default Pizza