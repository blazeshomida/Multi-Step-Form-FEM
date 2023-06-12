import React from "react";
import Styles from "./Summary.module.scss";

const Summary = ({ formInfo, data, setActivePage }) => {
	const selectedPlan = formInfo.selectedPlan;
	const selectedAddOns = formInfo.selectedAddOns;
	const plans = data.plans;
	const addOns = data.addons;

	const isMonthly = formInfo.isMonthly;
	const planType = isMonthly ? "monthly" : "yearly";
	const selectedPlanData = plans.find(({ name }) => name === selectedPlan);
	const selectedPlanCost = selectedPlanData[planType];

	const selectedAddOnsData = selectedAddOns.map((addOn) =>
		addOns.find(({ name }) => name === addOn)
	);
	const planTypeCapitalized =
		planType.charAt(0).toUpperCase() + planType.slice(1);

	function total() {
		let total = selectedAddOnsData.reduce(
			(total, addOn) => total + addOn[planType],
			0
		);
		total += selectedPlanData[planType];
		return total;
	}

	return (
		<div>
			<div className={Styles["summary"]}>
				<div className={Styles["plan-group"]}>
					<p className={Styles["plan-name"]}>
						{selectedPlan} ({planTypeCapitalized})
					</p>
					<p className={Styles["plan-cost"]}>
						${selectedPlanCost}/{planType === "monthly" ? "mo" : "yr"}
					</p>
					<a className={Styles["plan-link"]} onClick={() => setActivePage(1)}>
						Change
					</a>
				</div>
				<div className={Styles["addons-group"]}>
					{selectedAddOnsData.map((addOn) => (
						<div className={Styles["addon"]}>
							<p>{addOn.name}</p>
							<p>
								${addOn[planType]}/{planType === "monthly" ? "mo" : "yr"}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className={Styles['total-group']}>
				<p>Total (per {planType === "monthly" ? "month" : "year"})</p>
				<p className={Styles['total-cost']}>
					${total()}/{planType === "monthly" ? "mo" : "yr"}
				</p>
			</div>
		</div>
	);
};

export default Summary;
