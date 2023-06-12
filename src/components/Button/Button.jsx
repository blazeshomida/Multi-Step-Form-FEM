import React from "react";
import Styles from "./Button.module.scss";

const Button = ({ setActivePage, text, style, formInfo, handleClick, handleClickReverse, clickType }) => {
  

	

	return (
		<button
			className={`${Styles[style]} ${Styles["button"]}`}
			onClick={(e) => clickType === 'reverse' ? handleClickReverse(e) : handleClick(e)}
		>
			{text}
		</button>
	);
};

export default Button;
