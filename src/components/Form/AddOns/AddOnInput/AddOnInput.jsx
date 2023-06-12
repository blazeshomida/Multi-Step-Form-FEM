"use client";

import React, { useState } from "react";
import Styles from "./AddOnInput.module.scss";
import Image from "next/image";

const AddOnInput = ({
	key,
	name,
	monthly,
	yearly,
	formInfo,
	description,
	selectAddOns,
}) => {
	const isMonthly = formInfo.isMonthly;
	const selectedAddOns = formInfo.selectedAddOns;

	const checkbox = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="12"
			height="9"
			viewBox="0 0 12 9"
		>
			<path
				fill="none"
				stroke="#FFF"
				strokeWidth="2"
				d="m1 4 3.433 3.433L10.866 1"
			/>
		</svg>
	);

	return (
		<div
			onClick={() => selectAddOns(name)}
			key={key}
			className={`${Styles["card"]} ${
				selectedAddOns.includes(name) ? Styles["selected"] : ""
			}`}
		>
			<div className={Styles["checkbox"]}>{checkbox}</div>
			<div className={Styles["add-on-group"]}>
				<p className={Styles["add-on-name"]}>{name}</p>
				<p className={Styles["add-on-description"]}>{description}</p>
			</div>
			<p className={selectedAddOns.includes(name) ? Styles["price-selected"] : ""}>
				${isMonthly === true ? monthly : yearly}/
				{isMonthly === true ? "mo" : "yr"}
			</p>
		</div>
	);
};

export default AddOnInput;
