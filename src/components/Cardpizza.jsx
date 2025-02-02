import { useContext } from 'react'
import './Cardpizza.css'
import { CartContext } from './context/CartContext'


const Cardpizza = (props) => {

    const { countCart, setCountCart } = useContext(CartContext)

    const addPizza = () => { // Aqui cree una función para poder modificar mis pizzas del carrito
        const pizzaItems = [...countCart] //Aqui cree la variable que está compuesta por el arreglo de pizzas del carrito según mi context
        // preguntar si en el count cart existe la pizza que voy a agregar (usando if)
        console.log(props.id);
        const pizzaIndex = countCart.findIndex(pizza => pizza.id === props.id); //Aquí del listado de pizzas identifico cual es la pizza que voy a agregar segpun su id
        
        console.log(pizzaIndex)
        // si existe, actualizar cantidad
        if (pizzaIndex >= 0) { // debo actualizar cantidad / Creo la condición y consulto en pizza index si existe la pizza ya identificada 
            pizzaItems[pizzaIndex].count += 1 // Si la pizza identificada ya existe se suma una unidad en la cantidad de esa pizza
        } else { //Por el contrario si no existe se debe agregar la primera unidad de esa pizza.
            pizzaItems.push({...props, count: 1})
        }
        setCountCart(pizzaItems) // countCart.push
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
                <button className="verM-button">Ver más👀</button>
                <button className="add-button" onClick={() => addPizza()}>Añadir🛒</button>
            </div>
        </div>
    )
}

export default Cardpizza