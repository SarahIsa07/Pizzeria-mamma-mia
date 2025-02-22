import React, { useState, useContext, useEffect } from 'react'
import '../components/Cart.css'
import { pizzaCart } from '../assets/js/pizzas'
import { CartContext } from '../components/context/CartContext'
import { UserContext } from '../components/context/UserContext'


const Cart = () => {

    const [cartItems, setCartItems] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const { token } = useContext(UserContext);

    const { countCart, setCountCart } = useContext(CartContext)

    useEffect(() => {
        setCartItems([{ ...CartContext }]);
    }, []);


    const handlePago = async () => {
        console.log("Procesando pago...")
        console.log(countCart)

        try {
            const response = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(countCart),
                });
    
          if (!response.ok) {
            throw new Error('Error al procesar el checkout');
          }
    
          const data = await response.json();
          console.log('Checkout exitoso:', data);
          alert('Compra realizada con éxito!');
    
          setCartItems([]);
        } catch (error) {
          setError(error.message);
          console.error('Error durante el checkout:', error);
        } finally {
          setIsSubmitting(false);
        };
    };
    

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
                                        <p>${(pizza.price * pizza.count).toLocaleString()}</p>
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
            {
                token ?
                    <button className='buttonPay'
                        onClick={handlePago}>Pagar</button>
                    : <></>
            }
        </div>
    )
}

export default Cart