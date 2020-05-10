import React, { useState } from 'react';

import pepperoni from '../assets/pepperoni.jpeg';
import bacon from '../assets/bacon.jpg';
import green_peppers from '../assets/green-peppers.jpeg';
import black_olives from '../assets/black-olives.jpeg';
import cheese from '../assets/cheese.jpeg';
import sausage from '../assets/sausage.jpeg';
import mushrooms from '../assets/mushrooms.jpeg';
import onions from '../assets/onions.jpeg';
import pineapple from '../assets/pineapple.jpeg';
import spinach from '../assets/spinach-horiz-640.jpg';

import Step1 from '../component/Step1';
import Step2 from '../component/Step2';
import Step3 from '../component/Step3';

import api from '../services/api';
import { useHistory } from 'react-router-dom';

interface Pizza {
	price: number,
	crust: string,
	size: string,
	toppings: any[]
}

const Create: React.FC<Pizza> = () => {
	const [price, setPrice] = useState(0);
	const [crust, setCrust] = useState('');
	const [size, setSize] = useState('');
	const toppings: any[] =
		[
			{
				name: 'Pepperoni',
				image: pepperoni
			},
			{
				name: 'Mushrooms',
				image: mushrooms
			},
			{
				name: 'Onions',
				image: onions
			},
			{
				name: 'Sausage',
				image: sausage
			},
			{
				name: 'Bacon',
				image: bacon
			},
			{
				name: 'Extra Cheese',
				image: cheese
			},
			{
				name: 'Black Olives',
				image: black_olives
			},
			{
				name: 'Green Pepers',
				image: green_peppers
			},
			{
				name: 'Pineapple',
				image: pineapple
			},
			{
				name: 'Spinach',
				image: spinach
			}
		];
	const [toppingsSelected, setToppingsSelected] = useState<any[]>([]);
	const [steps, setSteps] = useState(1);

	const history = useHistory();

	function handleNextPage() {
		switch (steps) {
			case 1:
				if (size === '' || crust === '') {
					alert('Please choose an option');
				} else {
					setSteps(steps + 1);
					handleFirstStepChange();
				}
				break;
			case 2:
				setSteps(steps + 1);
				break;
			default:
				break;
		}
	}

	function handlePreviousPage() {
		setSteps(steps - 1);
	}

	function handleFirstStepChange() {
		const sizeCharge = handleSizeChange(size);
		const crustCharge = handleCrustChange(crust);

		setPrice(sizeCharge! + crustCharge!);
	}

	function handleSizeChange(size: string) {
		if (size === 'small') return 8;
		if (size === 'medium') return 10;
		if (size === 'large') return 12;
	}

	function handleCrustChange(crust: string) {
		if (crust === "Thin") return 2;
		if (crust === "Thick") return 4;
	}

	function handleToppingsChange() {
		const toppingsLength = toppings.length;

		if (toppingsLength > 3) {
			const surplus = (toppingsLength - 3) * 0.5;
			setPrice(price + surplus);
		}
	}

	async function handleSubmit() {
		const result = await api.post('/', {
			size,
			crust,
			price,
			toppings: toppingsSelected
		});

		if (result.status === 200) {
			history.push('/');
			alert('Custom pizza created with success!');
		} else {
			history.push('/');
			alert('Oops, something got wrong, try again later!');
		}
	}

	return (
		<div className="create__container">
			<h1>Total Price: $ {price}</h1>
			{steps === 1 && (
				<Step1 size={size} handleSize={setSize} crust={crust} handleCrust={setCrust} />
			)}
			{steps === 2 && (
				<Step2 toppings={toppings} toppingsSelected={toppingsSelected} size={size} handleToppingsSelected={setToppingsSelected} />
			)}
			{steps === 3 && (
				<Step3 crust={crust} size={size} toppingsSelected={toppingsSelected} />
			)}
			{steps < 2 ? (
				<div className="create__buttons">
					<button disabled={size === '' && crust === '' ? true : false} onClick={() => {
						handleNextPage();
					}}>NEXT</button>
				</div>
			) : steps < 3 ? (
				<div className="create__buttons">
					<button onClick={() => { handlePreviousPage(); }}>PREVIOUS</button>
					<button onClick={() => { handleNextPage(); handleToppingsChange(); }}>NEXT</button>
				</div>
			) : (
						<div className="create__buttons">
							<button onClick={handlePreviousPage}>PREVIOUS</button>
							<button onClick={handleSubmit}>SUBMIT</button>
						</div>
					)}

		</div>
	)
}

export default Create;
