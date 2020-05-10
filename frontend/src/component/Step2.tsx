import React from 'react';

type Props = {
	toppings: any[],
	toppingsSelected: any[],
	size: string,
	handleToppingsSelected: (toppingsSelected: any[]) => void
}

const Step2: React.FC<Props> = (props) => {
	const { toppings, toppingsSelected, handleToppingsSelected, size } = props;

	async function handleToppingsAdd(e: any) {
		const toppingSelected = toppingsSelected.find(topping => topping === e.target.value);

		if (toppingSelected) {
			const newToppingsSelected = toppingsSelected.filter((topping: any) => topping !== e.target.value);
			handleToppingsSelected(newToppingsSelected);
		} else {
			handleToppingsSelected([...toppingsSelected, e.target.value]);
		}
	}

	function disableCheckbox() {
		if (size === 'small') {
			if (toppingsSelected.length === 5) {
				return true;
			}
		}

		if (size === 'medium') {
			if (toppingsSelected.length === 7) {
				return true
			}
		}

		if (size === 'large') {
			if (toppingsSelected.length === 9) {
				return true
			}
		}
	}

	function handleFindTopping(name: string) {
		if (toppingsSelected.find(topping => topping === name)) return true
	}

	async function handleResetToppings() {
		handleToppingsSelected([]);
	}

	return (<>
		<div>
			<h2>Pick your toppings. You can choose from 0 up to 3 ingredients with no additional costs, after that every additional will costs $0.50.</h2>
			<p>Max ingredients for pizza type:</p>
			<ul>
				<li><span>Small: 5</span></li>
				<li><span>Medium: 7</span></li>
				<li><span>Large: 9</span></li>
			</ul>
		</div>
		<div className="redefine__options">
			<button disabled={!disableCheckbox()} onClick={async () => await handleResetToppings()}>RESET INGREDIENTS</button>
		</div>
		<div className="toppings__container">
			<ul className="toppings__options">
				{toppings.map(topping => (
					<li key={topping.name}>
						<input type="checkbox"
							name={topping.name}
							value={topping.name}
							disabled={disableCheckbox()}
							checked={handleFindTopping(topping.name)}
							onChange={async e => await handleToppingsAdd(e)} />
						<img src={topping.image} alt={topping.name} />
						<p>{topping.name}</p>
					</li>
				))}
			</ul>
		</div>
	</>
	)
}

export default Step2;
