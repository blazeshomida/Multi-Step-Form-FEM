import React, { useState } from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Plan from "../Plan/Plan";
import AddOns from "../AddOns/AddOns";
import Summary from "../Summary/Summary";
import Styles from "./FormBody.module.scss";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import ThankYou from "../ThankYou/ThankYou";

const FormBody = ({ activePage, setActivePage, data }) => {
	const [invalidInputs, setInvalidInputs] = useState([]);

	const [formInfo, setFormInfo] = useState({
		name: "",
		"email-address": "",
		"phone-number": "",
		isMonthly: true,
		selectedPlan: "",
		selectedAddOns: [],
	});

	function handleClickReverse(e) {
		e.preventDefault();
		setActivePage((prev) => prev - 1);
	}

	function handleClick(e) {
		e.preventDefault();
		setInvalidInputs([]);
		const newInvalidInputs = [];

		Object.entries(formInfo).forEach(([key, value]) => {
			let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			let phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

			if (key === "selectedPlan" && activePage !== 1) {
				return;
			}
			value === "" &&
				!newInvalidInputs.includes(key) &&
				newInvalidInputs.push(key);
			key === "email-address" &&
				!newInvalidInputs.includes("email-address") &&
				!emailReg.test(value) &&
				newInvalidInputs.push(key);
			key === "phone-number" &&
				!newInvalidInputs.includes("phone-number") &&
				!phoneReg.test(value) &&
				newInvalidInputs.push(key);
		});
		setInvalidInputs(newInvalidInputs);
		if (newInvalidInputs.length === 0) {
			setActivePage((prev) => prev + 1);
		}
		setTimeout(() => {
			setInvalidInputs([])
	}, 5000);
	}

	function handleInput(e) {
		const inputName = e.target.name;
		const savedInput = e.target.value;
		

		setFormInfo((prevFormInfo) => ({
			...prevFormInfo,
			[inputName]: savedInput,
		}));
		setInvalidInputs((prevInvalidInputs) => {
			return prevInvalidInputs.filter((input) => input !== inputName);
		});
	}

	const steps = data.steps;
	const currentPage =
		activePage === 0 ? (
			<PersonalInfo
				handleInput={handleInput}
				formInfo={formInfo}
				invalidInputs={invalidInputs}
			/>
		) : activePage === 1 ? (
			<Plan data={data} formInfo={formInfo} setFormInfo={setFormInfo} />
		) : activePage === 2 ? (
			<AddOns data={data} formInfo={formInfo} setFormInfo={setFormInfo} />
		) : activePage === 3 && <Summary data={data} formInfo={formInfo} setActivePage={setActivePage} />
	return (
		<>
			{steps.map(
				(step, index) =>
					activePage === index && (
						<div className={Styles["form-body"]} key={index}>
							<div>
								<h1 className={Styles["heading"]}>{step.title}</h1>
								<p className={Styles["description"]}>{step.description}</p>
								{currentPage}
							</div>
							<ButtonGroup
								handleClickReverse={handleClickReverse}
								handleClick={handleClick}
								formInfo={formInfo}
								className={Styles["button-group"]}
								setActivePage={setActivePage}
								activePage={activePage}
							/>
						</div>
					)

					)}
					{activePage === 4 && (
						<ThankYou />
					)}
		</>
	);
};

export default FormBody;
