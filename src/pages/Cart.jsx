import React, { useState, useContext } from 'react'
import '../components/Cart.css'
import { pizzaCart } from '../assets/js/pizzas'
import { CartContext } from '../components/context/CartContext'


const Cart = () => {

    const {countCart, setCountCart} = useContext(CartContext)

    const [pizzaOrder, setPizzaOrder] = useState(pizzaCart);
    let totalPrice = 0

    const addPizza = (index) => {
        const pizzaItems = [...countCart];
        pizzaItems[index].count += 1;
        setCountCart(pizzaItems);
    }

    const removePizza = (index) => {
        const pizzaItems = [...countCart];
        pizzaItems[index].count -= 1;
        setCountCart(pizzaItems);
    }

    return (
        <div className="cartContainer">
            <h4 className="CardTitle">Detalles del pedido:</h4>
            <div className="pizzasAdd">
                <ul>
                    {countCart.map((pizza, index) => {
                            if (pizza.count > 0) {
                                totalPrice += (pizza.count * pizza.price)
                                return (
                                    <li className="pizzaItem" key={pizza.id} >
                                        <img src={pizza.img} alt="" />
                                        <p>{pizza.name}</p>
                                        <div className="pizzaCount">
                                            <p>${(pizza.price*pizza.count).toLocaleString()}</p>
                                            <button className="buttonSubtract" onClick={() => removePizza(index)}>-</button>
                                            <p>{pizza.count}</p>
                                            <button className="buttonAdd" onClick={() => addPizza(index)}>+</button>
                                        </div>
                                    </li>
                                )
                            }

                        }
                        )}
                </ul>
            </div>
            <h3 className='CardTitle'>Total: ${totalPrice.toLocaleString()}</h3>
            <button className='buttonPay'>Pagar</button>
        </div>
    )
}

export default Cart