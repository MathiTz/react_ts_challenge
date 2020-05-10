import React from 'react';

interface Props {
	size: string
	crust: string,
	handleSize: (size: string) => void,
	handleCrust: (crust: string) => void,
}

const Step1: React.FC<Props> = (props) => {
	const { size, crust, handleSize, handleCrust } = props;

	return (
		<div className="form__group">
			<div className="form__group--size">
				<h3>Pick the size of your pizza</h3>
				<select value={size} id="pizza-size" name="pizza-size" onChange={e => handleSize(e.target.value)}>
					<option value="">Pick a size</option>
					<option value="small">Small</option>
					<option value="medium">Medium</option>
					<option value="large">Large</option>
				</select>
			</div>
			<div className="form__group--crust">
				<h3>Pick the crust of your pizza</h3>
				<div className="form__group--crust-options">
					<input type="radio" id="thin" name="crust" checked={crust === "Thin" ? true : false} value="Thin" onChange={e => handleCrust(e.target.value)} />
					<p>Thin</p>
				</div>
				<div className="form__group--crust-options">
					<input type="radio" id="thick" name="crust" checked={crust === "Thick" ? true : false} value="Thick" onChange={e => handleCrust(e.target.value)} />
					<p>Thick</p>
				</div>
			</div>
		</div>
	)
}

export default Step1;
