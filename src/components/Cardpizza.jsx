import { useContext } from 'react'
import './Cardpizza.css'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'



const Cardpizza = (props) => {

    const { countCart, setCountCart } = useContext(CartContext)

    const addPizza = () => { 
        const pizzaItems = [...countCart] 
        const pizzaIndex = countCart.findIndex(pizza => pizza.id === props.id); 
        

        if (pizzaIndex >= 0) { 
            pizzaItems[pizzaIndex].count += 1 
        } else { 
            pizzaItems.push({...props, count: 1})
        }
        setCountCart(pizzaItems)
        console.log(countCart)
    }

    return (
        <div className="card-style">
            <img src={props.img} />
            <p className="card-title"> {props.name} </p>
            <div className="box-ingredients">
                <p className="ingredients-title">Ingredientes:</p>
                <ul className="ingredients-style">
                    {
                        props.ingredients.map(ingredient =>
                            <li key={ingredient}>{ingredient}</li>
                        )}
                </ul>
            </div>
            <p className="price-style">Precio $ {props.price}</p>
            <div className="button-box">
                <button className="verM-button"><Link to ={`/pizza/${props.id}`}>Ver más👀</Link></button>
                <button className="add-button" onClick={() => addPizza()}>Añadir🛒</button>
            </div>
        </div>
    )
}

export default Cardpizza