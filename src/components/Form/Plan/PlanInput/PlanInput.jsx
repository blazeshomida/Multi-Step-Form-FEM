"use client";

import React from "react";
import Styles from "./PlanInput.module.scss";
import Image from "next/image";

const PlanInput = ({
	key,
	name,
	monthly,
	yearly,
	formInfo,
	setFormInfo,
	icon,
}) => {
	const isMonthly = formInfo.isMonthly;
	const selectedPlan = formInfo.selectedPlan

	function selectPlan() {
		setFormInfo((prevFormInfo) => ({
			...prevFormInfo,
			selectedPlan: name,
		}));
	}

	return (
		<div onClick={selectPlan} key={key} className={`${Styles["card"]} ${
			selectedPlan === name ? Styles["selected"] : ''
		}`}>
			<Image src={icon} width={40} height={40} />
			<div className={Styles["plan-group"]}>
				<p className={Styles["plan-name"]}>{name}</p>
				<p className={isMonthly === false ? Styles['yearly-plan'] : ''}>
					${isMonthly === true ? monthly : yearly}/
					{isMonthly === true ? "mo" : "yr"}
				</p>
			</div>
		</div>
	);
};

export default PlanInput;
