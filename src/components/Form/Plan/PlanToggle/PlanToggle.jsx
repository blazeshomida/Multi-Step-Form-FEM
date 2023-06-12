import React, { useState } from "react";
import Styles from "./PlanToggle.module.scss";

const PlanToggle = ({ formInfo, setFormInfo }) => {
    const isMonthly = formInfo.isMonthly;

    const handleToggle = () => {
        setFormInfo(prevFormInfo => ({
          ...prevFormInfo, 
          isMonthly: !prevFormInfo.isMonthly
        }));
      }

	return (
		<div className={Styles["plan-toggle"]}>
			<label
				className={isMonthly ? Styles["active"] : Styles["inactive"]}
				htmlFor="plan"
			>
				Monthly
			</label>
			<input
				onChange={handleToggle}
				className={Styles["input"]}
				id="plan"
				type="checkbox"
                checked={!isMonthly}
			/>
			<label
				className={!isMonthly ? Styles["active"] : Styles["inactive"]}
				htmlFor="plan"
			>
				Yearly
			</label>
		</div>
	);
};

export default PlanToggle;
