import React, { useEffect, useState } from 'react';
import Card from '../component/Card';

import './index.css';
import api from '../services/api';

function Home() {
	const [pizzas, setPizzas] = useState<any[]>([]);

	useEffect(() => {
		async function getAllPizzas() {
			const result = await api.get('/');

			setPizzas(result.data);
		}

		getAllPizzas();
	}, []);

	console.log(pizzas);

	return (
		<div className="home__container">
			<Card pizzas={pizzas} />
		</div>
	)
}

export default Home;
