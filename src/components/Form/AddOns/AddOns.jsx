import AddOnInput from './AddOnInput/AddOnInput'
import Styles from './AddOns.module.scss'


const AddOns = ({ data,formInfo, setFormInfo }) => {
  const addOns = data.addons
  const currentSelection = formInfo.selectAddOns


  function selectAddOns(name) {
    setFormInfo((prevFormInfo) => {
      // Check if the add-on is already included in the selectedAddOns array
      if (prevFormInfo.selectedAddOns.includes(name)) {
        // If it is, remove it from the array
        return {
          ...prevFormInfo,
          selectedAddOns: prevFormInfo.selectedAddOns.filter(addOn => addOn !== name),
        };
      } else {
        // If it's not, add it to the array
        return {
          ...prevFormInfo,
          selectedAddOns: [...prevFormInfo.selectedAddOns, name],
        };
      }
    });
    console.log(formInfo);
  }
  

  
  return (
      <div className={Styles["add-on-group"]}>
        {addOns.map((addOn, index) => (
          <AddOnInput currentSelection={currentSelection} selectAddOns={selectAddOns} key={index} name={addOn.name} monthly={addOn.monthly} yearly={addOn.yearly} description={addOn.description} formInfo={formInfo}/>
        ))}
      </div>
  )
}

export default AddOns