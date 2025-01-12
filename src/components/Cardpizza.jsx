import './Cardpizza.css'

const Cardpizza = (props) => {

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
                <button className="add-button">Añadir🛒</button>
            </div>
        </div>
    )
}

export default Cardpizza