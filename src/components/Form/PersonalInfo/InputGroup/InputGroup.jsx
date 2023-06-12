import React from "react";
import Styles from "./InputGroup.module.scss";

const InputGroup = ({
	label,
	inputType,
	inputName,
	placeholder,
	id,
	handleInput,
	value,
	invalidInputs,
}) => {
	return (
		<div className={`${Styles["input-group"]} `}>
			<label
				className={invalidInputs.includes(inputName) ? Styles["invalid"] : ""}
				htmlFor={inputName}
			>
				{label}
			</label>
			<input
				onChange={(e) => handleInput(e)}
				type={inputType}
				name={inputName}
				id={id}
				placeholder={placeholder}
				value={value}
				className={invalidInputs.includes(inputName) ? Styles["invalid"] : ""}
			/>
		</div>
	);
};

export default InputGroup;
