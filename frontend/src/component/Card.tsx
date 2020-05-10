import React from 'react';

type Props = {
	pizzas: any[];
}

const Card: React.FC<Props> = (props) => {
	const { pizzas } = props;

	return (
		<>
			{pizzas && pizzas.map(pizza => (
				<div key={pizza._id} className="card__container">
					<ul className="card__details">
						<li className="card__details--size">Size: {pizza.size}</li>
						<li className="card__details--crust">Crust: {pizza.crust}</li>
						<li className="card__details--ingredients">Ingredients: {pizza.toppings.map((topping: any) => <span key={topping}>{topping} <br /></span>)}</li>
						<li className="card__details--price">Price: $ {pizza.price}</li>
					</ul>
				</div>

			))}

		</>
	)
}

export default Card;
