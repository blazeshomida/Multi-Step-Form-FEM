import React from "react";
import PlanInput from "./PlanInput/PlanInput";
import Styles from "./Plan.module.scss";
import PlanToggle from "./PlanToggle/PlanToggle";

const Plan = ({ data,formInfo, setFormInfo }) => {
	const plans = data.plans;

	return (
		<div className={Styles["plan"]}>
			{plans.map((plan, index) => (
				<PlanInput
        setFormInfo={setFormInfo}
        formInfo={formInfo}
					key={index}
					name={plan.name}
					monthly={plan.monthly}
					yearly={plan.yearly}
					icon={plan.icon}
				/>
			))}

			<PlanToggle setFormInfo={setFormInfo} formInfo={formInfo} />
		</div>
	);
};

export default Plan;
