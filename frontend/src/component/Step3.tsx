import React from 'react';

type Props = {
	size: string,
	crust: string,
	toppingsSelected: any[]
}

const Step3: React.FC<Props> = (props) => {
	const { size, crust, toppingsSelected } = props;

	return (
		<div className="checkout__pizza">
			<p>Please check all the informations about your pizza:</p>
			<ul className="checkout__pizza--items">
				<li>{size}</li>
				<li>{crust}</li>
				{toppingsSelected.map(topping => (
					<li>{topping}</li>
				))}
			</ul>
		</div>
	)
}

export default Step3;
