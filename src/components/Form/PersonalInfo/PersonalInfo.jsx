import React from "react";
import Styles from "./PersonalInfo.module.scss";
import InputGroup from "./InputGroup/InputGroup";

const PersonalInfo = ({ handleInput, formInfo, invalidInputs }) => {
	return (
		<div className={Styles["personal-info"]}>
			<InputGroup
				invalidInputs={invalidInputs}
				handleInput={handleInput}
				label={"Name"}
				inputName={"name"}
				inputType={"text"}
				id={"name"}
				placeholder={"e.g. Stephen King"}
				value={formInfo.name}
			/>
			<InputGroup
				invalidInputs={invalidInputs}
				handleInput={handleInput}
				label={"Email Address"}
				inputName={"email-address"}
				inputType={"email"}
				id={"email-address"}
				placeholder={"e.g. stephenking@lorem.com"}
				value={formInfo["email-address"]}
			/>
			<InputGroup
				invalidInputs={invalidInputs}
				handleInput={handleInput}
				label={"Phone Number"}
				inputName={"phone-number"}
				inputType={"tel"}
				id={"phone-number"}
				placeholder={"e.g. +1 234 567 890"}
				value={formInfo["phone-number"]}
			/>
		</div>
	);
};

export default PersonalInfo;
